import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {  CoursesService } from 'src/app/services/courses.service';
import { Course } from 'src/app/model/Course';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editForm: FormGroup;
  submitted:boolean=false;
  courses: Course[];
 
  constructor(private formbuilder:FormBuilder,
    private router:Router, private courseservice:CoursesService) { }
  

  ngOnInit() 
  {
    let courseId = localStorage.getItem("editCourseId");
    if(!courseId)
    {
      alert('Invalid Action');
      this.router.navigate(['course']);
      return;
    }
  
    this.editForm= this.formbuilder.group({
      id:[],
     name:['',Validators.required],
      duration:['',Validators.required]
    
    });
   
      this.courseservice.getCoursesById(+ courseId).subscribe(data=>
        {this.editForm.setValue(data)});
     
}

  onSubmit()
  {
    this.submitted = true;
    if(this.editForm.invalid)
    {
      return;
    }
    this.courseservice.editCourse(this.editForm.value)
    .subscribe(data =>{ 
      alert('record edited..!!');
    });
    this.router.navigate(['course']);
  }

}
