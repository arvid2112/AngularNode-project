import { Component } from "@angular/core";
import { ServiceLocatorService } from "./service-locator.service";

@Component({
    selector:'app-page-not-found',
    templateUrl:'page-not-found.component.html',
})
export class PageNotFoundComponent extends ServiceLocatorService {
    
}