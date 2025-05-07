import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  constructor(private http: HttpClient) { }
     private apiURL = 'https://bmby56n8je.execute-api.us-east-1.amazonaws.com/v1/evaluation';
  
     createEvaluation(data: any,jurado_id:any, participacion_id:any): any {

      const body = {
        "jurado_id": jurado_id,
        "participacion_id": participacion_id,
        "conocimiento": data.conocimiento,
        "innovacion": data.innovacion,
        "liderazgo": data.liderazgo,
        "comentario": data.comentario
      }
      return this.http.post(`${this.apiURL}/creation`, body)
     }
}
