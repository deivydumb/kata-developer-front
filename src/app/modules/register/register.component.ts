import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/core/services/users/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registroForm!: FormGroup;

  constructor(private fb: FormBuilder, private readonly usersService: UsersService,private router: Router) {}

  ngOnInit(): void {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.registroForm.valid) {
      this.usersService.createUser(this.registroForm.value).subscribe({
        next: (response: any) => {
          if (response.statusCode === 201) {
            this.router.navigate(['']);

          } else if (response.statusCode === 401) {
            console.log('Registro fallido:', response.body);
          }
        },
        error: (error: any) => {
          console.error('Error:', error);
        }
      });
      
    } else {
      console.log('Formulario inválido');
    }
  }
}
