//ARREGLO DE PROPIEDADES EN VENTA
const propiedades_venta = [
  {
    nombre: "Casa Familiar en Suburbios",
    src: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTM0MTk1ODA%3D/original/bf857733-1888-42b2-81c6-19292673f388.png?im_w=720",
    descripcion:
      "Amplia casa familiar con jardín privado y garaje para dos autos. Cerca de colegios y parques.",
    ubicacion: "Comuna de Pirque",
    habitaciones: 4,
    costo: 350000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Villa de Lujo con Piscina",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs1XrDJPM0AYz-ud2v5Gy6Z6iKDFM5J2Adpw&s",
    descripcion:
      "Espectacular villa de lujo con piscina infinita, jardín extenso y acabados de alta gama.",
    ubicacion: "Zona costera de zapallar",
    habitaciones: 5,
    costo: 1500000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Dúplex Moderno",
    src: "https://hips.hearstapps.com/hmg-prod/images/duplex-elegante-sofisticado-terraza-vistas-1650285917.jpg",
    descripcion:
      "Dúplex moderno con acabados de lujo y una amplia terraza ideal para reuniones al aire libre.",
    ubicacion: "Comuna de las condes",
    habitaciones: 3,
    costo: 720000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Ático en Edificio Histórico",
    src: "https://www.arkitectureonweb.com/o/adaptive-media/image/14928609/newsletter-1/MIROarchitetti_Bologna_Attico.jpg?t=1684858824588",
    descripcion:
      "Ático único en un edificio histórico con techos altos, chimenea y terraza privada.",
    ubicacion: "Santiago Centro",
    habitaciones: 3,
    costo: 600000,
    smoke: true,
    pets: false,
  },
  {
    nombre: "Casa Moderna",
    src: "https://images.adsttc.com/media/images/5bba/9118/f197/ccfd/d500/00c7/newsletter/38504-.jpg?1538953492",
    descripcion:
      "Esta casa de lujo ofrece vistas espectaculares de la zona rural y se encuentra cercano a la ciudad.",
    ubicacion: "Vitacura",
    habitaciones: 3,
    costo: 720000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Departamento en la playa",
    src: "https://blog.simca.mx/hs-fs/hubfs/Cruz%20con%20Mar/cruz-con-mar-412-balcon.jpg?width=1200&name=cruz-con-mar-412-balcon.jpg",
    descripcion:
      "Apartamento moderno que se encuentra a pasos de la playa del canelillo",
    ubicacion: "Zona costera norte",
    habitaciones: 2,
    costo: 500000,
    smoke: true,
    pets: true,
  },
];

//ARREGLO DE PROPIEDADES DE ALQUILER

const propiedades_alquiler = [
  {
    nombre: "Apartamento Moderno en el Centro",
    src: "https://previews.123rf.com/images/niserin/niserin2107/niserin210700052/171322975-sala-de-estar-en-un-peque%C3%B1o-apartamento-moderno-dise%C3%B1o-de-interiores.jpg",
    descripcion:
      "Un apartamento moderno y elegante ubicado en el corazón de la ciudad, cerca de tiendas y restaurantes.",
    ubicacion: "Centro de la ciudad",
    habitaciones: 3,
    costo: 1200,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Casa de Campo con Jardín",
    src: "https://st3.idealista.com/news/archivos/styles/fullwidth_xl/public/2022-06/pexels-pixabay-434634.jpg?VersionId=c5fSZP_l_6pV6VPGrysfWy5RwVOqszCq&itok=UlpaK2EA", // URL de imagen de ejemplo
    descripcion:
      "Hermosa casa de campo con amplio jardín y vistas a la montaña, ideal para familias.",
    ubicacion: "Zona rural",
    habitaciones: 4,
    costo: 1500,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Dúplex de Lujo en la Playa",
    src: "https://media.inmobalia.com/imgV1/B98Le8~d7M9k3DegigWkzHXQlgzMFGqGJJp6ZRUcpX033lqadFBp2i4GGW4X2J1jIJ9Pwc6GsJX5cPSaC8Y5L~JfyHds9fNigZ0J1ZUqXf4OCBdOv5~pX3mTAsh7wQoPIjykxFLHognhBupfCfFt9sBgjESi~Or0iww2QSFrjKllrfSB8zO2Na9bmmrHvOVCWXLS2FnPNy93OsCsQpX5ddhIU2cb_rCy3CUrri480KvtcvLrmcYgzAC7Sdkhp8gpskGuskjk6w9bcPpunL2~6x7n5SNtNPV6ODVlxC7DO_bwV5XuUL6KwDaescWXs99xEg--.jpg",
    descripcion:
      "Dúplex de lujo con vistas al mar, acceso privado a la playa y piscina comunitaria.",
    ubicacion: "Frente a la playa",
    habitaciones: 5,
    costo: 2500,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Estudio Acogedor",
    src: "https://previews.123rf.com/images/bialasiewicz/bialasiewicz1708/bialasiewicz170800491/83654122-estudio-acogedor-y-multifuncional-en-estilo-%C3%A1rabe.jpg",
    descripcion:
      "Estudio pequeño pero cómodo, perfecto para una persona o pareja. Muy cerca del transporte público.",
    ubicacion: "Barrio residencial",
    habitaciones: 1,
    costo: 700,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Loft Industrial",
    src: "https://t4.ftcdn.net/jpg/05/16/71/55/360_F_516715537_OvTiSyP0A805r84QDB3NBLYAqc7bgNH2.jpg",
    descripcion:
      "Loft de estilo industrial con techos altos, excelente iluminación y diseño único.",
    ubicacion: "Distrito de diseño",
    habitaciones: 2,
    costo: 1800,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Apartamento luminoso con vista al mar",
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar",
    ubicacion: "Condominio miramar",
    habitaciones: 3,
    costo: 2500,
    smoke: true,
    pets: true,
  },
];

//FUNCION PARA RENDERIZAR PROPIEDADES EN LA PAGINA CORRESPONDIENTE
function renderProperties(properties, containerID) {
  const container = document.getElementById(`${containerID}`);
  let template = "";

  for (const property of properties) {
    // INTERPOLACION DE CADENAS PARA CREAR EL TEMPLATE HTML Y CONDICIONAL PARA ATRIBUTO SMOKE Y PETS
    template += `
      <div class="col-md-4 mb-4">
        <div class="card">
            <img src="${property.src}" alt="${property.nombre}">
            <h2>${property.nombre}</h2>
            <p><strong>${property.descripcion}</strong></p>
            <p><strong>Ubicación:</strong> ${property.ubicacion}</p>
            <p><strong>Habitaciones:</strong> ${property.habitaciones}</p>
            <p><strong>Costo:</strong> ${property.costo}</p>
            <p class="${property.smoke ? "text-success" : "text-danger"}">
                <i class="fas ${
                  property.smoke ? "fa-smoking" : "fa-smoking-ban"
                }"></i> 
                    ${
                      property.smoke ? "Permitido fumar" : "No se permite fumar"
                    }
                </p>
                <p class="${property.pets ? "text-success" : "text-danger"}">
                    <i class="fas ${property.pets ? "fa-paw" : "fa-ban"}"></i> 
                    ${
                      property.pets
                        ? "Mascotas permitidas"
                        : "No se permiten mascotas"
                    }
                </p>
        </div>
    </div>
    `;
  };

  container.innerHTML = template;
}

//MOSTRAR PROPIEDADES EN EL INDEX 
if (
  window.location.pathname.includes("index.html") ||
  window.location.pathname === "/"
) {
  renderProperties(propiedades_venta.slice(0, 3), "containerSale");
  renderProperties(propiedades_alquiler.slice(0, 3), "containerRent");
}

//FUNCION PARA REDIRIGIR A SUS RESPECTIVAS PÁGINAS
function seeMore(type) {
  if (type === "sale") {
    window.location.href = "propiedades_venta.html";
  } else if (type === "rent") {
    window.location.href = "propiedades_alquiler.html";
  }
}
