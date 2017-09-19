import { Component, OnInit, ViewChild } from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


import { IFormComponent } from './components/iformcomponent.type';
import { ComponentModalComponent } from './component-modal/component-modal.component';
import { RadioComponentComponent } from './components/radio-component/radio-component.component';

@Component({
  selector: 'app-form-components',
  templateUrl: './form-components.component.html',
  styleUrls: ['./form-components.component.css'],
  providers: [RadioComponentComponent]
})

export class FormComponentsComponent{
  closeResult: string;
  components: Array<IFormComponent>;
  @ViewChild(ComponentModalComponent) modalel: ComponentModalComponent;

  constructor(private modalService: NgbModal, private radio: RadioComponentComponent) {
  	this.components = [radio];
  }

 open(index) {
 	this.modalel.setName(this.components[index].name);
 	this.modalService.open(this.modalel.el).result.then((result) => {
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
