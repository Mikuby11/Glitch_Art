Aquí está el texto corregido:

// ATENCIÓN, ESTE ES UN COMENTARIO GENERAL PARA TODAS LAS PÁGINAS HECHAS POR MÍ, FDA HUMERES (glitchart.html, glitchbase.html, glitchstudio.html, index.html, naranjo.html, articles.js y style.css)

// Todos los HTML los hice en base a mi conocimiento adquirido en el ramo de "Intro. al Desarrollo Web" donde trabajamos con .js, .json, .html y .css, y trabajamos con bibliotecas y herramientas como webformatter, p5.js y Bootstrap como biblioteca y tutorial de cómo hacer cosas. Es así que el header de la página se ve como una plantilla, pero realmente no lo es, sino que es parte de los tutoriales de Bootstrap y se modificaron todos sus componentes, como color, cantidad de textos y fuentes, a partir de los propósitos que nosotros queríamos lograr. Todo lo que está abajo del header de la página está hecho también a partir de esta biblioteca, como se puede ver por sus containers, etc., pero se hizo en base a lo que yo hice anteriormente en ese ramo en mi propia página web. Aun así, hay algunas cosas en las cuales me ayudé de la IA Claude, más que nada para buscar de una forma más rápida en las herramientas de Bootstrap (ya que aún estoy aprendiendo toda la dimensión de Bootstrap) o para buscar cosas de HTML básicas; básicamente lo usé para que me explicara rápidamente herramientas de Bootstrap o como motor de búsqueda.

// Más abajo dejé también comentarios acerca de cosas puntuales de las que me ayudé de Claude.

// Para este JavaScript principalmente usé mis conocimientos previos en "Intro. al Desarrollo Web". En ese sentido me basé en mi propio archivo .js que hice en ese momento, el cual usé en mi propia página web/portafolio [www.mikuby.cl] para almacenar los datos de los proyectos.

// Lo único aparte es el hecho de que tenemos la aplicación, la cual por orden (y TOC personal) pasé aquí junto al script del GlitchStudio, el cual está destacado con comentarios donde empieza.

const articulos = [
  {
    categoria: "Cultura",
    categoriaColorClase: "text-primary-emphasis",
    titulo: "Sanrio Boom",
    fecha: "1 de Mayo",
    descripcion: "Ha habido un aumento del 70% en las ventas de las blindbox de la franquicia.",
    href: "#",
    imagen: "img/index/SanrioBoom.png"
  },
  {
    categoria: "Moda",
    categoriaColorClase: "text-info-emphasis",
    titulo: "Glitchcore o cómo convertir un error (digital) en moda",
    fecha: "2 de Mayo",
    descripcion: "El Glitch Moment/um es el título de un pequeño folleto que publicó Rosa Menkman en 2011. En la publicación, describió el arte glitch y el momento en que se encuentra el error.",
    href: "Glitchart.html",
    imagen: "img/index/GlitchWear.png"
  },
  {
    categoria: "Arte",
    categoriaColorClase: "text-danger-emphasis",
    titulo: "El arte del error con Rosa Menkman",
    fecha: "4 de Mayo",
    descripcion: "El Glitch Moment/um es el título de un pequeño folleto que publicó Rosa Menkman en 2011. En la publicación, describió el arte glitch y el momento en que se encuentra el error.",
    href: "Glitchart.html",
    imagen: "img/index/RosaMenkman.png"
  },
  {
    categoria: "Moda",
    categoriaColorClase: "text-info-emphasis",
    titulo: "Cinnamoroll Style",
    fecha: "Nov 11",
    descripcion: "Miniso lanza una nueva linea de articulos de aseo personal y cosmeticos del famoso perro nube de Sanrio.",
    href: "#",
    imagen: "img/index/PerroNube.png"
  },
  {
    categoria: "Cultura",
    categoriaColorClase: "text-primary-emphasis",
    titulo: "UWUCON Bogotá 2026",
    fecha: "4 de Mayo",
    descripcion: "La UWUCON 2025 reunió a miles de fans en Bogotá y dejó cifras récord: ¿cuál fue su verdadero impacto? El festival geek que transformó la ciudad en la capital de la cultura pop, creatividad e inclusión.",
    href: "#",
    imagen: "img/index/UwuCon.png"
  },
  {
    categoria: "Diseño",
    categoriaColorClase: "text-success-emphasis",
    titulo: "El BOOM del diseño vintage:",
    fecha: "8 de Mayo",
    descripcion: "Te traemos nuestro analisis de las claves de por qué lo nuevo ya no está de moda con proyectos como UMBO que reflejan el auge del diseño vintage y el valor del archivo en un contexto de sobreproducción.",
    href: "#",
    imagen: "img/index/DiseñoVintage.png"
  },
  {
    categoria: "Juegos",
    categoriaColorClase: "text-warning-emphasis",
    titulo: "Xbox vs la economía",
    fecha: "9 de Mayo",
    descripcion: "Xbox vuelve a subir los precios de sus consolas en Estados Unidos, culpando a la economía, a pesar de que hace unos meses la compañía de Microsoft anunció un cambio en sus precios, parece que las cosas se antojan complicadas dentro de Xbox.",
    href: "#",
    imagen: "img/index/Xbox.png"
  },
  {
    categoria: "Cultura",
    categoriaColorClase: "text-primary-emphasis",
    titulo: "Toletolers Gamers 2026 en Llolleo",
    fecha: "15 de Mayo",
    descripcion: "El evento llega a Plaza de Llolleo con cultura geek y entretención gratuita, organizado por el Departamento de Cultura de la Municipalidad de San Antonio.",
    href: "#",
    imagen: "img/index/ToletolersGamers.png" 
  }
];

function informacionArticulos() {
  const container = document.getElementById("articles-container");
  if (!container) return;

  container.innerHTML = articulos.map(articulo => `
    <div class="col-md-6 d-flex">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm position-relative w-100" style="">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 ${articulo.categoriaColorClase}">${articulo.categoria}</strong>
          <h3 class="mb-0">${articulo.titulo}</h3>
          <div class="mb-1 text-body-secondary">${articulo.fecha}</div>
          <p class="card-text mb-auto">${articulo.descripcion}</p>
          <a href="${articulo.href}" class="icon-link gap-1 icon-link-hover stretched-link">
            Siga leyendo
            <svg class="bi" aria-hidden="true"><use xlink:href="#chevron-right"></use></svg>
          </a>
        </div>
        <div class="col-auto d-none d-lg-block" style="width: 200px;">
          <img src="${articulo.imagen}" alt="${articulo.titulo}"
            style="oobject-fit: cover; width: 200px; height: 100%;"
          />
        </div>
      </div>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", informacionArticulos);

// ── GLITCH STUDIO ──
(function () {
  let imgOriginal = null, lienzo = null, listo = false, historial = [];
  let porcenH = 20, porcenV = 20, umbralSort = 100;
  let zoom = 0.7, offsetX = 0, offsetY = 0;
  let moviendo = false, clicX = 0, clicY = 0;

  const area = document.getElementById('gs-canvas-area');
  if (!area) return; // no está en esta página

  const hint = document.getElementById('gs-drop-hint');
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  area.insertBefore(canvas, area.firstChild);

  function resizeCanvas() {
    canvas.width = area.clientWidth;
    canvas.height = area.clientHeight;
    render();
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();
  offsetX = canvas.width / 2; offsetY = canvas.height / 2;

  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (!listo || !lienzo) return;
    ctx.save();
    ctx.translate(offsetX, offsetY);
    ctx.scale(zoom, zoom);
    ctx.drawImage(lienzo, -lienzo.width / 2, -lienzo.height / 2);
    ctx.restore();
    document.getElementById('gs-st-zoom').textContent = 'ZOOM ' + Math.round(zoom * 100) + '%';
  }

  function guardarHistorial() {
    if (!lienzo) return;
    historial.push(cloneCanvas(lienzo));
    if (historial.length > 20) historial.shift();
  }

  function deshacer() {
    if (historial.length === 0) return;
    lienzo = historial.pop();
    render();
  }

  function cloneCanvas(src) {
    const oc = document.createElement('canvas');
    oc.width = src.width; oc.height = src.height;
    oc.getContext('2d').drawImage(src, 0, 0);
    return oc;
  }

  window.gsImportarImagen = function () { document.getElementById('gs-fileInput').click(); };

  document.getElementById('gs-fileInput').addEventListener('change', function () {
    const file = this.files[0]; if (!file) return;
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      let w = img.width, h = img.height;
      if (w > 2000) { h = Math.round(h * 1800 / w); w = 1800; }
      const oc = document.createElement('canvas'); oc.width = w; oc.height = h;
      oc.getContext('2d').drawImage(img, 0, 0, w, h);
      imgOriginal = oc;
      lienzo = cloneCanvas(oc);
      listo = true; historial = [];
      hint.style.display = 'none';
      render();
      document.getElementById('gs-st-size').textContent = w + '×' + h + 'px';
    };
    img.src = url;
  });

  window.gsExportarImagen = function () {
    if (!listo) return;
    const a = document.createElement('a');
    a.download = 'glitch-' + Date.now() + '.png';
    a.href = lienzo.toDataURL('image/png');
    a.click();
  };

  window.gsReiniciar = function () {
    if (!imgOriginal) return;
    guardarHistorial();
    lienzo = cloneCanvas(imgOriginal);
    render();
  };

  window.gsDeshacer = deshacer;

  function getOffscreen() {
    const oc = document.createElement('canvas');
    oc.width = lienzo.width; oc.height = lienzo.height;
    const ox = oc.getContext('2d');
    ox.drawImage(lienzo, 0, 0);
    return { oc, ox };
  }
  function commitOffscreen(oc) { guardarHistorial(); lienzo = oc; render(); }

  window.gsTrazoCruz = function () {
    if (!listo) return;
    const { oc, ox } = getOffscreen();
    const id = ox.getImageData(0,0,oc.width,oc.height); const d = id.data;
    const W = oc.width, H = oc.height;
    const iter = Math.round(lerp(50, 1000, porcenV / 100));
    const len = Math.round(lerp(10, 300, porcenH / 100));
    for (let i = 0; i < iter; i++) {
      const x = randi(W), y = randi(H);
      const si = (x + y * W) * 4;
      const r = d[si], g = d[si+1], b = d[si+2], a = d[si+3];
      for (let j = -len/2; j < len/2; j++) {
        const xj = x + j | 0; if (xj >= 0 && xj < W) { const t = (xj + y * W) * 4; d[t]=r; d[t+1]=g; d[t+2]=b; d[t+3]=a; }
        const yj = y + j | 0; if (yj >= 0 && yj < H) { const t = (x + yj * W) * 4; d[t]=r; d[t+1]=g; d[t+2]=b; d[t+3]=a; }
      }
    }
    ox.putImageData(id, 0, 0); commitOffscreen(oc);
  };

  window.gsTrazoCirculo = function () {
    if (!listo) return;
    const { oc, ox } = getOffscreen();
    const iter = Math.round(lerp(10, 200, porcenV / 100));
    const r = Math.round(lerp(5, 150, porcenH / 100));
    const id = ox.getImageData(0,0,oc.width,oc.height).data;
    for (let i = 0; i < iter; i++) {
      const x = randi(oc.width), y = randi(oc.height);
      const si = (x + y * oc.width) * 4;
      ox.strokeStyle = `rgb(${id[si]},${id[si+1]},${id[si+2]})`;
      ox.lineWidth = 2; ox.beginPath(); ox.ellipse(x, y, r, r, 0, 0, Math.PI * 2); ox.stroke();
    }
    commitOffscreen(oc);
  };

  window.gsEcoHorizontal = function () {
    if (!listo) return;
    const { oc, ox } = getOffscreen();
    const id = ox.getImageData(0,0,oc.width,oc.height); const d = id.data;
    const copia = new Uint8ClampedArray(d);
    const dist = Math.round(lerp(0, 500, porcenH / 100));
    const f = porcenV / 100;
    for (let i = 0; i < d.length; i += 4) {
      const px = (i / 4) % oc.width;
      if (px - dist >= 0) {
        const ei = i - dist * 4;
        d[i] += (copia[ei] - d[i]) * f;
        d[i+1] += (copia[ei+1] - d[i+1]) * f;
        d[i+2] += (copia[ei+2] - d[i+2]) * f;
      }
    }
    ox.putImageData(id, 0, 0); commitOffscreen(oc);
  };

  window.gsRgbSplit = function () {
    if (!listo) return;
    const { oc, ox } = getOffscreen();
    const id = ox.getImageData(0,0,oc.width,oc.height); const d = id.data;
    const copia = new Uint8ClampedArray(d);
    const off = Math.round(lerp(0, 150, porcenH / 100));
    for (let y = 0; y < oc.height; y++) {
      for (let x = 0; x < oc.width; x++) {
        const loc = (x + y * oc.width) * 4;
        const locR = Math.min(oc.width - 1, x + off) + y * oc.width << 2;
        const locB = Math.max(0, x - off) + y * oc.width << 2;
        d[loc] = copia[locR]; d[loc+2] = copia[locB+2];
      }
    }
    ox.putImageData(id, 0, 0); commitOffscreen(oc);
  };

  window.gsCambiarColor = function () {
    if (!listo) return;
    const { oc, ox } = getOffscreen();
    const id = ox.getImageData(0,0,oc.width,oc.height); const d = id.data;
    const intensity = lerp(0, 255, porcenH / 100);
    for (let i = 0; i < d.length; i += 4) {
      if (Math.random() * 100 < porcenV) {
        d[i] = (d[i] + intensity) % 256;
        d[i+2] = (d[i+2] + intensity / 2) % 256;
      }
    }
    ox.putImageData(id, 0, 0); commitOffscreen(oc);
  };

  window.gsGlitchHorizontal = function () {
    if (!listo) return;
    const { oc, ox } = getOffscreen();
    const h = Math.round(lerp(1, 50, porcenV / 100));
    const w = Math.round(lerp(10, oc.width, porcenH / 100));
    for (let i = 0; i < 20; i++) {
      const x = randi(oc.width), y = randi(oc.height);
      const dx = Math.round(Math.random() * 100 - 50);
      ox.drawImage(oc, x, y, w, h, x + dx, y, w, h);
    }
    commitOffscreen(oc);
  };

  window.gsGlitchVertical = function () {
    if (!listo) return;
    const { oc, ox } = getOffscreen();
    const w = Math.round(lerp(1, 50, porcenH / 100));
    const h = Math.round(lerp(10, oc.height, porcenV / 100));
    for (let i = 0; i < 20; i++) {
      const x = randi(oc.width), y = randi(oc.height);
      const dy = Math.round(Math.random() * 100 - 50);
      ox.drawImage(oc, x, y, w, h, x, y + dy, w, h);
    }
    commitOffscreen(oc);
  };

  window.gsSortH = function () { if (listo) sorting(true); };
  window.gsSortV = function () { if (listo) sorting(false); };

  function sorting(horiz) {
    const { oc, ox } = getOffscreen();
    const id = ox.getImageData(0,0,oc.width,oc.height); const d = id.data;
    const W = oc.width, H = oc.height;
    for (let i = 0; i < (horiz ? H : W); i++) {
      if (Math.random() * 100 < 50) {
        if (horiz) sortRow(d, i, W); else sortCol(d, i, W, H);
      }
    }
    ox.putImageData(id, 0, 0); commitOffscreen(oc);
  }

  function getPixelBrightness(d, idx) {
    const i = idx * 4; return d[i] * 0.299 + d[i+1] * 0.587 + d[i+2] * 0.114;
  }

  function sortRow(d, y, W) {
    let x = 0;
    while (x < W) {
      let start = x; while (start < W && getPixelBrightness(d, start + y * W) <= umbralSort / 2) start++;
      if (start >= W) break;
      let end = start + 1; while (end < W && getPixelBrightness(d, end + y * W) > umbralSort / 2) end++;
      const seg = [];
      for (let i = start; i < end; i++) { const idx = (i + y * W) * 4; seg.push([d[idx], d[idx+1], d[idx+2], d[idx+3]]); }
      seg.sort((a, b) => (a[0]*0.299+a[1]*0.587+a[2]*0.114) - (b[0]*0.299+b[1]*0.587+b[2]*0.114));
      for (let i = 0; i < seg.length; i++) { const idx = (start + i + y * W) * 4; d[idx]=seg[i][0]; d[idx+1]=seg[i][1]; d[idx+2]=seg[i][2]; d[idx+3]=seg[i][3]; }
      x = end;
    }
  }

  function sortCol(d, x, W, H) {
    let y = 0;
    while (y < H) {
      let start = y; while (start < H && getPixelBrightness(d, x + start * W) <= umbralSort / 2) start++;
      if (start >= H) break;
      let end = start + 1; while (end < H && getPixelBrightness(d, x + end * W) > umbralSort / 2) end++;
      const seg = [];
      for (let i = start; i < end; i++) { const idx = (x + i * W) * 4; seg.push([d[idx], d[idx+1], d[idx+2], d[idx+3]]); }
      seg.sort((a, b) => (a[0]*0.299+a[1]*0.587+a[2]*0.114) - (b[0]*0.299+b[1]*0.587+b[2]*0.114));
      for (let i = 0; i < seg.length; i++) { const idx = (x + (start + i) * W) * 4; d[idx]=seg[i][0]; d[idx+1]=seg[i][1]; d[idx+2]=seg[i][2]; d[idx+3]=seg[i][3]; }
      y = end;
    }
  }

  // Sliders
  document.getElementById('gs-sliderH').addEventListener('input', function () {
    porcenH = +this.value;
    document.getElementById('gs-valH').textContent = this.value;
  });
  document.getElementById('gs-sliderV').addEventListener('input', function () {
    porcenV = +this.value;
    document.getElementById('gs-valV').textContent = this.value;
  });
  document.getElementById('gs-sliderU').addEventListener('input', function () {
    umbralSort = +this.value;
    document.getElementById('gs-valU').textContent = this.value;
  });

  // Canvas interaction
  canvas.addEventListener('wheel', e => {
    e.preventDefault();
    zoom = Math.min(8, Math.max(0.05, zoom - e.deltaY * 0.001));
    render();
  }, { passive: false });
  canvas.addEventListener('mousedown', e => {
    moviendo = true;
    clicX = e.clientX - offsetX;
    clicY = e.clientY - offsetY;
  });
  canvas.addEventListener('mousemove', e => {
    if (moviendo) { offsetX = e.clientX - clicX; offsetY = e.clientY - clicY; render(); }
    if (listo) {
      const rect = canvas.getBoundingClientRect();
      const mx = (e.clientX - rect.left - offsetX) / zoom + lienzo.width / 2;
      const my = (e.clientY - rect.top - offsetY) / zoom + lienzo.height / 2;
      document.getElementById('gs-st-pos').textContent = 'X:' + Math.round(mx) + ' Y:' + Math.round(my);
    }
  });
  window.addEventListener('mouseup', () => moviendo = false);

  document.addEventListener('keydown', e => {
    if (e.target.tagName === 'INPUT') return;
    const k = e.key.toLowerCase();
    if (k === 'i') gsImportarImagen();
    else if (k === 'e') gsExportarImagen();
    else if (k === 'g') gsReiniciar();
    else if (k === 'z') gsDeshacer();
    else if (k === 'k') gsTrazoCruz();
    else if (k === 'c') gsTrazoCirculo();
    else if (k === 'h') gsEcoHorizontal();
    else if (k === 'r') gsRgbSplit();
    else if (k === 'a') gsGlitchHorizontal();
    else if (k === 's') gsGlitchVertical();
    else if (k === 'd') gsCambiarColor();
    else if (k === 'p') gsSortH();
    else if (k === 'v') gsSortV();
  });

  function lerp(a, b, t) { return a + (b - a) * t; }
  function randi(n) { return Math.floor(Math.random() * n); }
})();
