import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

//services
import { AuthService } from './services/auth.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { FaqComponent } from './components/faq/faq.component';
import { UhomeComponent } from './components/uhome/uhome.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { FpasswordComponent } from './components/fpassword/fpassword.component';
import { UnavbarComponent } from './components/uhome/unavbar/unavbar.component';
import { UdashboardComponent } from './components/uhome/udashboard/udashboard.component';
import { TutorialsComponent } from './components/uhome/tutorials/tutorials.component';
import { QuestionsComponent } from './components/uhome/questions/questions.component';
import { ExamsComponent } from './components/uhome/exams/exams.component';
import { UstatusComponent } from './components/uhome/ustatus/ustatus.component';

const appRoutes: Routes =  [
  {path: '' , component : HomeComponent} ,
  {path: 'register' , component : RegisterComponent} ,
  {
    path: 'uhome' , component : UhomeComponent,
    children: [
      {path: '', component: UdashboardComponent }, 
      {path: 'tutorials', component: TutorialsComponent}, 
      {path: 'questions', component: QuestionsComponent}, 
      {path: 'exams', component: ExamsComponent}, 
      {path: 'status', component: UstatusComponent}, 
    ]
  } ,
  
  {path: 'forgotpass' , component: FpasswordComponent } ,
  {path: 'features' , component: FaqComponent } ,
  {path: 'aboutus' , component: ContactComponent } ,
  {path: 'profile' , component : ServicesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    ContactComponent,
    ServicesComponent,
    FaqComponent,
    UhomeComponent,
    RegisterComponent,
    LoginComponent,
    FpasswordComponent,
    UnavbarComponent,
    UdashboardComponent,
    TutorialsComponent,
    QuestionsComponent,
    ExamsComponent,
    UstatusComponent
    ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
