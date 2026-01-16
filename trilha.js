document.addEventListener('DOMContentLoaded', () => {

    /* ================= HERO CARDS FLOAT ================= */
    const cards = document.querySelectorAll('.card');

    cards.forEach((card, index) => {
        card.animate([
            { transform: `translateY(0px) rotate(${getRotation(index)}deg)` },
            { transform: `translateY(-15px) rotate(${getRotation(index)}deg)` },
            { transform: `translateY(0px) rotate(${getRotation(index)}deg)` }
        ], {
            duration: 3000 + (index * 500),
            iterations: Infinity,
            easing: 'ease-in-out'
        });
    });

    function getRotation(index) {
        const rotations = [-5, 0, 5, 8];
        return rotations[index] || 0;
    }

    /* ================= CONTEÚDO DAS AULAS (MANUAL) ================= */
    const lessonsData = {
        1: {
            title: "Quem eu sou?",
            image: "imagens/aulacp11.jpeg",
            content: `
                <h4>Etapa 1 — Autoconhecimento</h4>
                <p>Antes de qualquer escolha profissional, acadêmica ou financeira, existe uma etapa que quase ninguém ensina, mas que define todas as outras: entender quem você é. Isso não significa descobrir um “dom” fixo ou uma identidade engessada, mas reconhecer padrões de comportamento, interesses, valores e formas de aprender. Muitas pessoas passam anos tentando se encaixar em caminhos que parecem promissores, mas que não conversam com sua forma natural de pensar e agir. O resultado costuma ser cansaço constante, procrastinação, troca frequente de objetivos e a sensação de estar sempre começando do zero.</p>
                <h4>Reflexão prática</h4>
                <p>Em quais situações você sente que aprende mais rápido e se envolve mais? O que essas situações têm em comum?</p>
                <h4>Ação simples</h4>
                <p>Escreva um texto curto respondendo: “Eu funciono melhor quando estou fazendo ___ porque ___.”</p>
            `
        },

        2: {
            title: "Habilidades",
            image: "imagens/aulacp1.jpeg",
            content: `
                <h4>Etapa 2 — Reconhecer habilidades</h4>
                <p>Habilidades são capacidades desenvolvidas ao longo do tempo — e não surgem apenas em cursos formais ou empregos. Você desenvolve habilidades ao resolver problemas, se comunicar, aprender sozinha, ajudar outras pessoas, organizar tarefas ou lidar com imprevistos. O erro mais comum é acreditar que só “tem habilidade” quem já está no mercado formal. Isso cria uma falsa sensação de vazio, quando na verdade você já construiu competências importantes, só ainda não aprendeu a identificá-las e nomeá-las. Habilidades podem ser técnicas (uso de ferramentas, idiomas, escrita, lógica) ou comportamentais (organização, disciplina, empatia, comunicação, adaptação). O mercado valoriza cada vez mais a combinação das duas. Quando você reconhece suas habilidades, estudar deixa de ser um esforço aleatório e passa a ser uma estratégia de fortalecimento do que você já tem potencial.</p>
                <h4>Reflexão prática</h4>
                <p>Quais tarefas você consegue aprender mais rápido do que a maioria das pessoas ao seu redor?</p>
                <h4>Ação simples</h4>
                <p>Crie duas listas: <br>Habilidades que você já usa hoje. <br> Habilidades que gostaria de desenvolver</p>
            `
        },

        3: {
            title: "Mercado",
            image: "imagens/aulacp5.jpeg",
            content: `
                <h4>Etapa 3 — Como o mercado funciona</h4>
                <p>O mercado de trabalho funciona com base em problemas e soluções. Empresas não contratam “pessoas perfeitas”, mas pessoas capazes de aprender, executar e se adaptar a contextos específicos. O que gera confusão é tentar entender o mercado apenas por títulos ou promessas. Funções mudam, nomes de cargos mudam, tecnologias mudam. O que permanece são competências. Entender o mercado não é prever o futuro, mas observar padrões: quais áreas crescem, quais habilidades aparecem com frequência, quais exigências são realmente essenciais e quais são apenas filtros. Quando você entende essa lógica, para de se sentir inadequada e começa a se posicionar estrategicamente.</p>
                <h4>Reflexão prática</h4>
                <p>O que o mercado pede com mais frequência nas áreas que você observa?</p>
                <h4>Ação simples</h4>
                <p>Analise 5 vagas da mesma área e marque os requisitos que se repetem.</p>
            `
        },

        4: {
            title: "Currículo",
            image: "imagens/aulacp8.jpeg",
            content: `
                <h4>Etapa 4 — Organizar sua história</h4>
                <p>Currículo não é uma lista de cargos nem um pedido de desculpas por falta de experiência. Ele é um documento de comunicação: mostra quem você é, o que sabe fazer e como aprende. Um currículo bem construído organiza sua trajetória de forma lógica, mesmo que ela ainda esteja no início. Projetos pessoais, estudos independentes, participação em atividades, tudo isso conta quando bem explicado. Currículo forte não exagera, não mente e não se diminui. Ele apresenta fatos, aprendizados e resultados, mesmo que pequenos.</p>
                <h4>Reflexão prática</h4>
                <p>Seu currículo mostra evolução ou apenas informações soltas?</p>
                <h4>Ação simples</h4>
                <p>Reescreva uma experiência explicando: o que você fez, como fez e o que aprendeu.</p>
            `
        },

        5: {
            title: "Experiências",
            image: "imagens/aulacp10.jpeg",
            content: `
                <h4>Etapa 5 — Tudo é experiência</h4>
                <p>Experiência não começa no primeiro contrato assinado. Ela começa sempre que você se envolve ativamente em algo e aprende com isso. Muitas pessoas têm experiências valiosas, mas não reconhecem porque não foram “oficiais”. O valor está no aprendizado adquirido, não no rótulo. Aprender a olhar para sua trajetória com atenção te permite construir uma narrativa coerente e confiante sobre quem você é e o que já viveu.</p>
                <h4>Reflexão prática</h4>
                <p>Que situações te ensinaram mais do que aulas teóricas?</p>
                <h4>Ação simples</h4>
                <p>Descreva uma situação difícil que você enfrentou e o que aprendeu com ela.</p>
            `
        },

        6: {
            title: "Entrevista",
            image: "imagens/aulacp6.jpeg",
            content: `
                <h4>Etapa 6 — Comunicação</h4>
                <p>Entrevista é um espaço de troca, não de julgamento. Ela existe para avaliar alinhamento: valores, expectativas, capacidade de aprendizado e comunicação. Quem se prepara apenas decorando respostas tende a travar. Quem entende sua própria trajetória consegue se adaptar à conversa com mais naturalidade. Saber falar sobre erros, desafios e aprendizados mostra maturidade e consciência — características muito valorizadas.</p>
                <h4>Reflexão prática</h4>
                <p>Você sabe explicar suas escolhas sem se justificar demais?</p>
                <h4>Ação simples</h4>
                <p>Treine responder: <br> “Por que você se interessa por essa oportunidade?”</p>
            `
        },

        7: {
            title: "Carteira",
            image: "imagens/aulacp4.jpeg",
            content: `
                <h4>Etapa 7 — Organização</h4>
                <p>Organização pessoal faz parte da vida profissional. Documentos, prazos, e-mails e informações básicas dizem muito sobre sua responsabilidade. Estar organizada não garante oportunidades, mas evita perder oportunidades. Ter tudo pronto reduz ansiedade e te coloca em posição de resposta rápida quando algo surge.</p>
                <h4>Reflexão prática</h4>
                <p>O que hoje está desorganizado e te gera estresse?</p>
                <h4>Ação simples</h4>
                <p>Separe um local físico ou digital para seus documentos principais.</p>
            `
        },

        8: {
            title: "Cursos",
            image: "imagens/aulacp3.jpeg",
            content: `
                <h4>Etapa 8 — Escolhas inteligentes</h4>
                <p>Cursos devem servir a um propósito claro. Fazer cursos sem direção gera acúmulo de certificados e pouca transformação real. Um bom curso resolve um problema específico ou fortalece uma habilidade estratégica. Mais importante que quantidade é alinhamento. Aprender com intenção acelera resultados e evita frustração.</p>
                <h4>Reflexão prática</h4>
                <p>Esse curso resolve qual problema real da sua trajetória?</p>
                <h4>Ação simples</h4>
                <p>Defina um objetivo claro antes de iniciar qualquer curso.</p>
            `
        },

        9: {
            title: "Vagas",
            image: "imagens/aulacp2.jpeg",
            content: `
                <h4>Etapa 9 — Estratégia</h4>
                <p>Buscar vagas é um processo, não um evento isolado. Cada candidatura é uma chance de aprender mais sobre o mercado e sobre si mesma. Rejeições não definem valor. Elas indicam apenas que aquele contexto não era compatível naquele momento. Quando você trata vagas como estratégia, e não como validação pessoal, o processo fica mais leve e eficiente.</p>
                <h4>Reflexão prática</h4>
                <p>Você está se candidatando com critério ou por pressão?</p>
                <h4>Ação simples</h4>
                <p>Escolha uma vaga e adapte seu currículo exclusivamente para ela.</p>
            `
        },

        10: {
            title: "Próximo passo",
            image: "imagens/aulacp9.jpeg",
            content: `
                <h4>Etapa final — Movimento</h4>
                <p>O próximo passo não precisa ser grande, perfeito ou definitivo. Ele precisa ser possível e consciente. Crescimento acontece quando você age, observa o resultado e ajusta. Clareza vem do movimento, não da espera. Você não está atrasada. Você está em construção.</p>
                <h4>Reflexão prática</h4>
                <p>O que está ao seu alcance agora, sem depender de ninguém?</p>
                <h4>Ação simples</h4>
                <p>Defina uma ação concreta para os próximos 7 dias e execute.</p>
            `
        }
    };

    /* ================= MODAL / PROGRESSO ================= */
    const lessons = document.querySelectorAll('.lesson-box');
    const modal = document.getElementById('lessonModal');
    const title = document.getElementById('lessonTitle');
    const body = document.getElementById('lessonBody');
    const closeLesson = document.querySelector('.close-modal');
    const completeBtn = document.getElementById('completeLesson');

    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    const finalModal = document.getElementById('finalModal');
    const closeFinal = document.querySelector('.close-final');

    let completed = JSON.parse(localStorage.getItem('bridgeProgress')) || [];
    let current = 1;

    /* ===== AUDIO (ENXERTO FIEL) ===== */
    let narration;

    function narrate(text) {
        if (narration) window.speechSynthesis.cancel();
        narration = new SpeechSynthesisUtterance(text);
        narration.lang = 'pt-BR';
        narration.rate = 0.95;
        window.speechSynthesis.speak(narration);
    }

    function openLesson(number) {
        const data = lessonsData[number];
        current = number;

        title.textContent = data.title;

        body.innerHTML = `
            <div class="lesson-scroll">
                <img src="${data.image}" style="width:100%; border-radius:18px; margin-bottom:20px;">
                ${data.content}
            </div>

            <button class="btn-cta" id="nextStep">Próximo passo</button>
        `;

        modal.style.display = 'flex';

        /* áudio */
        document.getElementById('playAudio').onclick = () => {
            narrate(body.innerText);
        };

        /* próximo */
        document.getElementById('nextStep').onclick = () => {
            if (current < 10) openLesson(current + 1);
        };
    }

    lessons.forEach(box => {
        box.addEventListener('click', () => {
            openLesson(parseInt(box.dataset.lesson));
        });
    });

    closeLesson.onclick = () => {
        modal.style.display = 'none';
        window.speechSynthesis.cancel();
    };

    completeBtn.onclick = () => {
        if (!completed.includes(current)) {
            completed.push(current);
            localStorage.setItem('bridgeProgress', JSON.stringify(completed));
        }

        modal.style.display = 'none';
        updateProgress();

        if (current === 10) {
            finalModal.style.display = 'flex';
        }
    };

    function updateProgress() {
        progressFill.style.width = `${(completed.length / 10) * 100}%`;
        progressText.textContent = `${completed.length} / 10 concluídas`;
    }

    closeFinal.onclick = () => {
        finalModal.style.display = 'none';
        document.getElementById('trilhas').scrollIntoView({ behavior: 'smooth' });
    };

    updateProgress();
});
/* ================= RESETAR PROGRESSO ================= */

const resetBtn = document.getElementById('resetProgress');

if (resetBtn) {
    resetBtn.addEventListener('click', () => {
        const confirmReset = confirm(
            "Tem certeza que deseja apagar todo o progresso da trilha?"
        );

        if (!confirmReset) return;

        // limpa progresso salvo
        localStorage.removeItem('bridgeProgress');
        completed = [];

        // zera barra e texto
        progressFill.style.width = '0%';
        progressText.textContent = '0 / 10 concluídas';

        // fecha modais se estiverem abertas
        modal.style.display = 'none';
        finalModal.style.display = 'none';

        // para áudio se estiver tocando
        window.speechSynthesis.cancel();

        // volta para a trilha
        document.getElementById('trilhas').scrollIntoView({
            behavior: 'smooth'
        });
    });
}
