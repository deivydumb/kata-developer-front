import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
   private apiURL = 'https://bmby56n8je.execute-api.us-east-1.amazonaws.com/v1/user';


   login(email: string, password: string): Observable<any> {
    const body = { 
      "email":email, 
      "password": password };
    return this.http.post(`${this.apiURL}/auth`, body);
  }
  


  createUser(data:any): Observable<any> {
    const body = {
      "nombre": data.nombre,
      "email": data.email,
      "password": data.password,
      "rol": "PARTICIPANTE"
  }
    return this.http.post(`${this.apiURL}/creation`, body);
  }
}
