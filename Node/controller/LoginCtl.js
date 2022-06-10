var BaseCtl = require('../controller/BaseCtl');
var User = require('../bean/User');
var ServiceLocator = require('../services/ServiceLocator');
var Response = require("../bean/Response");
var DataValidator = require("../utility/DataValidator");

class LoginCtl extends BaseCtl {

    constructor() {
        super();
        this.service = ServiceLocator.getUserService();
    }

    /**
     * Returns Validate Data. 
     */
    login(request, response) {
        var service=this.getService();
        var result={}
        this.validate(request.body, function (pass, data) {
            
            if (!pass) {
                result.data = {}
                result.data.login = request.body.login;
                result.data.password = request.body.password;
                result.inputerror={}
                result.inputerror=data.inputerror;
                result.message = '';
                var res = new Response(result);
                response.json(res);
            } else {
                var user = new User();
                user.populateRequest(request.body);
                service.authenticate(user, function (err, bean) {
                    if (bean) {
                        request.session.user = bean;//set session
                        result.data = request.session.user
                        var res = new Response(err, result);
                        response.json(res);
                    } if (err) {
                        result.data = request.body;
                        result.message = 'LoginId and Password is incorrect';
                        var res = new Response(result);
                        response.json(res);
                    }

                    //result.sid = request.session.id;//setting session id
                    // result.session = request.sessionID;

                });
            }
        });
    }

    validate(body, callback) {
        var pass = true;
        var result = {};
        result.inputerror = {};
        
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
        if (pass == false) {
            //result.message = "Enter all fields correctly"
            callback(pass, result)
        } else {
            callback(pass)
        }
    }
    /**
     * Returns Login bean populated from request parameters. 
     */
    //  getBean(request){
    //     var login = new Login();
    //     login.populateRequest(request.body)
    //     console.log("getbean loginCtl")
    //     return login;
    // };
    // /**
    //  * Returns service of this controller.
    // */
     getService() {
        return this.service;
    };

}
module.exports = LoginCtl;