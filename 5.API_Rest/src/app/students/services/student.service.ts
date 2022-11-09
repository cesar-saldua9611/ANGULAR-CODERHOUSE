import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StundentsData } from '../../core/data/students';
import { Student } from '../../core/models/student';

@Injectable()
export class StudentService {
  students: Student[] = StundentsData.students;
  studentsSubject: BehaviorSubject<Student[]>;

  constructor(
    private http: HttpClient
  ) {
    this.studentsSubject = new BehaviorSubject<Student[]>(this.students);
  }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${environment.api}/students`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    });
    // return this.studentsSubject.asObservable();
  }

  getStudentById(id: number) {
    return this.http.get<Student>(`${environment.api}/students/${id}`);
  }

  addStudent(student: Student) {
    this.http.post<Student>(`${environment.api}/students`, student).subscribe(console.log);
  }

  editStudent(student: Student) {
    this.http.put<Student>(`${environment.api}/students/${student.id}`, student).subscribe(console.log);
  }

  deleteStudent(id: number) {
    return this.http.delete<Student>(`${environment.api}/students/${id}`);
  }
}
