// create web server using express
// npm install express

// import express
const express = require('express');
// create express app
const app = express();
// set the port
const port = 3000;

// create a get route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// listen to the port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// run the server
// node comments.js
// open browser and go to http://localhost:3000
// you should see Hello World

// create a route to get all comments
app.get('/comments', (req, res) => {
    res.send('Get all comments');
});

// create a route to get a comment by id
app.get('/comments/:id', (req, res) => {
    res.send('Get comment by id');
});

// create a route to create a comment
app.post('/comments', (req, res) => {
    res.send('Create a comment');
});

// create a route to update a comment
app.put('/comments/:id', (req, res) => {
    res.send('Update a comment');
});

// create a route to delete a comment
app.delete('/comments/:id', (req, res) => {
    res.send('Delete a comment');
});

// create a route to get all comments by user
app.get('/users/:userId/comments', (req, res) => {
    res.send('Get all comments by user');
});

// create a route to get all comments by user
app.get('/users/:userId/comments/:commentId', (req, res) => {
    res.send('Get a comment by user');
});

// create a route to get all comments by user
app.post('/users/:userId/comments', (req, res) => {
    res.send('Create a comment by user');
});

// create a route to get all comments by user
app.put('/users/:userId/comments/:commentId', (req, res) => {
    res.send('Update a comment by user');
});

// create a route to get all comments by user
app.delete('/users/:userId/comments/:commentId', (req, res) => {
    res.send('Delete a comment by user');
});

// run the server
// node comments.js
// open browser and go to http://localhost:3000/comments