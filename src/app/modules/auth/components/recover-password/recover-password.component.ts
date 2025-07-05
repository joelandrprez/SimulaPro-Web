import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent {
    constructor(
      private _authService: AuthService,
      private router: Router) {

      const token = sessionStorage.getItem('authToken');
      if (token) {
        this.router.navigate(['/courses/list']);
      }    

    }
}
