import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  constructor(private authService:LoginService,private router:Router){}

  registerForm=new FormGroup({
    name:new FormControl(null,[ Validators.required, Validators.minLength(4), Validators.maxLength(15)]),
    userName:new FormControl(null,[ Validators.required, Validators.minLength(4), Validators.maxLength(15)]),
    password:new FormControl(null,[Validators.required, Validators.maxLength(15),Validators.minLength(4)])
  })


  register() {

    this.authService.createUser(this.registerForm.value).subscribe((res:any)=>{console.log(res)
      this.router.navigate(['login'])
    })
  }
}
