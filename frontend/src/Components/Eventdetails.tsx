import React from 'react';

interface Event {
    title: string;
    date: string;
    description: string;
}

const EventDetails: React.FC<{ event: Event | null }> = ({ event }) => {
    return (
        <div className="bg-gray-200 ">
            <h2 className="text-xl font-bold">Event Details</h2>
            {event ? (
                <>
                    <h3 className="text-lg ">{event.title}</h3>
                    <p className="text-gray-600">{event.date}</p>
                    <p>{event.description}</p>
                </>
            ) : (
                <p>Click an event to see details</p>
            )}
        </div>
    );
};

export default EventDetails;

