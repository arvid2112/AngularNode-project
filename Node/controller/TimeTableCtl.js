var BaseCtl = require('../controller/BaseCtl');
var TimeTable = require('../bean/TimeTable');
var ServiceLocator = require('../services/ServiceLocator');
var Response = require("../bean/Response");

class TimeTableCtl extends BaseCtl{

    constructor(){
        super();
        this.service = ServiceLocator.getTimeTableService();
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
       
        var result = {}
        courseService.search('', null, function (err, course) {
            if (!err) {
                result.courseList = course.list;
                subjectService.search('', null, function (err, subject) {
                   if(!err){
                    result.subjectList = subject.list;
                    var res = new Response(err, result);
                                        response.json(res);
                    
                
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
        if(!body.examTime){
            result.inputerror.examTime = "Exam Time is required";
            pass = false;
        }
        if(!body.examDate){
            result.inputerror.examDate = "Exam Date is required";
            pass = false;
        }
        if(!body.subjectId){
            result.inputerror.subjectId = "Subject Name is required";
            pass = false;
        }
        if(!body.courseId){
            result.inputerror.courseId = "Course Name is required";
            pass = false;
        }
        if(!body.semester){
            result.inputerror.semester = "Semester is required";
            pass = false;
        }
        if(pass==false){
            callback(pass,result)
        }else{
            callback(pass)
        }
    }

    /**
     * Returns TimeTable bean populated from request parameters. 
     */
    getBean(request){
        var timeTable = new TimeTable();
        timeTable.populateRequest(request.body)
        console.log("getbean timetablectl")
        return timeTable;
    };
    /**
     * Returns service of this controller.
     */
     getService() {
        return this.service;
    };
}

module.exports = TimeTableCtl;