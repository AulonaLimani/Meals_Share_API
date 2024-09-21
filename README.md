# Meal Sharing App


## Introduction

This repository serves as a starting point for creating a web application with a GraphQL API backend using Express and a Next.js frontend. The application aims to provide a user-friendly interface for sharing meal recipes, browsing shared meals, and managing your own collection of recipes.


## Features 

- Browse a collection of shared meals.
- View detailed information about each meal.
- Share your own meal recipes.
- Edit or delete your meal recipes.
  

## Technologies Used
- Front-end:  The front-end of this project is built using Next.js, a popular React-based framework for building user interfaces with server-side rendering.
- Back-end: The back-end of this project is developed using Express.js, a Node.js framework, along with Prisma and GraphQL for scalable and flexible data management.
- Database: The project uses MySQL as the database to store meal data and user information.


## Prerequisites
To run this project locally, ensure you have the following prerequisites installed:
- Node.js
- MySQL


## Installation

In order for the project to run, these steps must be followed:

1. Clone the repo
 ```sh
   https://github.com/AulonaLimani/Meals_Share_API.git
   ```
   
  ### Server packages
  1. Navigate to Server Directory
  
  * From the main directory use the below comand
  ```sh
    cd server
  ```
 2. Configure MySQL database connection
  * Open .env and update the DATABASE_URL based on your MySQL setup:
  ```
   DATABASE_URL="mysql://user:password@localhost:3306/mealsdb"
  ```
  3. Install server dependencies
 ```
   yarn
 ```
  4. Run Prisma migrations
 ```
   npx prisma migrate dev
 ```

### Client packages

1. Navigate to Client directory
* If you are still in the server directory use the comand below
```sh
  cd ../client
  ```
* From the main directory use the below comand
```sh
  cd client
  ```
2. Run GraphQL Codegen
```sh
   yarn graphql-codegen
  ```

3. Install packages
```sh
   yarn
  ```

 
## Running the application

1. Firstly you should run the server
```
  yarn dev
```
2. Now run the client
```
  yarn dev
```

## Usage 

- The backend GraphQL API is accessible at http://localhost:3001/graphql.
- You can explore and test the available routes using a GraphQL client.
- After completing the installation steps, access the web application by navigating to http://localhost:3000.
- There are meals created with user accounts, and you edit or delete them with these credentials: email: **admin@admin.com** password: **admin**.
