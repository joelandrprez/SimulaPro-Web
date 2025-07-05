import { Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';
import { ChartData } from 'chart.js';
import { Chart } from 'chart.js';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';

Chart.register(DataLabelsPlugin);

@Component({
  selector: 'app-chart-pie',
  templateUrl: './chart-pie.component.html',
  styleUrls: ['./chart-pie.component.css']
})
export class ChartPieComponent implements OnInit {
  @Input() aciertos!: number;
  @Input() total!: number;

  public chartData!: ChartData<'pie', number[], string | string[]>;
  public chartOptions!: ChartOptions<'pie'>;

  ngOnInit(): void {
    const errores = this.total - this.aciertos;

    this.chartData = {
      labels: ['Aciertos', 'Errores'],
      datasets: [
        {
          data: [this.aciertos, errores],
          backgroundColor: ['#4caf50', '#f44336'],
          borderColor: '#fff',
          borderWidth: 1,
        }
      ]
    };

    this.chartOptions = {
      responsive: true,
      plugins: {
        legend: { display: false },
        datalabels: {
          color: '#fff',
          font: { weight: 'bold', size: 12 },
          formatter: (value: number, ctx) => {
            const total = ctx.chart.data.datasets[0].data.reduce((a: any, b: any) => a + b, 0);
            return `${Math.round((value / total) * 100)}%`;
          }
        }
      }
    };
  }
}
