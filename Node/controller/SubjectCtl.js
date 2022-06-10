var BaseCtl = require('../controller/BaseCtl');
var Subject = require('../bean/Subject');
var ServiceLocator = require('../services/ServiceLocator');
var DataValidator = require('../utility/DataValidator');
var Response = require('../bean/Response');
/**
 * Contains Subject REST APIs
 */
class SubjectCtl extends BaseCtl{

    constructor(){
        super();
        this.service = ServiceLocator.getSubjectService();
    }
    /**
     * Returns preload data.
     * 
     * @param {*} request 
     * @param {*} response 
     */
     preload(request, response) {
        var courseService = ServiceLocator.getCourseService();
        courseService.search('', null, function (err, course) {
            var result = {};
            result.courseList = course.list;
            var res = new Response(err,result);
            response.json(res)
        });
    }
    /**
     * Returns Validate Data. 
     */
     validate(body,callback){
        var pass = true;
        var result = {};
        result.inputerror = {};

        if(!body.subjectName){
            result.inputerror.subjectName = "Subject Name is required";
            pass= false;
        } else if(!DataValidator.isName(body.subjectName)){
            result.inputerror.subjectName = "Subject Name is Invalid";
            pass = false;
        }
        if(!body.subjectDescription){
            result.inputerror.subjectDescription = "Subject Description is required";
            pass= false;
        } 
        if(!body.courseId){
            result.inputerror.courseId = "Course Name is required";
            pass = false;
        }

        if(pass==false){
            callback(pass,result)
        }else {
            callback(pass)
        }
    }
    /**
     * Returns Subject bean populated from request parameters. 
     */
    getBean(request){
        var subject = new Subject();
        subject.populateRequest(request.body);
        return subject;
    };
    /**
     * Returns service of this controller.
     */
     getService() {
        return this.service;
    };
}

module.exports = SubjectCtl;