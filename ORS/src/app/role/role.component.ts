import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceLocatorService } from '../service-locator.service';
import { BaseCtl } from '../base.component';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent extends BaseCtl {

  constructor( public serviceLocator:ServiceLocatorService, public route:ActivatedRoute) {
    super(serviceLocator.endpoints.ROLE,serviceLocator,route);
   }

  populateForm(form, data) {
    form.id = data.id;
    form.name = data.name;
    form.description = data.description;
  }
  cancel(){
    this.forward('/rolelist')
  }
}
