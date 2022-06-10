var BaseCtl = require("../controller/BaseCtl");
var Student = require("../bean/Student");
var ServiceLocator = require("../services/ServiceLocator");
var Response = require('../bean/Response');
var DataValidator = require('../utility/DataValidator');


/**
 * Contains Student REST APIs.
 */

class StudentCtl extends BaseCtl {
    constructor() {
        super();
        this.service = ServiceLocator.getStudentService();
    }

    /**
     * Returns preload data.
     * @param {*} request 
     * @param {*} response 
     */
    preload(request, response) {
        var clgService = ServiceLocator.getCollegeService();
        clgService.search('', null, function (err, college) {
            var result = {};
            result.collegeList = college.list;
            var res = new Response(err, result)
            response.json(res)
        })
    };
    /**
     * Returns Validate Data. 
     */
     validate(body,callback){
        var pass = true;
        var result = {};
        result.inputerror = {};

        if(!body.collegeId){
            result.inputerror.collegeId = "College Name is required";
            pass = false;
        }
        if (!body.firstName) {
            result.inputerror.firstName = "First Name is required";
            pass = false;
        } else if(!DataValidator.isFirstName(body.firstName)){
            result.inputerror.firstName = "First Name is Invalid";
            pass = false;
        }
        if (!body.lastName) {
            result.inputerror.lastName = "Last Name is required";
            pass = false;
        } else if(!DataValidator.isName(body.lastName)){
            result.inputerror.lastName = "Last Name is Invalid";
            pass = false;
        }
        if(!body.email){
            result.inputerror.email = "Email is Required";
            pass = false;
        } else if(!DataValidator.isEmail(body.email)){
            result.inputerror.email = "Email is Invalid";
            pass = false;
        }
        if (!body.dob) {
            result.inputerror.dob = "DOB is required";
            pass = false;
        } 
        if (!body.mobileNo) {
            result.inputerror.mobileNo = "Mobile No is required";
            pass = false;
        } else if (!DataValidator.isMobileNo(body.mobileNo)){
            result.inputerr.mobileNo = "Mobile No is invalid";
            pass = false;
        }
        

        if(pass==false){
            callback(pass,result)
        }else {
            callback(pass)
        }
    }

    /**
     * Return bean of Sudent controller.
     * @param {*} request 
     */
    getBean(request) {
        var student = new Student();
        student.populateRequest(request.body);
        return student;
    };

    /**
     * return service of Student controller.
     */
    getService() {
        return this.service;
    };
}

module.exports = StudentCtl;