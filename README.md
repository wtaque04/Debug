# DEBUG
Prueba de automatizacion
=======
Prueba Técnica DEBUG Y MEJORA (Playwright)

Este proyecto contiene un fragmento con un test automatizado defectuoso, el cual fue analizado a su version 1, y actualizado
con los respectivos comentarios de meejora.
---
### Estructura del proyecto

API_REST/
├── postman/
│   └── coleccion.json
│
├── reporte/
│   └── reporte.html
│
├── src/
│   └── index.js 
│
├── package.json
├── README.md
├── package-lock.json
├── node_modules/
---
### Validaciones

- Respuesta HTTP.
- Respuesta válida.
- Campos obligatorios.
- Tiempo de respuesta menor a 2 segundos.
- Formato correcto de fecha ('YYYY-MM-DD').
- Validacion estructura usuarioId.
- Automatizacion con Newman y reporte HTML.
---
### Requisitos

node.js
Postman
Newman (npm -g install newman)
---

### Indicaciones para ejecutar proyecto
### Opciones de ejecución
---
### Opcion 1: Manual en Postman

1. Instalar depndencias: npm install (node js).
2. Abrir Postman.
3. Importar el archivo 'coleccion.json'
4. importar y ejecutar el archivo index.js deel servidor express.
5. Ejecutar la coleccion manualmente.
---
### Opcion 2: Automatizada con Newman

1. Instalar depndencias: npm install (node js).
2. Importar y ejecutar el archivo index.js del servidor express.
3. Ejecutar pruebas Automaticas con el comando npm test
4. Validar reporte html.
---
### Scripts de ejecuion

1.  Servidor: npm start
2.  Pruebas: npm test
---
### Notas importantes:

Si al ejecutar la prueba automatica con npm test ve un error relacionado con el paquete newman-reporter-html (conflicto de dependencias), usar comando: 
   
    - npm install --legacy-peer-deps

Esto soluciona el conflicto entre la version actual de newman (v6). y l paquete de reporte HTML, al esperar una version antigua.