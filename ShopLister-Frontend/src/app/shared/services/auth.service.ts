import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private _http: HttpClient) { }

  Register(data:any):Observable<any>{
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    return this._http.post<any>('http://localhost:8000/api/users/',data,{headers:headers})
  }
  Verify(data:any):Observable<any>{
    console.log("LoginData",data)
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    return this._http.post<any>('http://localhost:8000/login/',data,{headers:headers})
  }
  
 
  loggedIn(){
    return !!localStorage.getItem('token')
    
  }
  getToken(){
    
    return localStorage.getItem('token')
  }

}
