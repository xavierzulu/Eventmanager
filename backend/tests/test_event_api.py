import pytest
from fastapi.testclient import TestClient
from app.main import app  # Change this line


client = TestClient(app)

def test_create_event():
    response = client.post("/events", json={
        "title": "Unit Test Event",
        "date": "2024-12-25",
        "description": "A test event for unit testing."
    })
    assert response.status_code == 200
    assert "event" in response.json()

def test_get_events():
    response = client.get("/events")
    assert response.status_code == 200
    assert isinstance(response.json(), list)  # Check if it's a list
