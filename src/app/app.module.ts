import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {routingComponents} from './app-routing.module';
import { ModalModule, TooltipModule, PopoverModule, ButtonsModule } from 'angular-bootstrap-md';
import{HttpClientModule} from'@angular/common/http';
import { UserService } from './shared/user.service';
import { ToastrModule } from 'ngx-toastr';
import {FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { AuthGuard } from './auth.guard';
import { FilterJobPipe } from './filter-job.pipe';
import { FilterJobDatePipe } from './filter-job-date.pipe';

@NgModule({
  declarations: [
     AppComponent,
    routingComponents,
    FilterJobPipe,
    FilterJobDatePipe,
    
  
  ],
  imports: [
    
    
    FormsModule, 
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule,
    BrowserAnimationsModule,
    ModalModule,
     TooltipModule,
      PopoverModule,
       ButtonsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
  
  ],
  exports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule,
    BrowserAnimationsModule,
    ModalModule, TooltipModule, PopoverModule, ButtonsModule,
    HttpClientModule,
    
    
    FormsModule, 
    ReactiveFormsModule,

  ],
  providers: [UserService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
