# Recipe Sharing App

## Overview
The Recipe Sharing App is a full-stack web application built using the MERN stack (MongoDB, Express.js, React, Node.js). This app allows users to create, view, and delete recipes with detailed descriptions, ingredients, and preparation steps.

## Features
- Add new recipes with title, description, ingredients, and steps.
- View all recipes in a card-based layout.
- Click on a recipe to view details in a modal.
- Delete a recipe.
- Responsive design.

## Tech Stack
- **Frontend:** React.js, React Router, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (with Mongoose ODM)
- **API Requests:** Axios

## Installation and Setup
### Prerequisites
- Node.js and npm installed
- MongoDB installed and running
- Git installed

### Clone the Repository
```sh
git clone (https://github.com/motebhushan/Recipe_sharing.git)
cd recipe-sharing-app
```

### Backend Setup
1. Navigate to the `backend` directory:
   ```sh
   cd server
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and add the MongoDB connection string:
   ```sh
   MONGO_URI=your_mongodb_connection_string
   PORT=3000
   ```
4. Start the backend server:
   ```sh
   npm start
   or
   npm run dev
   ```

### Frontend Setup
1. Navigate to the `frontend` directory:
   ```sh
   cd recipe_app
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the React development server:
   ```sh
   npm start
   or
   npm run dev
   ```

## API Endpoints
- `GET /recipe` - Fetch all recipes
- `POST /recipe` - Add a new recipe
- `DELETE /recipe/:id` - Delete a recipe

## Folder Structure
```
recipe-sharing-app/
│── backend/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── .env
│   └── package.json
│── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── styles/
│   │   └── api/
│   ├── public/
│   ├── package.json
│── README.md
```

## Contributing
Feel free to fork the repository and submit pull requests for improvements.

## License
This project is licensed under the MIT License.

---
Happy coding! 🚀

