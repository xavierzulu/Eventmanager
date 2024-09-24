from pydantic import BaseModel
from datetime import date

# This model will be used to validate input for creating or updating events
class Event(BaseModel):
    title: str
    date: date
    description: str | None = None
