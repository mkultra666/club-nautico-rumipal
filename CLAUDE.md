# Continuidad del proyecto — Club Náutico Rumipal

Leé también `AGENTS.md`: contiene la estructura del sitio, cómo probarlo y publicarlo, la advertencia sobre las dos capas de `styles.css` y los datos pendientes de confirmar.

## Decisiones del usuario

- El sitio actual es la **v1**. Se descartó la v2; continuá trabajando sobre esta versión.
- Respetá el escudo, los colores azul y rojo del club y **Poppins**, su tipografía.
- Conservá la disposición de sponsors de la v1. El logo del Gobierno Municipal de Villa Rumipal debe verse proporcionado.
- La fecha del próximo partido se dejó como **referencial** a pedido del usuario. No hace falta actualizarla sin una nueva indicación.
- El contenido y los commits van en español rioplatense.

## Cambios de diseño ya publicados

- La sección de disciplinas dice **“Fútbol, nuestra identidad.”** y mantiene **“Entrenamiento, competencia y valores en cada etapa.”**
- Fútbol, Fútbol Senior e Inferiores se presentan como tres filas editoriales. La foto del jugador (`assets/futbol-primera.jpg`) pasó a una imagen panorámica debajo; no hay fotos propias de Senior ni de Inferiores todavía.
- Sponsors reales: Gobierno Municipal de Villa Rumipal como principal, y **Agroactiva** (`assets/agro1.png`) junto a la **Cooperativa de Electricidad, Obras y Servicios Públicos Ltda. de Villa Rumipal** (`assets/cope1.png`) debajo. Los colaboradores de la grilla son ficticios y están identificados como ejemplos.

## Abono mensual

Está en `index.html`, sección `#abono-mensual`, debajo del próximo partido. Sus estilos están en la capa editorial de `styles.css`, con ajustes responsive al final del archivo.

- Propuesta: **$18.000 por mes**, vía débito automático, con ingreso a todos los partidos que el Náutico juegue de local durante ese mes en el Estadio Ángel Audisio.
- Mensaje central: sumarse desde el comienzo del mes ayuda al club a preparar cada fecha.
- Beneficios adicionales solicitados: **en comercios del pueblo** y **en eventos del club**. Los comercios, eventos y condiciones aún no están definidos.
- El carnet es una ilustración en CSS con el escudo y la leyenda **MUESTRA**; no es una credencial válida.
- “Comprar abono mensual” abre un `mailto:` a `clubnauticorumipal@gmail.com`. No procesa pagos ni activa débitos. El bloque lo aclara expresamente. El usuario conectará una billetera o medio de pago si aprueba la propuesta.

## Estado y continuidad

- El abono con sus beneficios quedó publicado y verificado en GitHub Pages en el commit `63d70ea` (**“Sumar beneficios al abono mensual”**).
- Se revisó visualmente el abono a **390, 768 y 1440 px**, sin desbordes horizontales.
- No hay una nueva modificación solicitada después de este resumen. Seguí las próximas indicaciones del usuario y mantené visibles las aclaraciones de cualquier contenido referencial hasta contar con datos confirmados.

## Generador de placas para la comisión

- `comision/` es EZpost compilado para la web (fuente en `D:\EZpost`, `npm.cmd run build:web`). Ver `AGENTS.md`.
- Pedido del usuario: acceso con **clave compartida** (la tiene el usuario; no escribirla en el repo, que es público) y **solo PNG** en la web. El video y el MP4 quedan para la app de escritorio.
