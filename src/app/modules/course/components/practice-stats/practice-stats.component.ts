import { Component, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

export interface ResultadoPractica {
  fecha: Date;
  preguntas: number;
  tiempoTotalSegundos: number;
  aciertos: number;
  errores: number;
  estado: string;
}

@Component({
  selector: 'app-practice-stats',
  templateUrl: './practice-stats.component.html',
  styleUrls: ['./practice-stats.component.css']
})
export class PracticeStatsComponent {
  @Input() tiempoPromedio: number = 0;
  @Input() intentos: number = 0;
  @Input() aciertos: number = 0;
  @Input() total: number = 0;
  @Input() historial: ResultadoPractica[] = [
    {
      fecha: new Date(),
      preguntas: 25,
      tiempoTotalSegundos: 1400,
      aciertos: 18,
      errores: 3,
      estado: 'Aprobado',
    },
    {
      fecha: new Date(new Date().getTime() - 86400000),
      preguntas: 20,
      tiempoTotalSegundos: 1200,
      aciertos: 6,
      errores: 15,
      estado: 'Desaprobado'
    }
    ,
    {
      fecha: new Date(new Date().getTime() - 86400000),
      preguntas: 20,
      tiempoTotalSegundos: 1200,
      aciertos: 6,
      errores: 15,
      estado: 'Desaprobado'
    }
    ,
    {
      fecha: new Date(new Date().getTime() - 86400000),
      preguntas: 20,
      tiempoTotalSegundos: 1200,
      aciertos: 6,
      errores: 15,
      estado: 'Desaprobado'
    },
    {
      fecha: new Date(new Date().getTime() - 86400000),
      preguntas: 20,
      tiempoTotalSegundos: 1200,
      aciertos: 6,
      errores: 15,
      estado: 'Desaprobado'
    },
    {
      fecha: new Date(new Date().getTime() - 86400000),
      preguntas: 20,
      tiempoTotalSegundos: 1200,
      aciertos: 6,
      errores: 15,
      estado: 'Desaprobado'
    },
    {
      fecha: new Date(new Date().getTime() - 86400000),
      preguntas: 20,
      tiempoTotalSegundos: 1200,
      aciertos: 6,
      errores: 15,
      estado: 'Desaprobado'
    },
    {
      fecha: new Date(new Date().getTime() - 86400000),
      preguntas: 20,
      tiempoTotalSegundos: 1200,
      aciertos: 6,
      errores: 15,
      estado: 'Desaprobado'
    },
    {
      fecha: new Date(new Date().getTime() - 86400000),
      preguntas: 20,
      tiempoTotalSegundos: 1200,
      aciertos: 6,
      errores: 15,
      estado: 'Desaprobado'
    }
  ];

  resultadoSeleccionado: any = null;

  pieChartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    }
  };

  doughnutColors = [
    {
      backgroundColor: ['#4caf50', '#f44336'],
      borderWidth: 1
    }
  ];
  id:any = null;
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  get porcentaje(): number {
    return this.total > 0 ? Math.round((this.aciertos / this.total) * 100) : 0;
  }

  get tiempoFormateado(): string {
    const minutos = Math.floor(this.tiempoPromedio / 60);
    const segundos = this.tiempoPromedio % 60;
    return `${minutos}m ${segundos}s`;
  }

  tiempoTexto(segundos: number): string {
    const min = Math.floor(segundos / 60);
    const sec = segundos % 60;
    return `${min}m ${sec}s`;
  }

  formatoFecha(fecha: Date): string {
    return new Date(fecha).toLocaleString();
  }

  porcentajeExamen(aciertos: number, total: number): string {
    return total > 0 ? `${Math.round((aciertos / total) * 100)}%` : '0%';
  }

  esAprobado(aciertos: number, total: number): boolean {
    const porcentaje = total > 0 ? (aciertos / total) * 100 : 0;
    return porcentaje >= 70;
  }


  getPieData(aciertos: number, total: number) {
    const errores = total - aciertos;

    return {
      labels: ['Aciertos', 'Errores'],
      datasets: [
        {
          data: [aciertos, errores],
          backgroundColor: ['#4caf50', '#f44336'],
          borderColor: '#fff',
          borderWidth: 1,
        }
      ]
    };
  }

  trackById(index: number, item: any): any {
    return item.id || index;
  }

  verDetalle(intento: any) {
    intento.id = 12;
    console.log(intento);
    const path:string = `/courses/detail/${this.id}/practic-stats/practice-result`
    this.router.navigate([path,1])
  .then(success => console.log('Navegación exitosa:', success))
  .catch(err => console.error('Error en navegación:', err));

  }

}
