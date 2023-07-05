import { NgModule } from '@angular/core';
import {  Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './courses/course/course.component';
import { ErrorComponent } from './error/error.component';
import { CoursesService } from './Services/courses.service';
import { CourseGuardService } from './Services/course-guard.service';
import { AuthService } from './Services/auth.service';
import { CanDeactivateGuardService } from './Services/candeactivate-guard.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Contact', canDeactivate: [CanDeactivateGuardService] ,component: ContactComponent },
  { path: 'Courses', component: CoursesComponent },
  {
    path: 'Courses',canActivateChild: [CourseGuardService], children: [
      { path: 'Course/:id',  component: CourseComponent },
      // { path: 'Course/:name', component: CourseComponent }
    ]
  },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
