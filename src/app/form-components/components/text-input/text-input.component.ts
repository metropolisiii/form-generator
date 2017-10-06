import { Component, OnInit, Input } from '@angular/core';
import { IFormComponent } from '../iformcomponent.type';
import { TextInput } from './text-input';
import { FormService } from '../../../shared/form.service';

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
  textInput = new TextInput('', '');
  
  constructor(private formService: FormService) {
    this.name = 'Text Input';
    this.type = TextInputComponent;
  }

  onSubmit(data) {
    this.submitted = true;
    this.formService.saveForm(data);
  }

  ngOnInit() {
  }
}
