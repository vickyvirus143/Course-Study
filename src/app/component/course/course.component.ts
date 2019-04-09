import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import {  CoursesService } from 'src/app/services/courses.service';
import { Course } from 'src/app/model/Course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses: Course[];
  duration : number;
  addForm: FormGroup;
  submitted:boolean=false;

  constructor(private formbuilder:FormBuilder,
    private router:Router, private courseservice:CoursesService) { }

  ngOnInit() {
    this.addForm= this.formbuilder.group({
      id:[],
     name:['',Validators.required],
      duration:['',Validators.required]
    
    });

    this.courseservice.getcourses().subscribe(data=>{
      this.courses = data;
    });

 }
  onSubmit()
  {
    this.submitted = true;
    if(this.addForm.invalid)
    {
      return;
    }
    this.courseservice.createCourse(this.addForm.value)
    .subscribe(data =>{ 
      alert('record added..!!');
    });
    this.router.navigate(['course']);
  }
  //delete
deleteCourse(course:Course):void
{
 let result= confirm("Do you want to delete ?")
 if(result)
 {
   this.courseservice .deleteCourse(course.id).subscribe(data=>{
     this.courses = this.courses.filter(c=> c!==course);
   })
 }
}


//adding User
addCourse():void
 {
  this.router.navigate(['course']);
 }
 //edit user
 editCourse(course:Course):void
 {
   localStorage.removeItem("editCourseId");
   localStorage.setItem("editCourseId",course.id.toString()); 
  this.router.navigate(['edit']);
 }
//get duration
showDuration(coursename):void
{
 this.courseservice.getcourses().subscribe(data=>{this.courses = data;
 for(let crs of this.courses){
   if(coursename == crs.name)
   {
  this.duration=crs.duration
   }
 }
  })
  

}
}

