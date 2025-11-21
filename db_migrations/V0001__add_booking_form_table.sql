-- Create bookings table for storing user registration requests
CREATE TABLE IF NOT EXISTS t_p73193825_lezginka_drum_school.bookings (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    email VARCHAR(255),
    direction VARCHAR(255),
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create index for faster queries
CREATE INDEX idx_bookings_created_at ON t_p73193825_lezginka_drum_school.bookings(created_at DESC);