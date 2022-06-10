var BaseCtl = require("../controller/BaseCtl");
var Faculty = require("../bean/Faculty");
var ServiceLocator = require("../services/ServiceLocator");
var Response = require("../bean/Response");
var DataValidator = require("../utility/DataValidator");

/**
 * Contains Faculty REST APIs
 */

class FacultyCtl extends BaseCtl{
    constructor(){
        super();
        this.service = ServiceLocator.getFacultyService();
    }
    /**
     * Returns preload data. 
     * 
     * @param {*} request
     * @param {*} response
     */
     preload(request, response) {
        var courseService = ServiceLocator.getCourseService();
        var subjectService = ServiceLocator.getSubjectService();
       var collegeService = ServiceLocator.getCollegeService();
        var result = {}
        courseService.search('', null, function (err, course) {
            if (!err) {
                result.courseList = course.list;
                subjectService.search('', null, function (err, subject) {
                   if(!err){
                    result.subjectList = subject.list;
                       collegeService.search('',null,function(err,college){
                   
                                    if (!err) {
                                        result.collegelist = college.list;
                                        
                                        var res = new Response(err, result);
                                        response.json(res);
                    }
                });
            }
                });
            }
        });
    }

    /**
     * Returns Validate Data. 
     */
     validate(body,callback){
        var pass = true;
        var result = {};
        result.inputerror = {};

        if(!body.firstName){
            result.inputerror.firstName = "First Name is required";
            pass= false;
        }else if(!DataValidator.isFirstName(body.lastName)){
            result.inputerror.lastName = "Last Name is Invalid";
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
        /*if (!body.password) {
            result.inputerror.password = "Password is required";
            pass = false;
        } else if(!DataValidator.isPassword(body.password)){
            result.inputerror.password = "Password is Invalid"
            pass = false;
        }*/
        
        if (!body.mobileNo) {
            result.inputerror.mobileNo = "Mobile No is required";
            pass = false;
        } else if (!DataValidator.isMobileNo(body.mobileNo)){
            result.inputerror.mobileNo = "Mobile No is invalid";
            pass = false;
        }
        if(!body.address){
            result.inputerror.address = "College Address is required";
            pass= false;
        }
        if (!body.gender) {
            result.inputerror.gender = "Gender is required";
            pass = false;
        }
        if(!body.collegeId){
            result.inputerror.collegeId = "College Name is required";
            pass = false;
        }
        if(!body.courseId){
            result.inputerror.courseId = "Course Name is required";
            pass = false;
        }
        if(!body.subjectId){
            result.inputerror.subjectId = "Subject Name is required";
            pass = false;
        }
        
        if (!body.dob) {
            result.inputerror.dob = "DOB is required";
            pass = false;
        } 

        if(pass==false){
            callback(pass,result)
        }else {
            callback(pass)
        }
    }

    /**     
     * Returns Faculty bean populated from request parameters.
     */
    getBean(request){
        var faculty = new Faculty();
        faculty.populateRequest(request.body);
        return faculty;
    }
    /**
     * Returns service of this controller.
     */
    getService(){
        return this.service;
    };
}
module.exports = FacultyCtl;