import * as toastr from 'toastr';
import Swal from "sweetalert2";

export class Message {

  static async mostrarErrorServidor (reason: any) {
    const mensaje = await this.getDisplayError(reason);
    this.showErrorNotification(mensaje);
  }

  static mostrarErrorSimpleServidor(reason:any) {
    var mensajeError = '';
    reason.error.errors.detail.forEach((resp:any) =>{
      mensajeError = mensajeError + resp + '\n';
    })

    const mensaje = {
      title:mensajeError,
      detail: reason.error.title
    }

    return this.showErrorNotification(mensaje);
  }

  static  showErrorNotification = (mensaje:any) => {
    console.log(mensaje);
    toastr.error(mensaje.detail, mensaje.title);
  }

  static mostrarProcesando() {
    Swal.fire({
      text: "Espere un momento... procesando",
      showConfirmButton: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      didOpen: () => {
        Swal.showLoading();
      },
    })
  }

  static ocultarProcesando() {
    Swal.close();
  }

  static async getDisplayError(reason: any) {

    let bodyJSON:any = null;

    try {
      bodyJSON = await reason.error;
    } catch (error) {
      console.log('error: ', error);
    }

    const detailMensaje = {
      title: 'Sucedió un error inesperado',
      detail: 'Contacte con el área responsable de la aplicación',
    };

    if ( bodyJSON ) {
      let msgGlobal = '';

      if ( bodyJSON.errors ) {
        const errorKeys = Object.keys(bodyJSON.errors);

        if ( errorKeys.length > 0 ) {
          errorKeys.forEach( errorKey => {
            const totalErrors = bodyJSON.errors[errorKey].length;

            for (let i = 0; i < totalErrors; i++) {
              const msgError = bodyJSON.errors[errorKey][i];
              msgGlobal = msgGlobal + "- " + msgError + "\n";
            }

          })
        }

        detailMensaje.title = bodyJSON.title;
        detailMensaje.detail = msgGlobal + "\n" + "Id:" + bodyJSON.id;

      } else if (bodyJSON.errors ) {
        console.log('errors');

        bodyJSON.errors.template.forEach((msgError:any) =>{
          msgGlobal = msgGlobal + "- " + msgError + '\n';
        })

        detailMensaje.title = bodyJSON.title;
        detailMensaje.detail = msgGlobal + "\n" + "Id:" + bodyJSON.traceId;
      }
    }

    return detailMensaje;
  }

}
