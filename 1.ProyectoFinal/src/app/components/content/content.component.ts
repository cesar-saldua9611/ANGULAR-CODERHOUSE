import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
//import { StundentsData } from 'src/app/data/students';
import { Student } from 'src/app/models/student';
import { StudentListComponent } from '../student-list/student-list.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  //public studentsList: Array<Student> = StundentsData.students;
  public studentsList: Array<Student> = [
    {
      name: 'Roberto',
      surname: 'Ortega',
      age: 16,
      email: 'roberto.ortega@gmail.com'
    },
    {
      name: 'Rubén',
      surname: 'Garza',
      age: 17,
      email: 'ruben.garza@gmail.com'
    },
    {
      name: 'Mía',
      surname: 'Ortíz',
      age: 16,
      email: 'mia.ortiz@gmail.com'
    },
    {
      name: 'Javier',
      surname: 'Guerrero',
      age: 16,
      email: 'javier.gerrero@gmail.com'
    },
    {
      name: 'Camila',
      surname: 'González',
      age: 18,
      email: 'camila.gonzalez@gmail.com'
    },
    {
      name: 'Carlos',
      surname: 'Ortíz',
      age: 18,
      email: 'carlos.ortiz@gmail.com'
    },
    {
      name: 'Lorena',
      surname: 'Gutiérrez',
      age: 16,
      email: 'lorena.gutierrez@gmail.com'
    },
    {
      name: 'Elizabeth',
      surname: 'Ortega',
      age: 17,
      email: 'elizabeth.ortega@gmail.com'
    },
    {
      name: 'María Elena',
      surname: 'Luna',
      age: 18,
      email: 'maria.luna@gmail.com'
    },
    {
      name: 'Alejandro',
      surname: 'Guzmán',
      age: 16,
      email: 'alejandro.guzman@gmail.com'
    }
  ];

  @ViewChild(StudentListComponent) studentListComponent!: StudentListComponent;

  constructor() { }

  ngOnInit(): void {
    console.log(this.studentsList)
  }

  addStudent($event: any) {
    this.studentsList.push($event);
    console.log(this.studentsList);
    this.studentListComponent.dataSource.connect().next(this.studentsList);
  }
}
