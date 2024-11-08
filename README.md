# Content Management System

A media content management dashboard application for administrators to manage media items like shows, videos, and articles with features such as listing, editing, and deleting content.

---

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Running the Application](#running-the-application)
- [Assumptions and Choices](#assumptions-and-choices)

## Features
- View and filter media content (Published/Draft status).
- Create new media content with options to save as Draft or Publish.
- Edit and delete existing content (Edit and delete icons used to trigger).
- Basic authentication for admin login.
- Responsive UI for desktop and mobile screens.
- Cards, modals and icons used for viewing and other operations in an interactive way.
- Context API used for state management across frontend application.

## Technologies Used
- **Frontend**: React.js, HTML, CSS
- **Backend**: Node.js, Express, SQLite (For storing data and database operations)
- **State Management**: Context API
- **Styling**: CSS for custom styling and responsiveness
- **HTTP Client**: Axios for API calls

## Setup and Installation

### **Clone the Repository*
-   ```bash 
    git clone https://github.com/Harikaran-KP/content-management-system.git
    cd content-management-system

### 2. **Set Up Backend (content-management-system-api)**
- Navigate to the backend folder and install dependencies:
    ```bash
    cd content-management-system-api
    npm install
    npm install express sqlite3 dotenv bcryptjs body-parser
    npm install cors

- Make sure SQLite is installed on your system. Use 'SQLite Viewer extension if using VS Code, to visualize tables.
  Run the server:
     ```bash
     node server.js

- The backend server should start at http://localhost:5000.

### 3. Set Up Frontend (content-management-system-app)

- Open a new terminal, navigate to the frontend folder, and install dependencies:
    ```bash
    cd content-management-system-app
    npm install
- Start the frontend server:
    ```bash
    npm start
- The UI should start at http://localhost:3000.

## Running the Application

- Ensure the backend server (content-management-system-api) is running on http://localhost:5000.
- Open a new terminal and start the frontend server (content-management-system-app), which runs on http://localhost:3000.
- You can access the application at http://localhost:3000 in your browser.

### Demo Login Credentials

To access the CMS Dashboard UI, use the following credentials:

- **Email**: `admin@example.com`
- **Password**: `admin123`

These credentials are for demo purposes and allow you to explore the application’s features. Demo records for content table is added. (Refer `database.js`)

## Assumptions and Choices

- **Authentication**: Basic authentication is implemented for admin login without JWT tokens.
- **Database**: SQLite is used for simplicity in local storage. Content data is stored in a local SQLite database (`cms.db`). The **SQLite Viewer** extension in VS Code is recommended for visualizing the database and command-line interaction.
- **Routing**: RESTful API routes are used to perform CRUD operations on content items.
- **UI**: Modals are used to create a more interactive user experience for operations like creating and deleting content. Icons are used as buttons for create and delete actions. Collapsible/expandable interactive cards are used for viewing data in a streamlined format.
- **Responsive Design**: The app is designed to be responsive using CSS media queries, with a sidebar that collapses on mobile for a better user experience.
- **Error Handling**: Basic error handling is implemented with alerts to provide feedback to users on the frontend.
- **State Management**: Context API is used for managing application state and passing data between components. Separate context files are used for CRUD operations and login functionality to keep the codebase organized and modular.
