var User = require("../bean/User");
var BaseService = new require("./BaseService");
var RoleService = new require("./RoleService");
var EmailService = require('../utility/EmailService');
var MailMessage = require('../utility/MailMessage');
var EmailBuilder = require('../utility/EmailBuilder');
const ServiceLocator = require("./ServiceLocator");

class UserService extends BaseService{
    
    /**
     *Find user by primary key id and return User Object.
     * @param {*} id 
     * @param {*} callback 
     * @param {*} ctx 
     */
    findByPk(id, callback, ctx){
        var sql = "SELECT * FROM st_user WHERE ID= ?";
        var params = [id];
        super.executeSQLForObject(sql, params, new User(), function (err, bean){
            callback(err, bean);
        });
    };
    /**
     * Find user by login id
     * @param {*} login 
     * @param {*} callback 
     * @param {*} ctx 
     */
    findByLogin(login, callback, ctx){
        var sql = "SELECT * FROM st_user WHERE LOGIN = ?";
        var params = [login];
        super.executeSQLForObject(sql, params, new User(), function(err, bean){
            if (bean == undefined) {
                callback("Record Not Found");
            }
            else {
                callback(err, bean);
            }
        });
    };
    /**
     * Authenticate login and password and return result.
     * @param {*} user 
     * @param {*} callback 
     * @param {*} ctx 
     */
    authenticate(user, callback, ctx){
        var sql = "SELECT * FROM st_user WHERE LOGIN=? and PASSWORD=?";
        var params = [user.login, user.password];
        super.executeSQLForObject(sql, params, new User(), function (err, bean){
            if (err){
                callback("Invalid ID/Password");
            }
            else{
                 callback(err, bean);
            }
        });
    };
    /**
     * Search user by FirstName,LastName,Login,MobileNo,DOB
     * Returns User bean
     * @param {*} user 
     * @param {*} callback 
     */
    search(user, pageNo, callback){
        var sql = "SELECT * FROM st_user where 1=1";
        if(user.firstName){
            sql += " and FIRST_NAME like '" + user.firstName + "%'";
        }
        
        if(user.lastName){
            sql += " and LAST_NAME like '" + user.lastName + "%'";
        }
        if(user.login){
            sql += " and LOGIN like '" + user.login + "%'";
        }
        if(user.mobileNo){
            sql += " and MOBILE_NO = '" + user.mobileNo + "'";
        }
        if(user.dob){
            sql += " and DOB = '" + user.dob + "'";
        }
        if (user.roleId) {
            sql += " AND ROLE_ID = " + user.roleId;
        }
        if(user.roleName){
            sql += " and ROLE_NAME like '" + user.roleName + "%'";
        }
        super.executeSQLForList(sql, { "pageNo": pageNo }, new User(), function(err, list){
            callback(err, list);
        });
    }
        /**
     * Add a record and returns primary key.
     * @param {*} user 
     * @param {*} callback 
     * @param {*} ctx 
     */
    // add(user, callback, ctx){
    //     var sql = "INSERT INTO st_user (CREATED_DATETIME,MODIFIED_DATETIME,FIRST_NAME,LAST_NAME,LOGIN,PASSWORD,DOB,MOBILE_NO,ROLE_NAME,GENDER) "
    //     + " VALUES (NOW(),NOW(),?,?,?,?,?,?,?,?)";
    //     var params = [user.firstName, user.lastName, user.login,
    //         user.password, user.dob, user.mobileNo, user.roleName, user.gender];
    //         super.executeSQL(sql, params, function (err, result){
    //             if (err){
    //                 callback(err);
    //             }else{
    //                 var pk = result.insertId;
    //                 var roleService = new RoleService();
    //                 roleService.findByPk(user.roleId, function(rerr, role){
    //                     if(!rerr){
    //                         var updateSql = "UPDATE st_user SET role_name = '" + role.name + "' WHERE ID = " + pk;
    //                         roleService.executeSQL(updateSql, null, function (rerr, rresult){ });
    //                     }
    //                 }, ctx);
    //                 callback(err, pk);
    //             }
    //         });
    // };
    add(user, callback) {
        var sql = "SELECT * FROM st_user WHERE LOGIN = ? ";
        var params = [user.login];

        super.executeSQLForObject(sql, params, new User(), function (err, data) {
            if (data == undefined) {
                var roleService = new RoleService();
                roleService.findByPk(user.roleId, function (err, role) {
                    if (err) {
                        callback(err);
                    }
                    else {
                        var sql = "INSERT INTO st_user (FIRST_NAME,LAST_NAME,LOGIN,PASSWORD,DOB,MOBILE_NO,ROLE_ID,ROLE_NAME,GENDER,REGISTERED_IP,CREATED_BY,CREATED_DATETIME) VALUES(?,?,?,?,?,?,?,?,?,?,?,NOW()) "
                        var params = [user.firstName, user.lastName, user.login, user.password, user.dob, user.mobileNo, user.roleId, role.name, user.gender, user.registeredIp, user.createdBy];
                        var baseService = new BaseService();
                        baseService.executeSQL(sql, params, function (err, result) {
                            if (err) {
                                callback(err);
                            }
                            else {
                                callback(err, result.insertId);
                            }
                        })
                    }

                });
            } else {
                var result = {};
                result.inputerror = {};
                result.inputerror.login = "";
                result.data = user;
                result.inputerror.login = "This login Id is taken"
                callback(result, err);
            }
        });
    };

    /**
     * Update record and return count.
     * @param {*} user 
     * @param {*} callback 
     * @param {*} ctx 
     */
    // update(user, callback, ctx){
    //     var sql = "UPDATE st_user SET MODIFIED_DATETIME = NOW(), FIRST_NAME=?,LAST_NAME=?,LOGIN=?,PASSWORD=?,DOB=?,MOBILE_NO=?,ROLE_NAME=?,GENDER=? WHERE ID=?"
    //     var params = [user.firstName, user.lastName, user.login,
    //     user.password, user.dob, user.mobileNo, user.roleName, user.gender, user.id];
    //     super.executeSQL(sql, params, function(err, result){
    //         if(err){
    //             callback(err);
    //         }else{
    //             callback(err, result.affectedRows);
    //         }
    //     });
    // }
    update(user, callback) {
        var roleService = new RoleService();
        roleService.findByPk(user.roleId, function (err, role) {
            if (err) {
                callback(err);
            }
            else {
                var sql = "UPDATE st_user SET FIRST_NAME=?,LAST_NAME=?,PASSWORD=?,DOB=?,MOBILE_NO=?,ROLE_ID=?,ROLE_NAME=?,GENDER=?,MODIFIED_BY=?,MODIFIED_DATETIME=NOW() WHERE ID= ? "
                var params = [user.firstName, user.lastName, user.password, user.dob, user.mobileNo, user.roleId, role.name, user.gender, user.modifiedBy, user.id];
                var baseService = new BaseService();
                baseService.executeSQL(sql, params, function (err, result) {
                    if (err) {
                        callback(err);

                    }
                    else {
                        callback(err, result.insertId);
                    }
                });

            }
        });
    }

    /**
  * Delete record and return user bean.
  * @param {*} id 
  * @param {*} callback 
  * @param {*} ctx 
  */
    delete(id, callback, ctx){
        super.delete(id, 'st_user', callback, ctx);
    }
    /**
     * Update user picture
     * @param {*} pic 
     * @param {*} callback 
     * @param {*} ctx 
     */
    updatePicture(pic, callback, ctx){
        var sql = "UPDATE st_user SET PIC_NAME=?, PIC_TYPE=?, PIC=? WHERE ID=?"
        var params = [pic.name, pic.type, pic.data, pic.id];
        super.executeSQL(sql, params, function(err, result){
            if(err){
                callback(err);
            }else{
                callback(err, result.affectedRows);
            }
        });
    }
    /**
     * Get the picture of User
     * 
     * @param {*} id Primary key 
     * @param {*} callback 
     * @param {*} ctx User Context
     */
    getPicture(id, callback, ctx){
        var sql = "SELECT PIC_NAME, PIC_TYPE, PIC FROM st_user WHERE ID=?";
        var params = [id];
        super.executeSQL(sql, params, function(err, result){
            if(err){
                callback(err);
            }else{
                //Check if record is found and name of picture is not null
                if(result[0] && result[0].PIC_NAME){
                    var pic = {
                        "id": id,
                        "name": result[0].PIC_NAME,
                        "type": result[0].PIC_TYPE,
                        "data": result[0].PIC
                    }
                    callback(err, pic);
                }else{
                    callback('No picture');
                }
            }
        });
    }

    register(user, callback) {
        this.add(user, function (err, pk) {
            if (err) {
                callback(err)
            }
            else {
                var map = {
                    login: user.login,
                    password: user.password,
                    firstName: user.firstName,
                    lastName: user.lastName
                };

                var msg = EmailBuilder.getSignUpMessage(map)
                msg.to = user.login;

                var ser = new EmailService()
                ser.sendEmail(msg, function (err, result) {
                    if (err) {
                        callback(err);
                    } else {
                        callback(err, result);
                    }
                });

            }
        })
    }

    forgetPassword(form, callback) {
        this.findByLogin(form.login, function (err, user) {
            if (err) {
                callback(err);
            }
            else {
                var map = {
                    login: user.login,
                    password: form.password,
                    firstName: user.firstName,
                    lastName: user.lastName
                };

                var msg = EmailBuilder.getForgetPasswordMessage(map);
                msg.to = user.login;

                var ser = new EmailService()
                ser.sendEmail(msg, function (err, result) {
                    if (err) {
                        callback(err);
                    } else {
                        callback(err, result);
                    }
                });

            }
        })
    }
    /**
     * Change user password
     * 
     * @param {*} user 
     * @param {*} callback 
     * @param {*} ctx 
     */
//     changePassword(form, callback, ctx){
//         var self = this;
//         self.findByPk(form.id, function(err, user){
//             if(form.oldPassword == user.password){
//                 var sql = "UPDATE st_user SET PASSWORD=? WHERE id=?";
//                 var params = [form.password, form.id];
//                 self.executeSQl(sql, params, function(err, result){
//                     if(err){
//                         callback(err);
//                     } else{
//                         callback(err, result.affectedRows);
//                         //send Mail
//                         var m = {
//                             login: user.login,
//                             password: form.password,
//                             firstName: user.firstName,
//                             lastName: user.lastName
//                         };
//                         var msg = EmailBuilder.getChangePasswordMessage(m);
//                         msg.to = user.login;

//                         var ser = new EmailService()
//                         ser.sendEmail(msg, function(err, result){
//                             if(err){
//                                 console.log(err);
//                             }
//                         });
//                     }
//                 });
//             }else{
//                 callback("current password doesn not match");
//             }
//         });
//     }
// }

// changePassword(form, callback) {
//     this.findByPk(form.id, function (err, user) {
//         if (err) {
//             callback(err);
//         } else {
//             if (form.oldPassword == user.password) {
//                 if (form.password == form.confirmPassword) {
//                     var sql = "UPDATE st_user SET PASSWORD=? WHERE ID=?";
//                     var params = [form.password, form.id];
//                     var baseService = new BaseService();
//                     baseService.executeSQL(sql, params, function (err, result) {
//                         if (err) {
//                             callback(err)
//                         }
//                         else {
//                             //callback
//                             //mail
//                             var mail = {
//                                 login: user.login,
//                                 password: form.password,
//                                 firstName: user.firstName,
//                                 lastName: user.lastName
//                             };

//                             var msg = EmailBuilder.getChangePasswordMessage(mail);
//                             msg.to = user.login;

//                             var ser = new EmailService()
//                             ser.sendEmail(msg, function (err, result) {
//                                 if (err) {
//                                     callback(err)
//                                 }
//                             });
//                         }
//                         callback(result);
//                     })
//                 }else {
//                     callback("Passwords do not match");
//                 }
//             } else {
//                 callback("Password is incorrect");
//             }

//         }
//     })
// }
changePassword(form, callback, ctx) {
    var self = this;
    self.findByPk(form.id, function (err, user) {
        if (form.oldPassword == user.password) {
            var sql = "UPDATE st_user SET PASSWORD=? WHERE id=?";
            var params = [form.password, form.id];
            self.executeSQL(sql, params, function (err, result) {
                if (err) {
                    callback(err);
                } else {
                    callback(err, result.affectedRows);
                    //Send email
                    var m = {
                        login: user.login,
                        password: form.password,
                        firstName: user.firstName,
                        lastName: user.lastName
                    };

                    var msg = EmailBuilder.getChangePasswordMessage(m);
                    msg.to = user.login;
                    
                    var ser = new EmailService()
                    ser.sendEmail(msg, function (err, result) {
                        if (err) {
                            console.log(err);
                        }
                    });
                }
            });
        } else {
            callback("Current password does not match");
        }
    });
}


}
module.exports = UserService;