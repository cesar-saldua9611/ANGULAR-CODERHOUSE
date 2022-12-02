import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Course } from 'src/app/core/models/course';
import { CourseService } from 'src/app/courses/services/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit, OnDestroy {
  courseServiceGetSubscription!: Subscription;
  courseServiceDeleteSubscription!: Subscription;
  tableColumns: Array<string> = ['name', 'teacher', 'startDate', 'endDate', 'isOpen', 'actions'];
  dataSource: MatTableDataSource<Course> = new MatTableDataSource<Course>();

  @ViewChild('listFilter') listFilter: any;

  constructor(
    private courseService: CourseService,
    private router: Router
  ) {
    
  }

  ngOnInit(): void {
    this.refreshTable();
  }

  ngOnDestroy(): void {
    this.courseServiceGetSubscription?.unsubscribe();
    this.courseServiceDeleteSubscription?.unsubscribe();
  }

  refreshTable() {
    this.courseServiceGetSubscription = this.courseService.getCourses().subscribe((observer: Course[]) => {
      this.dataSource = new MatTableDataSource<Course>(observer)

      if(this.listFilter != undefined && this.listFilter.nativeElement.value != '') {
        const searchValue = this.listFilter.nativeElement.value;
        this.dataSource.filter = searchValue.trim();
      }
    });
  }

  filterTable($event: Event) {
    const searchValue = ($event.target as HTMLInputElement).value;
    this.dataSource.filter = searchValue.trim();
  }

  editCourse(id: number) {
    this.router.navigate(['courses/edit', { id: id }]);
  }

  deleteCourse(id: number) {
    this.courseServiceDeleteSubscription = this.courseService.deleteCourse(id).subscribe((observer: Course) => {
      this.refreshTable();
    });
  }
}
