var TimeTable = require('../bean/TimeTable');
var BaseService = require('../services/BaseService');
var SubjectService = require('../services/SubjectService');
var CourseService = require('../services/CourseService');

class TimeTableService extends BaseService{
    /**
     * Finds timetable by primary key id
     * returns TimeTable object
     */

    /**
    * Finds record by primary key id
    */
   findByPk(id, callback){
       var sql = "SELECT * FROM st_timetable WHERE ID =?";
       var params = [id];
       super.executeSQLForObject(sql, params, new TimeTable(), callback);
   };
   /**
    * Searches and returns list. Applies pagination as well.
     * 
     * @param {*} TimeTable 
     * @param {*} callback 
     */
    search(timetable, pageNo, callback){

        var sql = "SELECT * FROM st_timetable WHERE 1=1";

        if (timetable.semester) {
            sql += " AND SEMESTER = " + timetable.semester;
        }
        if (timetable.subjectId) {
            sql += " AND SUBJECT_ID ="+ timetable.subjectId;
        }
        // if (timetable.subjectName) {
        //     sql += " AND SUBJECT_NAME LIKE '" + timetable.subjectName + "%' ";
        // }
        if (timetable.courseId) {
            sql += " AND COURSE_ID ="+ timetable.courseId;
        }
        // if (timetable.courseName) {
        //     sql += " AND COURSE_NAME LIKE '" + timetable.courseName + "%' ";
        // }
        if (timetable.examTime) {
            sql += " AND EXAM_TIME LIKE '" + timetable.examTime + "%' ";
        }
        if (timetable.examDate) {
            sql += " AND EXAM_DATE  = '" + timetable.examDate + "' ";
        }
        super.executeSQLForList(sql, {"pageNo":pageNo}, new TimeTable(), callback);
    }
    /**
     * Adds a TimeTable and returns primary key
     * 
     * @param {*} timeTable 
     * @param {*} callback 
     * @param {*} ctx 
     */
    //  add(timeTable, callback){
    //     var sql = "INSERT INTO st_timetable (CREATED_DATETIME,MODIFIED_DATETIME,EXAM_TIME,EXAM_DATE,SUBJECT_NAME,COURSE_NAME,SEMESTER)"
    //     + "VALUES (NOW(),NOW(),?,?,?,?,?)";
    //     var params = [timeTable.examTime, timeTable.examDate, timeTable.subjectName, timeTable.courseName, timeTable.semester];
    //     super.executeSQL(sql, params, function(err, result){
    //         if(err){
    //             callback(err);
    //         }else{
    //             callback(err, result.insertId);
    //         }
    //     });
    // };

    add(timetable, callback) {
        var sql = "SELECT * FROM st_timetable WHERE COURSE_ID = ? AND SEMESTER = ? AND SUBJECT_ID = ?";
        var params = [timetable.courseId, timetable.semester, timetable.subjectId];
        super.executeSQLForObject(sql, params, new TimeTable(), function (err, result) {
            if (result == undefined) {
                var sql = "SELECT * FROM st_timetable WHERE COURSE_ID = ? , SEMESTER = ? ,EXAM_DATE = ?";
                var params = [timetable.courseId, timetable.semester, timetable.examDate];
                var baseService = new BaseService();
                baseService.executeSQLForObject(sql, params, new TimeTable(), function (err, result) {
                    if (result == undefined) {
                        var subjectService = new SubjectService();
                        subjectService.findByPk(timetable.subjectId, function (err, subject) {
                            if (err) {
                                callback(err);
                            } else {
                                timetable.subjectName = subject.subjectName;
                                var courseService = new CourseService();
                                courseService.findByPk(timetable.courseId, function (err, course) {
                                    if (err) {
                                        callback(err);
                                    } else {
                                        timetable.courseName = course.courseName;
                                        var baseService = new BaseService()
                                        var sql = "INSERT INTO st_timetable (EXAM_TIME,EXAM_DATE,SUBJECT_ID,SUBJECT_NAME,COURSE_ID,COURSE_NAME,SEMESTER,CREATED_BY,CREATED_DATETIME) VALUES (?,?,?,?,?,?,?,?,NOW()) "
                                        var params = [timetable.examTime, timetable.examDate, timetable.subjectId, timetable.subjectName, timetable.courseId, timetable.courseName, timetable.semester, timetable.createdBy];
                                        baseService.executeSQL(sql, params, function (err, result) {
                                            if (err) {
                                                callback(err);
                                            }
                                            else {
                                                callback(err, result.insertId);
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    } else {
                        callback(result);
                    }
                })
            } else {
                result.message = "This record already exists";
                callback(result);
            }
        })
    };

    // add(timetable, callback){
    //     var sql = "SELECT * FROM st_timetable WHERE SEMESTER = ?";
    //             var params = [timetable.semester];
                
                            
    //                         super.executeSQLForObject(sql, params, new TimeTable(), function (err, result) {
    //                         var subjectService = new SubjectService();
    //                         subjectService.findByPk(timetable.subjectId, function (err, subject) {
    //                         if (err) {
    //                             callback(err);
    //                             }
    //                         else {
    //                               timetable.subjectName = subject.subjectName;
    //                               var courseService = new CourseService();
    //                         courseService.findByPk(timetable.courseId, function (err, course) {
    //                         if (err) {
    //                            callback(err);
    //                         }
    //                         else {
    //                          timetable.courseName = course.courseName;
    //                         if (result == undefined) {
    //                         var sql = "INSERT INTO st_timetable (EXAM_TIME,EXAM_DATE,SUBJECT_ID,SUBJECT_NAME,COURSE_ID,COURSE_NAME,SEMESTER,CREATED_BY,CREATED_DATETIME)" + "VALUES (?,?,?,?,?,?,?,?,NOW())"
    //                         var params = [timetable.examTime, timetable.examDate, timetable.subjectId, timetable.subjectName, timetable.courseId, timetable.courseName, timetable.semester, timetable.createdBy];
    //                         var baseService = new BaseService()
                            
    //                         baseService.executeSQL(sql, params, function (err, result) {
    //                         if (err) {
    //                             callback(err);
    //                             }
    //                         else {
    //                              callback(err, result.insertId);
    //                              }
    //                         });
    //                     };
    //                     };
    //                     });
    //                     };
    //                     });
    //                     });
    //                     };

    /**
     * Updates a timeTable 
     * @param {*} timeTable 
     * @param {*} callback 
     * @param {*} ctx 
     */
    // update(timeTable, callback){
    //     var sql = "UPDATE st_timetable SET MODIFIED_DATETIME = NOW(),EXAM_TIME=?,EXAM_DATE=?,SUBJECT_NAME=?,COURSE_NAME=?,SEMESTER=? WHERE ID=?"
    //     var params = [timeTable.examTime, timeTable.examDate, timeTable.subjectName, timeTable.courseName, timeTable.semester];
    //     super.executeSQL(sql, params, function(err, result){
    //         if(err){
    //             callback(err);
    //         }else{
    //             callback(err, result.affectedRows);
    //         }
    //     });
    // }
    update(timetable, callback) {
        var sql = "SELECT * FROM st_timetable WHERE COURSE_ID = ? AND SEMESTER = ? AND SUBJECT_ID = ?";
        var params = [timetable.courseId, timetable.semester, timetable.subjectId];
        super.executeSQLForObject(sql, params, new TimeTable(), function (err, bean1) {
            if (bean1 == undefined || bean1.id == timetable.id) {
                var sql = "SELECT * FROM st_timetable WHERE COURSE_ID = ? AND SEMESTER = ? AND EXAM_DATE = ?";
                var params = [timetable.courseId, timetable.semester, timetable.examDate];
                var baseService = new BaseService();
                baseService.executeSQLForObject(sql, params, new TimeTable(), function (err, bean2) {
                    if (bean2 == undefined || bean2.id == timetable.id) {
                        var subjectService = new SubjectService();
                        subjectService.findByPk(timetable.subjectId, function (err, subject) {
                            if (err) {
                                callback(err);
                            } else {
                                timetable.subjectName = subject.subjectName;
                                var courseService = new CourseService();
                                courseService.findByPk(timetable.courseId, function (err, course) {
                                    if (err) {
                                        callback(err);
                                    } else {
                                        timetable.courseName = course.courseName;
                                        var baseService = new BaseService()
                                        var sql = "UPDATE st_timetable SET EXAM_TIME=?,EXAM_DATE=?,SUBJECT_ID=?,SUBJECT_NAME=?,COURSE_ID=?,COURSE_NAME=?,SEMESTER=?,MODIFIED_BY=?,MODIFIED_DATETIME=NOW() WHERE ID=? "
                                        var params = [timetable.examTime, timetable.examDate, timetable.subjectId, timetable.subjectName, timetable.courseId, timetable.courseName, timetable.semester, timetable.modifiedBy, timetable.id];
                                        baseService.executeSQL(sql, params, function (err, result) {
                                            if (err) {
                                                callback(err);
                                            }
                                            else {
                                                callback(err, result.insertId);
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    } else {
                        callback(bean2);
                    }
                })
            } else {
                callback(bean1);
            }
        })
    }

    /**
     * Delete a TimeTable and return deleted bean
     * @param {*} id 
     * @param {*} callback 
     * @param {*} ctx 
     */
    delete(id, callback){
        super.delete(id, 'st_timetable', callback);
    }
}
//Export TimeTable service
module.exports = TimeTableService;