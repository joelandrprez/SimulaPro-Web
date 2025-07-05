import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { firstValueFrom } from 'rxjs';
import { LoginRequest } from '../../models/auth.model';
import { Router } from '@angular/router';
import { Message } from 'src/app/shared/utils/Message';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private router: Router) {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    const token = sessionStorage.getItem('authToken');
    if (token) {
      this.router.navigate(['/courses']);
    }    

  }

  async onSubmit() {
    if (this.loginForm.valid) {
      Message.mostrarProcesando();
      const formData: LoginRequest = {
        email: this.loginForm.get('email')?.value,
        password: this.loginForm.get('password')?.value
      };

      try {
        const response = await firstValueFrom(this._authService.login(formData));
        if (response && response.data && response.data.token) {
          sessionStorage.setItem('authToken', response.data.token);
          this.router.navigate(['/courses']);
        }
        Message.ocultarProcesando();
      } catch (error:any) {
        Message.ocultarProcesando();
        Message.showErrorNotification(error.error);
        // console.log(error);
        
      }
    }
  }
}
