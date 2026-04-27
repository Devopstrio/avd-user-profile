import pytest
from fastapi.testclient import TestClient
from backend.src.main import app

# Devopstrio AVD User Profile
# Integration Tests for Profile Lifecycle & Storage Resilience

client = TestClient(app)

def test_health_check_operational():
    """Verify that the profile platform gateway is healthy and storage is reachable."""
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json()["storage_reachable"] is True

def test_profile_inventory_retrieval():
    """Ensure the platform can list virtual desktop profiles with metadata."""
    response = client.get("/profiles")
    assert response.status_code == 200
    assert len(response.json()) > 0
    assert "mani@devopstrio.com" in [p["upn"] for p in response.json()]

def test_profile_repair_workflow():
    """Verify that a profile repair task can be correctly triggered and queued."""
    payload = {
        "upn": "ceo@devopstrio.com",
        "action": "Repair"
    }
    response = client.post("/profiles/repair", json=payload)
    assert response.status_code == 202
    assert "ticket_id" in response.json()
    assert response.json()["status"] == "Repair-Queued"

def test_storage_capacity_metrics():
    """Ensure the platform retrieves and aggregates storage volume capacity data."""
    response = client.get("/storage/capacity")
    assert response.status_code == 200
    assert any(v["type"] == "AzureFiles" for v in response.json())
    assert any(v["type"] == "NetApp" for v in response.json())

def test_profile_analytics_summary():
    """Verify the platform provides executive-level login and storage analytics."""
    response = client.get("/analytics/summary")
    assert response.status_code == 200
    assert "avg_attach_time_s" in response.json()
    assert "healthy_profiles" in response.json()

def test_security_posture_validation():
    """Ensure the platform reports on encryption and access control compliance."""
    response = client.get("/security/posture")
    assert response.status_code == 200
    assert response.json()["encryption_at_rest"] == "AES-256-Active"
