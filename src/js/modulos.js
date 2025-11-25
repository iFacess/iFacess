// --- BASE DE DADOS DOS MÓDULOS ---
const modulesData = [
    {
        title: "O que é Inclusão e o Braille?",
        borderColor: "#3b82f6", // Azul
        imageColor: "#4c1d95", // Roxo escuro
        content: `
            <p>A inclusão é um conceito que se refere à prática de garantir que todas as pessoas, independentemente de suas habilidades, deficiências, raça, gênero, orientação sexual ou qualquer outra característica, tenham a oportunidade de participar plenamente da sociedade.</p>
            <p>Trata-se de criar ambientes - sejam eles escolas, locais de trabalho ou comunidades - que sejam acolhedores, acessíveis e justos para todos. A inclusão vai além da simples integração; ela busca valorizar a diversidade e garantir que cada indivíduo se sinta parte integrante do grupo.</p>
            
            <img src="https://placehold.co/800x400/600x400/9333ea/ffffff?text=Exemplo+de+Imagem" alt="Imagem ilustrativa">

            <h3>E o Braille?</h3>
            <p>O Braille é um sistema de escrita tátil utilizado por pessoas cegas ou com baixa visão. Criado no século XIX por Louis Braille, o sistema consiste em combinações de pontos em relevo, organizados em células de seis pontos (duas colunas de três pontos).</p>
            <p>Cada célula Braille pode representar uma letra, um número, um sinal de pontuação ou até mesmo símbolos musicais e matemáticos. Este sistema é fundamental para a alfabetização, educação e autonomia das pessoas com deficiência visual, permitindo-lhes ler e escrever de forma independente.</p>
        `
    },
    {
        title: "Libras e Cultura Surda",
        borderColor: "#22c55e", // Verde
        imageColor: "#4c1d95", // Roxo escuro
        content: `
            <p>A Língua Brasileira de Sinais (Libras) é a língua oficial da comunidade surda brasileira. Reconhecida por lei, não é apenas um conjunto de gestos, mas sim uma língua completa, com estrutura gramatical, sintaxe e semântica próprias.</p>
            
            <h3>O que é a Cultura Surda?</h3>
            <p>A Cultura Surda refere-se ao conjunto de valores, tradições, costumes, produções artísticas e experiências compartilhadas por pessoas surdas. Ela se baseia na identidade surda e no uso de uma língua de sinais como principal forma de comunicação.</p>
            <p>É importante entender que a surdez não é vista como uma deficiência dentro desta cultura, mas sim como uma característica identitária que une uma comunidade com uma língua e uma visão de mundo singulares.</p>
        `
    },
    {
        title: "Acessibilidade Digital",
        borderColor: "#ef4444", // Vermelho
        imageColor: "#4c1d95", // Roxo escuro
        content: `
            <p>Acessibilidade digital é a prática de criar sites, aplicativos e tecnologias digitais que possam ser utilizados por todas as pessoas, incluindo aquelas com deficiências visuais, auditivas, motoras ou cognitivas.</p>
            <p>Isso envolve seguir diretrizes e padrões, como o WCAG (Web Content Accessibility Guidelines), para garantir que o conteúdo seja perceptível, operável, compreensível e robusto.</p>
            
            <img src="https://placehold.co/800x300/f87171/ffffff?text=Web+Para+Todos" alt="Web para todos">
            
            <h3>Por que é Importante?</h3>
            <ul>
                <li>Garante o direito de acesso à informação.</li>
                <li>Expande o público-alvo de produtos e serviços.</li>
                <li>Melhora a usabilidade geral para todos os usuários.</li>
                <li>É um requisito legal em muitos países.</li>
            </ul>
        `
    },
    {
        title: "Design Universal",
        borderColor: "#eab308", // Amarelo
        imageColor: "#4c1d95", // Roxo escuro
        content: `
            <p>O Design Universal é o design de produtos e ambientes para que possam ser usados pelo maior número de pessoas possível, sem a necessidade de adaptação ou design especializado.</p>
            <p>Diferente da acessibilidade (que foca em adaptar para deficiências), o Design Universal busca criar uma solução única que atenda a todos desde o início.</p>
            <h3>Os 7 Princípios do Design Universal:</h3>
            <ol>
                <li><strong>Uso Equitativo:</strong> Útil para pessoas com diversas habilidades.</li>
                <li><strong>Flexibilidade no Uso:</strong> Acomoda uma ampla gama de preferências e habilidades.</li>
                <li><strong>Uso Simples e Intuitivo:</strong> Fácil de entender, independentemente da experiência.</li>
                <li><strong>Informação Perceptível:</strong> Comunica a informação necessária eficazmente.</li>
                <li><strong>Tolerância ao Erro:</strong> Minimiza os perigos e consequências de ações acidentais.</li>
                <li><strong>Baixo Esforço Físico:</strong> Pode ser usado de forma eficiente e confortável.</li>
                <li><strong>Tamanho e Espaço para Abordagem e Uso:</strong> Apropriado para alcance, manipulação e uso.</li>
            </ol>
        `
    },
    {
        title: "Impressora Braille",
        borderColor: "#45568E", // Cor do Site
        imageColor: "#4c1d95", // Roxo escuro
        content: `
            <p>A Basic-d é uma impressora braille de mesa projetada para oferecer impressão em braille de alta qualidade de forma acessível e fácil de usar. Desenvolvida com a mais recente tecnologia, ela permite que indivíduos, educadores e organizações produzam materiais em braille com rapidez e precisão. Sua construção robusta e design intuitivo a tornam ideal para uso tanto em ambientes domésticos quanto institucionais.</p>
            
        
            `
    },
    
];

// --- LÓGICA DA PÁGINA ---

document.addEventListener('DOMContentLoaded', () => {
    
    // Seleciona os elementos principais
    const cardContainer = document.getElementById('card-container');
    const modalBackdrop = document.getElementById('modal-backdrop');
    const modalContent = document.getElementById('modal-content');
    const modalTitle = document.getElementById('modal-title');
    const modalContentScroll = document.getElementById('modal-content-scroll');
    const modalCloseBtn = document.getElementById('modal-close-btn');

    // Validação de segurança: se os elementos não existirem, para o script para não dar erro
    if (!cardContainer || !modalBackdrop) return;

    function createPreview(htmlContent) {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = htmlContent;
        return tempDiv.textContent || tempDiv.innerText || "";
    }

    function renderCards() {
        cardContainer.innerHTML = '';
        
        modulesData.forEach((module, index) => {
            const previewText = createPreview(module.content);
            
            // Cria o elemento do card com a NOVA classe 'module-card'
            const card = document.createElement('div');
            card.className = 'module-card'; // Classe atualizada
            card.style.borderColor = module.borderColor;
            
            // HTML Interno atualizado com as novas classes
            card.innerHTML = `
                <div class="module-card-image-placeholder" style="background-color: ${module.imageColor};"></div>
                <h3 class="module-card-title">${module.title}</h3>
                <p class="module-card-preview-text">${previewText}</p>
                <span class="module-card-link">Clique para ver mais</span>
            `;
            
            card.addEventListener('click', () => openModal(index));
            cardContainer.appendChild(card);
        });
    }

    function openModal(index) {
        const module = modulesData[index];
        modalTitle.textContent = module.title;
        modalContentScroll.innerHTML = module.content;
        
        modalBackdrop.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; 
    }

    function closeModal() {
        modalBackdrop.classList.add('hidden');
        document.body.style.overflow = 'auto'; 
    }

    renderCards();

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
    if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
    
    if (modalContent) {
        modalContent.addEventListener('click', (event) => {
            event.stopPropagation();
        });
    }
});