import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewXpComponent } from './components/job-xp/new-xp.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditXpComponent } from './components/job-xp/edit-xp.component';
import { NewEduComponent } from './components/education/new-edu.component';
import { EditEduComponent } from './components/education/edit-edu.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'newxp', component: NewXpComponent},
  {path: 'editxp/:id', component: EditXpComponent},
  {path: 'newedu', component: NewEduComponent},
  {path: 'editedu/:id', component: EditEduComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
