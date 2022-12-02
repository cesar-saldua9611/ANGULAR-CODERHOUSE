import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Course } from 'src/app/core/models/course';
import { CourseService } from 'src/app/courses/services/course.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit, OnDestroy {
  courseForm!: FormGroup;
  isEdit: Boolean = false;
  id: number = 0;
  activatedRouteSubscription!: Subscription;
  courseServiceSubscription!: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.courseForm = formBuilder.group({
      name: new FormControl('', [Validators.required]),
      teacher: new FormControl('', [Validators.required]),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      isOpen: new FormControl('', [Validators.required])
    });
    
    this.activatedRouteSubscription = this.activatedRoute.paramMap.subscribe((params) => {
      this.id = parseInt(params.get('id') || '0');
      if (this.id > 0) {
        this.isEdit = true;

        this.courseServiceSubscription = courseService.getCourseById(this.id).subscribe((course: Course) => {
          if (course != null) {
            this.courseForm = formBuilder.group({
              name: new FormControl(course.name, [Validators.required]),
              teacher: new FormControl(course.teacher, [Validators.required]),
              startDate: new FormControl(course.startDate, [Validators.required]),
              endDate: new FormControl(course.endDate, [Validators.required]),
              isOpen: new FormControl(course.isOpen, [Validators.required])
            });
          }
        })
      }
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.activatedRouteSubscription?.unsubscribe();
    this.courseServiceSubscription?.unsubscribe();
  }

  submitForm() {
    let course: Course = {
      id: this.id,
      name: this.courseForm.value.name,
      teacher: this.courseForm.value.teacher,
      startDate: this.courseForm.value.startDate,
      endDate: this.courseForm.value.endDate,
      isOpen: this.courseForm.value.isOpen
    };

    if (this.isEdit) {
      this.courseService.editCourse(course);
    }
    else {
      this.courseService.addCourse(course);
      this.courseForm.reset();
    }
    this.router.navigate(['courses/list']);
  }
}
