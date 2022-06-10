import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent extends BaseCtl {

  constructor(public serviceLocator:ServiceLocatorService, public route:ActivatedRoute) {
    super(serviceLocator.endpoints.STUDENT,serviceLocator,route);
   }
   
populateForm(form,data){
  form.id=data.id
  form.firstName=data.firstName
  form.lastName=data.lastName
  form.dob=data.dob
  form.mobileNo=data.mobileNo
  form.email=data.email
  form.collegeId=data.collegeId
  
  form.image=data.image
}
cancel(){
  this.forward('/studentlist')
}
}
