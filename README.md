# Betha AI

Página web en español para una agencia de automatización, agentes de IA, aplicaciones y marketing. Marca comercial: Betha AI.

## Ejecutar

Requiere Node.js 18 o superior. No requiere instalar dependencias.

```sh
npm start
```

Abre http://127.0.0.1:4173. También puedes abrir `dist/index.html` directamente en el navegador.

## Comprobar

```sh
npm test
```

Comprueba la sintaxis JavaScript, los identificadores, la navegación, la calculadora, los flujos interactivos y la descarga del brief.

## Funciones

- Diseño adaptable a móviles y navegación accesible.
- Cuatro servicios y metodología en cuatro pilares.
- Tres arquitecturas de ejemplo con simulaciones locales.
- Calculadora de valor del tiempo recuperado con supuestos visibles.
- Preguntas frecuentes y brief de proyecto descargable.
- Visualización animada con soporte para movimiento reducido.

## Publicación

Publica el contenido de `dist/` en un proveedor de hosting estático. No hay compilación ni backend.

Las simulaciones no ejecutan integraciones reales. El formulario descarga un archivo local y no envía ni almacena datos. Los resultados del simulador de ahorro son estimaciones ilustrativas, no garantías comerciales.

Antes del lanzamiento comercial, personaliza la marca, los datos de contacto y las condiciones de la agencia.

## Catálogo, CRM y redes

La landing presenta 12 soluciones sectoriales seleccionadas a partir del inventario de GitHub. Los botones de implementación completan el objetivo del brief. El enlace del CRM está configurado como `https://wacrm-weld-eight.vercel.app/dashboard`, confirmado por el propietario. No hay captura automática de leads ni sincronización con el CRM.

Los siete iconos sociales son demostraciones sin enlaces oficiales. Configura los destinos en `socialProfiles` dentro de `dist/index.html`. Los SVG provienen de Bootstrap Icons, licencia MIT (ver `THIRD_PARTY_NOTICES.md`).

Para una integración real del formulario con WACRM, usa un backend con una clave de API de alcance `contacts:write`. Nunca incluyas la clave en el HTML público. Confirma primero dominio, cuenta, consentimiento y campos de contacto.
