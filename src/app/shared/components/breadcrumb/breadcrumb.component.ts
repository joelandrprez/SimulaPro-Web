import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbItems: { label: string; url: string ; disable:boolean }[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.buildBreadcrumbs());

    // Para cuando se refresca con F5
    this.buildBreadcrumbs();
  }

  buildBreadcrumbs(): void {
    const urlSegments = this.router.url.split('/').filter(seg => seg);
    const breadcrumbs: { label: string; url: string ; disable:boolean }[] = [];
    const excludItem = ['detail','practice-result']
    let acumulado = '';
    for (const segment of urlSegments) {
      acumulado += `/${segment}`;
      let disable = true;
      if (excludItem.includes(segment)) {
        disable = false;
      } 
      breadcrumbs.push({
        label: this.formatLabel(segment),
        url: acumulado,
        disable:disable
      });
    }
    this.breadcrumbItems = breadcrumbs;
  }

  formatLabel(segment: string): string {
    const mapa: { [key: string]: string } = {
      list: 'Listado de Cursos',
      detail: 'Detalle del Curso',
      study: 'Modo Estudio',
      practice: 'Modo Práctica',
      examen: 'Modo Examen',
      'practic-stats': 'Modo Práctica',
      'practice-result' : 'Resultado'
    };
    return mapa[segment] || this.capitalize(segment);
  }

  capitalize(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
}
