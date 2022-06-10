//import require controller module
var CollegeCtl = require("./controller/CollegeCtl");
var express = require('express');
var UserCtl = require("./controller/UserCtl");
var CourseCtl = require('./controller/CourseCtl');
var FacultyCtl = require('./controller/FacultyCtl');
var MarksheetCtl = require('./controller/MarksheetCtl');
var RoleCtl = require('./controller/RoleCtl');
var StudentCtl = require('./controller/StudentCtl');
var SubjectCtl = require('./controller/SubjectCtl');
var TimeTableCtl = require('./controller/TimeTableCtl');
const Response = require("./bean/Response");
var LoginCtl = require("./controller/LoginCtl");

/**
Routes for all incoming requests require authentication
*/
var router = express.Router();

/**
 * It is front controller. It performs authentication for all incoming request.
 */
router.use(function(req, res, next){
    if (req.session.user){
        next();
    }else{
       res.status(403).send("OOPS Session is timeout");
        //next();
    }
})

/**
 * Gets list or a record
 */
router.get('/:usecase/:operation/:id?', function (request, response){
    console.log('App Router GET method');
    var op = request.params.operation;

    if ('save' == op){
        response.status(400).send('Http Get is not allowed');
        return;
    }

    callController(request, response, op);
});

router.get('/:usecase/:operation', function (request, response) {
    console.log('App Router GET preload method');
    var op = request.params.operation;

    if ('preload' == op||'list' == op||'meritList' == op||'myProfile'==op) {
        callController(request, response, op);
    }
});

/**
 * Posts from data
 */
router.post('/:usecase/:operation/:id?', function (request, response){
    console.log('App Router POST methods');

    var op = request.params.operation;

    if ('get' == op || 'preload' == op){
        response.status(400).send('Http Post is not allowed');
        return;
    }
    callController(request, response, op);
});
router.post('/:usecase/:operation/:id', function (request, response) {
    console.log('AppRouter Post Upload');
    var op = request.params.operation;
    if (op == 'profilePic') {
        callController(request, response, op);
    }
    else {
        response.status(400).send('Http Post is not allowed');
        return;
    }
});


router.options('/:usecase/:operation/:id?', function (request, response){
    console.log('App Router OPTION Method');
    response.end('ok');
});

/**
 * DELETE a Record
 */
router.delete('/:usecase/:id', function (request, response){
    console.log('App Router delete');
    callController(request, response, 'delete');
});

/**
 * Calls Controller
 * @param {*} request
 * @param {*} response
 * @param {*} op
 */
function callController(request, response, op){
    var usecase = request.params.usecase + "Ctl()";
    var ctl = eval(" new "+ usecase); //create controller
    console.log(usecase);

    var exp = "ctl." + op + "(request, response)";
    console.log(exp);
    eval(exp);//call method
}

module.exports = router;