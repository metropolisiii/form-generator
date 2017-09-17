import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponentsComponent } from './form-components/form-components.component';
import { MasterComponentComponent } from './form-components/master-component/master-component.component';
import { MainboardComponent } from './mainboard/mainboard.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponentsComponent,
    MasterComponentComponent,
    MainboardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
