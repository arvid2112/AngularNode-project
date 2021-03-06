var BaseBean = require('../bean/BaseBean');

class College extends BaseBean{

    constructor(){
        super();
        this.name = '';
        this.address = '';
        this.state = '';
        this.city = '';
        this.phoneNo = '';

    };

    /**
     * set populateResult into Bean.
     * @param {*} res
     */
    populateResult(res){
        super.populateResult(res);
        this.name = res.NAME;
        this.address = res.ADDRESS
        this.state = res.STATE
        this.city = res.CITY
        this.phoneNo = res.PHONE_NO 


    }
    /**
     * Get request data from body.
     * @param {*} body 
     */
     populateRequest(body) {
super.populateRequest(body);
        if (body.name) {
            this.name = body.name;
        }
        if (body.address) {
            this.address = body.address;
        }
        if (body.state) {
            this.state = body.state;
        }
        if (body.city) {
            this.city = body.city;
        }
        if (body.phoneNo) {
            this.phoneNo = body.phoneNo;
        }
        if (body.size) {
            this.size = body.size;
        }
        if (body.pageNo) {
            this.pageNo = body.pageNo;
        }
    }
    
}

module.exports = College;