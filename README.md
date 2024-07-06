

# ShohoJog: A Comprehensive PERN Stack E-Commerce Platform

## Project Overview

ShohoJog is a dummy e-commerce platform developed using the PERN stack (PostgreSQL, Express, React, Node.js). This project demonstrates the implementation of advanced search functionalities, efficient handling of large datasets, and various customer-end, seller-end, courier service, and customer-care operations to simulate a real-world e-commerce application.

## Features

### Customer End
- **Product Search and Filters**: Advanced search with filters and sorting options.
- **Shopping Cart**: Add products to the cart and manage them.
- **Order Management**: Place orders, view order history, and return orders.
- **User Profile**: Manage user profile and settings.

### Seller End
- **Product Listings**: Manage product listings, including adding, editing, and deleting products.
- **Inventory Management**: Track and manage inventory levels.
- **Order Processing**: View and process incoming orders.

### Courier Service End
- **Delivery Tracking**: Track deliveries and update shipment statuses.
- **Logistics Management**: Manage logistics and route optimization.

### Customer-Care End
- **Statistics and Analysis**: View statistics of different products and sellers.
- **Data Analysis**: Analyze advanced data within a specific date range.
- **Customer Support**: Handle customer queries and process return requests.

## Technologies Used

- **PostgreSQL**: Database management.
- **Express**: Backend API development.
- **React**: Frontend user interface.
- **Node.js**: Server-side scripting.

## Installation

### Prerequisites
- Node.js
- PostgreSQL
- Git

### Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/CrazySoda/ShohoJog.git
   cd shohojog
   ```

2. **Backend Setup**
   - Navigate to the backend directory:
     ```bash
     cd server
     ```
     (from below here Prachurja will update)
   - Install the required dependencies:
     ```bash
     npm install
     ```
   - Set up the PostgreSQL database and configure the connection details in a `.env` file:
     ```plaintext
     DB_HOST=your-database-host
     DB_USER=your-database-username
     DB_PASS=your-database-password
     DB_NAME=your-database-name
     ```
   - Run the database migrations and seed the database:
     ```bash
     npm run migrate
     npm run seed
     ```
   - Start the backend server:
     ```bash
     npm start
     ```

3. **Frontend Setup**
   - Navigate to the frontend directory:
     ```bash
     cd ../frontend
     ```
   - Install the required dependencies:
     ```bash
     npm install
     ```
   - Start the frontend development server:
     ```bash
     npm start
     ```

4. **Access the Application**
   - Open your web browser and navigate to `http://localhost:3000` to access ShohoJog.

## Usage

- **Search Products**: Use the search bar to find products and apply filters for refined results.
- **Add to Cart**: Browse products and add them to your shopping cart.
- **Place Orders**: Proceed to checkout and place orders. View order history in your profile.
- **Return Orders**: Manage return requests through your order history.
- **Manage Listings (Seller)**: Add, edit, or delete product listings.
- **Track Deliveries (Courier)**: Update shipment statuses and manage logistics.
- **View Statistics (Customer Care)**: Analyze product and seller data within specific date ranges.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure that your code follows the project's coding standards and includes appropriate tests.

## License

This project is unlicensed and basically for anyone here to learn

## Contact

For any inquiries or feedback, please contact email - fiarian1234@gmail.com.
