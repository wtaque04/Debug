# DEBUG
Prueba de automatizacion
=======
Prueba Técnica DEBUG Y MEJORA (Playwright)

Este proyecto contiene un fragmento con un test automatizado defectuoso, el cual fue analizado y re escrito
corrigiendo incosistencias en la lógica, tiempos (fiming), y disponibilidad.
---

### Estructura del proyecto

/DEBUG
├── Backend/
│   └── index.ts
│
├── Frontend/
│   └── login.html
│
├── tests/
│   └── test-asistencia-falla.ts 
|   └── test-asistencia-corregido.ts
|
├── test-results/
│   
|   
├── tests/
│   └── test-asistencia-falla.ts 
|   └── test-asistencia-corregido.ts
|
├── package.json
├── README.md
├── package-lock.json
├── playwright.config.ts
├── tsconfig.json

---
### Se incluyen dos los dos test que validan el mismo flujo.
    - test-asistencia-corregido.spec.ts: versión optimizada y robusta
    - test-asistencia-falla.spec.ts: versión anterior o alternativa

---    
### Validaciones

-  Disponibilidad de la aplicacion y pantalla login para asi ejecutar el test.
    - await expect(page).toHaveTitle(/login/i);

-  Espera de elementos:
    -   await expect(usuario).toBeVisible();

-  Mejora en selectores para mejores practicas, rendimieento y mantenimiento. Se reemplaza:
    - await page.click('text="Solicitar asistencia"');
      por
    - await page.getByRole('button', { name: /solicitar asistencia/i }).click();

- Rendimiendo al comparar la eejecucion de cada test falla y corregido, se evidencia una diferencian diferencias
    - test corregido: 4.6 s
    - test falla: 5.3 s

---
### Requisitos

node.js
Playwright
Servidor Backend
Servidor Frontend

---

### Indicaciones para ejecutar proyecto

---

1. Instalar depndencias: npm install (node js).
2. Levantar servidor backend: npm run start:backend.
3. Levantar servidor frontend: npm run start:frontend.
# NOTA : Se pueden levantar los dos servidores al tiempo: npm run start.
4. Ejecutar test corregido: npm run test:corregido
5. Ejecutar test falla: npm run test:falla
---

### Scripts de ejecuion

1.  Servidor: npm run start
2.  Pruebas: npm run playwright test
---
### Notas importantes:

1.  Correr npm install --save-dev concurrently antes de levantar los servidores con scripts
