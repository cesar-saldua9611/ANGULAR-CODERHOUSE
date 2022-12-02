import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user';
import { SesionService } from 'src/app/core/services/sesion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario: FormGroup

  constructor(
    private sesionService: SesionService,
    private router: Router
  ) {
    this.formulario = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
      admin: new FormControl(true)
    })
  }

  ngOnInit(): void {
  }

  login(){
    let user: User = {
      id: 0,
      username: this.formulario.value.username,
      password: this.formulario.value.password,
      admin: this.formulario.value.admin
    }
    this.sesionService.login(user);
    this.router.navigate(['index']);
  }


}
