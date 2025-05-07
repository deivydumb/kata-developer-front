import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { concatMapTo } from 'rxjs';
import { EvaluationService } from 'src/app/core/services/evaluation/evaluation.service';
import { ParticipantsService } from 'src/app/core/services/participants/participants.service';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {

  kataId!: number;
  participantes: any[] = [];
  katas: any[] = [];
  evaluation= true
  participacionId: number | null = null;
  evaluacionForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private participantesService: ParticipantsService,
    private evaluationService: EvaluationService
  ) {
    this.evaluacionForm = this.fb.group({
      innovacion: [null, [Validators.required, Validators.min(0), Validators.max(10)]],
      liderazgo: [null, [Validators.required, Validators.min(0), Validators.max(10)]],
      conocimiento: [null, [Validators.required, Validators.min(0), Validators.max(10)]],
      comentario: ['', Validators.required],
    });
  }

  ngOnInit(): void {
   this.participanteSeleccionado();
    }
    
  participanteSeleccionado(): void {
    const data = localStorage.getItem('token')
    const user = JSON.parse(sessionStorage.getItem('token') || '{}');
    this.kataId = Number(this.route.snapshot.paramMap.get('kataId'));
  
    this.participantesService.getParticipantsForKata(this.kataId,user.id).subscribe({
      next: (res: any) => {
        this.participantes = res;
      },
      error: (err: any) => {
        console.error('Error al cargar katas:', err);
      }
    });
  }
  onSubmit() {
    const user = JSON.parse(sessionStorage.getItem('token') || '{}');
    this.evaluationService.createEvaluation(this.evaluacionForm.value, user.id,this.participacionId).subscribe({
      next: (res: any) => {
        alert('Evaluación guardada exitosamente');
        this.evaluacionForm.reset();
        this.evaluation = true
        this.participanteSeleccionado();
      }
      ,
      error: (err: any) => {
        console.error('Error al guardar evaluación:', err);
        alert('Error al guardar la evaluación');
      }
  })
    }

  evaluar(participante: any): void {
    console.log('Evaluando a:', participante);
    this.evaluation = false
    this.participacionId = participante;
  }

}
