import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Sesion } from '../../models/sesion';
import { SesionService } from '../../services/sesion.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  sesion$: Observable<Sesion>;
  
  constructor(
    private sesionService: SesionService
  ) { 
    this.sesion$ = sesionService.getSesion();
  }

  ngOnInit(): void {
  }

}
