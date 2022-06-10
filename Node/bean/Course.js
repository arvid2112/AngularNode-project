var BaseBean = require('../bean/BaseBean');

class Course extends BaseBean{
    constructor(){
        super();
        this.courseName = '';
        this.courseDescription = '';
        this.courseDuration = '';
    };
    /**
       * Set populateResult into bean.
       * @param {*} res 
       */
    populateResult(res){
        this.id = res.ID;
        this.courseName = res.COURSE_NAME;
        this.courseDescription = res.COURSE_DESCRIPTION;
        this.courseDuration = res.COURSE_DURATION;
        this.createdBy = res.CREATED_BY;
        this.modifiedBy = res.MODIFIED_BY;
        this.createdDateTime = res.CREATED_DATETIME;
        this.modifiedDateTime = res.MODIFIED_DATETIME;
    };
    /**
       * Get request data from body.
       * @param {*} body 
       */
    populateRequest(body){
    if(body.id){
        this.id = body.id;
    }
    if(body.courseName){
        this.courseName = body.courseName;
    }
    if(body.courseDescription){
        this.courseDescription = body.courseDescription;
    }
    if(body.courseDuration){
        this.courseDuration = body.courseDuration;
    }
    if(body.size){
        this.size = body.size;
    }
    if(body.pageNo){
        this.pageNo = body.pageNo;
    }
    };
}
module.exports = Course;