# UBI - Marketplace for Nigerian Fruits, Vegetables, and Farm Products

UBI is an online marketplace designed to help people in Nigeria list their fruits, vegetables, and farm products for sale. It allows both local customers and international exporters to browse, buy, and sell fresh agricultural products, creating a seamless experience for farmers and consumers. The platform connects sellers (farmers) with buyers (consumers and exporters), enabling the trade of farm products across the country and globally.

## Features

- **Product Listing:** Farmers and sellers can list various fruits, vegetables, and other farm products.
- **Buyer Options:** Exporters and local customers can browse and purchase products.
- **Search & Filter:** Easy-to-use search functionality to find specific products based on category, price, location, etc.
- **User Accounts:** Buyers and sellers can create and manage their accounts.
- **Payment Integration:** Secure payment system for processing orders (to be integrated).
- **Admin Panel:** Admin users can manage listings, users, orders, and view platform analytics.

## Technologies Used

### Backend

- **Laravel:** The backend is built using Laravel, a PHP framework known for its elegant syntax and powerful features.
  - User Authentication & Authorization
  - Product Management (CRUD operations for sellers)
  - Order Management
  - API routes for product listing and order processing

### Frontend

- **React.js:** The frontend is built with React.js for a dynamic, fast, and responsive user experience.
  - Real-time updates (product listings, cart updates)
  - Responsive Design
  - State management (Redux or Context API for managing global state)

### Database

- **MySQL:** The database is used for storing product listings, user information, orders, etc.

## Installation

### Prerequisites

Make sure you have the following installed on your machine:

- PHP (Laravel requires PHP 7.4 or above)
- Composer (for managing Laravel dependencies)
- Node.js (for running React)
- NPM or Yarn (for React package management)
- MySQL (or preferred database)

### Backend Setup (Laravel)

1. Clone the repository:

   ```bash
     git clone https://github.com/your-username/ubi.git
     cd ubi
   ```

   Navigate to the `backend` directory and install dependencies:
  ```bash
    cd backend
    composer install
  ```
Set up the `.env` file by copying the example:
  ```bash 
  cp .env.example .env
```
Generate the application key:
  ```bash
php artisan key:generate
```
Set up the database connection in the .env file and run the migrations:
  ```bash 
  php artisan migrate
```
Start the Laravel server:
  ```
  php artisan serve
```

### Frontend Setup (React.js)
Navigate to folder
```bash
    cd frontend
```
Install dependencies using npm:
```bash
  npm install
```
Start the development server:
```bash
npm start
```
