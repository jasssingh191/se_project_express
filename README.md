# WTWR (What to Wear?) — Back End

## About the Project

WTWR is a full-stack web application that suggests clothing items based on current weather conditions. This repository contains the back-end server built with Express.js and MongoDB. It provides a REST API for managing users and clothing items, including user authentication, creating, reading, deleting, and liking/unliking items.

## Functionality

- User signup and signin with JWT authentication
- Password hashing with bcryptjs
- Protected routes — token required for most actions
- Create and retrieve users
- Update current user profile
- Create, retrieve, and delete clothing items
- Ownership check — only the item owner can delete it
- Like and unlike clothing items
- Input validation (name length, URL format, weather type)
- Error handling for invalid data, missing resources, and server errors

## Technologies & Techniques

- **Node.js** — runtime environment
- **Express.js** — web framework for routing and middleware
- **MongoDB** — NoSQL database for storing users and clothing items
- **Mongoose** — ODM for schema definition, validation, and database interaction
- **bcryptjs** — password hashing before saving to the database
- **jsonwebtoken** — JWT-based authentication and route protection
- **cors** — enables cross-origin requests from the front end
- **validator** — URL and email validation
- **nodemon** — hot reload during development
- **ESLint** (Airbnb style guide) + **Prettier** — code quality and formatting

## API Endpoints

| Method | Route | Auth Required | Description |
|--------|-------|---------------|-------------|
| POST | `/signup` | No | Creates a new user |
| POST | `/signin` | No | Signs in and returns a JWT token |
| GET | `/items` | No | Returns all clothing items |
| GET | `/users/me` | Yes | Returns the current user |
| PATCH | `/users/me` | Yes | Updates the current user profile |
| POST | `/items` | Yes | Creates a new clothing item |
| DELETE | `/items/:id` | Yes | Deletes a clothing item by ID (owner only) |
| PUT | `/items/:id/likes` | Yes | Likes a clothing item |
| DELETE | `/items/:id/likes` | Yes | Unlikes a clothing item |

## Running the Project

`npm run start` — launches the server on localhost:3001

`npm run dev` — launches the server with hot reload enabled

`npm run lint` — runs the ESLint linter

## Testing

Before committing, make sure `sprint.txt` in the root contains the current sprint number (e.g. `13`).

## Project Pitch Video

Check out [this video](https://drive.google.com/file/d/1sNVxxHxcC53PyiNnaPojHPAFCxGxW5-S/view?usp=sharing), where I describe my project and some challenges I faced while building it.
