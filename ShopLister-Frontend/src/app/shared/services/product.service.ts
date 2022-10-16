import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: HttpClient) { }

  Register(data:any):Observable<any>{
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    return this._http.post<any>('http://localhost:8000/api/shops/',data,{headers:headers})
  }
  getShops():Observable<any>{
    return this._http.get<any>('http://localhost:8000/api/shops/')
  }
  getShopInfo(id:Number):Observable<any>{
    return this._http.get<any>(`http://localhost:8000/api/shops/${id}/`)
  }
  delete(id:Number):Observable<any>{
    return this._http.delete<any>(`http://localhost:8000/api/shops/${id}/`)

  }
  editInfo(id:Number,data:any):Observable<any>{
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    return this._http.put<any>(`http://localhost:8000/api/shops/${id}/`,data,{headers:headers})
  }
}
