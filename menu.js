/* =========================================================
   RESTAURANTE — nueva interfaz
   Los datos originales del menú se conservan.
   ========================================================= */

const menuItems = [
  {
    nombre: "Arroz",
    descripcion: "Plato con porcion de arroz.",
    precio: 4000,
    categoria: "porciones", 
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767901503/arroz_owvvnm.jpg",
  },
  {
    nombre: "Aguacate",
    descripcion: "Plato con porcion de aguacate.",
    precio: 5800,
    categoria: "porciones",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767901503/aguacate_pfyszu.jpg",
  },
  {
    nombre: "Huevo",
    descripcion: "Plato con porción de huevo frito.",
    precio: 4300,
    categoria: "porciones",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767901514/huevos_pvilag.jpg",
  },
  {
    nombre: "Limon",
    descripcion: "Plato porcionado con limón picado.",
    precio: 2500,
    categoria: "porciones",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767901513/limon_bbosfj.jpg",
  },
  {
    nombre: "Ensalada dulce",
    descripcion: "Producto adicional de piña, guanabana, gelatina, crema chantilly y perlitas de sabores.",
    precio: 14000,
    categoria: "porciones",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767934546/ensaladadulce_k1ymul.jpg",
  },
  {
    nombre: "Ensalada dulce - pequeña",
    descripcion: "Producto adicional de piña, guanabana, gelatina, crema chantilly y perlitas de sabores, en menor tamaño",
    precio: 8000,
    categoria: "porciones",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767901506/ensaladadulcepequenajpg_ahm80k.jpg",
  },
  {
    nombre: "Ensalada - verduras",
    descripcion: "Ensalada hecha a partir de tomate, cebolla, limon, y pepino.",
    precio: 8500,
    categoria: "porciones",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767901508/ensaladaverduras_ohbhax.jpg",
  },
  {
    nombre: "Entrada - trifasico, mondongo o pescado",
    descripcion: "Porción de sancocho trifásico, sancocho de pescado o mondongo.",
    precio: 20000,
    categoria: "porciones",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767901512/entradasopa_jyigje.jpg",
  },
  {
    nombre: "Frijoles",
    descripcion: "Porcion de frijoles.",
    precio: 17000,
    categoria: "porciones",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767901514/frijoles_qsns8s.jpg",
  },
  {
    nombre: "Sopa del dia",
    descripcion: "Plato con sancocho trifásico, sancocho de pescado o mondongo de menor tamaño.",
    precio: 13500,
    categoria: "porciones",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767901527/sopadeldia_vqchaq.jpg",
  },
  {
    nombre: "Porcion de patacon",
    descripcion: "Porcion de entrada hecha de patacón y hogao.",
    precio: 2800,
    categoria: "porciones",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767901524/patacon_psmuad.jpg",
  },
  {
    nombre: "Costichicharrón 360gr",
    descripcion: "Costillas de cerdo doradas y jugosas, acompañadas de papas a la francesa, arepa y ensalada fresca.",
    precio: 40000,
    categoria: "platos para picar",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767901503/costillasbbq_gzwidj.jpg",
  },
  {
    nombre: "Seviche de chicharron",
    descripcion: "Crujiente chicharrón picado, marinado con limón, cebolla, tomate y toques frescos de la casa.",
    precio: 29000,
    categoria: "platos para picar",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1768024938/sevichechicharron_z8s3x5.jpg",
  },
  {
    nombre: "Plato con costillas",
    descripcion: "Costillas de cerdo doradas y jugosas, acompañadas de papas a la francesa, arepa y ensalada fresca.",
    precio: 29000,
    categoria: "platos para picar",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767901503/costillasbbq_gzwidj.jpg",
  },
  {
    nombre: "Plato con chicharron",
    descripcion: "Chicharrón crocante servido con papas a la francesa, arepa y ensalada de la casa.",
    precio: 29000,
    categoria: "platos para picar",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/v1767901504/chicharron_w52iiw.jpg",
  },
  {
    nombre: "Arepaburger",
    descripcion: "Arepaburger artesanal servida con queso, papas a la francesa y acompañamientos.",
    precio: 29000,
    categoria: "platos para picar",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1768025319/arepaburger_rxits4.jpg",
  },
  {
    nombre: "Plato con chorizos",
    descripcion: "Chorizos asados al punto perfecto, acompañados de papas a la francesa, arepa y ensalada fresca.",
    precio: 29000,
    categoria: "platos para picar",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767973063/platochorizos_ux1dbr.jpg",
  },
  {
    nombre: "Chuzo",
    descripcion: "Chuzo de carne de cero o pollo a la parrilla, jugoso y bien sazonado, acompañado de papas, arepa y salsas.",
    precio: 29000,
    categoria: "platos para picar",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767901505/chuzocerdo_ov07ys.jpg",
  },
  {
    nombre: "Empanadas",
    descripcion: "Empanadas fritas y crujientes, rellenas de carne y papa, servidas con limón y ají.",
    precio: 2500,
    categoria: "platos para picar",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767901506/empanadas_wvno9n.jpg",
  },
  {
    nombre: "Choripapa",
    descripcion: "Chorizo asado con papas a la francesa, salsas tradicionales.",
    precio: 23000,
    categoria: "platos para picar",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1768024930/choripapa_zy5hvo.jpg",
  },
  {
    nombre: "Papas a la francesa",
    descripcion: "Papas fritas doradas y crujientes, ideales para compartir o acompañar cualquier plato.",
    precio: 18000,
    categoria: "platos para picar",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767901522/papasfrancesa_gtdhl8.jpg",
  },
  {
    nombre: "Bandeja paisa",
    descripcion: "Plato típico colombiano con fríjoles, arroz, chicharrón, huevo, plátano maduro, arepa y aguacate.",
    precio: 40000,
    categoria: "platos del dia",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767901506/bandejapaisa_upqvsz.jpg",
  },
  {
    nombre: "Lomo dorado",
    descripcion: "Lomo de cerdo dorado y jugoso, acompañado de papas a la francesa, arepa y ensalada fresca.",
    precio: 40000,
    categoria: "platos del dia",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767901518/lomodorado_mfo4li.jpg",
  },
  {
    nombre: "Pechuga dorada",
    descripcion: "Pechuga de pollo a la plancha, dorada al punto perfecto, servida con papas, arepa y ensalada.",
    precio: 40000,
    categoria: "platos del dia",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767901525/pechugadorada_vyal0t.jpg",
  },
  {
    nombre: "Milanesa de cerdo",
    descripcion: "Milanesa de cerdo empanizada y crujiente, acompañada de papas a la francesa y ensalada fresca.",
    precio: 40000,
    categoria: "platos del dia",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767901523/milanesa_dxrg2u.jpg",
  },
  {
    nombre: "Milanesa de pollo",
    descripcion: "Filete de pollo empanizado y crocante, servido con papas a la francesa y ensalada.",
    precio: 40000,
    categoria: "platos del dia",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767977092/milanesapollo_olpwg8.jpg",
  },
  {
    nombre: "Plato mixto",
    descripcion: "Combinación de carnes a la parrilla, acompañadas de papas a la francesa, arepa y ensalada.",
    precio: 40000,
    categoria: "platos del dia",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767977202/platomixto_ihibap.jpg",
  },
  {
    nombre: "Cazuela de frijol",
    descripcion: "Cazuela tradicional de fríjoles con arroz, chicharrón, arepa y acompañamientos de la casa.",
    precio: 40000,
    categoria: "platos del dia",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767901504/cazueladefrijoles_ujo5b4.jpg",
  },
  {
    nombre: "Lomo de res",
    descripcion: "Lomo de res a la parrilla, jugoso y bien sazonado, servido con papas, arepa y ensalada.",
    precio: 40000,
    categoria: "platos del dia",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767901518/lomores_aleyh0.jpg",
  },
  {
    nombre: "Churrasco",
    descripcion: "Corte de res a la parrilla, jugoso y bien asado, acompañado de papas al vapor, arepa y ensalada fresca.",
    precio: 62000,
    categoria: "platos a la carta",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767901505/churrasco_i00fyf.jpg",
  },
  {
    nombre: "Lomito biche",
    descripcion: "Lomito de res tierno y jugoso, servido con papas a la francesa, arepa y acompañamientos de la casa.",
    precio: 60000,
    categoria: "platos a la carta",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767901518/lomitobiche_yin3id.jpg",
  },
  {
    nombre: "Mojarra frita",
    descripcion: "Mojarra entera frita y crocante, acompañada de papas a la francesa, patacón, arepa y ensalada.",
    precio: 60000,
    categoria: "platos a la carta",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767901522/mojarrafrita_bczrft.jpg",
  },
  {
    nombre: "Lengua dorada",
    descripcion: "Lengua dorada a la plancha, suave y llena de sabor, servida con papas, arepa y ensalada.",
    precio: 60000,
    categoria: "platos a la carta",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767901514/lenguadorada_qpckfv.jpg",
  },
  {
    nombre: "Lengua en salsa criolla",
    descripcion: "Lengua bañada en salsa criolla tradicional, acompañada de arroz, papa y ensalada fresca.",
    precio: 60000,
    categoria: "platos a la carta",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767901513/lenguasalsacriolla_tclebm.jpg",
  },
  {
    nombre: "Sobrebarriga dorada",
    descripcion: "Sobrebarriga dorada a la plancha, jugosa y bien sazonada, servida con papas, arepa y ensalada.",
    precio: 60000,
    categoria: "platos a la carta",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767974714/sobrebarrigadorada_uejd5e.jpg",
  },
  {
    nombre: "Sobrebarriga en salsa criolla",
    descripcion: "Sobrebarriga suave y jugosa, cocinada en salsa criolla, acompañada de arroz, papa y ensalada.",
    precio: 60000,
    categoria: "platos a la carta",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767901527/sobrebarrigasalsacriolla_ym9iva.jpg",
  },
  {
    nombre: "Salmon a la marinera",
    descripcion: "Filete de salmón en salsa marinera, servido con papas a la francesa, arroz y ensalada fresca.",
    precio: 62000,
    categoria: "platos a la carta",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767974853/salmonmarinera_jov3w7.jpg",
  },
  {
    nombre: "Trucha a la plancha",
    descripcion: "Trucha fresca a la plancha, dorada al punto perfecto, acompañada de papas, arepa y ensalada.",
    precio: 62000,
    categoria: "platos a la carta",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767901528/truchaplancha_jfvxvp.jpg",
  },
  {
    nombre: "Trucha a la marinera",
    descripcion: "Filete de trucha en salsa marinera, servido con papas a la francesa, arroz y ensalada fresca.",
    precio: 62000,
    categoria: "platos a la carta",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767901527/truchamarinera_t1ei5q.jpg",
  },
  {
    nombre: "Plato ejecutivo",
    descripcion: "Plato completo con arroz, papas a la francesa, ensalada fresca y acompañamientos de la casa, con proteína a elección: Lomo de res, lomo de cerdo, pechuga dorada, milanesa de cerdo o milanesa de pollo.",
    precio: 29000,
    categoria: "menu ejecutivo",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767901507/ejecutivo_vheteu.jpg",
  },
  {
    nombre: "Lomo de cerdo dorado con queso y tocineta",
    descripcion: "Lomo de cerdo dorado a la plancha, cubierto con queso fundido y tocineta crocante, acompañado de papas, arepa y ensalada.",
    precio: 45000,
    categoria: "opcional-carnes",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767901518/lomodoradoqyt_fmsh1s.jpg",
  },
  {
    nombre: "Lomito fino de res con queso y tocineta",
    descripcion: "Lomito de res tierno y jugoso, gratinado con queso y tocineta crocante, servido con papas, arepa y ensalada fresca.",
    precio: 45000,
    categoria: "opcional-carnes",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767999748/solomoqyt_smdii5.jpg",
  },
  {
    nombre: "Pechuga dorada con queso y tocineta",
    descripcion: "Pechuga de pollo dorada al punto perfecto, con queso fundido y tocineta crocante, acompañada de papas, arepa y ensalada.",
    precio: 45000,
    categoria: "opcional-carnes",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767901525/pechugadoradaqyt_jxppdc.jpg",
  },
  {
    nombre: "Plato mixto con queso y tocineta",
    descripcion: "Combinación de carnes a la parrilla, cubiertas con queso fundido y tocineta crocante, acompañadas de papas, arepa y ensalada.",
    precio: 45000,
    categoria: "opcional-carnes",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_auto,c_scale,q_auto,f_auto/v1768024934/platomixtoqyt_jmx8xx.jpg",
  },
  {
    nombre: "Sancocho trifasico",
    descripcion: "Sancocho tradicional con carnes de res, cerdo y pollo, acompañado de arroz, arepa, aguacate y ensalada fresca.",
    precio: 40000,
    categoria: "platos especiales",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767975402/sancochotrifasico_ijtfge.jpg",
  },
  {
    nombre: "Sancocho de pescado",
    descripcion: "Sancocho de pescado preparado con verduras frescas, servido con arroz, arepa y aguacate.",
    precio: 40000,
    categoria: "platos especiales",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767975499/sancochopescado_fr4vro.jpg",
  },
  {
    nombre: "Mondongo",
    descripcion: "Sopa tradicional de mondongo, cocinada a fuego lento con verduras y carnes, acompañada de arroz, arepa y aguacate.",
    precio: 40000,
    categoria: "platos especiales",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767975499/mondongo_rudqtk.jpg",
  },
  {
    nombre: "Picada para dos personas",
    descripcion: "Selección de carnes a la parrilla, chicharrón, chorizo, papas a la francesa, arepas y acompañamientos de la casa, ideal para dos personas.",
    precio: 60000,
    categoria: "picadas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767901526/picadados_klnqhx.jpg",
  },
  {
    nombre: "Picada para cuatro personas",
    descripcion: "Variedad de carnes a la parrilla, chicharrón, chorizo, papas a la francesa, arepas y acompañamientos de la casa, ideal para cuatro personas.",
    precio: 100000,
    categoria: "picadas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/w_700,q_auto,f_auto/v1767901525/picadacuatro_krrgfj.jpg",
  },
  {
    nombre: "Picada para ocho personas",
    descripcion: "Gran selección de carnes a la parrilla, chicharrón, chorizo, papas a la francesa, arepas y acompañamientos de la casa, ideal para ocho personas.",
    precio: 190000,
    categoria: "picadas",
    imagen: "https://res.cloudinary.com/dvx8yz3sc/image/upload/v1767976416/picadaocho_tdjpzk.jpg",
  },
  
]

const menuContainer = document.getElementById("menuContainer");
const categoriesEl = document.getElementById("categories");
const categoryTitle = document.getElementById("categoryTitle");
const heroImage = document.getElementById("heroImage");
const chefImage = document.getElementById("chefImage");
const viewAll = document.getElementById("viewAll");
const chefButton = document.getElementById("chefButton");
const modal = document.getElementById("productModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalPrice = document.getElementById("modalPrice");
const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");
const backToTop = document.getElementById("backToTop");

const categoryMeta = {
  "porciones": ["◌", "Porciones"],
  "platos para picar": ["♨", "Para picar"],
  "platos a la carta": ["♢", "A la carta"],
  "platos del dia": ["◒", "Platos del día"],
  "menu ejecutivo": ["▱", "Menú ejecutivo"],
  "opcional-carnes": ["✦", "Opcional carnes"],
  "platos especiales": ["✺", "Especiales"],
  "picadas": ["⌁", "Picadas"]
};

const categoryOrder = [
  "porciones", "platos para picar", "platos a la carta", "platos del dia",
  "menu ejecutivo", "opcional-carnes", "platos especiales", "picadas"
];

const money = value => `$${Number(value).toLocaleString("es-CO")}`;

function getCategories() {
  const found = [...new Set(menuItems.map(item => item.categoria))];
  return categoryOrder.filter(c => found.includes(c));
}

function categoryLabel(category) {
  return categoryMeta[category]?.[1] || category;
}

function buildCategories() {
  categoriesEl.innerHTML = getCategories().map((category, index) => {
    const [icon, label] = categoryMeta[category] || ["✦", category];
    return `
      <button class="category-btn ${index === 0 ? "active" : ""}" 
              data-category="${category}" role="tab" aria-selected="${index === 0}">
        <span class="cat-icon" aria-hidden="true">${icon}</span>
        <span class="cat-label">${label}</span>
      </button>`;
  }).join("");

  categoriesEl.querySelectorAll(".category-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      categoriesEl.querySelectorAll(".category-btn").forEach(b => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
      renderCategory(btn.dataset.category);
    });
  });
}

function createCard(item) {
  const card = document.createElement("article");
  card.className = "menu-card";
  card.innerHTML = `
    <div class="card-image">
      <img src="${item.imagen || ""}" alt="${item.nombre}" loading="lazy">
      <button class="card-plus" type="button" aria-label="Ver detalles de ${item.nombre}">+</button>
    </div>
    <div class="card-body">
      <h3>${item.nombre}</h3>
      ${item.descripcion ? `<p>${item.descripcion}</p>` : ""}
      <div class="card-footer">
        <span class="price">${money(item.precio)}</span>
      </div>
    </div>
  `;

  card.querySelector(".card-plus").addEventListener("click", () => openModal(item));
  card.querySelector(".card-image img").addEventListener("click", () => openModal(item));
  card.querySelector(".card-image img").addEventListener("error", e => {
    e.currentTarget.style.opacity = ".15";
  });
  return card;
}

function renderCategory(category) {
  const items = menuItems.filter(item => item.categoria === category);
  categoryTitle.textContent = categoryLabel(category).toUpperCase();
  menuContainer.innerHTML = "";

  const visible = items.slice(0, 4);
  visible.forEach(item => menuContainer.appendChild(createCard(item)));

  viewAll.style.display = items.length > 4 ? "inline-block" : "none";
  viewAll.onclick = () => renderAll(category);

  requestAnimationFrame(() => {
    menuContainer.querySelectorAll(".menu-card").forEach((card, i) => {
      card.animate(
        [{opacity: 0, transform: "translateY(12px)"}, {opacity: 1, transform: "translateY(0)"}],
        {duration: 360, delay: i * 55, easing: "cubic-bezier(.2,.8,.2,1)", fill: "both"}
      );
    });
  });
}

function renderAll(category) {
  const items = menuItems.filter(item => item.categoria === category);
  categoryTitle.textContent = categoryLabel(category).toUpperCase();
  menuContainer.innerHTML = "";
  items.forEach(item => menuContainer.appendChild(createCard(item)));
  viewAll.style.display = "none";
}

function openModal(item) {
  modalImage.src = item.imagen || "";
  modalImage.alt = item.nombre;
  modalTitle.textContent = item.nombre;
  modalDescription.textContent = item.descripcion || "Preparación artesanal de la casa.";
  modalPrice.textContent = money(item.precio);
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.querySelectorAll("[data-close-modal]").forEach(el => el.addEventListener("click", closeModal));
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});

menuToggle.addEventListener("click", () => {
  const open = menuToggle.classList.toggle("open");
  mobileNav.classList.toggle("open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
  mobileNav.setAttribute("aria-hidden", String(!open));
});
mobileNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  menuToggle.classList.remove("open");
  mobileNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  mobileNav.setAttribute("aria-hidden", "true");
}));

const heroImageUrl = "https://res.cloudinary.com/dlcsihevy/image/upload/v1787284029/imagenprincipal_hctks5.png";

// Imagen principal — "SABORES QUE INSPIRAN"
heroImage.src = heroImageUrl;

// Misma imagen — sección "CHEF RECOMIENDA"
chefImage.src = heroImageUrl;

chefButton.addEventListener("click", () => {
  const special = menuItems.find(item => item.categoria === "platos especiales");
  if (special) openModal(special);
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .12 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

window.addEventListener("scroll", () => {
  backToTop.classList.toggle("visible", window.scrollY > 550);
}, { passive: true });
backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

buildCategories();
renderCategory(getCategories()[0] || "");
