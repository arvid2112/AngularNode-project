var Student = require('../bean/Student');
var BaseService = require('../services/BaseService');
var CollegeService = require('../services/CollegeService');

class StudentService extends BaseService{

    /**
     * Finds student by primary key id
     * returns Student object
     */

    /**
    * Finds record by primary key id
    */
   findByPk(id, callback){
       var sql = "SELECT * FROM st_student WHERE ID= ?";
       var params = [id];
       super.executeSQLForObject(sql, params, new Student(), callback);
   };
   /**
    * Searches and returns list. Applies pagination as well.
     * 
     * @param {*} student 
     * @param {*} callback 
     */
    search(student, pageNo, callback){
        var sql = "SELECT * FROM st_student WHERE 1=1";

        if(student.firstName){
            sql += " and FIRST_NAME like '" + student.firstName + "%'";
        }
        if(student.email){
            sql += " and EMAIL like '" + student.email + "%'";
        }
        if(student.lastName){
            sql += " AND LAST_NAME LIKE '"+student.lastName+"%' "; 
        }
        if(student.collegeId){
            sql += " AND COLLEGE_ID ="+student.collegeId;
        }
        super.executeSQLForList(sql, {"pageNo": pageNo}, new Student(), callback);
    }
    /**
     * Adds a student and returns primary key
     * 
     * @param {*} student 
     * @param {*} callback 
     * @param {*} ctx 
     */
    // add(student, callback){
    //     var sql = "INSERT INTO st_student (CREATED_DATETIME,MODIFIED_DATETIME,FIRST_NAME,LAST_NAME,DOB,MOBILE_NO,EMAIL,COLLEGE_ID)"
    //     + "VALUES (NOW(),NOW(),?,?,?,?,?,?)";
    //     var params = [student.firstName, student.lastName, student.dob, student.mobileNo, 
    //         student.email, student.collegeId];
    //         super.executeSQL(sql, params, function(err, result){
    //             if(err){
    //                 callback(err);
    //             }else{
    //                 callback(err, result.insertId);
    //             }
    //         });
    // };
    add(student, callback) {
        var sql = "SELECT * FROM st_student WHERE EMAIL=?";
        var params = [student.email];
        super.executeSQLForObject(sql,params,new Student(),function (err,result) {
            if(result==undefined){
                var collegeService = new CollegeService();
                collegeService.findByPk(student.collegeId,function (err,college) {
                    if(err){
                        callback(err);
                    }
                    else {
                        student.collegeName = college.name;
                        var sql = "INSERT INTO st_student (FIRST_NAME,LAST_NAME,DOB,MOBILE_NO,EMAIL,COLLEGE_ID,COLLEGE_NAME,CREATED_BY,CREATED_DATETIME) VALUES (?,?,?,?,?,?,?,?,NOW())"
                        var params = [student.firstName,student.lastName,student.dob,student.mobileNo,student.email,student.collegeId,student.collegeName,student.createdBy];
                        var baseService = new BaseService();
                        baseService.executeSQL(sql,params,function (err,result) {
                            if(err){
                                callback(err);
                            }
                            else{
                                callback(err,result.insertId);
                            }
                        })
                    }
                });
            } else {
                result.message = "This record already exists";
                callback(result);
            }
        })
    };

    /**
     * Updates a student 
     * @param {*} student
     * @param {*} callback 
     * @param {*} ctx 
     */
    // update(student, callback){
    //     var sql = "UPDATE st_student SET MODIFIED_DATETIME = NOW(),FIRST_NAME=?,LAST_NAME=?,DOB=?,MOBILE_NO=?,EMAIL=?,COLLEGE_NAME=? WHERE ID=?"
    //     var params= [student.firstName, student.lastName, student.dob, student.mobileNo, 
    //         student.email, student.collegeName, student.id];
    //         super.executeSQL(sql, params, function(err, result){
    //             if(err){
    //                 callback(err);
    //             }else{
    //                 callback(err, result.affectedRows);
    //             }
    //         });
    // }
    update(student,callback){
        var collegeService = new CollegeService();
                collegeService.findByPk(student.collegeId,function (err,college) {
                    if(err){
                        callback(err);
                    }
                    else {
                        student.collegeName = college.name;
                        var sql = "UPDATE st_student SET FIRST_NAME=?,LAST_NAME=?,DOB=?,MOBILE_NO=?,EMAIL=?,COLLEGE_ID=?,COLLEGE_NAME=?,MODIFIED_BY=?,MODIFIED_DATETIME=NOW() WHERE ID = ? "
                        var params = [student.firstName,student.lastName,student.dob,student.mobileNo,student.email,student.collegeId,student.collegeName,student.modifiedBy,student.id];
                        var baseService = new BaseService();
                        baseService.executeSQL(sql,params,function (err,result) {
                            if(err){
                                callback(err);
                            }
                            else{
                                callback(err,result.insertId);
                            }
                        });
                    }
                });
    };

    /**
     * Delete a student and return deleted bean
     * @param {*} id 
     * @param {*} callback 
     * @param {*} ctx 
     */
    delete(id, callback){
        super.delete(id, 'st_student', callback);
    }
}
//Export student service
module.exports = StudentService;