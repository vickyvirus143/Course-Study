import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursePlayApplicationComponent } from './component/course-play-application/course-play-application.component';
import { CourseComponent } from './component/course/course.component';
import { CourseswithjsonComponent } from './component/courseswithjson/courseswithjson.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './component/edit/edit.component';
import { EditFormJsonComponent } from './component/edit-form-json/edit-form-json.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursePlayApplicationComponent,
    CourseComponent,
    CourseswithjsonComponent,
    EditComponent,
    EditFormJsonComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
