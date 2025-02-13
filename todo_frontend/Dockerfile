# Dockerfile --  Es un entorno de web ligero
FROM httpd:alpine

# Configurar el ServerName para evitar advertencias
# Es una adventencia generado por Apache cuando no puede determinar el nombre de dominio completo del servidor 
RUN echo "ServerName localhost" >> /usr/local/apache2/conf/httpd.conf

# Esto sirve para la produccion. ----> PRUEBA 1
# COPY ./pages /usr/local/apache2/htdocs/
# COPY ./assets /usr/local/apache2/htdocs/assets/

# COPY ./pages /usr/local/apache2/htdocs    
# COPY ./pages/assets /usr/local/apache2/htdocs/assets
# COPY ./pages/images /usr/local/apache2/htdocs/images

EXPOSE 80
