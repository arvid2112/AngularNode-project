var formidable = require('formidable');
var fs = require('fs');
    var BaseCtl = require('../controller/BaseCtl');
var EmailService = require('../utility/EmailService');
var MailMessage = require('../utility/MailMessage');
var EmailBuilder = require('../utility/EmailBuilder');
var User = require("../bean/User");
var Response = require("../bean/Response");
var ServiceLocator = require("../services/ServiceLocator");
var DataValidator = require("../utility/DataValidator");
var nodemailer = require('nodemailer');
 const UserService = require('../services/UserService');
 const session = require('express-session');
const { request } = require('express');

/**
 * Contains User REST APIs.
 */
class UserCtl extends BaseCtl{

    constructor(){
        super();
        this.service = ServiceLocator.getUserService();
    }

    save(req, res) {
        var service = this.getService();
        var bean = this.getBean(req);
        //validation
        this.validate(req.body, function (pass, data) {
            if (pass) {
                if (bean.id && bean.id > 0) {
                    //for myProfile
                    if (bean.id == req.session.user.id) {
                        console.log('session modified---------------------------------' + req.session.user);
                        req.session.user = bean;
                    }
                    bean.modifiedBy = req.session.user.login;
                    service.update(bean, function (err) {
                        var result = new Response(err, bean.id);
                        res.json(result);
                    });
                } else {
                  //  bean.createdBy = req.session.user.login;
                    service.add(bean, function (err, pk) {
                        var result = new Response(err, pk);
                        res.json(result);
                    });
                }
            } else {
                data.data = bean;
                var result = new Response(data);
                res.json(result);
            }
        })
    }

    register(request, response) {
        var user = this.getBean(request);
        user.roleId = 2;//hard Code For Student
        this.validate(user, function (pass, data) {
            if (!request.body.password) {
                data.inputerror.confirmPassword = "Confirm Password is required";
                data.data = request.body;
                var result = new Response(data);
                response.json(result);
            }
            else if (request.body.confirmPassword == request.body.password) {
                if (pass) {
                    var userService = new UserService();
                    userService.register(user, function (err, pk) {

                        var resp = new Response(err, pk);
                        response.json(resp);
                    })
                } else {
                    data.data = request.body;
                    var result = new Response(data);
                    response.json(result);
                }
            } else {
                data.inputerror.confirmPassword = "Passwords do not match"
                data.data = request.body;
                var result = new Response(data);
                response.json(result);
            }
        })
    }

    /**
     * Get preload data.
     * @param {*} request 
     * @param {*} response 
     */
    preload(request, response){
        var roleService = ServiceLocator.getRoleService();
        roleService.search('', null, function (err, role){
            var result = {};
            result.roleList = role.list;
            var res = new Response(err, result);
            response.json(res)
        }) 
    };
    /**
     * Returns Validate Data. 
     */
     validate(body, callback) {
        var pass = true;
        var result = {};
        result.inputerror = {};
        if (!body.firstName) {
            result.inputerror.firstName = "First Name is required";
            pass = false;
        } else if (!DataValidator.isFirstName(body.firstName.trim())) {
            result.inputerror.firstName = "First Name is Invalid";
            pass = false;
        }
        if (!body.lastName) {
            result.inputerror.lastName = "Last Name is required";
            pass = false;
        } else if (!DataValidator.isName(body.lastName.trim())) {
            result.inputerror.lastName = "Last Name is Invalid";
            pass = false;
        }
        if (!body.login) {
            result.inputerror.login = "Login Id is required";
            pass = false;
        } else if (!DataValidator.isEmail(body.login)) {
            result.inputerror.login = "Login Id is invalid";
            pass = false;
        }
        if (!body.password) {
            result.inputerror.password = "Password is required";
            pass = false;
        } else if (!DataValidator.isPassword(body.password.trim())) {
            result.inputerror.password = "Password is Invalid"
            pass = false;
        }
        if (!body.dob) {
            result.inputerror.dob = "DOB is required";
            pass = false;
        }
        if (!body.mobileNo) {
            result.inputerror.mobileNo = "Mobile No is required";
            pass = false;
        }else if (!DataValidator.isMobileNo(body.mobileNo.trim())) {
            result.inputerror.mobileNo = "Mobile No Should not be less than 10 digit";
            pass = false;
        }
        else if (body.mobileNo.trim().length != 10) {
        result.inputerror.mobileNo = "Mobile No is invalid";
        pass = false;
    }
        if (!body.roleId) {
            result.inputerror.roleId = "Role is required";
            pass = false;
        }
        if (!body.gender) {
            result.inputerror.gender = "Gender is required";
            pass = false;
        }
        if (pass == false) {
            //result.message = "Enter all fields correctly"
            callback(pass, result)
        } else {
            callback(pass)
        }
    }

    /**
     * Authenticates a User. 
     * @param {*} request 
     * @param {*} response 
     */
     login(request, response) {
        var pass = true;
        var result = {};
        result.inputerror = {};
        var body = request.body;
        if (!body.login) {
            console.log("inside login if statement");
            result.inputerror.login = "Login Id is required";
            pass = false;
        } else if (!DataValidator.isEmail(body.login)) {
            result.inputerror.login = "Login Id is invalid";
            pass = false;
        }
        if (!body.password) {
            result.inputerror.password = "Password is required";
            pass = false;
        } else if (!DataValidator.isPassword(body.password.trim())) {
            result.inputerror.password = "Password is Invalid"
            pass = false;
        }
        if (!pass) {
            result.data = {}
            result.data.login = request.body.login;
            result.data.password = request.body.password;
            result.message = '';
            var res = new Response(result);
            response.json(res);
        } else {
            var user = new User();
            user.populateRequest(request.body);
            this.service.authenticate(user, function (err, bean) {
                if (bean) {
                    request.session.user = bean;//set session
                    result.data = request.session.user
                    var res = new Response(err, result);
                    response.json(res);
                } if (err) {
                    result.data = body;
                    result.message = 'LoginId and Password is incorrect';
                    var res = new Response(result);
                    response.json(res);
                }

                //result.sid = request.session.id;//setting session id
                // result.session = request.sessionID;

            });
        }
    }
    /**
     * Sends email of forgotten  password
     * @param {*} request 
     * @param {*} response 
     */
    // forgotPassword(request, response){
    //     this.service.findByLogin(request.body.login, function (err, user){
    //         if (!err) {
    //             //test code 
    //             var m = {
    //                 login: user.login,
    //                 password: user.password,
    //                 firstName: user.firstName,
    //                 lastName: user.lastName
    //             };

    //             var msg = EmailBuilder.getForgetPasswordMessage(m);
    //             msg.to = user.login;
    //             var ser = new EmailService()
    //             ser.sendEmail(msg, function (err, result) {
    //                 if (err) {
    //                     var r = new Response(err, result);
    //                     response.json(r);
    //                 } else {
    //                     var r = new Response(err, "Password has been sent to your registred email id");
    //                     response.json(r);
    //                 }
    //             });
    //         } else {
    //             var r = new Response(err, user);
    //             response.json(r);
    //         }
    //     });
    // }
    // forgetPassword(req, res) {
    //     var pass = true;
    //     var result = {};
    //     result.inputerror = {};
    //     var body = request.body;
    //     if (!body.login) {
    //         result.inputerror.login = "Login Id is required";
    //         pass = false;
    //     } else if (!DataValidator.isEmail(body.login)) {
    //         result.inputerror.login = "Login Id is invalid";
    //         pass = false;
    //     }
    //     if (!pass) {
    //         result.data = body
    //         var res = new Response(result);
    //         response.json(res);
    //     } else {
    //         var form = {};
    //         form.login = req.body.login;
    //         this.service.forgetPassword(form, function (err, result) {
    //             if (err) {
    //                 res.json(new Response(err, result));
    //             } else {
    //                 res.json(new Response(err, result));
    //             }
    //         });
    //     }
    // }
    forgetPassword(request, response) {

        this.service.findByLogin(request.body.login, function (err, user) {
            //console.log(user);
            if (!err) {
                //test code 
                var m = {
                    login: user.login,
                    password: user.password,
                    firstName: user.firstName,
                    lastName: user.lastName
                };

                var msg = EmailBuilder.getForgetPasswordMessage(m);
                msg.to = user.login;
                var ser = new EmailService()
                ser.sendEmail(msg, function (err, result) {
                    if (err) {
                        var r = new Response(err, result);
                        response.json(r);
                    } else {
                        var r = new Response(err, "Password has been sent to your registred email id");
                        response.json(r);
                    }
                });
            } else {
                var r = new Response(err, user);
                response.json(r);
            }
        });
    }


    /**
     * Changes user password
     * @param {*} req 
     * @param {*} res 
     */
    //  changePassword(req, res) {
    //     var form = {};
    //     //form.id = req.body.id;//not from session
    //     form.id = req.session.user.id;
    //     form.password = req.body.password;
    //     form.oldPassword = req.body.oldPassword;
    //     form.confirmPassword = req.body.confirmPassword;
    //     var pass = true;
    //     if (!req.body.password) {
    //         result.inputerror.password = "Password is required";
    //         pass = false;
    //     } else if (!DataValidator.isPassword(req.body.password.trim())) {
    //         result.inputerror.password = "Password is Invalid"
    //         pass = false;
    //     }
    //     if (!pass) {
    //         result.data = {}
    //         result.data.oldPassword = request.body.oldPassword;
    //         result.data.password = request.body.password;
    //         result.data.confirmPassword = request.body.confirmPassword;
    //         result.message = 'Input Error';
    //         var res = new Response(result);
    //         response.json(res);
    //     } else {
    //         this.service.changePassword(form, function (err, result) {
    //             if (err) {
    //                 res.json(new Response(err, result));
    //             } else {
    //                 res.json(new Response(err, result));
    //             }
    //         })
    //     }
    // };

    changePassword(req, res) {
        var form = {};
        // form.id = req.body.id;//not from session
        form.id = req.session.user.id;
        form.password = req.body.password;
        form.oldPassword = req.body.oldPassword;
        form.confirmPassword = req.body.confirmPassword;
        var pass = true;
        var result = {};
        result.inputerror = {}
        if (!req.body.password) {
            result.inputerror.password = "Password is required";
            pass = false;

        }
        if (!req.body.oldPassword) {
            result.inputerror.oldPassword = "Old Password is required";
            pass = false;

        }
        if (!req.body.confirmPassword) {
            result.inputerror.confirmPassword = "confirm Password is required";
            pass = false;

        } else if (!DataValidator.isPassword(req.body.password.trim())) {
            result.inputerror.password = "Password is Invalid"
            pass = false;
        }
        if (!pass) {
            result.data = {}
            result.data.oldPassword = req.body.oldPassword;
            result.data.password = req.body.password;
            result.data.confirmPassword = req.body.confirmPassword;
            result.message = 'Input Error';
            var resf = new Response(result);
            res.json(resf);
        } else {
            this.service.changePassword(form, function (err, result) {
                if (err) {
                    res.json(new Response(err, result));
                } else {
                    res.json(new Response(err, result));
                }
            })
        }
    };


    /**
     * returns user profile data
     * @param {*} req 
     * @param {*} res 
     */
    myProfile(req, res) {
        var service = this.getService();
        var id = req.session.user.id; //get user from session
        service.findByPk(id, function (err, bean) {
            var r = new Response(err, bean);;
            res.json(r);
        });
    }

    /**
     * Destroys current session.
     * 
     * @param {*} request 
     * @param {*} response 
     */
     logout(request, response) {
        console.log("---------Session Destroyed-------------------" + request.session.user);

        request.session.destroy(function (err) {
            if (!err) {
                response.json(new Response(null, 'ok'));
            } else {
                response.json("Error");
            }
        });
    };

    /**
     * Returns menu items 
     * 
     * @param {*} request 
     * @param {*} response 
     */
     menu(request, response) {
        var bar = [];
        console.log("session------------------------------menu---------------------------------" + request.session.user)
        if (request.session.user) {
            //var roleId = request.session.user.roleId;
            //if (roleId == 1) {
            bar =
                [
                    this.User = [
                        { text: 'User', link: 'user' },
                        { text: "User List", link: 'userlist' },
                    ],
                    this.Role = [
                        { text: 'Role', link: 'role' },
                        { text: 'Role List', link: 'rolelist' },
                    ],
                    this.College = [
                        { text: 'College', link: 'college' },
                        { text: 'College List', link: 'collegelist' },
                    ],
                    this.Student = [
                        { text: 'Student', link: 'student' },
                        { text: 'Student List', link: 'studentlist' },
                    ],
                    this.Marksheet = [
                        { text: 'Marksheet', link: 'marksheet' },
                        { text: 'Marksheet List', link: 'marksheetlist' },
                        { text: 'Merit List', link: 'meritlist' },
                        { text: 'Get Marksheet', link: 'getmarksheet' },
                    ],
                    this.Course = [
                        { text: 'Course', link: 'course' },
                        { text: 'Course', link: 'course' },
                    ],
                    this.Subject = [
                        { text: 'Subject', link: 'subject' },
                        { text: 'SUbject List', link: 'subjectlist' }
                    ],
                    this.TimeTable = [
                        { text: 'TimeTable', link: 'timetable' },
                        { text: 'TimeTable', link: 'timetable' },
                    ],
                    this.Facult = [
                        { text: 'Faculty', link: 'faculty' },
                        { text: 'Faculty', link: 'faculty' },
                    ]
                ]

            // }
        } else {
            bar =
                [
                    { text: 'Login', link: 'login' }
                ]
        }
        var r = new Response(null, bar);
        response.json(r);
    }
    /**
     * Updates profile picture
     * 
     * @param {*} request 
     * @param {*} response 
     */
     profilePic(request, response) {
        console.log("i am in profile pic ");
        var form = new formidable.IncomingForm();
        var self = this;
        form.parse(request, function (err, params, file) {
          console.log("id", request.params.id);
          console.log("file::::", file);
          var pic = {
            id: request.params.id,
            data: fs.readFileSync(file.pic.filepath),
            type: file.pic.mimetype,
            name: file.pic.originalFilename,
          };
          console.log("pic details ::::", pic);
          self.service.updatePicture(pic, function (err, result) {
            var r = new Response(err, result);
            console.log(err);
            response.json(r);
          });
        });
      }

    /**
     * Gets profile picture
     * 
     * @param {*} request 
     * @param {*} response 
     */
    getPic(request, response) {
        var id = request.params.id;
        this.service.getPicture(id, function (err, pic) {
            if (err) {
                //If picture is not found then send default picture
                var rootPath = { root: '.' };
                response.sendFile('unknown.png', rootPath);
            } else {
                response.writeHead(200, { 'Content-Type': pic.type });
                response.write(pic.data);
                response.end();
            }
        })
    }

    /**
     * Returns bean of User controller.
     * @param {*} request 
     */
    getBean(request) {
        var user = new User();
        user.populateRequest(request.body);
        return user;
    };

    /**
     * Returns service of User controller.
     */
    getService() {
        return this.service;
    };
}
module.exports = UserCtl;