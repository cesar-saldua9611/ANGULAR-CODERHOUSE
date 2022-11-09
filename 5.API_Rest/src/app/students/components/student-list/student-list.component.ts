import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Student } from 'src/app/core/models/student';
import { StudentService } from 'src/app/students/services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit, OnDestroy {
  studentServiceGetSubscription!: Subscription;
  studentServiceDeleteSubscription!: Subscription;
  tableColumns: Array<string> = ['fullName', 'name', 'surname', 'age', 'email', 'actions'];
  dataSource: MatTableDataSource<Student> = new MatTableDataSource<Student>();

  @ViewChild('listFilter') listFilter: any;

  constructor(
    private studentService: StudentService,
    private router: Router
  ) {
    
  }

  ngOnInit(): void {
    this.refreshTable();
  }

  ngOnDestroy(): void {
    this.studentServiceGetSubscription?.unsubscribe();
    this.studentServiceDeleteSubscription?.unsubscribe();
  }

  refreshTable() {
    this.studentServiceGetSubscription = this.studentService.getStudents().subscribe((observer: Student[]) => {
      this.dataSource = new MatTableDataSource<Student>(observer)

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

  editStudent(id: number) {
    this.router.navigate(['students/edit', { id: id }]);
  }

  deleteStudent(id: number) {
    this.studentServiceDeleteSubscription = this.studentService.deleteStudent(id).subscribe((observer: Student) => {
      this.refreshTable();
    });
  }
}
