import { OnInit } from '@angular/core';
import { ServiceLocatorService } from './service-locator.service';
import { HttpServiceService } from './http-service.service';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from './base.component';

export class BaseListCtl extends BaseCtl {

  constructor(public endpoint, public locator: ServiceLocatorService, public route: ActivatedRoute) {
    super(endpoint, locator, route);
  }

  /**
   * Initialize component
   */
  ngOnInit() {
    this.preload();
    this.form.data.pageNo = 1;
    this.form.data.pageSize = 10;
    this.display();
    
  }

  display() {
    this.form.error=false;
    this.form.message=null;
    this.search();
  }

  submit() {
    this.form.error=false;
    this.form.message=null;
    this.form.data.pageNo = 1;
    this.search();
  }

  delete(id){
    super.delete(id,function(){
      this.search();
    });
  }


  next() {
    this.form.error=false;
        this.form.message=null;
        this.form.data.pageNo++;
        console.log(this.form.data.pageNo + '----pageNo')
        this.display();
  }

  previous() {
    this.form.error=false;
        this.form.message=null;
        if (this.form.data.pageNo > 0) {
            this.form.data.pageNo--;
            this.display();
        }
  }
  reset() {
    //this.flag = false;
    
    this.form.searchParams = {};
    this.form.error=false;
    this.form.message=null;
    this.submit()
}
deleteAll(ids) {
    for (let i = 0; i < ids.length; i++) {
        this.delete(ids[i]);
    }
}
selectAll(){
    
} 

}
