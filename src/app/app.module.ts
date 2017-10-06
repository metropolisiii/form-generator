import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormComponentsComponent } from './form-components/form-components.component';
import { MasterComponentComponent } from './master-component/master-component.component';
import { MainboardComponent } from './mainboard/mainboard.component';
import { RadioComponentComponent } from './form-components/components/radio-component/radio-component.component';
import { ChoicesComponent } from './form-components/components/shared/choices/choices.component';
import { OptionsComponent } from './form-components/components/shared/options/options.component';
import { TextInputComponent } from './form-components/components/text-input/text-input.component';
import { FormService } from './shared/form.service';


@NgModule({
  declarations: [
    AppComponent,
    FormComponentsComponent,
    MasterComponentComponent,
    MainboardComponent,
    RadioComponentComponent,
    ChoicesComponent,
    OptionsComponent,
    TextInputComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  entryComponents: [
    TextInputComponent,
    RadioComponentComponent
  ],  
  providers: [NgbActiveModal, TextInputComponent, FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
