import { Component, OnInit } from '@angular/core';
import { KatasService } from 'src/app/core/services/katas/katas.service';
import { ParticipantComponent } from '../participant/participant.component';
import { ParticipantsService } from 'src/app/core/services/participants/participants.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evaluation-participants',
  templateUrl: './evaluation-participants.component.html',
  styleUrls: ['./evaluation-participants.component.css']
})
export class EvaluationParticipantsComponent implements OnInit {

  katas: any[] = [];
  participantes: any[] = [];
  kataSeleccionadaId: number | null = null;

  constructor(
    private katasService: KatasService,
    private participantService: ParticipantsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.katasService.getKatas().subscribe({
      next: (res:any) => {
        this.katas = res.body;
      },
      error: (err:any) => {
        console.error('Error al cargar katas:', err);
      }
    });
  }

onSubmit(kata_id:any){
this.router.navigate(['/evaluation', kata_id]);

}
}
