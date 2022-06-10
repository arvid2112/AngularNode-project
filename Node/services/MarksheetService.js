var Marksheet = require("../bean/Marksheet");
var BaseService = require("./BaseService");
var StudentService = require("./StudentService");

const CollegeService = require("./CollegeService");

class MarksheetService extends BaseService {

    /**
     * Finds marksheet by primary key id
     */
    findByPk(id, callback, ctx) {
        var sql = "SELECT * FROM st_marksheet WHERE ID= ?";
        var params = [id];
        super.executeSQLForObject(sql, params, new Marksheet(), callback);
    };

    /**
     * Searches and returns list. Applies pagination as well.
     */
    search(marksheet, pageNo, callback) {

        var sql = "SELECT * FROM st_marksheet where 1=1 ";
        if (marksheet.rollNo) {
            sql += " and ROll_NO like '" + marksheet.rollNo + "%'";
        }
        if (marksheet.studentId) {
            sql += " and STUDENT_ID = '" + marksheet.studentId + "'";
        }
        if (marksheet.name) {
            sql += " and NAME like '" + marksheet.name + "%'";
        }

        super.executeSQLForList(sql, { "pageNo": pageNo }, new Marksheet(), callback);

    }


    getMarksheet(rollNo, callback) {
        var sql = "SELECT * FROM st_marksheet WHERE ROLL_NO = ?";
        var params = [rollNo];
        super.executeSQLForObject(sql, params, new Marksheet(), function (err, marksheet) {
            var result = {};
            if (err) {
                callback(err);
            }
            else if (marksheet != undefined) {
                result.marksheet = marksheet;
                var studentService = new StudentService();
                studentService.findByPk(marksheet.studentId, function (err, student) {
                    if (err) {
                        callback(err);
                    }
                    else if (student != undefined) {
                        result.student = student;
                        var collegeService = new CollegeService();
                        collegeService.findByPk(student.collegeId, function (err, college) {
                            if (err) {
                                callback(err)
                            }
                            else if (college != undefined) {
                                result.college = college;
                                err = undefined
                                callback(err,result);

                            } else {
                                callback("record Not Found")
                            }
                        });

                    } else {
                        callback("Record Not Found");
                    }
                })
            }
            else {
                callback("Record Not Found");
            }
        });
    }

    updateStudentName(marksheetId, studentId) {
        var sService = new StudentService();
        sService.findByPk(studentId, function (err, std) {
            if (err) {
                console.log("updating student name", err);
                return;
            }
            var name = '' + std.firstName + ' ' + std.lastName;
            var upateSql = "UPDATE st_marksheet SET name  =  ? WHERE ID = ? ";
            var params = [name, marksheetId];
            sService.executeSQL(upateSql, params, function (sErr, sResult) {
                console.log(sErr);
            });
        });
    }

    /**
     * Adds a record and returns primary key
     * @param {*} marksheet 
     * @param {*} callback 
     * @param {*} ctx 
     */
    // add(marksheet, callback, ctx) {
    //     var self = this; 
    //     var sql = "INSERT INTO st_marksheet (CREATED_DATETIME,MODIFIED_DATETIME,ROLL_NO,STUDENT_ID,NAME,PHYSICS,CHEMISTRY,MATHS) "
    //         + " VALUES (NOW(),NOW(),?,?,?,?,?,?)";
    //     var params = [marksheet.rollNo, marksheet.studentId,
    //     marksheet.name, marksheet.physics, marksheet.chemistry, marksheet.maths];
    //     super.executeSQL(sql, params, function (err, result) {
    //         if (err) {
    //             callback(err);
    //         } else {
    //             var pk = result.insertId;
    //             console.log('marksheet.studentId---', marksheet.studentId);
    //             self.updateStudentName(pk, marksheet.studentId);
    //             callback(err, pk);
    //         }
    //     });
    // };

    add(marksheet, callback) {
        var sql = "SELECT * FROM st_marksheet WHERE ROLL_NO = ?";
        var params = [marksheet.rollNo];
        super.executeSQLForObject(sql, params, new Marksheet(), function (err, bean) {
            if (bean == undefined) {
                var studentService = new StudentService();
                studentService.findByPk(marksheet.studentId, function (err, student) {
                    if (err) {
                        callback(err)
                    } else {
                        marksheet.name = student.firstName + ' ' + student.lastName;
                        var sql = "INSERT INTO st_marksheet (ROLL_NO,STUDENT_ID,NAME,PHYSICS,CHEMISTRY,MATHS,CREATED_BY,CREATED_DATETIME ) VALUES (?,?,?,?,?,?,?,NOW())";
                        var params = [marksheet.rollNo, marksheet.studentId, marksheet.name, marksheet.physics, marksheet.chemistry, marksheet.maths, marksheet.createdBy];
                        var baseService = new BaseService();
                        baseService.executeSQL(sql, params, function (err, result) {
                            if (err) {
                                callback(err);
                            } else {
                                callback(err, result.insertId);
                            }

                        });
                    }
                });
            } else {
                bean.message = "This record already exists";
                callback(bean);
            }

        });
    };
    /**
     * Updates a record and returns count
     * @param {*} marksheet 
     * @param {*} callback 
     * @param {*} ctx 
     */
    update(marksheet, callback, ctx) {
        var self = this; 
        var sql = "UPDATE st_marksheet SET MODIFIED_DATETIME = NOW(), ROLL_NO=?,STUDENT_ID=?,NAME=?,PHYSICS=?,CHEMISTRY=?,MATHS=?  WHERE ID=?"
        var params = [marksheet.rollNo, marksheet.studentId,
        marksheet.name, marksheet.physics, marksheet.chemistry, marksheet.maths, marksheet.id];
        super.executeSQL(sql, params, function (err, result) {
            if (err) {
                callback(err);
            } else {
                var affectedRows = result.affectedRows;
                self.updateStudentName(marksheet.id, marksheet.studentId);
                callback(err, affectedRows);
            }
        });
    }

    /**
     *  Delete record and return marksheet bean
     * @param {*} id 
     * @param {*} callback 
     * @param {*} ctx 
     */

    
    meritList(callback) {
        var sql = "SELECT *,(PHYSICS+CHEMISTRY+MATHS) AS TOTAL FROM st_marksheet WHERE PHYSICS >=35 AND CHEMISTRY >=35 AND MATHS >=35 ORDER BY TOTAL DESC ";
        super.executeSQLForList(sql, { "pageNo": 1 }, new Marksheet(), callback);
    }
    delete(id, callback) {
        super.delete(id, 'st_marksheet', callback);
    }

}
module.exports = MarksheetService;

