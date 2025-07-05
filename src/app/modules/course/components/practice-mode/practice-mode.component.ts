import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-practice-mode',
  templateUrl: './practice-mode.component.html',
  styleUrls: ['./practice-mode.component.css']
})
export class PracticeModeComponent {
  form: FormGroup;
  opciones: string[] = [
    'Ejecutar el cambio inmediatamente para satisfacer al cliente.',
    'Seguir el proceso de control de cambios establecido.',
    'Escalar al comité directivo sin involucrar al equipo.',
    'Modificar el cronograma sin documentar el cambio.'
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      respuestas: this.fb.array(this.opciones.map(() => false))
    });
  }

  enviarRespuesta() {
    const respuestasSeleccionadas = this.form.value.respuestas
      .map((valor: boolean, index: number) => (valor ? this.opciones[index] : null))
      .filter((opcion: string | null) => opcion !== null);

    console.log('Respuestas seleccionadas:', respuestasSeleccionadas);
  }
}
