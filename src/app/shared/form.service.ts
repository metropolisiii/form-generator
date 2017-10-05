import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable()
export class FormService {

  constructor(private httpClient: HttpClient) { }

  saveForm(){
    alert('test');
    //const req = new HttpRequest('POST', 'https://ng-form-generator-76830.firebaseio.com/data.json')
  }

}
