import { Component, OnInit } from '@angular/core';
import { IFormComponent } from '../iformcomponent.type';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit, IFormComponent {
  name: string;
  hasAdditionalOptions: boolean;

  constructor() {
  	this.name = "Text Input";
  	this.hasAdditionalOptions = false;
  }

  ngOnInit() {
  }

}
