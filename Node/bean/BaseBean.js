/**
 * Base bean contains generic attributes for all beans.
 * All beans must inherit this class
 */
 class BaseBean {
    constructor() {
        this.id = '';
        this.createdBy = '';
        this.modifiedBy = '';
        this.createdDateTime = '';
        this.modifiedDateTime = '';
    };
    populateResult(res){
        this.id= res.ID;
        this.createdBy = res.CREATED_BY;
        this.modifiedBy = res.MODIFIED_BY;
        this.createdDatetime = res.CREATED_DATETIME;
        this.modifiedDatetime= res.MODIFIED_DATETIME;
    }
    populateRequest(body){
        if(body.id){
            this.id=body.id;
          }
        if(body.createdBy){
            this.createdBy=body.createdBy;
        }
        if(body.modifiedBy){
            this.modifiedBy=body.modifiedBy;
        }
        if(body.createdDatetime){
            this.createdDatetime=body.createdDatetime;
        }
        if(body.modifiedDatetime){
            this.modifiedDatetime=body.modifiedDatetime;
        }
    }
}

module.exports = BaseBean;