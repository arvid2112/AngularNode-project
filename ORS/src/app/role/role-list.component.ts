import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BaseListCtl } from "../base-list.component";
import { ServiceLocatorService } from "../service-locator.service";

@Component({
    selector:'app-role-list',
    templateUrl:'role-list.component.html',
})
export class RoleListComponent extends BaseListCtl{
    constructor(public serviceLocator: ServiceLocatorService,public route:ActivatedRoute) {
        super(serviceLocator.endpoints.ROLE,serviceLocator,route);
      
      }
      populateForm(form,searchParams){
        form.name = searchParams.name;
        form.description = searchParams.description;
 
      }
}