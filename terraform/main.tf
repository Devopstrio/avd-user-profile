# Devopstrio AVD User Profile
# Core Data Infrastructure (Terraform)
# Target: Azure RM

terraform {
  required_version = ">= 1.5.0"
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 3.90"
    }
  }
}

provider "azurerm" {
  features {}
}

# 1. Platform Resource Group
resource "azurerm_resource_group" "profile_rg" {
  name     = "rg-avd-user-profile-prd"
  location = "uksouth"
  tags = {
    Domain     = "User-Workspace"
    Component  = "Profile-Storage"
    Automation = "Profile-Orchestrator"
  }
}

# 2. Premium Storage Account for AVD Profiles (Azure Files)
resource "azurerm_storage_account" "profile_storage" {
  name                     = "stavdprofileprd"
  resource_group_name      = azurerm_resource_group.profile_rg.name
  location                 = azurerm_resource_group.profile_rg.location
  account_tier             = "Premium"
  account_replication_type = "ZRS" # Zone-redundant for Resilience
  account_kind             = "FileStorage"

  azure_files_authentication {
    directory_type = "AADDS" # Entra ID Domain Services integration
  }
}

# 3. High-Performance Profile Share
resource "azurerm_storage_share" "profiles" {
  name                 = "avd-profiles"
  storage_account_name = azurerm_storage_account.profile_storage.name
  quota                = 5120 # 5TB Initial Quota
  enabled_protocol     = "SMB"
}

# 4. PostgreSQL Flexible Server (Metadata & Analytics Ledger)
resource "azurerm_postgresql_flexible_server" "profile_db" {
  name                   = "psql-avd-profile-prd"
  resource_group_name    = azurerm_resource_group.profile_rg.name
  location               = azurerm_resource_group.profile_rg.location
  version                = "13"
  administrator_login    = "profile_admin"
  administrator_password = "secure-password-from-vault"
  storage_mb             = 32768
  sku_name               = "GP_Standard_D2s_v3"
}

# 5. Key Vault (Storage Keys & DB Creds)
resource "azurerm_key_vault" "profile_vault" {
  name                = "kv-avd-profile-prd"
  location            = azurerm_resource_group.profile_rg.location
  resource_group_name = azurerm_resource_group.profile_rg.name
  tenant_id           = "your-tenant-id"
  sku_name            = "premium"

  access_policy {
    tenant_id = "your-tenant-id"
    object_id = "platform-managed-identity-id"
    secret_permissions = ["Get", "List"]
  }
}

# 6. Log Analytics Workspace for Storage Telemetry
resource "azurerm_log_analytics_workspace" "profile_law" {
  name                = "law-avd-profile-prd"
  location            = azurerm_resource_group.profile_rg.location
  resource_group_name = azurerm_resource_group.profile_rg.name
  sku                 = "PerGB2018"
  retention_in_days   = 30
}

# Outputs
output "storage_account_name" {
  value = azurerm_storage_account.profile_storage.name
}

output "database_fqdn" {
  value = azurerm_postgresql_flexible_server.profile_db.fqdn
}
