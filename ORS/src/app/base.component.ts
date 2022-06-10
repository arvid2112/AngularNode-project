import { OnInit } from '@angular/core';
import { ServiceLocatorService } from './service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { EndpointServiceService } from './endpoint-service.service';

export class BaseCtl implements OnInit {

  reset() {
    this.form.error= false,
    this.form.message= null,
    this.form.inputerror = {};
     this.form.data = {id:null,pageNo:null,pageSize:null};
     this.display();
  }

  public api = {
    endpoint: null,
    get: null,
    save: null,
    search: null,
    delete: null,
    preload: null
  }

  initApi(ep) {
    this.api.endpoint = ep;
    this.api.get = ep + "/get";
    this.api.save = ep + "/save";
    this.api.search = ep + "/search";
    this.api.delete = ep + "/delete";
    this.api.preload = ep + "/preload";
    console.log("API", this.api);
  }

  /**
   * Form contains preload data, error/sucess message 
   */
  public form = {
    error: false, //error 
    message: null, //error or success message
    preload: null, // preload data
    data: { id: null, pageNo: 0, pageSize : 10 }, //form data
    inputerror: {}, // form input error messages
    searchParams: {}, //search form
    searchMessage: null, //search result message
    list: [], // search list 
    pageNo : 0,
    pageSize: 0,
    count: 0,
  };

  /**
   * Initialize services 
   * 
   * @param serviceLocator 
   * @param route 
   */
  constructor(public endpoint: EndpointServiceService, public serviceLocator: ServiceLocatorService, public route: ActivatedRoute) {

    var _self = this;

    _self.initApi(endpoint);

    /**
     * Get primary key from path variale
     */
    serviceLocator.getPathVariable(route, function (params) {
      _self.form.data.id = params["id"];
      console.log('I GOT ID', _self.form.data.id);
    })
  }

  
  /**
   * Initialize component
   */
  ngOnInit() {
    this.preload();
    if (this.form.data.id && this.form.data.id > 0) {
      this.display();
    }
  }

  /**
   * Loded preload data
   */
  preload() {
    var _self = this;
    this.serviceLocator.httpService.get(_self.api.preload, function (res) {
      if (res.success) {
        _self.form.preload = res.result;
      } else {
        _self.form.error = true;
        // _self.form.message = res.result.message;
      }
      //console.log('FORM', _self.form);
    });
  }

  validate() {
    return this.validateForm(this.form.data);
  }

  /**
   * Override by childs 
   * 
   * @param form 
   */
  validateForm(form) {
  }

  /**
   * Searhs records 
   */
  search() {
    var _self = this;
    console.log("Search Form", _self.form.searchParams);
    _self.populateForm(_self.form.data,_self.form.searchParams)
     _self.form.searchParams["pageNo"] = _self.form.data.pageNo;
     _self.form.searchParams["pageSize"] = _self.form.data.pageSize;
     this.serviceLocator.httpService.post(_self.api.search, _self.form.searchParams, function (res) {
      console.log('search params under base component'+_self.form.searchParams + "search api under base component" + _self.api.search );
      if(res.success){
        _self.form.list = res.result.list;
        _self.form.pageNo = res.result.pageNo;
        _self.form.pageSize = res.result.pageSize;
        _self.form.count = res.result.count;
        _self.form.searchParams = res.result.searchParams;
        
        if(_self.form.count == 0){
          _self.form.message = "No record found";
          _self.form.error = true;
        }
        console.log("List Size",_self.form.count );
      }else{
        _self.form.error = false;
      }
      console.log('FORM', _self.form.message);
    });
  }

  /**
   * Contains display logic. It fetches data from database for the primary key 
   */
  display() {

    var _self = this;

    this.serviceLocator.httpService.get(_self.api.get + "/" + _self.form.data.id, function (res) {
      if (res.success) {
        _self.populateForm(_self.form.data, res.result);
      } else {
        _self.form.error = true;
        _self.form.message = res.result.message;
      }
      console.log('FORM', _self.form);
    });
  }

  /**
   * Populate HTML form data
   * Overridden by child classes.
   * 
   * @param form 
   * @param data 
   */
  populateForm(form, data) {
    form.id = data.id;
  }

  /**
   * Contains submit logic. It saves data
   */
  submit() {
    var _self = this;
    console.log("Inside Submit Method");
    this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
      _self.form.message = '';
      _self.form.inputerror = {};

      if (res.success) {
        _self.form.message = "Data is saved";
      } else {
        _self.form.error = true;
        _self.form.inputerror = res.result.inputerror;
        _self.form.message = res.result.message;
      }
      console.log('FORM', _self.form);
    });
  }

  delete(id, callback?) {
    var _self = this;
    this.serviceLocator.httpService.get(_self.api.delete + "/" + id, function (res) {
      if (res.success) {
        _self.form.message = "Data is deleted";
        _self.search();
        if(callback){
          console.log('callingcallback');
          callback();
        }
      } else {
        _self.form.error = true;
        _self.form.message = res.result.message;
      }
    });
  }

  /**
   * Forward to page
   * @param page 
   */

  forward(page){
    this.serviceLocator.forward(page);
  }

}
