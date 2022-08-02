import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AboutComponent } from './components/about/about.component';
import { JobXpComponent } from './components/job-xp/job-xp.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HysSkilsComponent } from './components/hys-skils/hys-skils.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { EducationComponent } from './components/education/education.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { interceptorProvider } from './service/iterceptor-service';
import { NewXpComponent } from './components/job-xp/new-xp.component';
import { EditXpComponent } from './components/job-xp/edit-xp.component';
import { NewEduComponent } from './components/education/new-edu.component';
import { EditEduComponent } from './components/education/edit-edu.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    AboutComponent,
    JobXpComponent,
    ContactComponent,
    FooterComponent,
    HysSkilsComponent,
    EducationComponent,
    ProjectsComponent,
    LoginComponent,
    HomeComponent,
    NewXpComponent,
    EditXpComponent,
    NewEduComponent,
    EditEduComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule

  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
