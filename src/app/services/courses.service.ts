import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../model/Course';
import { Coursejson } from '../model/Coursejson';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  baseUrl: string= "http://localhost:3000/courses";
  baseUrl2: string= "http://localhost:3000/coursesjson";
  
  constructor(private http:HttpClient) { }
   getcourses()
   {
   
     return this.http.get<Course[]>(this.baseUrl);
   }


  getcoursesjson()
  {
    return this.http.get<Coursejson[]>(this.baseUrl2);
  }

 
  //get users by id
  getCoursesById(id:number)
  {
    return this.http.get<Course>(this.baseUrl+"/"+id);
  }

  //create user
   createCourse(course: Course)
   {
    return this.http.post(this.baseUrl,course);
   }

  //delete users by id
  deleteCourse(id:number)
  {
    return this.http.delete(this.baseUrl+"/"+id);
  }
  deleteCoursejson(courseId:number)
  {
    return this.http.delete(this.baseUrl2+"/"+courseId);
  }
//modify user
editCourse(course:Course)
{
  return this.http.put(this.baseUrl+'/'+course.id,course);
}
editCoursejson(coursejson:Coursejson)
{
  return this.http.put(this.baseUrl2+'/'+coursejson.id,coursejson);
} 
}

