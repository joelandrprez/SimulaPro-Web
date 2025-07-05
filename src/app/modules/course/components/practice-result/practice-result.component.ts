import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PracticeService } from '../../services/practice.service';

export interface ResultadoPractica {
  fecha: Date;
  preguntas: number;
  tiempoTotalSegundos: number;
  aciertos: number;
  errores: number;
  estado: string;
}


@Component({
  selector: 'app-practice-result',
  templateUrl: './practice-result.component.html',
  styleUrls: ['./practice-result.component.css']
})
export class PracticeResultComponent implements OnInit {
  intento: any;

  resultadoPracticaMock = {
  totalPreguntas: 4,
  aciertos: 3,
  tiempoTexto: '6m 15s',
  porcentaje: 75,
  preguntas: [
    {
      texto: '¿Cuál es el propósito del acta de constitución del proyecto?',
      opciones: [
        { texto: 'Definir el presupuesto', correcta: false },
        { texto: 'Autorizar formalmente el proyecto', correcta: true },
        { texto: 'Estimar la duración', correcta: false },
        { texto: 'Asignar tareas a los equipos', correcta: false }
      ],
      seleccionadas: [0,1],
      explicacion:" explicacion Cuál es el propósito del acta de constitución del proyecto"
    },
    {
      texto: '¿Qué herramienta se utiliza para representar la EDT gráficamente?',
      opciones: [
        { texto: 'Diagrama de Gantt', correcta: false },
        { texto: 'Diagrama de Ishikawa', correcta: false },
        { texto: 'Estructura de Desglose del Trabajo (EDT)', correcta: true },
        { texto: 'Matriz RACI', correcta: false }
      ],
      seleccionadas: [0] // seleccionó incorrectamente
    },
    {
      texto: '¿Cuál es la mejor forma de gestionar los cambios en un proyecto?',
      opciones: [
        { texto: 'Solicitar aprobación verbal', correcta: false },
        { texto: 'Reunirse con el cliente', correcta: false },
        { texto: 'Usar un sistema formal de control de cambios', correcta: true },
        { texto: 'Informar al equipo directamente', correcta: false }
      ],
      seleccionadas: [2],
      explicacion:" explicacion Cuál es el propósito del acta de constitución del proyecto"

    },
    {
      texto: '¿Qué proceso incluye la identificación de interesados?',
      opciones: [
        { texto: 'Planificar la gestión de riesgos', correcta: false },
        { texto: 'Identificar a los interesados', correcta: true },
        { texto: 'Desarrollar el cronograma', correcta: false },
        { texto: 'Planificar el alcance', correcta: false }
      ],
      seleccionadas: [2],
      explicacion:" explicacion Cuál es el propósito del acta de constitución del proyecto"

    }
  ]
};


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private practiceService: PracticeService
  ) {

  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('idPractice');
    console.log(id);
    
    if (id) {
      this.intento = this.practiceService.getIntentoPorId(id);
    }

    if (!this.intento) {
      this.router.navigate(['/courses']);
    }
  }

  get porcentaje(): number {
    if (!this.intento) return 0;
    return Math.round((this.intento.aciertos / this.intento.preguntas) * 100);
  }

  tiempoTexto(segundos: number): string {
    const m = Math.floor(segundos / 60);
    const s = segundos % 60;
    return `${m}m ${s}s`;
  }
}
