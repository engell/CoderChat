[![CoderChat.NoDB logo](https://dl.dropboxusercontent.com/u/7563463/Imagenes/online/CoderChat/coderchat_logo.png "CoderChat.NoDB")](http://coderchat.herokuapp.com)

## By: [![Dark Engell](https://dl.dropboxusercontent.com/u/7563463/Imagenes/online/darkengell.png "Dark Engell")](http://engell.me) [![endorse](https://api.coderwall.com/engell/endorsecount.png)](https://coderwall.com/engell)

**CoderChat** es una plataforma tipo chat creada por [`Ángel Isaac Pizano`](http://engell.me/) pensada principalmente para el envio de `documentos`, `cógido`, `imágenes` y demás `archivos`.

En éste momento se encuentra en linea una versión de ésta aplicación en [http://coderchat.herokuapp.com](http://coderchat.herokuapp.com) para prueba en vivo. Así mismo el registro de toda la actividad desde el lanzamiento de la aplicación se encuentra en [éste documento](https://docs.google.com/spreadsheet/ccc?key=0AvNgqRc0XAtodDhkNGk0b280UU1sZVlFdEhscF9hQ2c#gid=1)

El enfoque para facilitar el envio de distintos documentos `[*.doc, *.png, *.pdf, etc...]` y código de distintos lenguajes de programación, `[*.html, *.rb, *.coffee, etc...]` hace de ésta plataforma una muy buena herramienta para un programador.

Implementa la tecnología de `Google Drive` para la gestión de archivos e integra `Gist` para enviar código de manera simple sin necesidad de salir de la misma aplicación.

También integra `Express Basic Authentication` para proteger la conversación y que no cualquiera tenga acceso a la misma. [En éste momento se encuentra desactivada, para activarla es necesario "descomentar" la linea 19 del archivo "app.js" y modificar los campos "username" y "password" a conveniencia].

Creada con `Node.js`, `jQuery`, y `Jade`; utiliza `Faye` cómo servidor para la interacción entre los distintos clientes logrando una plataforma completamente funcional **sin la necesidad de utilizar una Base de Datos**.

Para solucionar el "problema" de la persistencia de datos se implementó un script para registrar toda la actividad en un documento alojado en Google Drive.

	Click a las imágenes para agrandar.

[![CoderChat01](https://dl.dropboxusercontent.com/u/7563463/Imagenes/online/CoderChat/CoderChat00.png "CoderChat.NoDB01")](https://dl.dropboxusercontent.com/u/7563463/Imagenes/online/CoderChat/CoderChat00Full.png)
[![CoderChat02](https://dl.dropboxusercontent.com/u/7563463/Imagenes/online/CoderChat/CoderChat01.png "CoderChat.NoDB02")](https://dl.dropboxusercontent.com/u/7563463/Imagenes/online/CoderChat/CoderChat01Full.png)

>Para arrancar el servidor simplemente se ejecuta el comando `node app.js` en la carpeta principal.

>Si se activa la linea 19 de `app.js` al abrir la página por primera vez pide usuario y contraseña gracias a Express Basic Authentication los cuales son `username` y `password` respectivamente.

>Para activar la persistencia de datos (el registro en un documento alojado en GoogleDrive) se debe crear un macro de Google Apps Script e introducirse la URL del mismo en el "action" del form que se encuentra en el documento index.jade

Basado en:
[`Fayechat`](https://github.com/Jmlevick/fayechat)
[`Google Drive Picker`](https://gist.github.com/Jmlevick/5781122) y
[`POST a new Gist with Javascript`](https://gist.github.com/Jmlevick/5781079)
[`Google Spreadsheet`](https://gist.github.com/Jmlevick/5820002)

## Licencia

>[![Licencia Creative Commons](http://i.creativecommons.org/l/by-nc-sa/3.0/88x31.png)](http://creativecommons.org/licenses/by-nc-sa/3.0/deed.es)
CoderChat por [Ángel Isaac Pizano](http://engell.me) se encuentra bajo una [Licencia Creative Commons Atribución-NoComercial-CompartirIgual 3.0 Unported](http://creativecommons.org/licenses/by-nc-sa/3.0/deed.es).