import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { RouterModule } from '@angular/router';
import { LoginService} from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, SharedModule, RouterModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})


export default class SignUpComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  constructor(private loginService: LoginService, private router: Router) {}

  register() {
    if (this.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    const userData = {
      useraccount: this.username,
      emailaccount: this.email,
      passaccount: this.password,
      // Aquí debes establecer los valores adecuados para los siguientes campos
      type_user_id_user: 2, // Tipo de usuario (ajustar según tu lógica de negocio)
      agrupation_id_agrupation: null // ID de la agrupación (si es aplicable)
    };

    this.loginService.registerUser(userData).subscribe(response => {
      Swal.fire({
        title: 'Registro Exitoso',
        text: 'Tu cuenta ha sido creada',
        icon: 'success',
        confirmButtonText: 'Ok'
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/auth/signin']); // Redirigir a la página de inicio de sesión
        }
      });
      this.resetForm(); // Resetear el formulario
    }, error => {
      console.error(error);
      // Manejar errores de registro aquí
      Swal.fire({
        title: 'Error',
        text: 'Hubo un problema al crear tu cuenta',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    });
  }

  resetForm() {
    this.username = '';
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
  }
}
