import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormService } from '../../shared/form.service';

@Component({
  selector: 'app-modal-footer',
  templateUrl: './modal-footer.component.html',
  styleUrls: ['./modal-footer.component.css'],
  providers: [FormService]
})

export class ModalFooterComponent implements OnInit {
  constructor(public activeModal: NgbActiveModal, private formService: FormService) { }

  ngOnInit() {
  }

  saveForm(){
  	this.formService.saveForm();
  }

}
