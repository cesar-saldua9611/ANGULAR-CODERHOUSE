import { Component, OnInit } from '@angular/core';
import { Alumn } from 'src/app/models/alumn';
import { Grade } from 'src/app/models/gradeEnum';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  public alumnList: Array<Alumn>;
  
  constructor() { 
    this.alumnList = [
      new Alumn('Roberto', 'Ortega', 16, Grade.First, 85),
      new Alumn('Rubén', 'Garza', 17, Grade.First, 55),
      new Alumn('Mía', 'Ortíz', 16, Grade.First, 100),
      new Alumn('Javier', 'Guerrero', 16, Grade.First, 95),
      new Alumn('Camila', 'González', 18, Grade.Third, 70),
      new Alumn('Carlos', 'Ortíz', 18, Grade.Third, 80),
      new Alumn('Lorena', 'Gutiérrez', 16, Grade.Second, 60),
      new Alumn('Elizabeth', 'Ortega', 17, Grade.Third, 90),
      new Alumn('María Elena', 'Luna', 18, Grade.Third, 100),
      new Alumn('Alejandro', 'Guzmán', 16, Grade.Second, 55),
    ];
  }

  ngOnInit(): void {
  }

}
