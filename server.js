const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');

const app = express();

//var cors = require('cors')
//app.use('cors') //used to pass middleware for all verbs (get post etc.)

app.use(express.json()); // app.use is used to pass a middleware, which then modifies the request. 
app.use(function (req, res, next){
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

const uri = config.get('mongoURI');

//connecting to mongodb using mongoose, also this is promise based
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
    })
.then(() => {
    console.log('MongoDB Connected…') //once connected then send this message
})
.catch(err => console.log(err)) //if the prmose rejects

require('./models/User')
require('./models/Post')

app.use(require('./routes/api/users'));
// app.use('/api/users', require('./routes/api/users'));

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000; //process.env.port for heroku
app.listen(port, () => console.log(`server started on port ${port}`)); //callback is optional

