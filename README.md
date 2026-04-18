# Laboratorio 01 - DAW: Despliegue de Servidor Web con Docker y Apache

Este proyecto automatiza el despliegue de un servidor web Apache sobre una imagen de Ubuntu 24.04 utilizando Docker. Configura dos VirtualHosts independientes (`developers` y `webapp`) accesibles mediante alias de dominio local.

## Características del Proyecto

- **Contenedor:** Ubuntu 24.04.
- **Servidor Web:** Apache HTTP Server 2.x.
- **VirtualHosts:**
  - `developers.local`: Sitio web semántico desarrollado con HTML5, CSS3 y JS nativo (Validado por la W3C).
  - `webapp.local`: Despliegue de un proyecto web previo (Validado y corregido según estándares W3C).
- **Automatización:** Configuración de sitios, permisos y arranque de Apache gestionados íntegramente desde el `Dockerfile`.

----------------------------------------------------------------------------------------------------------------------------
GUÍA DE DESPLIEGUE: SERVIDOR APACHE + DOCKER        

[ PASO 1 ] CONFIGURACIÓN DEL DOMINIO LOCAL
----------------------------------------------------------------
Asegúrate de haber añadido esta línea en tu archivo "hosts" 
(Ruta: C:\Windows\System32\drivers\etc\hosts) 
* Recuerda editarlo como Administrador:

127.0.0.1    developers.local    webapp.local


[ PASO 2 ] CONSTRUCCIÓN DE LA IMAGEN
----------------------------------------------------------------
Abre tu terminal en la carpeta del proyecto y ejecuta este 
comando para crear la imagen limpia (sin usar caché):

docker build --no-cache -t proyecto-unsa .


[ PASO 3 ] EJECUCIÓN DEL CONTENEDOR
----------------------------------------------------------------
Levanta el servidor mapeando el puerto 80 del contenedor al 
puerto 8080 de tu computadora:

docker run -d -p 8080:80 --name servidor-web proyecto-unsa


[ PASO 4 ] ACCESO EN EL NAVEGADOR
----------------------------------------------------------------
El servidor ya está corriendo. Abre tu navegador y accede a:

Equipo Developers: http://developers.local:8080
Proyecto WebApp  : http://webapp.local:8080
