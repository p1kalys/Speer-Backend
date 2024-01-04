# Speer Technologies - Backend Assessment


## Technical Requirements

1.	Implement a RESTful API using a framework of your choice (e.g. Express, DRF, Spring).
2.	Use a database of your choice to store the data (preferably MongoDB or PostgreSQL).
3.	Use any authentication protocol and implement a simple rate limiting and request throttling to handle high traffic.
4.	Implement search functionality to enable users to search for notes based on keywords. ( preferably text indexing for high performance )
5.	Write unit tests and integration tests your API endpoints using a testing framework of your choice.



## Approach and Preferences


### Framework - Express

Express JS exhibits a higher request-per-second throughput compared to other frameworks. The asynchronous and event-driven nature of Express JS, combined with its lightweight design, allows it to handle a larger number of concurrent requests efficiently


### Database - MongoDB

While PostgreSQL offer robust, reliable, ACID-compliant relational data storage solutions, NoSQL databases like MongoDB provide flexible, horizontally scalable alternatives.


### Authentication - JWT, bcrypt for hashing passwords


### Tests - Jest, Supertest

Jest is likely the better choice if you want a testing framework that we can use on its own, without having to configure integrations.



## How to run and test

1. Clone the Repo.
2. Run `npm install` command to install the dependencies. 
3. To install nodemon, run `npm i nodemon`.
4. Go to `.env` File and replace the MONGODB_URL.
4. To run the application, use `npm start` command.
5. To run the tests, use `npm test` command.


### Note: Make Sure to use the routes properly.