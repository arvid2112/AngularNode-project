import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BaseListCtl } from "../base-list.component";
import { ServiceLocatorService } from "../service-locator.service";

@Component({
    selector:'app-timetable-list',
    templateUrl:'timetable-list.component.html',
})
export class TimetableListComponent extends BaseListCtl{
    constructor(public serviceLocator: ServiceLocatorService,public route:ActivatedRoute) {
        super(serviceLocator.endpoints.TIMETABLE,serviceLocator,route);
      
      }
      populateForm(form,searchParams){
        
        form.courseId = searchParams.courseId;
        
        form.subjectId = searchParams.subjectId;
        form.semester = searchParams.semester;
        form.examDate = searchParams.examDate;
      }
}