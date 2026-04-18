FROM ubuntu:24.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -y apache2

RUN mkdir -p /var/www/developers /var/www/webapp

COPY config/developers.conf /etc/apache2/sites-available/
COPY config/webapp.conf /etc/apache2/sites-available/

COPY developers/ /var/www/developers/
COPY webapp/ /var/www/webapp/

RUN a2ensite developers.conf webapp.conf && a2dissite 000-default.conf

RUN chown -R www-data:www-data /var/www/

EXPOSE 80

CMD echo "Contenedor corriendo. Apache iniciado en el puerto 80." && apache2ctl -D FOREGROUND