import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
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
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(FormComponentsComponent);
      component = fixture.componentInstance;
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should open a call open() on click', fakeAsync(() =>{
    fixture.detectChanges();
    spyOn(component, 'open');

    let formcomponent = fixture.debugElement.query(By.css('.form-component > div'));
    formcomponent.triggerEventHandler('click', null);
    tick();
    fixture.detectChanges();

    expect(component.open).toHaveBeenCalled();

  }));
});
