# AGENTS.md — Club Náutico Rumipal

Sitio institucional del Club Náutico Rumipal ("#VamosCiclón"), Villa Rumipal, Córdoba.
Sitio estático: HTML + CSS + JS puro. Sin build, sin dependencias, sin framework.

- Producción: https://mkultra666.github.io/club-nautico-rumipal/
- Repo: https://github.com/mkultra666/club-nautico-rumipal (rama `main`)
- Idioma del contenido y de los commits: español rioplatense (vos, "hacete socio").

## Archivos

| Archivo | Contenido |
|---|---|
| `index.html` | Home: hero, identidad, disciplinas, próximo partido, abono mensual, noticias, sponsors, socios, contacto |
| `noticias.html` | Nota destacada + grilla de noticias |
| `marcas.html` | Página comercial de sponsors y paquetes |
| `styles.css` | Todos los estilos (ver advertencia abajo) |
| `script.js` | Loader, menú móvil, reveal on scroll, contadores, formulario demo |
| `assets/` | Imágenes optimizadas que usa el sitio |

## Cómo verlo y publicar

- Local: `python -m http.server 5500` en la raíz → http://localhost:5500
- Publicar: `git push` a `main`. GitHub Pages despliega solo en 1–2 minutos.

## ⚠️ Trampa principal: `styles.css` tiene DOS capas

1. **Base** (líneas ~1–440), con sus media queries en `1050px / 860px / 600px`.
2. **Capa "CNR 2026 — Dirección de arte editorial"** (desde el comentario
   `/* ===== CNR 2026 ...` hasta el final). Redefine muchos componentes **fuera de
   media queries**, así que pisa los media queries de la capa base. Al final del
   archivo tiene sus **propios** media queries (`1050px / 860px / 600px`).

Consecuencia: si cambiás un layout de grilla en la capa 2, **tenés que corregir el
responsive en los media queries del final del archivo**, no en los de la base.
Ya pasó dos veces (el hero y las disciplinas quedaban en 3 columnas en el celular,
con texto de 16 px de ancho). Se arreglaron así.

Siempre probá a 390 px (celular), 768 px (tablet) y 1440 px (escritorio).

## Imágenes

- Los originales pesados (`assets/IMG_*`, `assets/logo rumipal.png`) están en
  `.gitignore`: no se suben.
- Antes de usar una foto nueva, optimizala a JPG (~1500–1800 px de lado mayor, calidad ~80):
  ```
  python -c "from PIL import Image; im=Image.open('assets/ORIGINAL.JPG').convert('RGB'); im.thumbnail((1800,1800)); im.save('assets/nombre.jpg','JPEG',quality=80,optimize=True,progressive=True)"
  ```
- En uso:
  - `portada-festejo.jpg`: foto del hero (festejo de gol).
  - `futbol-primera.jpg`: imagen panorámica debajo de las tres disciplinas. No hay fotos de Senior ni de Inferiores todavía.
  - `cuerpo-tecnico.jpg`: solo en la noticia del nuevo DT.
  - `sponsor-rumipal.png`: logo del main partner, recortado, texto blanco sobre transparente. Va solo sobre fondo oscuro.
  - `agro1.png`: logo de Agroactiva, sponsor real. Va sobre fondo oscuro.
  - `cope1.png`: logo de la Cooperativa de Electricidad, Obras y Servicios Públicos Ltda. de Villa Rumipal, sponsor real.
  - `logo-nautico.png`: escudo del club.

## Datos reales vs. de ejemplo

**Reales:**
- Main partner: **Gobierno Municipal de Villa Rumipal**.
- Sponsors ubicados debajo del main partner: **Agroactiva** y **Cooperativa de Electricidad, Obras y Servicios Públicos Ltda. de Villa Rumipal**.
- La disciplina "Hockey" se reemplazó por **Fútbol Senior**.

**Todavía son de ejemplo (pendiente de datos del club):**
- El abono mensual de $18.000, el débito automático y sus beneficios en comercios y eventos son una propuesta referencial. El botón abre una consulta por correo; no procesa pagos. Las condiciones están por definir.
- La fecha del próximo partido es referencial; el usuario pidió dejarla como está.
- WhatsApp `5490000000000`, en el botón "Quiero asociarme".
- Link de Instagram genérico (`https://instagram.com`).
- Colaboradores de ejemplo **ficticios**: COSTA, La Ribera, HORIZONTE, NORTE, VALLE,
  BYTE y SIERRAS. Hay un aviso en la home que lo aclara. Si se cargan marcas reales,
  actualizá ese aviso.
- El formulario de contacto no envía nada (solo muestra un mensaje en `script.js`).
  Falta conectarlo a Formspree, EmailJS o similar.

## Pendientes conocidos

- [ ] Las noticias son de julio 2026. Varios "Leer más" apuntan a `#`, y
      `#nota-nuevo-dt` en `noticias.html` no existe (el enlace de la home a `#nuevo-dt` sí funciona).
- [ ] Los filtros de `noticias.html` (Todas / Fútbol / Fútbol Senior / Institucional) no tienen JS.
- [ ] La tarjeta del partido en el celular se lee, pero los horarios (Reserva/Primera) están mal ubicados.
- [ ] El escudo del rival es un texto de reemplazo ("VD").
- [ ] El contador "1+ familia que no para de crecer" queda raro como dato.
