import { Component, OnInit, ViewChild } from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


import { IFormComponent } from './components/iformcomponent.type';
import { RadioComponentComponent } from './components/radio-component/radio-component.component';
import { TextInputComponent } from './components/text-input/text-input.component';

@Component({
  selector: 'app-form-components',
  templateUrl: './form-components.component.html',
  styleUrls: ['./form-components.component.css'],
  providers: [RadioComponentComponent, TextInputComponent]
})

export class FormComponentsComponent {
  closeResult: string;
  components: Array<IFormComponent>;

  constructor(private modalService: NgbModal,
              private radio: RadioComponentComponent,
              private text: TextInputComponent) {
    this.components = [radio, text];
  }


 /* Open a modal window with component passed in */ 
 
 open(index) {
  this.modalService.open(this.components[index].type).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
