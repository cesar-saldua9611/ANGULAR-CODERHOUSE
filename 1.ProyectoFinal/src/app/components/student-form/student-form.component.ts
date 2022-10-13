import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  @Output() addStudent: EventEmitter<any> = new EventEmitter<any>();
  studentForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.studentForm = formBuilder.group({
      name: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.min(10), Validators.max(100), Validators.pattern('^\\d{1,}$')]),
      email: new FormControl('', [Validators.email, Validators.required])
    });
  }

  ngOnInit(): void {
  }

  submitForm() {
    console.log(this.studentForm);
    this.addStudent.emit(this.studentForm.value);
    this.studentForm.reset();
  }
}
