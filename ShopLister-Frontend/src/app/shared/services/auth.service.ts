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
  Verify(data:any){
    return this._http.post<any>('http://localhost:8080/login',data)
  }
  
  isLoggedIn(){
    const isData:any = localStorage.getItem('userData')
    return !! JSON.parse(isData).token
  }

}
