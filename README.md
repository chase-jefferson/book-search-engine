# Book Search Engine

## Description
This is a MERN-stack application that allows users to search for books using the Google Books API and save books to their accounts. Originally built with a RESTful API, this project has been refactored to use GraphQL with Apollo Server.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Deployment](#deployment)
- [License](#license)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/book-search-engine.git
   ```
2. Navigate to the project directory:
   ```bash
   cd book-search-engine
   ```
3. Install dependencies for both client and server:
   ```bash
   npm install
   ```
4. Set up the environment variables:
   - Create a `.env` file in the root directory.
   - Add the following environment variables:
     ```env
     MONGODB_URI=<your-mongodb-atlas-connection-string>
     JWT_SECRET=<your-jwt-secret>
     ```

## Usage
1. Start the development server:
   ```bash
   npm run develop
   ```
2. Open the application in your browser at `http://localhost:3000`.

## Technologies Used
- MongoDB
- Express.js
- React
- Node.js
- GraphQL with Apollo Server
- JWT Authentication
- Mongoose ORM

## Features
- **Search for Books**: Users can search books using the Google Books API.
- **User Authentication**: Login and signup functionality with JWT authentication.
- **Save Books**: Authenticated users can save books to their accounts.
- **View Saved Books**: Users can view their saved books.
- **Remove Books**: Users can remove books from their saved list.

## Deployment
The application is deployed on **Render** with a **MongoDB Atlas** database. Follow these steps to deploy:
1. Push your code to a GitHub repository.
2. Create a new service on Render and connect it to your repository.
3. Set environment variables in the Render dashboard.
4. Deploy and monitor logs for any errors.

