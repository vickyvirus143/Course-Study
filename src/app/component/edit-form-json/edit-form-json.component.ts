import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {  CoursesService } from 'src/app/services/courses.service';
import { Coursejson } from 'src/app/model/Coursejson';
@Component({
  selector: 'app-edit-form-json',
  templateUrl: './edit-form-json.component.html',
  styleUrls: ['./edit-form-json.component.css']
})
export class EditFormJsonComponent implements OnInit {

  editjsonForm: FormGroup;
  submitted:boolean=false;
  coursesjson: Coursejson[];
 
  constructor(private formbuilder:FormBuilder,
    private router:Router, private courseservice:CoursesService) { }
  

  ngOnInit() 
  {
    let courseId = localStorage.getItem("editCourseId");
    if(!courseId)
    {
      alert('Invalid Action');
      this.router.navigate(['coursewithjson']);
      return;
    }
  
    this.editjsonForm= this.formbuilder.group({
      id:[],
      courseId:[],
      courseName:['',Validators.required],
      coursePrice:['',Validators.required]
    
    });
   
      this.courseservice.getCoursesById(+ courseId).subscribe(data=>
        {this.editjsonForm.setValue(data)});
     
}

  onSubmit()
  {
    this.submitted = true;
    if(this.editjsonForm.invalid)
    {
      return;
    }
    this.courseservice.editCoursejson(this.editjsonForm.value)
    .subscribe(data =>{ 
      alert('record edited..!!');
    });
    this.router.navigate(['courseswithjson']);
  }

}
