var BaseBean = require('../bean/BaseBean');
var DataUtility = require("../utility/DataUtility");

class Faculty extends BaseBean{

    constructor(){
        super();
        this.firstName = "";
        this.lastName = "";
        this.email = "";
       // this.password = "";
        this.mobileNo = "";
        this.address = "";
        this.gender = "";
        this.collegeId = 0;
        this.collegeName = "";
        this.courseId = 0;
        this.courseName = "";
        this.subjectId = 0;
        this.subjectName = "";
        this.dob = "";
    };
    /**
       * Set populateResult into bean.
       * @param {*} res 
       */
    populateResult(res){
        super.populateResult(res);
        // this.id = res.ID;
        this.firstName = res.FIRST_NAME;
        this.lastName = res.LAST_NAME;
        this.email = res.EMAIL;
        //this.password = res.PASSWORD;
        this.mobileNo = res.MOBILE_NO;
        this.address = res.ADDRESS;
        this.gender = res.GENDER;
        this.collegeId = res.COLLEGE_ID;
        this.collegeName = res.COLLEGE_NAME;
        this.courseId = res.COURSE_ID;
        this.courseName = res.COURSE_NAME;
        this.subjectId = res.SUBJECT_ID;
        this.subjectName = res.SUBJECT_NAME;
        this.dob = DataUtility.formatDate(res.DOB);
    };
    /**
       * Get request data from body.
       * @param {*} body 
       */
    populateRequest(body){
        // if(body.id){
        //     this.id = body.id;
        // }
        super.populateRequest(body);
        if(body.firstName){
            this.firstName = body.firstName;
        }
        if(body.lastName){
            this.lastName = body.lastName;
        }
        if(body.email){
            this.email = body.email;
        }
        // if(body.password){
        //     this.password = body.password;
        // }
        if(body.mobileNo){
            this.mobileNo = body.mobileNo;
        }
        if(body.address){
            this.address = body.address;
        }
        if(body.gender){
            this.gender = body.gender;
        }
        if(body.collegeId){
            this.collegeId = body.collegeId;
        }
        if(body.collegeName){
            this.collegeName = body.collegeName;
        }
        if(body.courseId){
            this.courseId = body.courseId;
        }
        if(body.courseName){
            this.courseName = body.courseName;
        }
        if(body.subjectId){
            this.subjectId = body.subjectId;
        }
        if(body.subjectName){
            this.subjectName = body.subjectName;
        }
        if(body.dob){
            this.dob = body.dob;
        }
        if(body.size){
            this.size = body.size;
        }
        if(body.pageNo){
            this.pageNo = body.pageNo;
        }
    };
}

module.exports = Faculty;