import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent extends BaseCtl {

  constructor(public serviceLocator:ServiceLocatorService, public route:ActivatedRoute) {
    super(serviceLocator.endpoints.TIMETABLE, serviceLocator, route);
   }

   populateForm(form, data){
    form.id= data.id
    form.examTime= data.examTime
    form.examDate= data.examDate
    form.subjectId= data.subjectId
    form.courseId= data.courseId
    form.semester= data.semester

    
  }
  cancel(){
    this.forward('/timetablelist')
  }
}
