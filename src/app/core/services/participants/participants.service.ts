import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParticipantsService {

  constructor(private http: HttpClient) { }
     private apiURL = 'https://bmby56n8je.execute-api.us-east-1.amazonaws.com/v1/';


  getParticipantsForKata(id: any,jurado:any) {
    const params = new HttpParams().set('katas_id', id).set('jurado_id', jurado);
    console.log('params', params);
    return this.http.get(`${this.apiURL}kata/participants`, { params });
  }
  
  createParticipant(katas_id:any, user_id:any): any {
    const body = {
      "katas_id": katas_id,
      "user_id":  user_id
    }
    console.log('body', body);
    return this.http.post(`${this.apiURL}participants`, body);
  }

  getParticipationsResults(id: any): any {
    const params = new HttpParams().set('user_id', id);
    return this.http.get(`${this.apiURL}participants/results`, { params });
  }
}
