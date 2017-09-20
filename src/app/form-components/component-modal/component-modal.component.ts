import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-component-modal',
  templateUrl: './component-modal.component.html',
  styleUrls: ['./component-modal.component.css']
})
export class ComponentModalComponent implements OnInit {
  @ViewChild('modal') el: ElementRef;

  name: string;
  additionalOptions: boolean;

  constructor() {
  	this.name = "";
    this.additionalOptions = false;
  }

  ngOnInit() {
  }

  setName(name: string){
  	this.name=name;
  }

  setAdditionalOptions(hasAdditionalOptions: boolean){
    this.additionalOptions=hasAdditionalOptions;
  }
}
