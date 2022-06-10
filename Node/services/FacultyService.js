var Faculty = require('../bean/Faculty');
var BaseService = require('../services/BaseService');
var CollegeService = require('../services/CollegeService');
var CourseService = require('../services/CourseService');
var SubjectService = require('../services/SubjectService');

class FacultyService extends BaseService{

    /**
     * Finds faculty by primary key id
     * returns Faculty object
     */

    /**
    * Finds record by primary key id
    */
    findByPk(id, callback){
        var sql = "SELECT * FROM st_faculty WHERE ID =?";
        var params = [id];
        super.executeSQLForObject(sql, params, new Faculty(), callback);
    }
    /**
    * Searches and returns list. Applies pagination as well.
     * 
     * 
     * @param {*} Faculty 
     * @param {*} callback 
     */
    search(faculty, pageNo, callback){
        var sql = "SELECT * FROM st_faculty WHERE 1=1";

        if(faculty.firstName){
            sql += " and FIRST_NAME like '" + faculty.firstName + "%'";
        }
        
        if(faculty.collegeName){
            sql += " and COLLEGE_NAME like '" + faculty.collegeName + "%'";
        }
        
        if(faculty.courseName){
            sql += " and COURSE_NAME like '" + faculty.courseName + "%'";
        }
        if(faculty.email){
            sql += " and EMAIL like '" + faculty.email + "%'";
        }
        if(faculty.courseId){
            sql += " AND COURSE_ID ="+faculty.courseId;
        }
        if(faculty.collegeId){
            sql += " AND COLLEGE_ID ="+faculty.collegeId;
        }
        if(faculty.subjectId){
            sql += " AND SUBJECT_ID ="+faculty.subjectId;
        }
        super.executeSQLForList(sql, {"pageNo": pageNo}, new Faculty(), callback);
    }
    /**
     * Adds a faculty and returns primary key
     * 
     * @param {*} faculty 
     * @param {*} callback 
     * @param {*} ctx 
     */
    // add(faculty, callback){
    //     var sql = "INSERT INTO st_faculty (CREATED_DATETIME,MODIFIED_DATETIME,FIRST_NAME,LAST_NAME,EMAIL,PASSWORD,MOBILE_NO,ADDRESS,GENDER,COLLEGE_NAME,COURSE_NAME,SUBJECT_NAME,DOB)"
    //     + "VALUES (NOW(),NOW(),?,?,?,?,?,?,?,?,?,?,?)";
    //     var params = [faculty.firstName, faculty.lastName, faculty.email, faculty.password, faculty.mobileNo, faculty.address, faculty.gender, faculty.collegeName, faculty.courseName, faculty.subjectName, faculty.dob];
    //     super.executeSQL(sql, params, function(err, result){
    //         if(err){
    //             callback(err);
    //         }else{
    //             callback(err, result.insertId);
    //         }
    //     });
    // };
    add(faculty, callback) {
        var sql = "SELECT * FROM st_faculty WHERE EMAIL = ?";
        var params = [faculty.email];
        super.executeSQLForObject(sql, params, new Faculty(), function (err, result) {
            var collegeService = new CollegeService();
            collegeService.findByPk(faculty.collegeId, function (err, college) {
                if (err) {
                    callback(err);
                } else {
                    faculty.collegeName = college.name;
                    var courseService = new CourseService();
                    courseService.findByPk(faculty.courseId, function (err, course) {
                        if (err) {
                            callback(err);
                        } else {
                            faculty.courseName = course.courseName;
                            var subjectService = new SubjectService();
                            subjectService.findByPk(faculty.subjectId, function (err, subject) {
                                if (err) {
                                    callback(err);
                                } else {
                                    faculty.subjectName = subject.subjectName;
                                    if (result == undefined) {
                                        var sql = "INSERT INTO st_faculty(FIRST_NAME,LAST_NAME,EMAIL,PASSWORD,MOBILE_NO,ADDRESS,GENDER,COLLEGE_ID,COLLEGE_NAME,COURSE_ID,COURSE_NAME,SUBJECT_ID,SUBJECT_NAME,DOB,CREATED_BY,CREATED_DATETIME) " +
                                            "VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,NOW())"
                                        var params = [faculty.firstName, faculty.lastName, faculty.email, faculty.password, faculty.mobileNo, faculty.address, faculty.gender, faculty.collegeId, faculty.collegeName, faculty.courseId, faculty.courseName, faculty.subjectId, faculty.subjectName, faculty.dob, faculty.createdBy];
                                        var serv = new BaseService();
                                        serv.executeSQL(sql, params, function (err, result) {
                                            if (err) {
                                                callback(err);
                                            } else {
                                                callback(err, result.insertId);

                                            }

                                        })
                                    }
                                    else {
                                        result.message = "This record already exists";
                                        callback(result);
                                    }
                                }
                            });

                        }
                    });
                }
            });
        });
    };
   

    /**
     * Updates a faculty 
     * @param {*} faculty 
     * @param {*} callback 
     * @param {*} ctx 
     */
    // update(faculty, callback){
    //     var sql = "UPDATE st_faculty SET MODIFIED_DATETIME = NOW(), FIRST_NAME=?, LAST_NAME=?, EMAIL=?, PASSWORD=?, MOBILE_NO=?, ADDRESS=?, GENDER=?, COLLEGE_NAME=?, COURSE_NAME=?, SUBJECT_NAME=?, DOB=? WHERE ID=?";
    //     var params = [faculty.firstName, faculty.lastName, faculty.email, faculty.password, faculty.mobileNo, faculty.address, faculty.gender, faculty.collegeName, faculty.courseName, faculty.subjectName, faculty.dob, faculty.id];
    //     super.executeSQL(sql, params, function(err, result){
    //         if(err){
    //             callback(err);
    //         }else{
    //             callback(err, result.affectedRows);
    //         }
    //     });
    // };

    update(faculty, callback) {
        var collegeService = new CollegeService();
        collegeService.findByPk(faculty.collegeId, function (err, college) {
            if (err) {
                callback(err);
            } else {
                faculty.collegeName = college.name;
                var courseService = new CourseService();
                courseService.findByPk(faculty.courseId, function (err, course) {
                    if (err) {
                        callback(err);
                    } else {
                        faculty.courseName = course.courseName;
                        var subjectService = new SubjectService();
                        subjectService.findByPk(faculty.subjectId, function (err, subject) {
                            if (err) {
                                callback(err);
                            } else {
                                faculty.subjectName = subject.subjectName;
                                    var sql = "UPDATE st_faculty SET FIRST_NAME=?,LAST_NAME=?,EMAIL=?,PASSWORD=?,MOBILE_NO=?,ADDRESS=?,GENDER=?,COLLEGE_ID=?,COLLEGE_NAME=?,COURSE_ID=?,COURSE_NAME=?,SUBJECT_ID=?,SUBJECT_NAME=?,DOB=?,MODIFIED_BY=?,MODIFIED_DATETIME = NOW() WHERE ID = ? "
                                    var params = [faculty.firstName, faculty.lastName, faculty.email, faculty.password, faculty.mobileNo, faculty.address, faculty.gender, faculty.collegeId, faculty.collegeName, faculty.courseId, faculty.courseName, faculty.subjectId, faculty.subjectName, faculty.dob, faculty.modifiedBy,faculty.id];
                                    var serv = new BaseService();
                                    serv.executeSQL(sql, params, function (err, result) {
                                        if (err) {
                                            callback(err);
                                        } else {
                                            callback(err, result.insertId);

                                        }

                                    })
                            }
                        });

                    }
                });
            }
        });
    }

    /**
     * Delete a faculty and return deleted bean
     * @param {*} id 
     * @param {*} callback 
     * @param {*} ctx 
     */
     delete(id, callback) {
        super.delete(id, 'st_faculty', callback);
    }
}
module.exports = FacultyService;