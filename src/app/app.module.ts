import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { FormComponentsComponent } from './form-components/form-components.component';
import { MasterComponentComponent } from './master-component/master-component.component';
import { MainboardComponent } from './mainboard/mainboard.component';
import { ComponentModalComponent } from './form-components/component-modal/component-modal.component';
import { RadioComponentComponent } from './form-components/components/radio-component/radio-component.component';
import { ChoicesComponent } from './form-components/components/shared/choices/choices.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponentsComponent,
    MasterComponentComponent,
    MainboardComponent,
    ComponentModalComponent,
    RadioComponentComponent,
    ChoicesComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
