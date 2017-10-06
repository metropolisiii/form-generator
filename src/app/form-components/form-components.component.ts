import { Component, OnInit, ViewChild } from '@angular/core';

import { IFormComponent } from './components/iformcomponent.type';
import { RadioComponentComponent } from './components/radio-component/radio-component.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { ModalService } from '../shared/modal.service';

@Component({
  selector: 'app-form-components',
  templateUrl: './form-components.component.html',
  styleUrls: ['./form-components.component.css'],
  providers: [RadioComponentComponent, TextInputComponent]
})

export class FormComponentsComponent {
  components: Array<IFormComponent>;

  constructor(private radio: RadioComponentComponent,
              private text: TextInputComponent,
              private modalService: ModalService) {
    this.components = [radio, text];
  }

  open(index){
    this.modalService.open(this.components[index].type);
  }
}
