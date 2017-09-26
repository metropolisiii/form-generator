import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { FormComponentsComponent } from './form-components/form-components.component';
import { MasterComponentComponent } from './master-component/master-component.component';
import { MainboardComponent } from './mainboard/mainboard.component';
import { RadioComponentComponent } from './form-components/components/radio-component/radio-component.component';
import { ChoicesComponent } from './form-components/components/shared/choices/choices.component';
import { OptionsComponent } from './form-components/components/shared/options/options.component';
import { TextInputComponent } from './form-components/components/text-input/text-input.component';
import { ModalHeaderComponent } from './form-components/modal-header/modal-header.component';
import { ModalFooterComponent } from './form-components/modal-footer/modal-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponentsComponent,
    MasterComponentComponent,
    MainboardComponent,
    RadioComponentComponent,
    ChoicesComponent,
    OptionsComponent,
    TextInputComponent,
    ModalHeaderComponent,
    ModalFooterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  entryComponents: [
    TextInputComponent
  ],  
  providers: [NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
