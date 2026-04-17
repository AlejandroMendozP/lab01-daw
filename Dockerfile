FROM ubuntu:24.04
ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update && apt-get install -y apache2 && apt-get clean
COPY developers/ /var/www/developers/
COPY webapp/ /var/www/webapp/
COPY sitios.conf /etc/apache2/sites-available/sitios.conf
RUN a2ensite sitios.conf && a2dissite 000-default.conf
EXPOSE 80
CMD ["apachectl", "-D", "FOREGROUND"]