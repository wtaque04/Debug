//tests/test-asistencia-falla-spec.ts
import { test, expect } from '@playwright/test';

test('Solicitud de asistencia médica - falla', async ({ page }) => {
  // 
  await page.goto('http://localhost:3000');

  // Rellena el formulario de login
  await page.locator('input[name="usuario"]').fill('usuario_test');
  await page.locator('input[name="clave"]').fill('clave123');
  await page.click('button[type="submit"]');

  // Hacer clic en botones con texto
  await page.click('text="Solicitar asistencia"'); // -> Locator: Podria fallar si hay varios botones con el texto, si se cambia un espacio, o a mayúscula. Se recomienda usar id o clases mas estables.
  await page.click('text="Asistencia médica a domicilio"');

  // Rellenar dirección
  await page.locator('#direccion').fill('Calle 123 #45 - 67');

  // Confirmar solicitud
  await page.click('#btnConfirmar');

  // Verificar mensaje de éxito
  const resultado = page.locator('.resultado-confirmacion');
  await expect(resultado).toHaveText('Solicitud creada exitosamente');
});

