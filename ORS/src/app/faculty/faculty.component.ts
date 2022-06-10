import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';


@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent extends BaseCtl {

  constructor(public serviceLocator:ServiceLocatorService,public route:ActivatedRoute) {
    super(serviceLocator.endpoints.FACULTY ,serviceLocator,route );
  }
 
  populateForm(form, data){
    form.id= data.id
    form.firstName= data.firstName
    form.lastName= data.lastName
    form.email= data.email
    form.password= data.password
    form.mobileNo= data.mobileNo
    form.address= data.address
    form.gender= data.gender
    form.collegeId= data.collegeId
    form.courseId= data.courseId
    form.subjectId= data.subjectId
    form.dob= data.dob
    
  }
  cancel(){
    this.forward('/facultylist')
  }


}
