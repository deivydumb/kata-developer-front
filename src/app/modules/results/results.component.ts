import { Component, OnInit } from '@angular/core';
import { ParticipantsService } from 'src/app/core/services/participants/participants.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  evaluations: any[] = [];
  constructor(private readonly participantsService: ParticipantsService) { }

  ngOnInit(): void {
    const user = JSON.parse(sessionStorage.getItem('token') || '{}');
    this.participantsService.getParticipationsResults(user.id).subscribe({
      next: (res: any) => {
        console.log('Resultados obtenidos:', res);
        this.evaluations= res;
      }
      , error: (err: any) => {
        console.error('Error al cargar resultados:', err);
      }
    });
    console.log('Evaluaciones:', this.evaluations);
  }
  

}
