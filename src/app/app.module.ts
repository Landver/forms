import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormsDemoApp } from './app.component';
import { DemoFormSkuWithBuilderComponent } from './demo-form-sku/demo-form-sku.component';

@NgModule({
  declarations: [
    FormsDemoApp,
    DemoFormSkuWithBuilderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [FormsDemoApp]
})
export class FormsDemoAppModule { }
