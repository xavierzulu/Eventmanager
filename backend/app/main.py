from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import event_router

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins; adjust for production
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

# Include the event router
app.include_router(event_router.router)

@app.get("/")
def read_root():
    return {"message": "Welcome to the Event Management System"}

