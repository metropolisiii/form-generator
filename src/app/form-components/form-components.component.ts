import { Component, OnInit, ViewChild } from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { ComponentModalComponent } from './component-modal/component-modal.component';

@Component({
  selector: 'app-form-components',
  templateUrl: './form-components.component.html',
  styleUrls: ['./form-components.component.css'],
})

export class FormComponentsComponent{
  closeResult: string;
  components: Array<string>;
  @ViewChild(ComponentModalComponent) modalel: ComponentModalComponent;

  constructor(private modalService: NgbModal) {
  	this.components = ['Radio Button'];
  }

 open(index) {
 	console.log(index);
 	this.modalel.setName(this.components[index]);
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
