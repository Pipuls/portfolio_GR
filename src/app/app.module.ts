import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
