const textos = {
    habilidades: "Minhas Habilidades",
    titulo: "O que eu sou",
    produtos: "Alguns dos meus projetos"
};

const sobre = [{
    imagem: "Eu.jpg",
    nome: "Olá, sou kethelyn Cristina",
    resumo: "Estudante de Desenvolvimento de Sistemas e Logística, programadora front-end, criadora de projetos e apresentações. Estou aberta a colaborar em desafios e aprender a cada oportunidade.",
    rede: "https://github.com/kccristinadev-dev",
    rede2: "https://www.canva.com/design/DAG9kqCXnYk/0xFLrdQ_1zEUsXJyq6RVzA/edit",
    rede4:"https://www.linkedin.com/in/kethelyn-cristina-142350390?utm_source=share_via&utm_content=profile&utm_medium=member_android"
}];


const hard = [{
    nome: "HTML",
    nivel: 50
},

    {
        nome: "CSS",
        nivel: 45
    },
    {
        nome: "JS",
        nivel: 25
    }];

const softskill = [{
    nome: "Organizada"
},
    {
        nome: "Produtiva"

    },
    {
        nome: "Aprendizado rápido e contínuo"

    }];


const projetos = [{
    imagem: "E-commerce.png",
    nome: "Site E-Commerce",
    descricao: "Site de e-commerce com produtos organizados por categorias, navegação intuitiva e design responsivo. Projeto focado em experiência do usuário e facilidade de compra.",
    demo: "https://kccristinadev-dev.github.io/site-e-commerce-para-teste/"
},

    {
        imagem: "Calculadora.jpg",
        nome: "Calculadora de Indicadores Logísticos",
        descricao: "Projeto desenvolvido para calcular e analisar indicadores essenciais de estoque, como giro de estoque, consumo médio, cobertura e risco de ruptura, auxiliando na tomada de decisões mais rápidas e baseadas em dados.",
        demo: "https://kccristinadev-dev.github.io/Calculadora-de-Indicadores-de-desempenho-/"
    },
    {
        imagem: "turismo.jpg",
        nome: "atrativos-turisticos-praia-grande",
        descricao: "Site informativo desenvolvido como projeto acadêmico, utilizando HTML e CSS (W3.CSS), com foco em layout responsivo e organização de conteúdo.",
        demo: "https://kccristinadev-dev.github.io/atrativos-turisticos-praia-grande/"

    }];

const parceiros = [


];
  const tecnologias = [
      
      
      ];




const sobreEl =
document.getElementById('sobre');
sobre.forEach(item => {
    const div = document.createElement('div');
    div.className = 'conteudo';
    div.innerHTML =
    ` <img class="foto" src= "${item.imagem}">
    <h2>${item.nome}</h2>
    <p>${item.resumo}</p>
    <br>

    <div class="informacoes">
    <a class="demo" href="${item.rede}" target="_blank" rel="noopener noreferrer">github</a>
        <a class="demo" href="${item.rede4}" target="_blank" rel="noopener noreferrer">linkedin</a>
    <a class="demo" href="${item.rede2}" target="_blank" rel="noopener noreferrer">curriculo</a></div>

    `;
    sobreEl.appendChild(div);
});


document.querySelector('#titulo').innerHTML = textos.habilidades;
document.querySelector('#titulo2').innerHTML = textos.titulo;
document.querySelector('#titulo3').innerHTML = textos.produtos;



/* habilidades hard*/
const habilidades =
document.getElementById('hard');


hard.forEach(item => {
    const div =
    document.createElement('div');
    div.className = 'skill';
    div.innerHTML = `
    <span>${item.nome}</span>
    <div class="linha-skill">
    <div class="barra">
    <div class="nivel" style="width: ${item.nivel}%"></div>
    </div>
    <span class="porcentagem">${item.nivel}%</span>
    </div>
    `;
    habilidades.appendChild(div);

});


/*Animaçao de grafico*/
function animargrafico() {
    const skill =
    document.querySelectorAll('.skill');
    skill.forEach(skill => {
        const nivelEl =
        skill.querySelector('.nivel');
        const porcentagemEl =
        skill.querySelector('.porcentagem');
        const valorFinal =
        parseFloat(porcentagemEl.textContent);
        let atual = 0;

        porcentagemEl.textContent = '0%';
        nivelEl.style.width = '0%';

        const intervalo = setInterval(() => {
            if (atual >= valorFinal) {
                clearInterval(intervalo);
            } else {
                atual++;
                porcentagemEl.textContent = atual + '%';
                nivelEl.style.width = atual + '%';
            }
        },
            15);
    });
}

const habilidadesSection = document.getElementById('habilidades');
let animou = false;

const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !animou) {
        animargrafico();
        animou = true;
    }
}, {
    threshold: 0.4
});

observer.observe(habilidadesSection);




/* habilidades soft*/
const soft =
document.getElementById('soft');
softskill.forEach(item => {
    const div =
    document.createElement('div');
    div.innerHTML =
    `<span>${item.nome}</span>
    `;
    soft.appendChild(div);

});


const projeto =
document.getElementById('projetos');
projetos.forEach(item => {
    const div =
    document.createElement('div');
    div.className = 'conteudo-projeto';
    div.innerHTML =
    ` <img class="foto-proj" src= "${item.imagem}">
    <h2>${item.nome}</h2>
    <p>${item.descricao}</p>
    <a class="demo" href="${item.demo}" target="_blank" rel="noopener noreferrer">
    Ver demo &#10140;</a>


    `;
    projeto.appendChild(div);
});
