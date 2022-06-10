var BaseBean = require('../bean/BaseBean');
var DataUtility = require('../utility/DataUtility');

class TimeTable extends BaseBean{

    constructor(){
        super();
        this.examTime = '';
        this.examDate = '';
        this.subjectId = 0;
        this.subjectName = '';
        this.courseId = 0;
        this.courseName = '';
        this.semester = '';
    };
    /**
     * Set populateResult into bean.
     * @param {*} res 
     */
    populateResult(res){
        super.populateResult(res);
        this.examTime = res.EXAM_TIME;
        this.examDate = DataUtility.formatDate(res.EXAM_DATE);
        this.subjectId = res.SUBJECT_ID;
        this.subjectName = res.SUBJECT_NAME;
        this.courseId = res.COURSE_ID;
        this.courseName = res.COURSE_NAME;
        this.semester = res.SEMESTER;
    }
    /**
     * Get request data from body.
     * @param {*} body 
     */
     populateRequest(body) {
        super.populateRequest(body);
        if (body.examTime) {
            this.examTime = body.examTime;
        }
        if (body.examDate) {
            this.examDate = body.examDate;
        }
        if(body.subjectId){
            console.log("------------------------------------------value"+body.subjectId);
            
            this.subjectId = body.subjectId;
            console.log(this.subjectId);
        }
        if(body.subjectName){
            this.subjectName = body.subjectName;
        }
        if(body.courseId){
            this.courseId = body.courseId;
        }
        if(body.courseName){
            this.courseName = body.courseName;
        }
        if(body.semester){
            this.semester = body.semester;
        }
        if (body.size) {
            this.size = body.size;
        }
        if (body.pageNo) {
            this.pageNo = body.pageNo;
        }
    }

}
module.exports = TimeTable;