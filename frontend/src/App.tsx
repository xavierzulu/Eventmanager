import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import EventCard from './Components/Eventcard';
import EventDetails from './Components/Eventdetails';
import EventForm from './Components/Eventform';
import axios from 'axios';
import './index.css';

const API_URL = 'http://localhost:8000/events'; // Adjust based on your FastAPI URL

const App: React.FC = () => {
    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);

    // Fetch events from the API on component mount
    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get(API_URL);
                setEvents(response.data);
            } catch (error) {
                console.error("Error fetching events:", error);
            }
        };

        fetchEvents();
    }, []);

    // Handle creating a new event
    const handleCreateEvent = async (event: { title: string; date: string; description: string }) => {
        try {
            const response = await axios.post(API_URL, event);
            setEvents((prevEvents) => [...prevEvents, response.data.event]); // Assuming response.data contains the new event
        } catch (error) {
            console.error("Error creating event:", error);
        }
    };

    return (
        <div className="bg-gray-200 min-h-screen">
            <Navbar />
            <div className="container mx-auto flex p-4">
                <div className="w-2/3">
                    <div className=""> 
                        {events.map((event) => (
                            <div key={event.id} onClick={() => setSelectedEvent(event)}>
                                <EventCard event={event} />
                            </div>
                        ))}
                    </div>
                    <EventForm onSubmit={handleCreateEvent} />
                </div>
                <div className="w-1/3 ml-4">
                    <EventDetails event={selectedEvent} />
                </div>
            </div>
        </div>
    );
};

export default App;
