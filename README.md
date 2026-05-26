# WTWR (What to Wear?) — Back End

## About the Project

WTWR is a full-stack web application that suggests clothing items based on current weather conditions. This repository contains the back-end server built with Express.js and MongoDB. It provides a REST API for managing users and clothing items, including creating, reading, deleting, and liking/unliking items.

## Functionality

- Create and retrieve users
- Create, retrieve, and delete clothing items
- Like and unlike clothing items
- Input validation (name length, URL format, weather type)
- Error handling for invalid data, missing resources, and server errors

## Technologies & Techniques

- **Node.js** — runtime environment
- **Express.js** — web framework for routing and middleware
- **MongoDB** — NoSQL database for storing users and clothing items
- **Mongoose** — ODM for schema definition, validation, and database interaction
- **validator** — URL validation for avatar and imageUrl fields
- **nodemon** — hot reload during development
- **ESLint** (Airbnb style guide) + **Prettier** — code quality and formatting

## API Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/users` | Returns all users |
| GET | `/users/:userId` | Returns a user by ID |
| POST | `/users` | Creates a new user |
| GET | `/items` | Returns all clothing items |
| POST | `/items` | Creates a new clothing item |
| DELETE | `/items/:id` | Deletes a clothing item by ID |
| PUT | `/items/:id/likes` | Likes a clothing item |
| DELETE | `/items/:id/likes` | Unlikes a clothing item |

## Running the Project

`npm run start` — launches the server on localhost:3001

`npm run dev` — launches the server with hot reload enabled

`npm run lint` — runs the ESLint linter

## Testing

Before committing, make sure `sprint.txt` in the root contains the current sprint number (e.g. `12`).
