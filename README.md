1.1 Project Title:
CityCycle - Bike Sharing Platform

1.2 Project Description:
CityCycle is a bike-sharing service that enables users to rent bicycles from designated
stations across the city. Through an intuitive web application or mobile interface, users can
rent, return, and pay for bike rentals. The platform features real-time bike availability, user
management, and integrated payment processing, offering a reliable and eco-friendly
transportation alternative.

2.1 User Types:
The CityCycle platform accommodates two primary user types: End Users (Cyclists) and
Admins.

2.1.1 End Users (Cyclists)
End users are individuals who use the platform to rent bikes for commuting or leisure
purposes. They can:
● Sign Up / Log In: Create an account and securely log in to access the platform.
● View Available Bikes: Search for nearby stations with bikes available for rent.
● Rent Bikes: Select and rent a bike for a specified period.
● Return Bikes: Return the bike to a designated station after use.
● Payment: Pay for rentals via integrated payment systems like Stripe or PayPal.
● View Rental History: Check previous rentals, distances, and costs.
● User Profile Management: Manage personal details and preferences.

2.1.2 Admin
Admins oversee the overall operation of the bike-sharing platform. They have access to
advanced functionalities:
● User Management: View and manage all registered users.
● Bike & Station Management: Add, remove, and update bike availability and station
details.
● Transaction Management: Monitor payments and rental transactions.
● Analytics Dashboard: View system performance and generate reports (e.g., active
users, total rentals, etc.).
● Maintenance Tracking: Track and manage bike maintenance status.

3.3 Database Design:
● User Table: Stores user information (name, email, phone, etc.).
● Bike Table: Stores bike details, including location, availability status, and rental
history.
● Station Table: Details about bike stations (location, capacity, available bikes).
● Rental Table: Tracks active rentals, including user ID, bike ID, start time, end time,
and rental cost.
● Payment Table: Stores payment transactions (amount, method, status).

3.4 Real-Time Features:
● Bike Availability: Real-time updates on bike availability across various stations.
Users can view up-to-date information about available bikes.
● Location Tracking: Optional GPS tracking for each bike, providing real-time location
updates.
