import { Component, OnInit } from '@angular/core';
import { IFormComponent } from '../iformcomponent.type';


@Component({
  selector: 'app-radio-component',
  templateUrl: './radio-component.component.html',
  styleUrls: ['./radio-component.component.css']
})
export class RadioComponentComponent implements OnInit, IFormComponent {
  name: string;
  type: object;

  constructor() {
    this.name = 'Radio Button';
    this.type = RadioComponentComponent;
  }

  ngOnInit() {
  }
}
