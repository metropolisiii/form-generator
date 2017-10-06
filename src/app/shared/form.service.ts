import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FormService {

  constructor(private http: HttpClient) { }

  saveForm(form){
    this.http.post('https://ng-form-generator-76830.firebaseio.com/data.json', JSON.stringify(form))
    	.subscribe(
    		() => console.log("submitted")
    	);
  }

}
