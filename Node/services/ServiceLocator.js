var CollegeService = require("./CollegeService");
var UserService = require("./UserService");
var CourseService = require("./CourseService");
var FacultyService = require("./FacultyService");
var MarksheetService = require('./MarksheetService');
var RoleService = require('./RoleService');
var StudentService = require('./StudentService');
var SubjectService = require('./SubjectService');
var TimeTableService = require('./TimeTableService');

/**
 * Locate service 
 */
class ServiceLocator {

  constructor() {
    this.db = 'MySQL';
  }
  static getCollegeService() {
    return new CollegeService();
  }
  static getUserService(){
    return new UserService();
  }
  static getCourseService(){
    return new CourseService();
  }
  static getFacultyService(){
    return new FacultyService();
  }
  static getMarksheetService(){
    return new MarksheetService();
  }
  static getRoleService(){
    return new RoleService();
  }
  static getStudentService(){
    return new StudentService();
  }
  static getSubjectService(){
    return new SubjectService();
  }
  static getTimeTableService(){
    return new TimeTableService();
  }

}
module.exports = ServiceLocator;
