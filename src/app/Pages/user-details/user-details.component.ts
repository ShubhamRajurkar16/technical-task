import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{


  constructor(private authService:LoginService){}


  // to store the data comeing from backend and this data using interpolation
  data:any;
  ngOnInit(): void {
    this.authService.getUserDetail().subscribe((res:any) => this.data = res)

  }

  //use this dummy data to display the component
  users = [
    { id: 1, name: 'John Doe', userName: 'john@example.com' },
    { id: 2, name: 'Jane Smith', userName: 'jane@example.com'},
    { id: 3, name: 'Bob Johnson', userName: 'bob@example.com'},
  ];

}
