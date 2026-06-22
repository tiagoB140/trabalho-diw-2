const dados = {
    planos: [
        {
            id: 1,
            nome: "Treino A - Peito e Tríceps",
            descricao: "Treino focado em hipertrofia do peitoral e tríceps.",
            objetivo: "Hipertrofia",
            nivel: "Intermediário",
            duracao: "60 min",
            frequencia: "2x semana",
            calorias: "450 kcal",
            grupoMuscular: "Peito e Tríceps",
            equipamento: "Barra e Halteres",
            descanso: "60 segundos",
            destaque: true,
            imagem: "assets/img/treinoA.jpg",

            exercicios: [
                {
                    nome: "Supino Reto",
                    descricao: "Exercício principal para peitoral.",
                    imagem: "assets/img/supino.jpg"
                },
                {
                    nome: "Crucifixo",
                    descricao: "Isolamento do peitoral.",
                    imagem: "assets/img/crucifixo.jpg"
                },
                {
                    nome: "Tríceps Pulley",
                    descricao: "Foco no tríceps.",
                    imagem: "assets/img/triceps.jpg"
                }
            ]
        },

        {
            id: 2,
            nome: "Treino B - Costas e Bíceps",
            descricao: "Fortalecimento das costas e bíceps.",
            objetivo: "Força",
            nivel: "Avançado",
            duracao: "70 min",
            frequencia: "2x semana",
            calorias: "500 kcal",
            grupoMuscular: "Costas e Bíceps",
            equipamento: "Polia e Barra",
            descanso: "90 segundos",
            destaque: false,
            imagem: "assets/img/treinoB.jpg",

            exercicios: [
                {
                    nome: "Puxada Frontal",
                    descricao: "Trabalho de dorsais.",
                    imagem: "assets/img/puxada.jpg"
                },
                {
                    nome: "Remada Curvada",
                    descricao: "Fortalecimento das costas.",
                    imagem: "assets/img/remada.jpg"
                },
                {
                    nome: "Rosca Direta",
                    descricao: "Desenvolvimento do bíceps.",
                    imagem: "assets/img/rosca.jpg"
                }
            ]
        },

        {
            id: 3,
            nome: "Treino C - Pernas",
            descricao: "Treino completo para membros inferiores.",
            objetivo: "Hipertrofia",
            nivel: "Intermediário",
            duracao: "75 min",
            frequencia: "2x semana",
            calorias: "650 kcal",
            grupoMuscular: "Pernas",
            equipamento: "Máquinas e Barra",
            descanso: "90 segundos",
            destaque: true,
            imagem: "assets/img/treinoC.jpg",

            exercicios: [
                {
                    nome: "Agachamento",
                    descricao: "Exercício completo para pernas.",
                    imagem: "assets/img/agachamento.jpg"
                },
                {
                    nome: "Leg Press",
                    descricao: "Fortalecimento dos membros inferiores.",
                    imagem: "assets/img/legpress.jpg"
                },
                {
                    nome: "Cadeira Extensora",
                    descricao: "Foco no quadríceps.",
                    imagem: "assets/img/extensora.jpg"
                }
            ]
        },

        {
            id: 4,
            nome: "Treino D - Ombros",
            descricao: "Desenvolvimento dos deltoides.",
            objetivo: "Hipertrofia",
            nivel: "Iniciante",
            duracao: "50 min",
            frequencia: "1x semana",
            calorias: "350 kcal",
            grupoMuscular: "Ombros",
            equipamento: "Halteres",
            descanso: "60 segundos",
            destaque: false,
            imagem: "assets/img/treinoD.jpg",

            exercicios: [
                {
                    nome: "Desenvolvimento",
                    descricao: "Exercício principal.",
                    imagem: "assets/img/desenvolvimento.jpg"
                },
                {
                    nome: "Elevação Lateral",
                    descricao: "Foco na lateral do ombro.",
                    imagem: "assets/img/elevacao-lateral.jpg"
                },
                {
                    nome: "Elevação Frontal",
                    descricao: "Foco na parte frontal.",
                    imagem: "assets/img/elevacao-frontal.jpg"
                }
            ]
        },

        {
            id: 5,
            nome: "Treino E - Abdômen",
            descricao: "Fortalecimento do core.",
            objetivo: "Resistência",
            nivel: "Todos os níveis",
            duracao: "40 min",
            frequencia: "3x semana",
            calorias: "250 kcal",
            grupoMuscular: "Core",
            equipamento: "Peso corporal",
            descanso: "30 segundos",
            destaque: false,
            imagem: "assets/img/treinoE.jpg",

            exercicios: [
                {
                    nome: "Prancha",
                    descricao: "Estabilidade corporal.",
                    imagem: "assets/img/prancha.jpg"
                },
                {
                    nome: "Abdominal",
                    descricao: "Fortalecimento abdominal.",
                    imagem: "assets/img/abdominal.jpg"
                },
                {
                    nome: "Russian Twist",
                    descricao: "Abdômen oblíquo.",
                    imagem: "assets/img/russian-twist.jpg"
                }
            ]
        },

        {
            id: 6,
            nome: "Treino F - Full Body",
            descricao: "Treino completo para o corpo inteiro.",
            objetivo: "Condicionamento",
            nivel: "Intermediário",
            duracao: "80 min",
            frequencia: "3x semana",
            calorias: "700 kcal",
            grupoMuscular: "Corpo inteiro",
            equipamento: "Misto",
            descanso: "90 segundos",
            destaque: true,
            imagem: "assets/img/treinoF.jpg",

            exercicios: [
                {
                    nome: "Burpee",
                    descricao: "Condicionamento físico.",
                    imagem: "assets/img/burpee.jpg"
                },
                {
                    nome: "Levantamento Terra",
                    descricao: "Exercício completo.",
                    imagem: "assets/img/terra.jpg"
                },
                {
                    nome: "Kettlebell Swing",
                    descricao: "Explosão muscular.",
                    imagem: "assets/img/kettlebell.jpg"
                }
            ]
        }
    ]
};

// HOME
function carregarHome() {

    const cards = document.getElementById("cards-container");
    const carousel = document.getElementById("carousel-container");

    if (!cards || !carousel) return;

    let primeiro = true;

    dados.planos.forEach(plano => {

        if (plano.destaque) {

            carousel.innerHTML += `
                <div class="carousel-item ${primeiro ? "active" : ""}">
                    <img src="${plano.imagem}" class="slide-img mx-auto d-block" alt="${plano.nome}">
                    <div class="carousel-caption">
                        <h3>${plano.nome}</h3>
                        <p>${plano.descricao}</p>
                    </div>
                </div>
            `;

            primeiro = false;
        }

        cards.innerHTML += `
            <div class="col-md-4 mb-4">

                <div class="card h-100 shadow">

                    <img src="${plano.imagem}" class="card-img-top" alt="${plano.nome}">

                    <div class="card-body">

                        <h5>${plano.nome}</h5>

                        <p>${plano.descricao}</p>

                        <span class="badge bg-primary">${plano.objetivo}</span>
                        <span class="badge bg-success">${plano.nivel}</span>

                        <br><br>

                        <a href="detalhe.html?id=${plano.id}"
                           class="btn btn-danger">
                           Ver Detalhes
                        </a>

                    </div>

                </div>

            </div>
        `;
    });
}

// DETALHES
function carregarDetalhes() {

    const detalhes = document.getElementById("detalhes-treino");

    if (!detalhes) return;

    const parametros = new URLSearchParams(window.location.search);
    const id = Number(parametros.get("id"));

    if (!id) {
        detalhes.innerHTML =
            `<div class="alert alert-warning">
                Nenhum plano foi selecionado.
            </div>`;
        return;
    }

    const plano = dados.planos.find(p => p.id === id);

    if (!plano) {
        detalhes.innerHTML =
            `<div class="alert alert-danger">
                Plano não encontrado.
            </div>`;
        return;
    }

    detalhes.innerHTML = `
        <div class="row">

            <div class="col-md-6">
                <img src="${plano.imagem}"
                     class="img-fluid rounded shadow"
                     alt="${plano.nome}">
            </div>

            <div class="col-md-6">

                <h2>${plano.nome}</h2>

                <p>${plano.descricao}</p>

                <p><strong>Grupo Muscular:</strong> ${plano.grupoMuscular}</p>
                <p><strong>Equipamento:</strong> ${plano.equipamento}</p>
                <p><strong>Descanso:</strong> ${plano.descanso}</p>

                <ul class="list-group">

                    <li class="list-group-item">
                        Objetivo: ${plano.objetivo}
                    </li>

                    <li class="list-group-item">
                        Nível: ${plano.nivel}
                    </li>

                    <li class="list-group-item">
                        Duração: ${plano.duracao}
                    </li>

                    <li class="list-group-item">
                        Frequência: ${plano.frequencia}
                    </li>

                    <li class="list-group-item">
                        Calorias: ${plano.calorias}
                    </li>

                </ul>

            </div>

        </div>
    `;

    const exercicios = document.getElementById("exercicios-container");

    if (!exercicios) return;

    exercicios.innerHTML = "";

    plano.exercicios.forEach(exercicio => {

        exercicios.innerHTML += `
            <div class="col-md-4 mb-4">

                <div class="card h-100 shadow">

                    <img src="${exercicio.imagem}"
                         class="card-img-top"
                         alt="${exercicio.nome}">

                    <div class="card-body">

                        <h5>${exercicio.nome}</h5>

                        <p>${exercicio.descricao}</p>

                    </div>

                </div>

            </div>
        `;
    });
}

// INICIALIZAÇÃO
document.addEventListener("DOMContentLoaded", () => {

    carregarHome();
    carregarDetalhes();

});