import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private router: Router) { }
  logout(): void {
    sessionStorage.removeItem('authToken');
    this.router.navigate(['/auth/login']);
  }
}
