var Role = require("../bean/Role");
var BaseService = require("./BaseService");

class RoleService extends BaseService {
    /**
     * Finds role by primary key id
     * 
     * @param {*} id 
     * @param {*} callback 
     * @param {*} ctx 
     */
    findByPk(id, callback, ctx){
        var sql = "SELECT * FROM st_role WHERE ID= ?";
        var params = [id];
        super.executeSQLForObject(sql, params, new Role(), callback);
    };
    /**
     * Search role by Name
     * 
     * @param {*} role 
     * @param {*} callback 
     */
    search(role, pageNo, callback, ctx){
        var sql = "SELECT * FROM st_role WHERE 1=1";

        if(role.name){
            sql += " and NAME like '" + role.name + "%'";
        }

        if(role.description){
            sql += " and DESCRIPTION like '" + role.description + "%'";
        }
        super.executeSQLForList(sql, {"pageNo": pageNo}, new Role(), callback);
    }
    /**
     * Adds a record and returns primary key
     * 
     * @param {*} role 
     * @param {*} callback 
     * @param {*} ctx 
     */
    // add(role, callback, ctx){
    //     var sql = "INSERT INTO st_role (CREATED_DATETIME,MODIFIED_DATETIME,NAME,DESCRIPTION)"
    //     + "VALUES (NOW(),NOW(),?,?)";
    //     var params = [role.name, role.description];
    //     super.executeSQL(sql, params, function(err, result){
    //         if(err){
    //             callback(err);
    //         }else{
    //             callback(err, result.insertId);
    //         }
    //     });
    // };
    add(role, callback) {
        var sql = "SELECT * FROM st_role WHERE NAME =?";
        var params = [role.name];
        super.executeSQLForObject(sql, params, new Role(), function (err, result) {
            if (result == undefined) {
                var sql = "INSERT INTO st_role (NAME,DESCRIPTION,CREATED_BY,CREATED_DATETIME) VALUES (?,?,?,NOW())";
                var params = [role.name, role.description, role.createdBy];
                var serv = new BaseService();
                serv.executeSQL(sql, params, function (err, result) {
                    if (err) {
                        callback(err);
                    } else {
                        callback(err, result.insertId);
                    }
                });
            } else {
                result.message = "This record already exists";
                callback(result);
            }
        });

    }

    /**
     * Updates a record and returns count.
     * @param {*} role 
     * @param {*} callback 
     * @param {*} ctx 
     */
    update(role, callback, ctx){
        var sql = "UPDATE st_role SET NAME=?,DESCRIPTION=?,MODIFIED_BY=?,MODIFIED_DATETIME=NOW() WHERE ID=?";
        var params = [role.name, role.description, role.modifiedBy, role.id];
        super.executeSQL(sql, params, function(err, result){
            if(err){
                callback(err);
            }else{
                callback(err, result.affectedRows);
            }
        });
    }
    /**
     * Deletes record and return role bean.
     * @param {*} id 
     * @param {*} callback 
     * @param {*} ctx 
     */
    delete(id, callback, ctx){
        super.delete(id, 'st_role', callback, ctx);
    }
}
module.exports = RoleService;