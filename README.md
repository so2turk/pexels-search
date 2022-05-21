# Pexels-Seach

### Fullstack app for image / vid search from Pexels API

## Tech Stack

- React
- Node.js / Express.js
- bcyriptjs
- JWT
- MongoDB
- Docker

## Sofar

- [x] Create a repository
- [x] Create a README file with projection of the project

✅ Create backend with Node.js / Express.js

- [x] Create routes for Pexels API
  - [x] Create controller to get images/vids
  - [x] Check routes with Postman

✅ Create frontend with React

- [x] Build page for images/vids display
  - [x] Import data from backend
  - [x] Create a card component
  - [x] Apply css to card view

✅ Setup Docker for development

- [x] Implement infinite scroll for more images/vids
- [x] Create a spinner for loading page/images/vids
- [ ] Create detail page for images/vids
  - [ ] Enable comment / like functionality
  - [x] Display realated images/vids
- [x] Create user route for registration/login
  - [x] Create user model
  - [x] Create register / login controllers
- [x] Create register/login pages
- [x] Enable search functionality

## What's Next?

(order may change)

- [ ] Implement JWT for secure login
  - [ ] Enable JWT routes for access and refresh tokens
  - [ ] Create protected routes at frontend
- [ ] Create profile page for users
  - [ ] Enable user to choose avatar

## How to?

- Backend & Frontend
  - npm i
- Project
  - build image: docker-compose up --build
  - use image: docker-compose up
