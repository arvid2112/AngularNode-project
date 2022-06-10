import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BaseListCtl } from "../base-list.component";
import { ServiceLocatorService } from "../service-locator.service";

@Component({
    selector:'app-course-list',
    templateUrl:'course-list.component.html',
})
export class CourseListComponent extends BaseListCtl{
    constructor(public serviceLocator: ServiceLocatorService,public route:ActivatedRoute) {
        super(serviceLocator.endpoints.COURSE,serviceLocator,route);
      
      }
      populateForm(form,searchParams){
        form.courseName = searchParams.courseName;
        form.courseDescription = searchParams.courseDescription;
        form.courseDuration = searchParams.courseDuration;
        form.email = searchParams.email;
        form.collegeId = searchParams.collegeId;
        
      }
}