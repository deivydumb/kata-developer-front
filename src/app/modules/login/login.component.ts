import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/core/services/users/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

 
  constructor(private readonly usersService:UsersService, private router:Router) { }
  ngOnInit(): void {

  }

  onSubmit(): void {
    if (this.username && this.password) {
    
    }
    this.usersService.login(this.username, this.password).subscribe({
      next: (response: any) => {
        console.log('response', response.body);
        if (response.statusCode === 200) {
          console.log('Login successful:', response.body.user);
          sessionStorage.setItem('token', JSON.stringify(response.body.user));
          console.log("Rol del usuario",response.body.user.rol)
          
          if(response.body.user.rol === 'JURADO'){
            this.router.navigate(['/admin']);
            console.log('Rol de administrador');
          }else if(response.body.user.rol === 'PARTICIPANTE'){  
            this.router.navigate(['/participant']);
            console.log('Rol de participante');
          }
        }else if(response.statusCode === 401){
          console.log('Login failed:', response.body);
   
        }
      },
      error: (error: any) => {
        console.error('Error:', error);
      }
    });
  }
}

function subscribe(arg0: { response: (response: any) => void; }) {
  throw new Error('Function not implemented.');
}
