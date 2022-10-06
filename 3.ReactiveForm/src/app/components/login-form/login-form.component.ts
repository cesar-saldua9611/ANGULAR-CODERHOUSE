import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  isPasswordConfirmed: boolean = false;
  isSignUp: boolean = false;

  constructor(
    private formBuilder: FormBuilder
  ) 
  {
    this.loginForm = formBuilder.group({
      name: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.pattern('^(?=.*[A-Z])(?=.*[@$!%*#?&]).*[A-Za-z\\d@$!%*#?&]*$'), Validators.minLength(8), Validators.required]),
      confirmPassword: new FormControl('', [Validators.pattern('^(?=.*[A-Z])(?=.*[@$!%*#?&]).*[A-Za-z\\d@$!%*#?&]*$'), Validators.minLength(8), Validators.required])
    });
  }

  ngOnInit(): void { 
  }

  validateConfirmPassword(){
    if(this.loginForm.value.password != null && this.loginForm.value.password != ''){
      this.isPasswordConfirmed = this.loginForm.value.password === this.loginForm.value.confirmPassword;
    }
    else{
      this.isPasswordConfirmed = false;
    }
  }

  addUser(){
    console.log(this.loginForm);
    this.isSignUp = true;
  }
}
