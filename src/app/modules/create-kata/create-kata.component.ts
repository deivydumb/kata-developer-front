import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { KatasService } from 'src/app/core/services/katas/katas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-kata',
  templateUrl: './create-kata.component.html',
  styleUrls: ['./create-kata.component.css']
})
export class CreateKataComponent implements OnInit {

  kataForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private katasService: KatasService,
    private router: Router
  ) {
    this.kataForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      fecha_inicio: ['', Validators.required],
      fecha_fin: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.katasService.getKatas().subscribe({
      next: (res: any) => {
        console.log('Katas obtenidas:', res);
      },
      error: (err: any) => {
        console.error('Error al obtener katas:', err);
      }
    });
  }

  onSubmit() {
    if (this.kataForm.valid) {
      const formData = this.kataForm.value;
      this.katasService.createKata(formData).subscribe({
        next: (res:any) => {
          alert('Kata guardada exitosamente');
          this.kataForm.reset();
          this.router.navigate(['/admin']);
        },
        error: (err:any) => {
          console.error('Error al guardar kata:', err);
          alert('Error al guardar la kata');
        }
      });
    } else {
      alert('Por favor completa todos los campos');
    }
  }
}
