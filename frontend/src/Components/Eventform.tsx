import React, { useState } from 'react';

const EventForm: React.FC<{ onSubmit: (event: { title: string; date: string; description: string }) => void }> = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ title, date, description });
        setTitle('');
        setDate('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-none shadow-md border border-gray-300">
            <h2 className="text-lg font-semibold mb-4">Create Event</h2>
            
            {/* Title Input */}
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
            <input 
                type="text" 
                id="title"
                placeholder="Title" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                className="border p-3 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />
            
            {/* Date Input */}
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
            <input 
                type="date" 
                id="date"
                value={date} 
                onChange={(e) => setDate(e.target.value)} 
                className="border p-3 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />
            
            {/* Description Input */}
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea 
                id="description"
                placeholder="Description" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                className="border p-3 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                rows={4}
            />
            
            {/* Submit Button */}
            <button type="submit" className="bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition duration-200">
                Create Event
            </button>
        </form>
    );
};

export default EventForm;
