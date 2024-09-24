import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import EventForm from './Eventform'; 

// Type for the form submission
interface EventFormValues {
    title: string;
    date: string;
    description: string;
}

describe('EventForm', () => {
    const mockOnSubmit = jest.fn(); 

    beforeEach(() => {
        mockOnSubmit.mockClear(); // Clear the mock function before each test
        render(<EventForm onSubmit={mockOnSubmit} />);
    });

    test('renders the form fields', () => {
        // Ensure that all the form fields are present
        expect(screen.getByLabelText(/title/i)).toBeInTheDocument(); // Check label for title field
        expect(screen.getByLabelText(/description/i)).toBeInTheDocument(); // Check label for description
        expect(screen.getByLabelText(/date/i)).toBeInTheDocument(); // Check label for date field
        expect(screen.getByRole('button', { name: /create event/i })).toBeInTheDocument(); // Check the button
    });

    test('submits the form with the correct values', () => {
        // Simulate user input
        fireEvent.change(screen.getByLabelText(/title/i), {
            target: { value: 'Event Title' },
        });
        fireEvent.change(screen.getByLabelText(/date/i), {
            target: { value: '2024-09-30' },
        });
        fireEvent.change(screen.getByLabelText(/description/i), {
            target: { value: 'Event Description' },
        });

        // Simulate form submission
        fireEvent.click(screen.getByRole('button', { name: /create event/i }));

        // Check if the mock function was called with the correct form values
        expect(mockOnSubmit).toHaveBeenCalledWith({
            title: 'Event Title',
            date: '2024-09-30',
            description: 'Event Description',
        } as EventFormValues);
    });

    test('clears the input fields after submission', () => {
        // Simulate user input
        fireEvent.change(screen.getByLabelText(/title/i), {
            target: { value: 'Event Title' },
        });
        fireEvent.change(screen.getByLabelText(/date/i), {
            target: { value: '2024-09-30' },
        });
        fireEvent.change(screen.getByLabelText(/description/i), {
            target: { value: 'Event Description' },
        });

        // Simulate form submission
        fireEvent.click(screen.getByRole('button', { name: /create event/i }));

        // Check that the form fields are cleared after submission
        expect(screen.getByLabelText(/title/i)).toHaveValue('');
        expect(screen.getByLabelText(/date/i)).toHaveValue('');
        expect(screen.getByLabelText(/description/i)).toHaveValue('');
    });
});
