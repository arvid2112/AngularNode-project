var BaseCtl = require("../controller/BaseCtl");
var Marksheet = require("../bean/Marksheet");
var ServiceLocator = require("../services/ServiceLocator");
var DataValidator = require('../utility/DataValidator');
var Response = require('../bean/Response');

/**
 * Contains Marksheet REST APIs
 */

class MarksheetCtl extends BaseCtl {
    constructor() {
        super();
        this.service = ServiceLocator.getMarksheetService();
    }

    /**
     * Returns preload data. 
     * 
     * @param {*} request
     * @param {*} response
     */
    preload(request, response) {
        console.log('Marksheet preload');
        var stdService = ServiceLocator.getStudentService();
        stdService.search('', null, function (err, student) {
            var result = {};
            result.studentList = student.list;
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

        if(!body.rollNo){
            result.inputerror.rollNo = "Roll No is Required";
            pass = false;
        } else if(!DataValidator.isRollNo(body.rollNo)){
            result.inputerror.rollNo = "Roll No is invalid";
            pass = false;
        }
        if(!body.studentId){
            result.inputerror.studentId = "Student Name is Required";
            pass = false;
        }
        if(!body.physics){
            result.inputerror.physics = "Physics marks are required";
            pass = false;
        } else if(!DataValidator.isMarks(body.physics)){
            result.inputerror.physics = "Marks must be between 0 to 100";
            pass = false;
        }
        if(!body.chemistry){
            result.inputerror.chemistry = "Chemistry marks are required"
            pass = false;
        } else if(!DataValidator.isMarks(body.chemistry)){
            result.inputerror.chemistry = "Marks must be between 0 to 100";
            pass = false;
        }
        if(!body.maths){
            result.inputerror.maths = "Maths marks are required"
            pass = false;
        } else if(!DataValidator.isMarks(body.maths)){
            result.inputerror.maths = "Marks must be between 0 to 100";
            pass = false;
        }

        if(pass==false){
            callback(pass,result)
        }else {
            callback(pass)
        }
    }

    meritList(request,response){
        this.service.meritList(function(err,result){
            var resp = new Response(err,result);
            response.json(resp);
        })
    }

    getMarksheet(request,response){
        var rollNo =  request.body.rollNo
         this.service.getMarksheet(rollNo,function(err,result){
             var resp = new Response(err,result);
             response.json(resp);
             
         })
     }
    /**     
     * Returns Marksheet bean populated from request parameters.
     */
    getBean(request) {
        var marksheet = new Marksheet();
        marksheet.populateRequest(request.body);
        return marksheet;
    };

    /**
     * Returns service of this controller.
     */
    getService() {
        return this.service;
    };
}

module.exports = MarksheetCtl;
