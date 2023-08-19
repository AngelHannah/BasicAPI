//Express is a webserver that we can run in javascript

//Start by defining an express variable
const express = require("express");
const app = express();
//Now we define a port to run on
const PORT = 3000;

//Using JSON here
app.use(express.json());

//Defining an endpoint
//The / is for home endpoint only
//Then we provide a callback which gets two params, request which is how we access any data that comes to the endpoint
//Then the response is how we send data from the endpoint
app.get("/", (req, res) => {
    res.send("Hello World");
})

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
})
