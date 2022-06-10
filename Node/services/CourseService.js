var Course = require("../bean/Course");
var BaseService = require("./BaseService");

class CourseService extends BaseService {
    /**
     * Find course by primary key id
     * 
     * @param {*} id 
     * @param {*} callback 
     * @param {*} ctx 
     */
    findByPk(id, callback, ctx){
        var sql = "SELECT * FROM st_course WHERE ID= ?";
        var params = [id];
        super.executeSQLForObject(sql, params, new Course(), callback);
    };
    /**
     * Search course by Name
     * 
     * @param {*} course 
     * @param {*} callback 
     */
    search(course, pageNo, callback){
        var sql = "SELECT * FROM st_course WHERE 1=1";
        if(course.courseName){
            sql += " and COURSE_NAME Like '" + course.courseName + "%'";
        }
        if(course.courseDescription){
            sql += " and COURSE_DESCRIPTION Like '" + course.courseDescription + "%'";
        }
        if(course.courseDuration){
            sql += " and COURSE_DURATION Like '" + course.courseDuration + "%'";
        }
        super.executeSQLForList(sql, {"pageNo": pageNo}, new Course(), callback);
    }
    /**
     * Adds a course and returns primary key
     * 
     * @param {*} course 
     * @param {*} callback 
     * @param {*} ctx 
     */
    // add(course, callback, ctx){
    //     var sql = "INSERT INTO st_course (CREATED_DATETIME, MODIFIED_DATETIME, COURSE_NAME, COURSE_DESCRIPTION, COURSE_DURATION)"
    //     + "VALUES (NOW(),NOW(),?,?,?)";
    //     var params = [course.courseName, course.courseDescription, course.courseDuration];
    //     super.executeSQL(sql, params, function(err, result){
    //         if(err){
    //             callback(err);
    //         }else{
    //             callback(err, result.insertId);
    //         }
    //     });
    // };
    add(course,callback){
        var sql = "SELECT * FROM st_course WHERE COURSE_NAME = ?";
        var params = [course.courseName];
        super.executeSQLForObject(sql,params,new Course(),function (err,result) {
            if(result==undefined){
                var serv = new BaseService();
                var sql = "INSERT INTO st_course (COURSE_NAME,COURSE_DESCRIPTION,COURSE_DURATION,CREATED_BY,CREATED_DATETIME) VALUES (?,?,?,NOW(),NOW())";                 
                var params = [course.courseName,course.courseDescription,course.courseDuration,course.createdBy];
                serv.executeSQL(sql,params,function (err, result) {
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
     * Updates a course 
     * @param {*} course 
     * @param {*} callback 
     * @param {*} ctx 
     */
    update(course, callback, ctx){
        var sql = "UPDATE st_course SET MODIFIED_DATETIME = NOW(), COURSE_NAME=?, COURSE_DESCRIPTION=?, COURSE_DURATION=? WHERE ID=?";
        var params = [course.courseName, course.courseDescription, course.courseDuration, course.id];
        super.executeSQL(sql, params, function(err, result){
            if(err){
                callback(err);
            }else{
                callback(err, result.affectedRows);
            }
        });
    }
    /**
     * Delete a course and return deleted bean
     * @param {*} id 
     * @param {*} callback 
     * @param {*} ctx 
     */
    delete(id, callback, ctx){
        super.delete(id, 'st_course', callback, ctx);
    }
}

//Export course service
module.exports = CourseService;