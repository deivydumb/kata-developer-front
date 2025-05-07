import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KatasService {
  
constructor(private http: HttpClient) { }
   private apiURL = 'https://bmby56n8je.execute-api.us-east-1.amazonaws.com/v1/kata';

   getKatas(): any {
    return this.http.get(`${this.apiURL}`);
   }

   createKata(data: any): any {
    const body = {
      "nombre": data.nombre,
      "descripcion": data.descripcion,
      "fecha_inicio": data.fecha_inicio,
      "fecha_fin": data.fecha_fin
    }
    console.log('body', body);
    return this.http.post(`${this.apiURL}/creation`, body);
   }

    getKataByUserId(id: any): any {
      const params = new HttpParams().set('user_id', id);
      return this.http.get(`${this.apiURL}/user`, { params });
    }
    getKataRanking(kata_id:any){
      const params = new HttpParams().set('kata_id', kata_id);
      return this.http.get(`https://bmby56n8je.execute-api.us-east-1.amazonaws.com/v1/ranking`, { params });
    }
  }
