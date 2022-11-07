import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Sesion } from '../../models/sesion';
import { SesionService } from '../../services/sesion.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  sesion$: Observable<Sesion>;
  
  constructor(
    private sesionService: SesionService
  ) { 
    this.sesion$ = sesionService.getSesion();
  }

  ngOnInit(): void {
  }

}
