import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseComponent } from './component/course/course.component';
import { CoursePlayApplicationComponent } from './component/course-play-application/course-play-application.component';
import { CourseswithjsonComponent } from './component/courseswithjson/courseswithjson.component';
import { EditComponent } from './component/edit/edit.component';
import { EditFormJsonComponent } from './component/edit-form-json/edit-form-json.component';

const routes: Routes = [
  {path:'',component: CoursePlayApplicationComponent},
  {path:'courseplayapplication',component: CoursePlayApplicationComponent},
  {path:'course',component:CourseComponent},
  {path:'courseswithjson',component:CourseswithjsonComponent},
  {path:'edit',component:EditComponent},
  {path:'editjson',component:EditFormJsonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
