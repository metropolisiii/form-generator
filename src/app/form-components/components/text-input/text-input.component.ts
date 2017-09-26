import { Component, OnInit, Input } from '@angular/core';
import { IFormComponent } from '../iformcomponent.type';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit, IFormComponent {
  name: string;
  type: object;
  
  constructor() {
    this.name = 'Text Input';
    this.type = TextInputComponent;
  }

  ngOnInit() {
  }

}
