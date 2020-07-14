# HumanApp Login Auth with Firebase
App movil de registro authenticacion de usuarios con firebase

Requisitos para ejecutar:
---------

- Clonar el repositorio
- Instalar dependencias:
```
$ npm install
```
- Declarar las tus llaves de firebase en *enviroment.ts* y *enviroment.prod.ts*

- Levantar el proyecto:
```
$ ionic serve
```

Detalle de entrega:
---------

- Creacion de una aplicacion sencilla de autenticion de usuarios con el framework Ionic y servicios de Firebase/Firestore
- Permite registro de usuarios, enviar correo de registro, inicio de sesion, recuperar clave, mantener sesion activa, cerrar sesion
- La aplicacion mantiene las validaciones pertinentes: Correo electronico valida, contrasena con minimo de caracteres, verificacion de correo electronico asociado.
- El apk fui buildeado para Android
- [BUG] Existe un problema con el registro de usuario: Una vez se envia el correo de verificacion y se valida el usuario, se debe cerrar la app y volver a abrir para que esta permita tomar la validacion desde firebase - *Estado: En correcion.*


*Autor del proyecto- Jesus Kauze*

