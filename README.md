# WTWR (What to Wear?) — Back End

REST API for the WTWR app — handles users, auth, and clothing items. Built with Express and MongoDB.

Frontend repo: https://github.com/jasssingh191/se_project_react

## What it does

Signup/signin with JWT, password hashing via bcryptjs, and CRUD on clothing items (create, list, delete, like/unlike). Most routes need a valid token, and only an item's owner can delete it.

## Stack

Node, Express, MongoDB/Mongoose, bcryptjs, jsonwebtoken, cors, validator. ESLint (Airbnb) + Prettier for linting.

## Endpoints

| Method | Route | Auth | Description |
|--------|-------|------|-------------|
| POST | `/signup` | No | Create a user |
| POST | `/signin` | No | Sign in, get a JWT |
| GET | `/items` | No | List all items |
| GET | `/users/me` | Yes | Get current user |
| PATCH | `/users/me` | Yes | Update current user |
| POST | `/items` | Yes | Create an item |
| DELETE | `/items/:id` | Yes | Delete an item (owner only) |
| PUT | `/items/:id/likes` | Yes | Like an item |
| DELETE | `/items/:id/likes` | Yes | Unlike an item |

## Running it

Needs Mongo running locally first (`mongod`), then:

```bash
npm run start   # server on localhost:3001
npm run dev     # same, with hot reload
```

## Pitch video

[Here's a walkthrough](https://drive.google.com/file/d/1sNVxxHxcC53PyiNnaPojHPAFCxGxW5-S/view?usp=sharing) of the project and some of the challenges I ran into building it.
