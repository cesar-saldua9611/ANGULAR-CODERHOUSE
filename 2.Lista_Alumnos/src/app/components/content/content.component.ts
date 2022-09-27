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
      new Alumn('Roberto', 'Ortega', 16, Grade.First),
      new Alumn('Rubén', 'Garza', 17, Grade.First),
      new Alumn('Mía', 'Ortíz', 16, Grade.First),
      new Alumn('Javier', 'Guerrero', 16, Grade.First),
      new Alumn('Camila', 'González', 18, Grade.Third),
      new Alumn('Carlos', 'Ortíz', 18, Grade.Third),
      new Alumn('Lorena', 'Gutiérrez', 16, Grade.Second),
      new Alumn('Elizabeth', 'Ortega', 17, Grade.Third),
      new Alumn('María Elena', 'Luna', 18, Grade.Third),
      new Alumn('Alejandro', 'Guzmán', 16, Grade.Second),
    ];
  }

  ngOnInit(): void {
  }

}
