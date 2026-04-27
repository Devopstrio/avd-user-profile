-- Devopstrio AVD User Profile
-- Core Profile & Storage Governance Database Schema
-- Target: PostgreSQL 15+

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Identity & Tenancy
CREATE TABLE IF NOT EXISTS tenants (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    azure_tenant_id VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID REFERENCES tenants(id),
    email VARCHAR(255) UNIQUE NOT NULL,
    role VARCHAR(50) DEFAULT 'Operator', -- Admin, Operator, Support
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Profile Inventory
CREATE TABLE IF NOT EXISTS profiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID REFERENCES tenants(id),
    user_principal_name VARCHAR(255) NOT NULL,
    container_path VARCHAR(512) NOT NULL,
    size_gb FLOAT DEFAULT 0.0,
    status VARCHAR(50) DEFAULT 'Healthy', -- Healthy, Corrupted, Locked
    last_attach_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS profile_events (
    id BIGSERIAL PRIMARY KEY,
    profile_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    event_type VARCHAR(100) NOT NULL, -- Attach_Success, Attach_Failure, Corruption_Detected
    duration_ms INT,
    details JSONB,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. Storage Foundation
CREATE TABLE IF NOT EXISTS storage_accounts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID REFERENCES tenants(id),
    name VARCHAR(255) UNIQUE NOT NULL,
    resource_group VARCHAR(255) NOT NULL,
    region VARCHAR(100) NOT NULL,
    sku VARCHAR(50) DEFAULT 'Premium_LRS',
    total_capacity_gb BIGINT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS volumes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    storage_id UUID REFERENCES storage_accounts(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    quota_gb INT NOT NULL,
    usage_gb FLOAT DEFAULT 0.0,
    is_replicated BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. Backup & Recovery
CREATE TABLE IF NOT EXISTS backups (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    volume_id UUID REFERENCES volumes(id),
    snapshot_id VARCHAR(255) NOT NULL,
    retention_days INT DEFAULT 30,
    status VARCHAR(50) DEFAULT 'Completed',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS restores (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    profile_id UUID REFERENCES profiles(id),
    backup_id UUID REFERENCES backups(id),
    reason TEXT,
    status VARCHAR(50) DEFAULT 'Pending', -- Pending, Completed, Failed
    restored_at TIMESTAMP WITH TIME ZONE
);

-- 5. Analytics & Audit
CREATE TABLE IF NOT EXISTS metrics (
    id BIGSERIAL PRIMARY KEY,
    metric_name VARCHAR(100) NOT NULL, -- Avg_Login_Attach, Storage_Drift, Corruption_Rate
    value FLOAT NOT NULL,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS audit_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id),
    action VARCHAR(255) NOT NULL,
    resource_id VARCHAR(255),
    change_diff JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Strategic Indexes
CREATE INDEX idx_profile_upn ON profiles(user_principal_name);
CREATE INDEX idx_profile_status ON profiles(status);
CREATE INDEX idx_event_time ON profile_events(timestamp);
CREATE INDEX idx_volume_storage ON volumes(storage_id);
CREATE INDEX idx_backup_volume ON backups(volume_id);
CREATE INDEX idx_metric_time ON metrics(timestamp);
