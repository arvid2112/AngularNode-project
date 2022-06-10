import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent extends BaseCtl {
  uploadId = 0;
  fileToUpload: File = null;
  userForm: FormGroup = null;
  uploadForm: FormGroup;
  constructor(public serviceLocator: ServiceLocatorService, public route: ActivatedRoute, public httpClient: HttpClient) {
    super(serviceLocator.endpoints.USER, serviceLocator, route);
  }
  populateForm(form, data) {
    form.id=data.id;
    form.firstName = data.firstName;
    form.lastName = data.lastName;
    form.login = data.login;
    form.password = data.password;
    form.gender = data.gender;
    form.mobileNo = data.mobileNo;
    form.dob = data.dob;
    form.status = data.status;
    form.roleId = data.roleId;
    form.roleName = data.roleName;
  }
  submit() {
    var _self = this;

    this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
      _self.form.message = null;
      _self.form.inputerror = {};

      if (res.success) {

        _self.uploadId = res.result;
        if (_self.fileToUpload!=null) {
          _self.myFile();
        }
        _self.form.error = false;

        _self.form.message = "Data is saved";
        //_self.forward('/user/'+res.result)
      } else {
        _self.form.error = true;
        _self.form.inputerror = res.result.inputerror;
        _self.form.message = res.result.message;

      }
      //console.log('FORM', _self.form);
    });
  }
  myFile() {
    console.log(this.form.data.id + 'after super.submit-----');
    this.onSubmitProfile(this.fileToUpload, this.userForm).subscribe(data => {
      console.log(this.fileToUpload);
    }, error => {
      console.log(error);
    });
  }
  onSubmitProfile(fileToUpload: File, userform: FormGroup) {
    const formData = new FormData();

    var _self = this;
    formData.append('pic', fileToUpload);
    console.log(this.uploadId + 'this id number ======');
    return this.httpClient.post("http://localhost:8080/User/profilePic/" + this.uploadId, formData, { withCredentials: true });
  }
  onFileSelect(files: FileList) {
    this.fileToUpload = files.item(0);
    console.log(this.fileToUpload);

  }

  onUpload(userform: FormData) {
    this.submit();
    console.log(this.form.data.id + '---- after submit');

  }
  cancel() {
    this.forward('/userlist')
  }
}
