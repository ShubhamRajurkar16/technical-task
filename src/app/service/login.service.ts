import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  private isAuthenticated: boolean = false; // Set initial value to false

  private baseurl = 'https://2d498810-949e-4838-abdc-900e3e20c1b3.mock.pstmn.io/'; // Replace with your API URL


  // use this function for genrate token
 public genrateToken(data:any)
  {
     return this.http.post(`${this.baseurl}token`,data)
  }

  // login user can set token in session storage
  public setToken(token:any)
  {
    return sessionStorage.setItem('token',token)
  }

  
  // get token we use multiple times wherever we used
  public getToken()
  {
    return sessionStorage.getItem('token')
  }
  

  // Function to check if the user exists
  checkUserExistence(userName: string, password: string): Observable<boolean> {
    const body = { userName, password };
    this.isAuthenticated = true;
    return this.http.post<boolean>(`${this.baseurl}/auth`, body);
    
  }

  // this feature for logout from the page
 public logout()
 {
   sessionStorage.removeItem('token');
   this.isAuthenticated = false;
   return true;
   
 }
 
 // this method for creating new user  
  public createUser(data:any){
    return this.http.post(`${this.baseurl}/create-user`,data)
  }
  
// this method for get data of users
   public getUserDetail(){
    return this.http.get(`${this.baseurl}/user-detail`)
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}
