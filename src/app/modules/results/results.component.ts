import { Component, OnInit } from '@angular/core';
import { ParticipantsService } from 'src/app/core/services/participants/participants.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(private readonly participantsService: ParticipantsService) { }

  ngOnInit(): void {
    this.participantsService.getParticipationsResults(1).subscribe({
      next: (res: any) => {
        console.log('Resultados obtenidos:', res);

      }
      , error: (err: any) => {
        console.error('Error al cargar resultados:', err);
      }
    });
  }

}
