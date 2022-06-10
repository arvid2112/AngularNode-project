var BaseBean = require("../bean/BaseBean");
var DataUtility = require("../utility/DataUtility");

class User extends BaseBean{

    constructor(){
        super();
        this.firstName = "";
        this.lastName = "";
        this.login = "";
        this.password = "";
        this.dob = "";
        this.mobileNo = "";
        this.roleId = 0;
        this.roleName = "";
        this.unsuccessfulLogin = 0;
        this.gender = '';
        this.lastLogin = '';
        this.userLock = '';
        this.registeredIp = "";
        this.lastLoginIp = "";
        this.picName="";
    };
    /**
       * Set populateResult into bean.
       * @param {*} res 
       */
      populateResult(res){
        super.populateResult(res)
        this.firstName = res.FIRST_NAME;
        this.lastName = res.LAST_NAME;
        this.login = res.LOGIN;
        this.password = res.PASSWORD;
        this.dob = DataUtility.formatDate(res.DOB);
        this.mobileNo = res.MOBILE_NO;
        this.roleId = res.ROLE_ID;
        this.roleName = res.ROLE_NAME;
        this.unsuccessfulLogin = res.UNSUCCESSFUL_LOGIN;
        this.gender = res.GENDER;
        this.lastLogin = res.LAST_LOGIN;
        this.userLock = res.USER_LOCK;
        this.registeredIp = res.REGISTERED_IP;
        this.lastLoginIp = res.LAST_LOGIN_IP;
        this.picName = res.PIC_NAME;
      };
      /**
       * Get request data from body.
       * @param {*} body 
       */
      populateRequest(body){
        super.populateRequest(body);
        if (body.firstName) {
            this.firstName = body.firstName;
        }
        if (body.lastName) {
            this.lastName = body.lastName;
        }
        if (body.login) {
            this.login = body.login;
        }
        if (body.password) {
            this.password = body.password;
        }
        if (body.dob) {
            this.dob = body.dob;
        }
        if (body.mobileNo) {
            this.mobileNo = body.mobileNo;
        }
        if (body.roleId) {
            this.roleId = body.roleId;
        }
        if (body.roleName) {
            this.roleName = body.roleName;
        }
        if (body.unsuccessfulLogin) {
            this.unsuccessfulLogin = body.unsuccessfulLogin;
        }
        if (body.gender) {
            this.gender = body.gender;
        }
        if (body.lastLogin) {
            this.lastLogin = body.lastLogin;
        }
        if (body.userLock) {
            this.userLock = body.userLock;
        }
        if (body.registeredIp) {
            this.registeredIp = body.registeredIp;
        }
        if (body.lastLoginIp) {
            this.lastLoginIp = body.lastLoginIp;
        }
        if(body.picName){
            this.picName = body.picName;
        }
        if (body.size) {
            this.size = body.size;
        }
        if (body.pageNo) {
            this.pageNo = body.pageNo;
        }
      };
}

module.exports = User;