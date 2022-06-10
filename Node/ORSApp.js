//Import dependencies
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var nodemailer = require('nodemailer');
var cors = require('cors');

//create express app
var app = express();

//configure modules
app.use(bodyParser.json());//parse json data from request
app.use(bodyParser.urlencoded({ extended: true})); //parse request parameters
app.use(cookieParser())//cookie parser

//set session timeout
app.use(session({
    secret : 'user',
    saveUninitialized : false,
    resave : false,
    cookie : { secure: false, httpOnly: false}
}));

//Allow cross-origin resource sharing(CORS)
app.use(function(req, res, next){
    console.log(req.url);
    
    //res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
    next();
})
app.use(cors({
    origin: [
        "http://localhost:4200"
    ], credentials: true
}));
app.use('/ORS/',express.static('ORS'))
//set Routes

app.use('/auth', require('./authRouter'))
//Incoming requests need authentication
app.use('/', require('./appRouter'))

//Start server at 8080 port
var listener = app.listen(8080, "localhost", function(){
    var host = listener.address().address
    var port = listener.address().port
    console.log('listening to http://' + host + ':' + port);
});