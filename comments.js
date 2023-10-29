//create web server 
const express = require('express');
//create web app
const app = express();

//create server
const server = app.listen(3000, listening);

function listening(){
    console.log("listening . . . ");
}

//create a route to the folder
app.use(express.static('website'));

//create an array to store the data
const data = [];

//create a route to post the data
app.post('/add', addData);

function addData(request, response){
    console.log(request.body);
    data.push(request.body);
    response.send(request.body);
}

//create a route to get the data
app.get('/all', getData);

function getData(request, response){
    response.send(data);
}