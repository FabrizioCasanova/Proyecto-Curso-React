# GAME ZONE        

Proyecto de React.js destinado como entrega final para el curso de CoderHouse

Tienda e-commerce dedicada a la venta y distribucion de productos para el mundo de los videojuegos y/o de la computacion.


## Base Del Sitio

El sitio web esta creado mediante las siguientes librerias: React, react-router-dom para la creacion de las distintas rutas existentes, react-bootstrap para los elementos visuales de la pagina, y css para los distintos estilos que tiene la misma. Ademas cabe destacar la creacion de los distintos componentes que contiene la pagina los cuales se encuentran en distintos archivos ubicados en sus respectivas carpetas para la organizacion y el orden del codigo.

## Organizacion del codigo

Como mencione anteriormente los distintos componentes que existen en el sitio estan creados en archivos que se encuentran en sus respectivas carpetas, pero para especificar aun mas, mencionar como esta hecha la distribucion del todo el codigo: Dentro de la carpeta src es donde esta todo el codigo, en ella se encuentran 4 carpetas, estas son las carpetas componentes, containers, img, y utils. En la primera se pueden ver todos los elementos que forman el sitio, en la segunda encontramos los compartimientos en donde los elementos anteriormente mencionados se utilizan para renderizarse, en la carpeta img como su nombre lo indica contiene todas las imagenes utilizadas para el proyecto, y en la ultima, llamada utils, tenemos la configuracion de Firebase para la implementacion de una base de datos real proveniente, en este caso, de Google.

## Firebase Y Storage

Para tener una base de datos que no este simulada con una promesa creada en el codigo del proyecto, utilizamos Firebase, la plataforma móvil de Google, centrandonos en Firestore Database con el objetivo de traer desde alli toda la informacion de los productos expuestos en la web. Tambien utilizamos la funcion Storage para subir imagenes y generar una URL publica que nos permita mostrarlas sin problemas. 

## Frameworks Y Librerias Utilizadas

react v18.2.0 - Bootstrap v5.1 - react-dom v18.2.0 - react-router-dom v6.4.0 - react-icons: ^4.4.0 -  react-bootstrap: ^2.5.0 - @uiball/loaders": "^1.2.6" - @mui/material: ^5.10.4





















