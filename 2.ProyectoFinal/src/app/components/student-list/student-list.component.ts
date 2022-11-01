import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit, OnDestroy {
  studentServiceSubscription: Subscription;
  tableColumns: Array<string> = ['fullName', 'name', 'surname', 'age', 'email', 'actions'];
  dataSource!: MatTableDataSource<Student>;

  @ViewChild('listFilter') listFilter: any;

  constructor(
    private studentService: StudentService,
    private router: Router
  ) {
    this.studentServiceSubscription = studentService.getStudents().subscribe((observer: Student[]) => {
      this.dataSource = new MatTableDataSource<Student>(observer)

      if(this.listFilter != undefined && this.listFilter.nativeElement.value != '') {
        const searchValue = this.listFilter.nativeElement.value;
        this.dataSource.filter = searchValue.trim();
      }
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.studentServiceSubscription.unsubscribe();
  }

  filterTable($event: Event) {
    const searchValue = ($event.target as HTMLInputElement).value;
    this.dataSource.filter = searchValue.trim();
  }

  editStudent(id: number) {
    this.router.navigate(['students/edit', { id: id }]);
  }

  deleteStudent(id: number) {
    this.studentService.deleteStudent(id);
  }
}
