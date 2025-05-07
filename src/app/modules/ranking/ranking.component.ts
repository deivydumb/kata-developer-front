import { Component, OnInit } from '@angular/core';
import { KatasService } from 'src/app/core/services/katas/katas.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
 katas: any[] = [];
 rankingElement= true
 participantes: any[] = [];
navegation: string[] = []
  constructor(private readonly kataServices:KatasService) { }



  ngOnInit(): void {
    this.NavegatioUser();
    this.kataServices.getKatas().subscribe({
      next: (res:any) => {
        console.log('Katas cargadas:', res);
        this.katas = res.body;
      }
      , error: (err:any) => {
        console.error('Error al cargar katas:', err);
      }
    });
    
  }
  NavegatioUser(){
    const user = JSON.parse(sessionStorage.getItem('token') || '{}');
    const rol = user.rol;
    if(rol === 'JURADO'){
      this.navegation = ['/admin']
    }
    else{
      this.navegation = ['/participant']
    }
  }


  kataRanking() {
    
    const kataID = this.katas[0]?.id;
  
    this.rankingElement = false;
  
    this.kataServices.getKataRanking(kataID).subscribe({
      next: (res: any) => {
        const agrupados: { [key: string]: { total: number, count: number, data: any } } = {};
  
        res.forEach((p: any) => {
          const key = `${p.nombre_usuario}_${p.kata_nombre}`;
          if (!agrupados[key]) {
            agrupados[key] = {
              total: p.ponderado,
              count: 1,
              data: { ...p }
            };
          } else {
            agrupados[key].total += p.ponderado;
            agrupados[key].count += 1;
          }
        });
        this.participantes = Object.values(agrupados).map(entry => {
          return {
            ...entry.data,
            ponderado: +(entry.total / entry.count).toFixed(2),
            evaluaciones: entry.count
          };
        }).sort((a, b) => b.ponderado - a.ponderado);
  
        console.log('Ranking de katas (agrupado):', this.participantes);
      },
      error: (err: any) => {
        console.error('Error al cargar ranking de katas:', err);
      }
    });
  }
  

   }

