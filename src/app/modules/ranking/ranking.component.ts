import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  constructor() { }

  participantes = [
    { nombre: 'Carlos Pérez', email: 'carlos@correo.com', rol: 'PARTICIPANTE', calificacion: 85 },
    { nombre: 'Ana López', email: 'ana@correo.com', rol: 'PARTICIPANTE', calificacion: 92 },
    { nombre: 'Luis García', email: 'luis@correo.com', rol: 'PARTICIPANTE', calificacion: 78 }
  ];

  ngOnInit(): void {

    this.participantes.sort((a, b) => b.calificacion - a.calificacion);
  }

}
