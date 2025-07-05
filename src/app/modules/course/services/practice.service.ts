import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PracticeService {
  private historialMock: any[] = [
    {
      id: '1',
      fecha: new Date().toISOString(),
      preguntas: 5,
      aciertos: 3,
      tiempoTotalSegundos: 320,
      detallePreguntas: [
        {
          texto: '¿Cuál es el propósito principal de un Project Charter?',
          opciones: [
            { texto: 'Definir los entregables del proyecto', correcta: false },
            { texto: 'Autorizar formalmente el proyecto', correcta: true },
            { texto: 'Planificar las adquisiciones', correcta: false },
            { texto: 'Estimar costos del proyecto', correcta: false }
          ],
          seleccionadas: [0]
        },
        {
          texto: '¿Qué proceso pertenece al grupo de procesos de planificación?',
          opciones: [
            { texto: 'Desarrollar el plan para la dirección del proyecto', correcta: true },
            { texto: 'Identificar interesados', correcta: false },
            { texto: 'Dirigir y gestionar el trabajo del proyecto', correcta: false },
            { texto: 'Controlar los riesgos del proyecto', correcta: false }
          ],
          seleccionadas: [0]
        },
        {
          texto: '¿Cuál es el documento que define cómo se ejecuta, monitorea y controla el proyecto?',
          opciones: [
            { texto: 'Acta de constitución', correcta: false },
            { texto: 'Plan para la dirección del proyecto', correcta: true },
            { texto: 'Registro de interesados', correcta: false },
            { texto: 'Plan de gestión de recursos', correcta: false }
          ],
          seleccionadas: [3]
        },
        {
          texto: '¿Qué es una estructura de desglose del trabajo (EDT)?',
          opciones: [
            { texto: 'Lista de interesados', correcta: false },
            { texto: 'Lista de riesgos', correcta: false },
            { texto: 'Desglose jerárquico del alcance del proyecto', correcta: true },
            { texto: 'Cronograma del proyecto', correcta: false }
          ],
          seleccionadas: [2]
        },
        {
          texto: '¿Cuál es el propósito de realizar el análisis cualitativo de riesgos?',
          opciones: [
            { texto: 'Determinar el valor monetario esperado', correcta: false },
            { texto: 'Identificar los riesgos del proyecto', correcta: false },
            { texto: 'Evaluar la probabilidad e impacto de los riesgos', correcta: true },
            { texto: 'Desarrollar respuestas a los riesgos', correcta: false }
          ],
          seleccionadas: [1, 2, 3]
        }
      ]
    },
    // Puedes agregar más intentos aquí si deseas
  ];

  constructor() {}

  public getHistorial(): any[] {
    return this.historialMock;
  }

  public getIntentoPorId(id: string): any {
    return this.historialMock.find(item => item.id === id);
  }

  public agregarIntento(nuevoIntento: any): void {
    nuevoIntento.id = crypto.randomUUID(); // Asigna un id único simulado
    this.historialMock.unshift(nuevoIntento);
  }

  public limpiarHistorial(): void {
    this.historialMock = [];
  }
}
