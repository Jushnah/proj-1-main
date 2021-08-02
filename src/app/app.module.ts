import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';

import { AlumniModule } from './alumni/alumni.module';
import { AdminModule } from './admin/admin.module';
import { UsersService } from './admin/users.service';
import { FacultyModule } from './faculty/faculty.module';
import { JobHirerModule } from './job-hirer/job-hirer.module';
import { Router, RouterModule } from '@angular/router';
import { LogoutComponent } from './logout/logout.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterAlumniComponent } from './register-alumni/register-alumni.component';
import { RegisterEmployerComponent } from './register-employer/register-employer.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule} from '@angular/material/core';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    RegisterComponent,
    LogoutComponent,
    RegisterAlumniComponent,
    RegisterEmployerComponent,
        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FlashMessagesModule.forRoot(),
    AdminModule,
    AlumniModule,
    FacultyModule,
    JobHirerModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatInputModule,
    MatDatepickerModule
   
    
  ],
  providers: [
   
    AuthService,
    {                                       //Token-interceptor service but its implements something in it
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true     //multiple request
    },
    UsersService,
    FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
