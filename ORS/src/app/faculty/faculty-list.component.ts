import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BaseListCtl } from "../base-list.component";
import { ServiceLocatorService } from "../service-locator.service";

@Component({
    selector:'app-faculty-list',
    templateUrl:'faculty-list.component.html',
})
export class FacultyListComponent extends BaseListCtl{
    constructor(public serviceLocator: ServiceLocatorService,public route:ActivatedRoute) {
        super(serviceLocator.endpoints.FACULTY,serviceLocator,route);
      
      }
      populateForm(form,searchParams){
        form.firstName = searchParams.firstName;
        form.email = searchParams.email;
        form.collegeId = searchParams.collegeId;
        
      }
}