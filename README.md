# Laboratorio 01 - DAW: Despliegue de Servidor Web con Docker y Apache

Este proyecto automatiza el despliegue de un servidor web Apache sobre una imagen de Ubuntu 24.04 utilizando Docker. Configura dos VirtualHosts independientes (`developers` y `webapp`) accesibles mediante alias de dominio local.

## Características del Proyecto

- **Contenedor:** Ubuntu 24.04.
- **Servidor Web:** Apache HTTP Server 2.x.
- **VirtualHosts:**
  - `developers.local`: Sitio web semántico desarrollado con HTML5, CSS3 y JS nativo (Validado por la W3C).
  - `webapp.local`: Despliegue de un proyecto web previo (Validado y corregido según estándares W3C).
- **Automatización:** Configuración de sitios, permisos y arranque de Apache gestionados íntegramente desde el `Dockerfile`.

## Estructura del Directorio

lab01-daw/
├── config/
│   ├── developers.conf      # Configuración del VirtualHost 1
│   └── webapp.conf          # Configuración del VirtualHost 2
├── developers/              # Archivos fuente del sitio 'Developers'
│   ├── img/
│   ├── index.html
│   ├── webstandards.html
│   ├── contact.html
│   ├── style.css
│   └── script.js
├── webapp/                  # Archivos fuente del proyecto previo
│   └── index.html           
└── Dockerfile               # Archivo de automatización de Docker

Guía de Despliegue (Paso a Paso)
Abre una terminal en la raíz de este proyecto y ejecuta los siguientes comandos:

1. Construcción de la Imagen (Build)
Se utiliza la bandera --no-cache para garantizar que Docker copie la versión más reciente de los archivos locales y no use capas antiguas en memoria.

Bash
docker build --no-cache -t proyecto-unsa .
2. Ejecución del Contenedor (Run)
Levantamos el contenedor en modo detached (-d), mapeando el puerto 80 interno de Apache al puerto 8080 de nuestra máquina anfitriona.

Bash
docker run -d -p 8080:80 --name servidor-web proyecto-unsa
3. Verificación de Estado
Para confirmar que el contenedor está activo y Apache escuchando:

Bash
docker ps
docker logs servidor-web
