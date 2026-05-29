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
