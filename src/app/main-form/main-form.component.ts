import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IFormComponent } from '../form-components/components/iformcomponent.type';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {
  component: IFormComponent;
  comp: String;

  constructor() { }


  ngOnInit() {
  }

  setComponent(component: IFormComponent){
  	this.component = component;
  	this.comp = "awesome"
  }

}
