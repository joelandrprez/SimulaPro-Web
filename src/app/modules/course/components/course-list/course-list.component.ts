import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})

export class CourseListComponent {

  constructor(private router: Router) {}

  simuladores:any = [
    {
      titulo : "Simulador examen PMP",
      subtitulo : "Prueba tu preparación con exámenes reales ",
      imagen : "./../../../../../assets/pmp.webp",
      descripcion  : "Accede a un simulador inteligente con más de <strong>900 preguntas reales</strong> del examen PMP.Practica por dominios, simula exámenes cronometrados y mejora tu puntaje con estadísticas detalladas.",
      courseId  : 1
    },
    {
      titulo : "Simulador examen PMP",
      subtitulo : "Prueba tu preparación con exámenes reales ",
      imagen : "./../../../../../assets/pmp.webp",
      descripcion  : "Accede a un simulador inteligente con más de <strong>900 preguntas reales</strong> del examen PMP.Practica por dominios, simula exámenes cronometrados y mejora tu puntaje con estadísticas detalladas. ",
      courseId  : 2    
    },
    {
      titulo : "Simulador examen PMP",
      subtitulo : "Prueba tu preparación con exámenes reales ",
      imagen : "./../../../../../assets/pmp.webp",
      descripcion  : "Accede a un simulador inteligente con más de <strong>900 preguntas reales</strong> del examen PMP.Practica por dominios, simula exámenes cronometrados y mejora tu puntaje con estadísticas detalladas. ",
      courseId  : 3
    },
    {
      titulo : "Simulador examen PMP",
      subtitulo : "Prueba tu preparación con exámenes reales ",
      imagen : "./../../../../../assets/pmp.webp",
      descripcion  : "Accede a un simulador inteligente con más de <strong>900 preguntas reales</strong> del examen PMP.Practica por dominios, simula exámenes cronometrados y mejora tu puntaje con estadísticas detalladas. ",
      courseId  : 4      
    }            
  ]

  async OpenDetailCourse(courseId:number) {
    this.router.navigate(['/courses/detail', courseId]);
  }

}
