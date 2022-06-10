var Subject = require('../bean/Subject');
var BaseService = require('../services/BaseService');
var CourseService = require('../services/CourseService');

class SubjectService extends BaseService{
    /**
     * Finds subject by primary key id
     * returns subject object
     */

    /**
    * Finds record by primary key id
    */
   findByPk(id, callback){
       var sql = "SELECT * FROM st_subject WHERE ID=?";
       var params = [id];
       super.executeSQLForObject(sql, params, new Subject(), callback);
   };
   /**
    * Searches and returns list. Applies pagination as well.
     * 
     * @param {*} subject 
     * @param {*} callback 
     */
    search(subject, pageNo, callback){
        var sql = "SELECT * FROM st_subject where 1=1";
        console.log("Inside Search of Subject after sql line" + pageNo);
        if(subject.subjectName){
            sql += " and SUBJECT_NAME like '" + subject.subjectName + "%'";
        }
        if(subject.subjectId){
            sql += " and SUBJECT_ID = " + subject.subjectId;
        }
        if (subject.subjectDescription) {
            sql += " AND SUBJECT_DESCRIPTION LIKE '" + subject.subjectDescription + "%' ";
        }
        if (subject.courseId) {
            sql += " AND COURSE_ID = " + subject.courseId;
        }
        if(subject.courseName){
            sql += " and COURSE_NAME like '" + subject.courseName + "%'";
        }
        
        super.executeSQLForList(sql, {"pageNo": pageNo}, new Subject(), callback);
        console.log("After executesqlforlist line in SubjectService");
    }
    /**
     * Adds a subject and returns primary key
     * 
     * @param {*} subject 
     * @param {*} callback 
     * @param {*} ctx 
     */
    // add(subject, callback){
    //     var sql = "INSERT INTO st_subject (CREATED_DATETIME,MODIFIED_DATETIME,SUBJECT_NAME,SUBJECT_DESCRIPTION,COURSE_NAME)"
    //     + "VALUES (NOW(),NOW(),?,?,?)";
    //     var params = [subject.subjectName, subject.subjectDescription, subject.courseName];
    //     super.executeSQL(sql, params, function(err, result){
    //         if(err){
    //             callback(err);
    //         }else{
    //             callback(err, result.insertId);
    //         }
    //     });
    // };
    add(subject, callback) {
        var sql = "SELECT * FROM st_subject WHERE SUBJECT_NAME=?";
        var params = [subject.subjectName];
        super.executeSQLForObject(sql, params, new Subject(), function (err, result) {
            if (result == undefined) {
                var courseService = new CourseService();
                courseService.findByPk(subject.courseId, function (cErr, course) {
                    if (cErr) {
                        callback(cErr);
                    } else {
                        console.log(course.courseName);
                        subject.courseName = course.courseName;
                        var sql = "INSERT INTO st_subject (SUBJECT_NAME,SUBJECT_DESCRIPTION,COURSE_ID,COURSE_NAME,CREATED_BY,CREATED_DATETIME) VALUE (?,?,?,?,?,NOW())";
                        var params = [subject.subjectName, subject.subjectDescription, subject.courseId, subject.courseName, subject.createdBy];
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
                result.message = "This record already exists";
                callback(result);
            }

        });
    }

    /**
     * Updates a subject 
     * @param {*} subject 
     * @param {*} callback 
     * @param {*} ctx 
     */
    // update(subject, callback){
    //     var sql = "UPDATE st_subject SET MODIFIED_DATETIME = NOW(),SUBJECT_NAME=?,SUBJECT_DESCRIPTION=?,COURSE_NAME=? WHERE ID=?"
    //     var params = [subject.subjectName, subject.subjectDescription, subject.courseName, subject.id];
    //     super.executeSQL(sql, params, function(err, result){
    //         if(err){
    //             callback(err);
    //         }else{
    //             callback(err, result.affectedRows);
    //         }
    //     });
    // }
    update(subject, callback) {
        var courseService = new CourseService();
        courseService.findByPk(subject.courseId, function (cErr, course) {
            if (cErr) {
                callback(cErr);
            } else {
                subject.courseName = course.courseName;
                var sql = "UPDATE st_subject SET SUBJECT_NAME=? , SUBJECT_DESCRIPTION=? , COURSE_ID=?, COURSE_NAME=? , MODIFIED_BY=? ,MODIFIED_DATETIME=NOW() WHERE ID = ?";
                var params = [subject.subjectName, subject.subjectDescription, subject.courseId, subject.courseName, subject.modifiedBy, subject.id];
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

    }

    /**
     * Delete a subject and return deleted bean
     * @param {*} id 
     * @param {*} callback 
     * @param {*} ctx 
     */
    delete(id, callback){
        super.delete(id, 'st_subject', callback);
    }
}
//Export subject service
module.exports = SubjectService;