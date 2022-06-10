import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BaseListCtl } from "../base-list.component";
import { ServiceLocatorService } from "../service-locator.service";

@Component({
    selector:'app-student-list',
    templateUrl:'student-list.component.html',
})
export class StudentListComponent extends BaseListCtl{
    constructor(public serviceLocator: ServiceLocatorService,public route:ActivatedRoute) {
        super(serviceLocator.endpoints.STUDENT,serviceLocator,route);
      
      }
      populateForm(form,searchParams){
        form.firstName = searchParams.firstName;
        form.email = searchParams.email;
        form.collegeId = searchParams.collegeId;
        
      }
}