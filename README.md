# Uso básico de Docker para aplicaciones web

Este proyecto explica cómo usar Docker para ejecutar aplicaciones web básicas utilizando:

- Apache
- Nginx
- PHP + Apache

Cada apartado es independiente. Se puede elegir **solo uno** según lo que se necesite.

---

## 📦 Apache con HTML, CSS y JavaScript

Este contenedor sirve archivos web estáticos usando Apache.

### Estructura del proyecto
web-docker/
├── Dockerfile
└── web/
    ├── index.html
    ├── style.css
    └── script.js


### Dockerfile
FROM httpd:2.4
COPY web/ /usr/local/apache2/htdocs/


### Construcción y ejecución
Desde la carpeta `web-docker`:
docker build -t web-apache .
docker run -d -p 8080:80 web-apache


Abrir en el navegador:
http://localhost:8080


---

## ⚡ Nginx con HTML, CSS y JavaScript

Nginx es un servidor web ligero y rápido, ideal para contenido estático.

### Dockerfile
FROM nginx:alpine
COPY web/ /usr/share/nginx/html/


### Construcción y ejecución
docker build -t web-nginx .
docker run -d -p 8080:80 web-nginx


Abrir en el navegador:
http://localhost:8080


---

## 🐘 PHP + Apache

Este contenedor permite ejecutar código PHP directamente en el servidor.

### Estructura del proyecto
web-docker/
├── Dockerfile
└── web/
    ├── index.html
    ├── style.css
    └── script.js


### Dockerfile
FROM php:8.2-apache
COPY web/ /var/www/html/


### Construcción y ejecución
docker build -t web-php-apache .
docker run -d -p 8080:80 web-php-apache


Abrir en el navegador:
http://localhost:8080


---

## 🔐 Subir imagen a Docker Hub

Para compartir la imagen es necesario iniciar sesión y subirla al repositorio.

docker login
docker tag web-apache usuario/web-apache:1.0
docker push usuario/web-apache:1.0


*(El nombre de la imagen debe coincidir con la creada en cada ejercicio)*

---

## 🚫 Problemas con puertos

Si el puerto `8080` está ocupado:

docker ps
docker stop ID_CONTENEDOR


---

## 📘 Notas finales

- Cada ejercicio es independiente.
- No es obligatorio realizar todos.
- El puerto usado es el 8080 en todos los casos para simplificar.
