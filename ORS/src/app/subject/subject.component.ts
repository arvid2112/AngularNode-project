import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent extends BaseCtl {

  constructor(public serviceLocator:ServiceLocatorService,public route:ActivatedRoute) {
    super(serviceLocator.endpoints.SUBJECT ,serviceLocator,route );
  }

  populateForm(form, data){
    form.id= data.id
    form.subjectId = data.subjectId
    form.subjectName= data.subjectName
    form.subjectDescription= data.subjectDescription
    form.courseId= data.courseId
       
  }
  cancel(){
    this.forward('/subjectlist')
  }

}
