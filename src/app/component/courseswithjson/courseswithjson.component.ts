import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CoursesService } from 'src/app/services/courses.service';
import { Coursejson } from 'src/app/model/Coursejson';

@Component({
  selector: 'app-courseswithjson',
  templateUrl: './courseswithjson.component.html',
  styleUrls: ['./courseswithjson.component.css']
})
export class CourseswithjsonComponent implements OnInit {
  coursesjson: Coursejson[];
  constructor(private formbuilder: FormBuilder,
    private router: Router, private courseservice: CoursesService) { }

  ngOnInit() {
    this.courseservice.getcoursesjson().subscribe(data => {
      this.coursesjson = data;
    });
  }
  addCoursejson(): void {
    this.router.navigate(['/coursewithjson']);
  }
 

  deleteCoursejson(coursejson: Coursejson): void {
    let result = confirm("Do you want to delete ?")
    if (result) {

      this.courseservice.deleteCoursejson(coursejson.id).subscribe(data => {
        this.coursesjson = this.coursesjson.filter(j => j !== coursejson);

      })

    }
  }
  editCoursejson(coursejson:Coursejson):void
 {
   localStorage.removeItem("editCourseId");
   localStorage.setItem("editCourseId",coursejson.id.toString()); 
  this.router.navigate(['editjson']);
 }
}
