import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  @Input() set studentsList(data: Array<Student>) {
    console.log('setting dataSource data: ', data)
    this.dataSource = new MatTableDataSource<Student>(data)
  };

  tableColumns: Array<string> = ['fullName', 'name', 'surname', 'age', 'email', 'actions'];
  dataSource!: MatTableDataSource<Student>;
  
  constructor() { 
    
  }

  ngOnInit(): void {
  }

  filterTable($event: Event) {
    const searchValue = ($event.target as HTMLInputElement).value;
    this.dataSource.filter = searchValue.trim();
  }

}
