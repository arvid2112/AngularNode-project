var BaseCtl = require("../controller/BaseCtl");
var Course = require("../bean/Course");
var ServiceLocator = require("../services/ServiceLocator");

/**
 * Contains Course REST APIs
 */
class CourseCtl extends BaseCtl{
    constructor(){
        super();
        this.service = ServiceLocator.getCourseService();
    }
    /**
     * Returns preload data.
     * 
     * @param {*} request 
     * @param {*} response 
     */
     preload(request, response){
        var courseService = ServiceLocator.getCourseService();
        courseService.search('', null, function (err, result){
            response.json(result.list)
        })
    };

    // preload(request, response){
    //     var duration = [{First_Year: 'I'},{Second_Year : 'II'},
    //                     {Third_Year: 'III'},{Fourth_Year: 'IV'},
    //                     {Fifth_Year: 'V'},{Sixth_Year: 'VI'}]
    //     var semester = [{sem: 'First'},{sem:'Second'},{sem:'Third'},{sem:'Fourth'},
    //                     {sem:'Fifth'},{sem:'Sixth'},{sem:'Seventh'},{sem:'Eighth'},
    //                     {sem:'Ninth'},{sem:'Tenth'},{sem:'Eleventh'},{sem:'Tewelth'}]

    //     var data = {
    //         "durationList": duration,
    //         "semesterList": semester
    //     };
    //     response.status(200).json(data)
    // };
    //need to check preload myself

     /**
     * Returns Validate Data. 
     */
    validate(body,callback){
        var pass = true;
        var result = {};
        result.inputerror = {};
        if(!body.courseName){
            result.inputerror.courseName = "Course Name is required";
            pass = false;
        }
        if(!body.courseDescription){
            result.inputerror.courseDescription = "Course Description is required";
            pass = false;
        }
        if(!body.courseDuration){
            result.inputerror.courseDuration = "Course Duration is required";
            pass = false;
        }
        if(pass==false){
            callback(pass,result)
        }else{
            callback(pass)
        }
    }

     /**
     * Returns Course bean populated from request parameters. 
     */
    
     getBean(request){
         var course = new Course();
         course.populateRequest(request.body);
         return course;
     }
     /**
     * Returns service of this controller.
     */
    getService(){
        return this.service;
    }
}
module.exports = CourseCtl;