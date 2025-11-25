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
            <p>A Basic-D é uma impressora braille de mesa projetada para oferecer impressão em braille de alta qualidade de forma acessível e fácil de usar. Desenvolvida com a mais recente tecnologia, ela permite que indivíduos, educadores e organizações produzam materiais em braille com rapidez e precisão. Sua construção robusta e design intuitivo a tornam ideal para uso tanto em ambientes domésticos quanto institucionais.</p>
            <h3>Sobre a Inclusão</h3>
            <p>Além de sua função principal de impressão em braille, a Basic-d representa um passo significativo em direção à inclusão e acessibilidade. Ao permitir a produção de materiais em braille sob demanda, ela capacita pessoas com deficiência visual a acessar informações e participar plenamente da sociedade.</p>
            <ol>
                <li><b>Facilidade de uso:</b>Interface intuitiva e software amigável tornam a impressão em braille acessível a todos.</li>
                <li><b>Qualidade de impressão:</b>Produção de pontos braille nítidos e uniformes, garantindo a legibilidade dos materiais.</li>
                <li><b>Portabilidade:</b>Design compacto e leve permite que a impressora seja facilmente transportada e utilizada em diferentes locais.</li>
                <li><b>Conectividade versátil:</b>Opções de conexão USB e Bluetooth para impressão a partir de computadores, tablets e smartphones.</li>
                <li><b>Portabilidade:</b>Design compacto e leve permite que a impressora seja facilmente transportada e utilizada em diferentes locais.</li>
                <li><b>Durabilidade e confiabilidade:</b>Construção robusta e componentes de alta qualidade garantem o desempenho consistente da impressora ao longo do tempo.</li>
            </ol>
            <h3>Tipos de Papel Compatíveis:</h3>
            <p>A Basic-d é compatível com uma variedade de tipos de papel, incluindo papel braille padrão, papel cartão e etiquetas adesivas. Consulte o manual do usuário para obter informações detalhadas sobre as gramaturas e tamanhos de papel recomendados.</p>
            
            <h3>Velocidade de Impressão</h3>
            <p>A velocidade de impressão da Basic-d varia de acordo com o tipo de documento e as configurações de impressão. Consulte as especificações técnicas da impressora para obter informações sobre a velocidade de impressão em diferentes condições.</p>

            <h3>Conectividade:</h3>
            <p>A Basic-d oferece opções de conectividade USB e Bluetooth, permitindo a impressão a partir de computadores, tablets e smartphones. A conexão Bluetooth permite a impressão sem fio, oferecendo maior flexibilidade e conveniência.</p>
            
            <h3>Software Compatível:</h3>
            <p>A Basic-d é compatível com uma variedade de softwares de edição de texto e tradução para braille, incluindo o Duxbury Braille Translator e o BrailleBlaster.</p>
            
            <div class="linha"></div>

            <p>Uma impressora braille funciona de maneira semelhante a uma impressora comum, mas em vez de imprimir tinta no papel, ela cria pontos em relevo que representam os caracteres do sistema braille. O processo básico envolve as seguintes etapas:</p>
            
            <h3>Conversão de Texto:</h3>
            <p>O texto a ser impresso é convertido para braille por meio de um software especializado. Esse software traduz os caracteres alfanuméricos e símbolos em seus equivalentes em braille, que consistem em combinações de seis pontos em relevo.</p>
            <h3>Envio para a Impressora:</h3>
            <p>O texto convertido em braille é enviado para a impressora por meio de um computador ou outro dispositivo eletrônico.</p>
            <h3>Impressão em Relevo:</h3>
            <p>A impressora utiliza cabeças de impressão com pinos que pressionam o papel, criando os pontos em relevo correspondentes aos caracteres braille. O papel utilizado é um papel especial mais grosso, que permite que os pontos em relevo sejam perceptíveis ao toque.</p>
            <h3>Leitura do Braille:</h3>
            <p>Após a impressão, o material em braille pode ser lido por pessoas com deficiência visual, que utilizam o tato para identificar os caracteres em relevo.</p>
            
            <div class="linha"></div>
            <h1>Como Utilizar a Impressora Braille Basic-D V4 – Guia Prático</h1>
            <p>A <b>Basic-D V4</b> é uma impressora Braille de mesa, compacta e bastante usada em escolas, bibliotecas e centros de acessibilidade. Ela é conhecida por ser confiável e produzir Braille de alta qualidade em papel comum (formulário contínuo).</p>
            <h3>1. Antes de começar: o que você vai precisar</h3>
            <ol>
                <li>A impressora Braille Basic-D V4;</li>
                <li>Cabo USB ou conexão de rede (dependendo da forma de uso);</li>
                <li>Papel formulário contínuo de gramatura entre 130g e 180g (tamanho A4 ou similar);</li>
                <li>Um computador com software compatível instalado (como o Duxbury ou Braille Blaster);</li>
                <li>Arquivo de texto ou documento a ser impresso.</li>
            </ol>

            <div class="linha"></div>

            <h3>2. Preparando a impressora</h3>
            <ol><h4>Passo 1: Ligar a impressora</h4>
                <li>Conecte a impressora à energia e ao computador via USB ou rede;</li>
                <li>Ligue a impressora no botão lateral;</li>
                <li>Espere até ouvir o bip de inicialização. O painel frontal acenderá com as luzes indicando o status.</li>
            </ol>
            <ol><h4>Passo 2: Colocando o papel</h4>
                <li>A Basic-D V4 usa papel formulário contínuo, que tem furos nas laterais;</li>
                <li>Levante a tampa da impressora;</li>
                <li>Coloque o papel nos roletes laterais, ajustando os pinos para encaixar nos furos do papel;</li>
                <li>Gire o botão para alinhar o papel corretamente. A margem deve começar no início da área de impressão;</li>
                <li>Feche a tampa.</li>
                <p><b>Dica:</b> O papel precisa estar bem preso para evitar desalinhamentos durante a impressão.</p>
            </ol>

            <div class="linha"></div>

            <h3>3. Preparando o arquivo para impressão</h3>
            <ol><h4>Passo 1: Usar um software de transcrição Braille</h4>
                <li>Os arquivos em texto precisam ser convertidos para Braille antes da impressão;</li>
                <li>Os softwares mais comuns são:
                    <ol><p>O software que vem junto com a impressora ou:</p>
                        <li>Duxbury Braille Translator (DBT) – um dos mais usados no mundo;</li>
                        <li>Braille Blaster – gratuito e funcional;</li>
                        <li>EdSharp ou outros editores compatíveis;</li>
                    </ol>
                </li>
            </ol>
            <ol><h4>Passo 2: Configurar a página</h4>
                <li>No programa, defina o modelo de impressora como “Basic-D v4” ou “Index Basic-D”;</li>
                <li>Configure as margens, linhas por página e caracteres por linha, de acordo com o papel usado;</li>
                <p><b>Exemplo comum:</b> 25 linhas por página, 30 caracteres por linha.</p>
            </ol>
            <ol><h4>Passo 3: Converter e revisar</h4>
                <li>Importe o texto para o software;</li>
                <li>Revise se os comandos de formatação (como negrito, títulos, listas) estão corretos;</li>
                <li>Faça a transcrição automática para Braille (normalmente com o botão "Translate" ou "Transcrever").</li>
            </ol>
            
            <div class="linha"></div>

            <h3>4. Imprimindo</h3>
            <ol><h4>Passo 1: Enviar para a impressora</h4>
                <li>Com o documento já transcrito, clique em Imprimir;</li>
                <li>Selecione a Basic-D v4 como impressora padrão;</li>
                <li>Verifique se o papel está corretamente posicionado;</li>
                <li>Clique em "OK" para iniciar a impressão.</li>
            </ol>
            <ol><h4>Passo 2: Acompanhar o processo</h4>
                <li>A impressora vai começar a imprimir linha por linha em Braille, fazendo barulho típico de impacto;</li>
                <li>Você pode observar o avanço do papel automaticamente.</li>
            </ol>
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