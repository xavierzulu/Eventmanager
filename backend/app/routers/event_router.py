from fastapi import APIRouter, HTTPException
from app.models.event_model import Event
from app.database import get_supabase_client
import logging

router = APIRouter()

supabase = get_supabase_client()

# POST /events: Create a new event
@router.post("/events")
def create_event(event: Event):
    try:
        data = {
            "title": event.title,
            "date": event.date.isoformat(),
            "description": event.description
        }
        response = supabase.table("events").insert(data).execute()

        # Check if data exists in the response
        if not response.data:
            raise HTTPException(status_code=500, detail="Error creating event: No data returned")

        return {"message": "Event created successfully", "event": response.data[0]}
    except Exception as e:
        print(f"Error occurred: {str(e)}")  # Print the error for debugging
        raise HTTPException(status_code=500, detail=str(e))




# GET /events: Retrieve all events
@router.get("/events")
def get_events():
    try:
        response = supabase.table("events").select("*").execute()
        return response.data
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


# GET /events/{event_id}: Retrieve a specific event
@router.get("/events/{event_id}")
def get_event(event_id: int):
    try:
        response = supabase.table("events").select("*").eq("id", event_id).execute()
        if len(response.data) > 0:
            return response.data[0]
        else:
            raise HTTPException(status_code=404, detail="Event not found")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


# PUT /events/{event_id}: Update an existing event
@router.put("/events/{event_id}")
def update_event(event_id: int, event: Event):
    try:
        data = {
            "title": event.title,
            "date": event.date.isoformat(),
            "description": event.description
        }
        response = supabase.table("events").update(data).eq("id", event_id).execute()
        
        # Log the response for debugging
        print(f"Supabase Response: {response}")  

        # Check the response data
        if response.data:
            return {"message": "Event updated successfully", "event": response.data}
        else:
            raise HTTPException(status_code=404, detail="Event not found or not updated")
    except Exception as e:
        print(f"Error occurred: {str(e)}")  # Log the error
        raise HTTPException(status_code=500, detail=str(e))

# DELETE /events/{event_id}: Delete an existing event
@router.delete("/events/{event_id}")
def delete_event(event_id: int):
    try:
        response = supabase.table("events").delete().eq("id", event_id).execute()

        if response.data:
            return {"message": "Event deleted successfully"}
        else:
            raise HTTPException(status_code=404, detail="Event not found")
    except Exception as e:
        print(f"Error occurred: {str(e)}")  # Log the error
        raise HTTPException(status_code=500, detail=str(e))
