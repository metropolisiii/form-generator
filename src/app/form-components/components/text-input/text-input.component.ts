import { Component, OnInit, Input } from '@angular/core';
import { IFormComponent } from '../iformcomponent.type';
import { TextInput } from './text-input';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit, IFormComponent {
  name: string;
  type: object;
  positions = Array<string>('Top', 'Left', 'Right');
  submitted = false;
  
  constructor() {
    this.name = 'Text Input';
    this.type = TextInputComponent;
  }

  onSubmit() {
    this.submitted = true;
  }

  ngOnInit() {
  }

}
