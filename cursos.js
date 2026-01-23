const courses = [
  {area:"economia",icon:"💰",name:"Introdução à Economia",link:"https://www.coursera.org/learn/economics",description:"Fundamentos de economia e mercados."},
  {area:"economia",icon:"📈",name:"Finanças Pessoais",link:"https://www.edx.org/learn/finance",description:"Planejamento financeiro e investimentos."},
  {area:"direito",icon:"⚖️",name:"Direito Constitucional",link:"https://www.edx.org/learn/constitutional-law",description:"Princípios jurídicos modernos."},
  {area:"direito",icon:"📜",name:"Direito Civil",link:"https://www.coursera.org/learn/civil-law",description:"Contratos e obrigações."},
  {area:"tecnologia",icon:"💻",name:"JavaScript do Zero",link:"https://www.freecodecamp.org/",description:"Programação web moderna."},
  {area:"tecnologia",icon:"🤖",name:"Ciência de Dados",link:"https://www.coursera.org/learn/data-science",description:"Análise de dados."},
  {area:"design",icon:"🎨",name:"UX/UI Design",link:"https://www.coursera.org/learn/ui-ux-design",description:"Interfaces e experiência."},
  {area:"design",icon:"🖌️",name:"Design Gráfico",link:"https://www.udemy.com/course/graphic-design",description:"Identidade visual."},
  {area:"administracao",icon:"📊",name:"Gestão Empresarial",link:"https://www.edx.org/learn/business-management",description:"Liderança e estratégia."},
  {area:"administracao",icon:"📣",name:"Marketing Digital",link:"https://www.coursera.org/learn/digital-marketing",description:"Branding e anúncios."}
];

const container = document.getElementById("coursesContainer");
const filter = document.getElementById("areaFilter");
const search = document.getElementById("searchInput");
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");
const stat = document.querySelector(".stat strong");

function renderCourses() {
  const area = filter.value;
  const q = search.value.toLowerCase();
  container.innerHTML = "";

  courses
    .filter(c => (area==="all"||c.area===area) && c.name.toLowerCase().includes(q))
    .forEach((course,i) => {
      const card = document.createElement("div");
      card.className="course-card";
      card.style.animationDelay = `${i * 0.1}s`;

      card.innerHTML = `
        <div class="course-icon">${course.icon}</div>
        <h3>${course.name}</h3>
        <p>${course.description}</p>
        <a href="${course.link}" target="_blank">Acessar →</a>
      `;
      container.appendChild(card);
    });
}

/* CONTADOR ANIMADO */

let count = 0;
const target = 120000;
const step = target / 120;

function animateCounter() {
  if(count < target) {
    count += step;
    stat.innerText = `+${Math.floor(count).toLocaleString()}`;
    requestAnimationFrame(animateCounter);
  } else {
    stat.innerText = "Venha Inspirar e Pertencer!";
  }
}

/* EVENTS */

filter.addEventListener("change",renderCourses);
search.addEventListener("input",renderCourses);

hamburger.addEventListener("click",()=>{
  nav.classList.toggle("open");
  hamburger.classList.toggle("active");
});

renderCourses();
animateCounter();
