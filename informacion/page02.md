# Parte de Rojas Cerrón

Abrir `page02.html` en el navegador. No requiere instalación ni conexión a Internet.

- Ventana oscura con cuatro iconos SVG integrados y tres pestañas.
- La pestaña inicial es Select Shipping, como en la referencia.
- Tres opciones de envío excluyentes. Las pestañas y Previous/Next usan controles HTML y selectores CSS.
- Card debajo con color inicial RGB (80, 165, 92), tres deslizadores y tres campos numéricos entre 0 y 255.
- Los campos y deslizadores actualizan el mismo color. Los valores fuera del intervalo se limitan; los decimales se redondean y un campo vacío recupera el valor al salir.
- Distribución adaptada a pantallas pequeñas y controles accesibles por teclado.

## Integración

Conservar juntos `page02.html`, `css/page02.css` y `js/page02.js`. El enlace del inicio debe apuntar a `page02.html` (el enunciado del inicio también menciona page2.html; coordinar el nombre con el líder).

Todo el diseño utiliza HTML y CSS, sin librerías ni recursos externos. La actualización RGB utiliza JavaScript nativo en un archivo separado: HTML y CSS por sí solos no sincronizan los valores arbitrarios de los campos numéricos con los sliders y el color. Consultar con el docente esta limitación del enunciado si exige prohibir también JavaScript.

Las pestañas adicionales tienen textos de demostración porque la captura solo muestra Shipping. No se envían pedidos ni se necesita servidor.
