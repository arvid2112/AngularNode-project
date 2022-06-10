var BaseCtl = require("../controller/BaseCtl");
var College = require("../bean/College");
var ServiceLocator = require("../services/ServiceLocator");

/**
 * Contains College REST APIs
 */
class CollegeCtl extends BaseCtl {

    constructor() {
        super();
        this.service = ServiceLocator.getCollegeService();
    }
    /**
     * Returns preload data.
     * 
     * @param {*} request 
     * @param {*} response 
     */
     preload(request, response){
        var collegeService = ServiceLocator.getCollegeService();
        collegeService.search('', null, function (err, result){
            response.json(result.list)
        })
    };

    // preload(request, response) {
    //     var state = [{ name: 'Maharstra', code: 'MH' },
    //     { name: 'Madhya Pradesh', code: 'MP' },
    //     { name: 'Delhi', code: 'DL' }]
    //     var city = [{ name: 'Indore', code: 'IND', state: 'MP' },
    //     { name: 'Bhopal', code: 'BHO', state: 'MP' },
    //     { name: 'Mumbai', code: 'BOM', state: 'MH' },
    //     { name: 'Pune', code: 'PNQ', state: 'MH' },
    //     { name: 'Delhi', code: 'DEL', state: 'DL' }]

    //     var data = {
    //         "stateList": state,
    //         "cityList": city
    //     };
    //     response.status(200).json(data)
    // };

    /**
     * Returns Validate data. 
     */
     validate(body,callback){
        var pass = true;
        var result = {};
        result.inputerror = {};
        if(!body.name){
            result.inputerror.name = "College Name is required";
            pass= false;
        }
        if(!body.address){
            result.inputerror.address = "College Address is required";
            pass= false;
        }
        if(!body.city){
            result.inputerror.city = "College City is required";
            pass= false;
        }
        if(!body.state){
            result.inputerror.state = "College State is required";
            pass= false;
        }        
        if(!body.phoneNo){
            result.inputerror.phoneNo = "College PhoneNo is required";
            pass= false;
        }

        if(pass==false){
            callback(pass,result)
        }else {
            callback(pass)
        }
    }

    /**
     * Returns College bean populated from request parameters. 
     */
    getBean(request) {
        var college = new College();
        college.populateRequest(request.body);
        return college;
    };

    /**
     * Returns service of this controller.
     */
    getService() {
        return this.service;
    };
}

module.exports = CollegeCtl;
