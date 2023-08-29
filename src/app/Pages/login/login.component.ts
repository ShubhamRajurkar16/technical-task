import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm=new FormGroup({
    userName:new FormControl(null,[ Validators.required, Validators.minLength(4), Validators.maxLength(15)]),
    password:new FormControl(null,[Validators.required, Validators.maxLength(15),Validators.minLength(4)])
  })

userName: string = '';
password: string = '';

constructor(private authService:LoginService, private router: Router) {}


login() {

  this.authService.genrateToken(this.loginForm.value).subscribe((res:any)=>{console.log(res)
    // set token is used to set token in session storage
  this.authService.setToken(res.token)
})

  this.authService.checkUserExistence(this.userName, this.password)
    .subscribe((userExists:any) => {
      if (userExists) {
        // User exists, navigate to the user page 
        this.router.navigate(['user-list']);
      } else {
        // User doesn't exist, show an error message or handle as needed
        alert('Invalid credentials. Please try again.');
        this.router.navigate(['register']);
      }
     
    });
}



}


