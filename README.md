# Sisense Grocery Mangement Server Repo

## What this repo stands for

Welcome to grocery mangement Server Readme, this server can recicve requests to get info between two dates from the client-side and access the database collection.
Plus this server can seed MongoDB collection with mock data in couple of simple steps.

## Technologies

The technoloies I chose to use are:

1. Express server.
2. NodeJS.
3. I chose to use MongoDB for many reasons but the main one is that I barley don't use complex queries.
4. ESLint

## Instructions

1. Fork this repo into your account.
2. Clone the forked repo to your computer.
3. Run `npm install`.
4. Create `.env` file in the root folder.
5. Add your own MongoDB URI to the .env file.
6. In `./utils/seedData.ts` choose your first and last dates which will seeded to your collection.
7. Uncomment line 21 in `./src/app.ts`.
8. Run `npm run dev`.
9. Wait till `Seeded successfully!` shown in your console.
10. Recomment line 21 in `./src/app.ts`.
11. Start recicve requsets on client environment.
