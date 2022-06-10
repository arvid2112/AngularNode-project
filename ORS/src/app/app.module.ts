import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollegeComponent } from './college/college.component';
import { CollegeListComponent } from './college/college-list.component';
import { CourseComponent } from './course/course.component';
import { CourseListComponent } from './course/course-list.component';
import { DataValidator } from './utility/data-validator';
import { FacultyComponent } from './faculty/faculty.component';
import { FacultyListComponent } from './faculty/faculty-list.component';
import { FootComponent } from './foot/foot.component';
import { FormsModule } from '@angular/forms';
import { HttpServiceService } from './http-service.service';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { MarksheetListComponent } from './marksheet/marksheet-list.component';
import { NavComponent } from './nav/nav.component';
import { RoleComponent } from './role/role.component';
import { RoleListComponent } from './role/role-list.component';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student/student-list.component';
import { SubjectComponent } from './subject/subject.component';
import { SubjectListComponent } from './subject/subject-list.component';
import { TimetableComponent } from './timetable/timetable.component';
import { TimetableListComponent } from './timetable/timetable-list.component';
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user/user-list.component';
import { MyProfileComponent } from './user/my-profile.component';
import { ChangePasswordComponent } from './user/change-password.component';

import { CookieService } from 'ngx-cookie-service';

import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { UserRegistrationComponent } from './login/user-registration.component';
import { ForgetPasswordComponent } from './login/forget-password.component';
import { GetMarksheetComponent } from './marksheet/get-marksheet.component';
import { MeritListComponent } from './marksheet/merit-list.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

export function myHttpLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    CollegeComponent,
    CollegeListComponent,
    UserComponent,
    UserListComponent,
    ForgetPasswordComponent,
    UserRegistrationComponent,
    ChangePasswordComponent,
    MyProfileComponent,
    CourseComponent,
    CourseListComponent,
    FacultyComponent,
    FacultyListComponent,
    
    MarksheetComponent,
    MarksheetListComponent,
    GetMarksheetComponent,
    MeritListComponent,
    RoleComponent,
    RoleListComponent,
    StudentComponent,
    StudentListComponent,
    SubjectComponent,
    SubjectListComponent,
    TimetableComponent,
    TimetableListComponent,
    WelcomeComponent,
    NavComponent,
    FootComponent,
    LoginComponent,
    PageNotFoundComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: myHttpLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    HttpServiceService,
    DataValidator,
    LoginComponent,
    CookieService,
    {provide: LocationStrategy,
      useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
