var BaseBean = require('../bean/BaseBean');

class Role extends BaseBean{
    constructor(){
        super();
        this.name = '';
        this.description = '';
    };
    /**
   * Set populateResult into bean.
   * @param {*} res 
   */
    populateResult(res){
        super.populateResult(res);
        this.name = res.NAME;
        this.description = res.DESCRIPTION;

    }
    /**
       * Get request data from body.
       * @param {*} body 
       */
    populateRequest(body){
        super.populateRequest(body);
        if(body.name){
            this.name = body.name;
        }
        if(body.description){
            this.description = body.description;
        }
        if(body.size){
            this.size = body.size;
        }
        if(body.pageNo){
            this.pageNo = body.pageNo;
        }
    };
}
module.exports = Role;