var BaseBean = require('../bean/BaseBean');
var DataUtility = require('../utility/DataUtility');

class Student extends BaseBean{

    constructor(){
        super();
        this.firstName = '';
        this.lastName = '';
        this.dob = '';
        this.mobileNo = '';
        this.email = '';
        this.collegeId=0;
        this.collegeName = '';
        this.image = '';
    }
    /**
     * Set populateResult into bean.
     * @param {*} res 
     */
    populateResult(res){
        super.populateResult(res);
        this.firstName = res.FIRST_NAME;
        this.lastName = res.LAST_NAME;
        this.dob =  DataUtility.formatDate(res.DOB);
        this.mobileNo = res.MOBILE_NO;
        this.email = res.EMAIL;
        this.collegeId = res.COLLEGE_ID
        this.collegeName = res.COLLEGE_NAME;
        this.image = res.IMAGE;
        
    }
    /**
     * Get request data from body.
     * @param {*} body 
     */
    populateRequest(body){
        super.populateRequest(body);
        if(body.firstName){
            this.firstName = body.firstName;
        }
        if(body.lastName){
            this.lastName = body.lastName;
        }
        if(body.dob){
            this.dob = body.dob;
        }
        if(body.mobileNo){
            this.mobileNo = body.mobileNo;
        }
        if(body.email){
            this.email = body.email;
        }
        if(body.collegeName){
            this.collegeName = body.collegeName;
        }
        if (body.collegeId) {
            this.collegeId = body.collegeId;
        }
        if(body.image){
            this.image = body.image;
        }
        if (body.size) {
            this.size = body.size;
        }
        if (body.pageNo) {
            this.pageNo = body.pageNo;
        }
    }

}

module.exports = Student;