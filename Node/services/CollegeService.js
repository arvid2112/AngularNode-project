var College = require("../bean/College");
var BaseService = require("./BaseService");
var Response = require('../bean/Response');

class CollegeService extends BaseService {

    /**
     * Finds college by primary key id
     * returns College object
     */

    /**
    * Finds record by primary key id
    */
    findByPk(id, callback, ctx) {
        var sql = "SELECT * FROM st_college WHERE ID= ?";
        var params = [id];
        super.executeSQLForObject(sql, params, new College(), callback);
    };

    /**
    * Searches and returns list. Applies pagination as well.
     * 
     * @param {*} college 
     * @param {*} callback 
     */
    search(college, pageNo, callback, ctx) {

        var sql = "SELECT * FROM st_college where 1=1 ";

        if (college.name) {
            sql += " and NAME like  '" + college.name + "%'";
        }
        if (college.city) {
            sql += "and CITY like '" + college.city + "%'";
        }
        if (college.phoneNo) {
            sql += "and PHONE_NO='" + college.phoneNo + "'";
        }
        if (college.address) {
            sql += " AND ADDRESS LIKE '" + college.address + "%' ";
        }
        if(college.state){
            sql += " AND STATE LIKE '"+ college.state + "%' ";
        }
        super.executeSQLForList(sql, { "pageNo": pageNo }, new College(), callback);

    }

    /**
     * Adds a college and returns primary key
     * 
     * @param {*} college 
     * @param {*} callback 
     * @param {*} ctx 
     */

    // add(college, callback, ctx) {
    //     var sql = "INSERT INTO st_college (CREATED_DATETIME,MODIFIED_DATETIME,NAME,ADDRESS,STATE,CITY,PHONE_NO) "
    //         + " VALUES (NOW(),NOW(),?,?,?,?,?)";
    //     var params = [college.name, college.address, college.state,
    //     college.city, college.phoneNo];
    //     super.executeSQL(sql, params, function (err, result) {
    //         if (err) {
    //             callback(err);
    //         } else {
    //             callback(err, result.insertId);
    //         }
    //     });
    // };

    add(college, callback) {
        var sql = "SELECT * FROM st_college WHERE NAME=?";
        var params = [college.name];
        super.executeSQLForObject(sql, params, new College(), function(err,result) {
            if(result==undefined){
                var sql = "INSERT INTO st_college(NAME,ADDRESS,STATE,CITY, PHONE_NO,CREATED_BY,CREATED_DATETIME) VALUE (?,?,?,?,?,?,NOW())";
                var serv=new BaseService();
                var params = [college.name, college.address, college.state, college.city, college.phoneNo, college.createdBy];
                serv.executeSQL(sql, params, function (err, result) {
                    if (err) {
                        callback(err);
                    } else {
                        callback(err, result.insertId);
                    } 
                });
            }else{   
                result.message = "This record already exists";
                callback(result);
            }
        });
    }
    /**
     * Updates a college 
     * @param {*} college 
     * @param {*} callback 
     * @param {*} ctx 
     */
    update(college, callback, ctx) {
        var sql = "UPDATE st_college SET NAME=?,ADDRESS=?,CITY=?,STATE=?,PHONE_NO=?,MODIFIED_BY=?,MODIFIED_DATETIME=NOW() WHERE ID=?";
        var params = [college.name, college.address, college.city, college.state, college.phoneNo, college.modifiedBy,college.id];
        console.log("college.name");
        super.executeSQL(sql, params, function (err, result) {
            if (err) {
                callback(err);
            } else {
                callback(err, result.affectedRows);
            }
        });
    }

    /**
     * Delete a college and return deleted bean
     * @param {*} id 
     * @param {*} callback 
     * @param {*} ctx 
     */
    delete(id, callback, ctx) {
        super.delete(id, 'st_college', callback, ctx);
    }
}

//Export college service
module.exports = CollegeService;

