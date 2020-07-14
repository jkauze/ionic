import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from "../shared/authentication-service";


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  constructor( public authService: AuthenticationService, public router: Router, public alertController: AlertController) { }

  ngOnInit() {
  }

  resetPass(email) {
    this.authService.PasswordRecover(email.value)
    .then((res) => {
      this.presentAlert();
      this.router.navigate(['home']);
    }).catch((error) => {
      this.AlertError();
      window.alert(error.message);
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Resetear clave',
      subHeader: 'Estatus: Enviado',
      message: 'Se ha enviado el correo electronico de recuperacion de clave',
      buttons: ['OK'],
    });

    await alert.present();
    const result = await alert.onDidDismiss();
    console.log(result);
  }

  async AlertError() {
    const alert = await this.alertController.create({
      header: 'Usuario inexistente',
      subHeader: 'Estatus: error',
      message: 'Escriba una direccion de corre electronico valida',
      buttons: ['OK'],
    });

    await alert.present();
    const result = await alert.onDidDismiss();
    console.log(result);
  }


}
