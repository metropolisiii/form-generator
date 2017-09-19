import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-component-modal',
  templateUrl: './component-modal.component.html',
  styleUrls: ['./component-modal.component.css']
})
export class ComponentModalComponent implements OnInit {
  @ViewChild('modal') el: ElementRef;

  name: String;

  constructor() {
  	this.name = "";
  }

  ngOnInit() {
  }

  setName(name: String){
  	this.name=name;
  }

}
