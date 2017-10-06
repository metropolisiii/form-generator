import { Injectable } from '@angular/core';
import {NgbModal, NgbModalRef, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class ModalService {

  private modalRef: NgbModalRef;
  closeResult: string;

  constructor(private modalService: NgbModal) { }

   /* Open a modal window with component passed in */ 
 
 open(component) {
  this.modalRef = this.modalService.open(component);
  this.modalRef.result.then((result) => {
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

  close(){
    this.modalRef.close();
  }

}
