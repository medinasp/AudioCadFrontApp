import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormControlDirective, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PaymentDetailFormComponent } from './payment-details/payment-detail-form/payment-detail-form.component';
import { ProjetoComponent } from './projetos/projeto.component';
import { ProjetoFormComponent } from './projetos/projeto-form/projeto-form.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectFormComponent } from './projects/projectl-form/project-form.component';
import { HttpClientModule } from '@angular/common/http';  

@NgModule({
  declarations: [
    AppComponent,
    PaymentDetailsComponent,
    PaymentDetailFormComponent,
    ProjetoComponent,
    ProjetoFormComponent,
    ProjectsComponent,
    ProjectFormComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
