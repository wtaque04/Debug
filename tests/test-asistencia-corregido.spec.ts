
import { test, expect } from '@playwright/test';

test('Solicitud de asistencia médica - (robusto)', async ({ page }) => {
  // 1. Validar que carga y se muestra la pantalla login -
  await page.goto('http://localhost:3000');
  await expect(page).toHaveTitle(/login/i);

  // 2. Rellenar y enviar formulario de login
  const usuario = page.locator('input[name="usuario"]');
  const clave = page.locator('input[name="clave"]');
  const loginBtn = page.locator('button[type="submit"]');


  await expect(usuario).toBeVisible();
  await usuario.fill('usuario_test');

  await expect(clave).toBeVisible();
  await clave.fill('clave123');

  await expect(loginBtn).toBeEnabled();
  await loginBtn.click();

  // 3. Esperar que se muestre la sección de asistencia
  const panelAsistencia = page.locator('#asistencia');
  await expect(panelAsistencia).toBeVisible();

  // 4. Hacer clic en botones
  const btnSolicitar = page.getByRole('button', { name: /solicitar asistencia/i });
  const btnMedica = page.getByRole('button', { name: /asistencia médica a domicilio/i });

  await expect(btnSolicitar).toBeVisible();
  await btnSolicitar.click();

  await expect(btnMedica).toBeVisible();
  await btnMedica.click();

  // 5. Rellenar dirección y confirmar
  const direccion = page.locator('#direccion');
  await expect(direccion).toBeVisible();
  await direccion.fill('Calle 123 #45 - 67');

  const btnConfirmar = page.locator('#btnConfirmar');
  await expect(btnConfirmar).toBeEnabled();
  await btnConfirmar.click();

  // 6. Verificar mensaje de éxito
  const resultado = page.locator('.resultado-confirmacion');
  await expect(resultado).toHaveText('Solicitud creada exitosamente');
});