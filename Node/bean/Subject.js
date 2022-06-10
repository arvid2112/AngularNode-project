var BaseBean = require('../bean/BaseBean');

class Subject extends BaseBean{

    constructor(){
        super();
        this.subjectId = 0;
        this.subjectName = '';
        this.subjectDescription = '';
        this.courseId = 0;
        this.courseName = '';
    };

    /**
     * Set populateResult into bean.
     * @param {*} res 
     */
    populateResult(res){
        super.populateResult(res);
        this.subjectId = res.SUBJECT_ID;
        this.subjectName = res.SUBJECT_NAME;
        this.subjectDescription = res.SUBJECT_DESCRIPTION;
        this.courseId = res.COURSE_ID;
        this.courseName = res.COURSE_NAME;
   
    }
    /**
     * Get request data from body.
     * @param {*} body 
     */
    populateRequest(body){
        super.populateRequest(body);
        if (body.subjectId) {
            this.subjectId = body.subjectId;
        }
        if(body.subjectName){
            this.subjectName = body.subjectName;
        }
        if(body.subjectDescription){
            this.subjectDescription = body.subjectDescription;
        }
        if (body.courseId) {
            this.courseId = body.courseId;
        }
        if(body.courseName){
            this.courseName = body.courseName;
        }
        if (body.size) {
            this.size = body.size;
        }
        if (body.pageNo) {
            this.pageNo = body.pageNo;
        }
    }
}

module.exports = Subject;