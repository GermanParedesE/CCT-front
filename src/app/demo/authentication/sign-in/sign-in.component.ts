import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { RouterModule, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, SharedModule, RouterModule],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export default class SignInComponent {
  email: string = '';
  password: string = '';

  constructor(private loginService: LoginService, private router: Router) {}

  signIn() {
    this.loginService.validateAccount(this.email, this.password).subscribe(
      response => {
        // Aquí manejas la respuesta positiva (usuario autenticado)
        this.router.navigate(['/home']);
      },
      error => {
        // Aquí manejas el error (credenciales incorrectas, por ejemplo)
        alert('Email o contraseña incorrectos');
      }
    );
  }


}
