import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CoursesData } from '../../core/data/courses';
import { Course } from '../../core/models/course';

@Injectable()
export class CourseService {
  courses: Course[] = CoursesData.courses;
  coursesSubject: BehaviorSubject<Course[]>;

  constructor(
    private http: HttpClient
  ) {
    this.coursesSubject = new BehaviorSubject<Course[]>(this.courses);
  }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${environment.api}/courses`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    });
    // return this.coursesSubject.asObservable();
  }

  getCourseById(id: number) {
    return this.http.get<Course>(`${environment.api}/courses/${id}`);
  }

  addCourse(course: Course) {
    this.http.post<Course>(`${environment.api}/courses`, course).subscribe(console.log);
  }

  editCourse(course: Course) {
    this.http.put<Course>(`${environment.api}/courses/${course.id}`, course).subscribe(console.log);
  }

  deleteCourse(id: number) {
    return this.http.delete<Course>(`${environment.api}/courses/${id}`);
  }
}
