import React from 'react';

interface Event {
    title: string;
    date: string;
    description: string; 
}

const EventCard: React.FC<{ event: Event }> = ({ event }) => {
    return (
        <div className="bg-white shadow-md rounded-none p-4 m-4 w-full h-auto sm:w-[10rem] sm:h-[3rem] md:w-[20rem] md:h-[6rem] lg:w-[30rem] lg:h-[9rem] flex flex-col justify-start items-start border border-gray-300">
          <h2 className="text-lg sm:text-base md:text-lg lg:text-xl font-bold text-center">{event.title}</h2>
          <p className="text-gray-600 sm:text-sm md:text-base lg:text-lg text-center">{event.date}</p>
        </div>

    );
};

export default EventCard;
