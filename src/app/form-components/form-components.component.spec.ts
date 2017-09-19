import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {NgbModule, NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


import { FormComponentsComponent } from './form-components.component';
import { ComponentModalComponent } from './component-modal/component-modal.component';

describe('FormComponentsComponent', () => {
  let component: FormComponentsComponent;
  let fixture: ComponentFixture<FormComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormComponentsComponent, ComponentModalComponent ],
      imports: [NgbModule.forRoot()]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
