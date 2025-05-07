import { Component, OnInit } from '@angular/core';
import { KatasService } from 'src/app/core/services/katas/katas.service';
import { ParticipantsService } from 'src/app/core/services/participants/participants.service';

@Component({
  selector: 'app-register-kata',
  templateUrl: './register-kata.component.html',
  styleUrls: ['./register-kata.component.css']
})
export class RegisterKataComponent implements OnInit {
  confirmation: boolean = true;
  katas: any[] = [];
  kataSeleccionada: any;

  constructor(private readonly kataService:KatasService, private readonly participantsService: ParticipantsService) { }

  ngOnInit(): void {
    const user = JSON.parse(sessionStorage.getItem('token') || '{}');
    this.kataService.getKataByUserId(user.id).subscribe({
      next: (res:any) => {
        this.katas = res;
      }
      ,error: (err:any) => {
        console.error('Error al cargar katas:', err);
      }
    });
  }
  registrarse(kata_id:any){
   this.confirmation = false
  }

  cargarInformacionKata(kata: any) {
    this.kataSeleccionada = kata;
    this.confirmation = false
  }

  confirmarKata() {
    const user = JSON.parse(sessionStorage.getItem('token') || '{}');
    this.participantsService.createParticipant(this.kataSeleccionada.id, user.id).subscribe({
      next: (res:any) => {
        alert('Registro exitoso');
        this.kataSeleccionada = null;
        this.confirmation = true
      },
      error: (err:any) => {
        console.error('Error al registrar kata:', err);
        alert('Error al registrar kata');
      }
    });
  }

  volver() {
    console.log('Volver a la vista anterior');
    this.confirmation = true
  }

}
