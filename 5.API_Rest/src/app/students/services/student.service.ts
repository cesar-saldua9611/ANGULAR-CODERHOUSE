import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { StundentsData } from '../../core/data/students';
import { Student } from '../../core/models/student';

@Injectable()
export class StudentService {
  students: Student[] = StundentsData.students;
  studentsSubject: BehaviorSubject<Student[]>;

  constructor() {
    this.studentsSubject = new BehaviorSubject<Student[]>(this.students);
  }

  getStudents(): Observable<Student[]> {
    return this.studentsSubject.asObservable();
  }

  getStudentById(id: number): Observable<Student[]> {
    return this.getStudents().pipe(
      map((students: Student[]) => students.filter((student: Student) => student.id === id))
    );
  }

  addStudent(student: Student) {
    student.id = Math.round(Math.random() * 1000);
    console.log(student.id)
    this.students.push(student);
    this.studentsSubject.next(this.students);
  }

  editStudent(student: Student) {
    let index = this.students.findIndex((s: Student) => s.id === student.id);
    if (index > -1) {
      this.students[index] = student;
    }
    this.studentsSubject.next(this.students);
  }

  deleteStudent(id: number) {
    let index = this.students.findIndex((s: Student) => s.id === id);
    if (index > -1) {
      this.students.splice(index, 1);
    }
    this.studentsSubject.next(this.students);
  }
}
