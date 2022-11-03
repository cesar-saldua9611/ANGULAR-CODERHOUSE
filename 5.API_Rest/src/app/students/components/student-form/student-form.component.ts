import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Student } from 'src/app/core/models/student';
import { StudentService } from 'src/app/students/services/student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit, OnDestroy {
  studentForm!: FormGroup;
  isEdit: Boolean = false;
  id: number = 0;
  activatedRouteSubscription!: Subscription;
  studentServiceSubscription!: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private studentService: StudentService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.activatedRouteSubscription = this.activatedRoute.paramMap.subscribe((params) => {
      this.id = parseInt(params.get('id') || '0');
      if (this.id > 0) {
        this.isEdit = true;

        this.studentServiceSubscription = studentService.getStudentById(this.id).subscribe((students) => {
          if (students.length > 0) {
            this.studentForm = formBuilder.group({
              name: new FormControl(students[0].name, [Validators.required]),
              surname: new FormControl(students[0].surname, [Validators.required]),
              age: new FormControl(students[0].age, [Validators.min(10), Validators.max(100), Validators.pattern('^\\d{1,}$')]),
              email: new FormControl(students[0].email, [Validators.email, Validators.required])
            });
          }
        })
      }
      else {
        this.studentForm = formBuilder.group({
          name: new FormControl('', [Validators.required]),
          surname: new FormControl('', [Validators.required]),
          age: new FormControl('', [Validators.min(10), Validators.max(100), Validators.pattern('^\\d{1,}$')]),
          email: new FormControl('', [Validators.email, Validators.required])
        });
      }
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.activatedRouteSubscription?.unsubscribe();
    this.studentServiceSubscription?.unsubscribe();
  }

  submitForm() {
    let student: Student = {
      id: this.id,
      name: this.studentForm.value.name,
      surname: this.studentForm.value.surname,
      age: this.studentForm.value.age,
      email: this.studentForm.value.email
    };

    if (this.isEdit) {
      this.studentService.editStudent(student);
    }
    else {
      this.studentService.addStudent(student);
      this.studentForm.reset();
    }
    this.router.navigate(['students/list']);
  }
}
