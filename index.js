const express = require('express')
const app =express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const noteRouter = require('./controllers/note');

const config ={
    useNewUrlParser: true,
    useUnifiedTopology: true

}

mongoose.connect(process.env.MONGODB_URI,config)
.then(() => {
    console.log("Sucessfully connected to MongoDB");

})
.catch(err => {
    console.error("Some problem occured", err)
})

app.use((request, response, next) => {
	console.log("This is a new request");
	console.log("IP:", request.ip);
	console.log("Method:", request.method);

	next();
});


app.use(bodyParser.json());
app.use('/note', noteRouter)

app.listen(process.env.PORT, ()=> {
    console.log("Express app is running")
})