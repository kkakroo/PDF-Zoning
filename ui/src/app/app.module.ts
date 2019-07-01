import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {AccordionModule} from 'primeng/accordion';
import {MenuItem} from 'primeng/api'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';
import { routing }        from './app.routing';

import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { InsurancePoliciesComponent } from './components/insurance-policies/insurance-policies.component';
import {PolicyFormComponent} from './components/policy-form/policy-form.component';
import {TabViewModule} from 'primeng/tabview';
import {DropdownModule} from 'primeng/dropdown';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import {NgxExtendedPdfViewerModule} from 'ngx-extended-pdf-viewer';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AccordionModule,
    BrowserAnimationsModule,
    TableModule,
    routing,
    TabViewModule,
    DropdownModule,
    PdfViewerModule,
    NgxExtendedPdfViewerModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    HeaderComponent,
    LoginComponent,
    InsurancePoliciesComponent,
    PolicyFormComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/