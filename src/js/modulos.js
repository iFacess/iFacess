// --- BASE DE DADOS DOS MÓDULOS ---
const modulesData = [
    {
        title: "O que é Inclusão e o Braille?",
        borderColor: "#3b82f6", // Azul
        imageColor: "#4c1d95", // Roxo escuro
        content: `
            <p>A inclusão é um princípio fundamental que garante que todas as pessoas tenham acesso igualitário à educação, à tecnologia, ao trabalho e à participação social. Ela reconhece a diversidade humana e busca eliminar barreiras — sejam físicas, comunicacionais ou digitais — para que todos possam exercer seus direitos de forma plena.</p>
            <p>No ambiente escolar, a inclusão se torna ainda mais importante por promover espaços acolhedores para estudantes com diferentes necessidades. Isso fortalece a aprendizagem, reduz desigualdades e estimula valores como empatia, respeito e colaboração.</p>
            <ol>
                <li><b>Acesso para todos:</b> criar materiais, ambientes e tecnologias que atendam a diferentes perfis de alunos.</li>
                <li><b>Eliminação de barreiras:</b> adaptar conteúdo, metodologia e comunicação para garantir participação plena.</li>
                <li><b>Valorização da diversidade:</b> reconhecer que cada pessoa aprende de um jeito e que isso enriquece o processo educativo.</li>
                <li><b>Acessibilidade digital:</b> garantir que informações, sites e plataformas possam ser usadas por pessoas com deficiência visual, auditiva, intelectual, motora ou múltipla.</li>
            </ol>

            <div class="linha"></div>

            <h3>O que é o Braille</h3>
            <p>O Braille é um sistema de leitura e escrita tátil utilizado por pessoas com deficiência visual. Ele foi criado por Louis Braille no século XIX e revolucionou o acesso à educação e à informação. Em vez de letras impressas, o Braille utiliza pontos em relevo organizados em células de seis pontos.</p>
            <p>Cada combinação desses pontos representa letras, números, símbolos matemáticos, sinais musicais e até comandos de informática. É um sistema universal que permite leitura pelo tato e escrita por meio de regletes, punções, máquinas Perkins ou impressoras Braille modernas.</p>

            <ol>
                <li><b>Estrutura em células:</b> cada célula Braille tem seis pontos organizados em duas colunas de três pontos.</li>
                <li><b>Combinações infinitas:</b> diferentes combinações formam todo o alfabeto e símbolos especiais.</li>
                <li><b>Leitura tátil:</b> a leitura é feita passando suavemente as pontas dos dedos sobre os pontos em relevo.</li>
                <li><b>Escrita acessível:</b> pode ser realizada manualmente ou de forma digital por softwares e impressoras.</li>
            </ol>

            <div class="linha"></div>

            <h3>Como o Braille Funciona</h3>
            <p>A lógica do Braille é baseada na combinação de pontos elevados, permitindo que a informação seja percebida pelo toque. Esse sistema é altamente eficiente porque utiliza padrões simples que podem ser facilmente memorizados.</p>

            <h4>1. A Célula Braille</h4>
            <p>A célula Braille é composta por seis pontos numerados de 1 a 6. A combinação desses pontos cria caracteres diferentes. Por exemplo, a letra “A” é apenas o ponto 1; a letra “B” são os pontos 1 e 2; e assim por diante.</p>

            <h4>2. Leitura Tátil</h4>
            <p>Durante a leitura, os dedos se movem da esquerda para a direita, sentindo cada célula. O tato interpreta rapidamente o padrão dos pontos e transforma essa sensação em informação, como uma palavra ou número.</p>

            <h4>3. Escrita em Braille</h4>
            <p>A escrita pode ser feita de várias formas:</p>
            <ol>
                <li><b>Reglete e punção:</b> método tradicional onde os pontos são perfurados manualmente no papel.</li>
                <li><b>Máquina Perkins:</b> semelhante a uma máquina de escrever com seis teclas correspondentes aos pontos do Braille.</li>
                <li><b>Impressoras Braille:</b> convertem texto digital em Braille automaticamente.</li>
                <li><b>Softwares de transcrição:</b> transformam textos comuns em arquivos Braille prontos para impressão.</li>
            </ol>

            <div class="linha"></div>

            <h3>Design Universal e Acessibilidade Digital</h3>
            <p>O Braille também faz parte do conceito de <b>Design Universal</b>, que propõe criar produtos, espaços e informações acessíveis para todos desde o início. No ambiente digital, isso significa desenvolver sites e plataformas compatíveis com leitores de tela, navegação por teclado e descrição de imagens.</p>
            <p>Assim, o Braille e a acessibilidade digital se complementam: enquanto o Braille oferece leitura tátil física, as tecnologias assistivas ampliam o acesso ao conteúdo digital.</p>

            <div class="linha"></div>

            <h3>O Braille no Esporte</h3>
            <p>O Braille também está presente em práticas esportivas inclusivas. Ele aparece em etiquetas de equipamentos, sinalização de ambientes, materiais educativos e até em regras adaptadas. Esportes como goalball, atletismo e futebol para cegos utilizam estratégias sensoriais que dialogam com os princípios do Braille — percepção tátil, organização espacial e autonomia.</p>

        `
    },
    {
        title: "Acessibilidade Digital",
        borderColor: "#ef4444", // Vermelho
        imageColor: "#4c1d95", // Roxo escuro
        content: `
            <p>A acessibilidade digital é o conjunto de práticas, tecnologias e padrões que tornam ambientes digitais utilizáveis por todas as pessoas, incluindo usuários com deficiência visual. Dentro desse cenário, o Braille continua sendo essencial, pois conecta o mundo físico ao digital e garante autonomia em diversos contextos de aprendizagem, comunicação e navegação.</p>
            <p>No ambiente digital, o Braille não aparece apenas no papel. Hoje, existem diversos sistemas, dispositivos e softwares que interpretam, geram e traduzem textos para Braille de maneira automática, permitindo que pessoas cegas utilizem computadores, celulares e tablets de forma independente.</p>

            <ol>
                <li><b>Leitores de Tela:</b> ferramentas como <b>NVDA</b>, <b>JAWS</b> e <b>VoiceOver</b> convertem texto digital em áudio ou Braille, permitindo que usuários naveguem, escrevam e estudem.</li>
                <li><b>Display Braille (linha Braille):</b> dispositivos com células Braille eletromecânicas que transformam texto digital em Braille em tempo real.</li>
                <li><b>Transcritores Digitais:</b> softwares como <b>Duxbury Braille Translator</b> e <b>Braille Blaster</b> fazem a tradução automática de textos para Braille.</li>
                <li><b>Padrões Web:</b> diretrizes como as <b>WCAG</b> (Web Content Accessibility Guidelines) orientam a criação de sites compatíveis com leitores de tela e braille displays.</li>
            </ol>

            <div class="linha"></div>

            <h3>Sistemas Digitais que Utilizam Braille</h3>
            <p>Diversos sistemas e tecnologias atuais dependem do Braille para garantir acesso à informação. Esses sistemas permitem que pessoas cegas tenham igualdade de participação em ambientes educacionais, profissionais e sociais.</p>

            <ol>
                <li><b>Sistemas Operacionais Acessíveis:</b> Windows, macOS, iOS, Android e Linux possuem suporte nativo para Braille via leitores de tela.</li>
                <li><b>Browsers Compatíveis:</b> navegadores como Firefox, Chrome e Safari suportam navegação com leitores de tela integrados ao Braille.</li>
                <li><b>Dispositivos Braille Portáteis:</b> blocos de notas digitais como <b>HumanWare Brailliant</b>, <b>Focus Blue</b> e <b>Orbit Reader</b> permitem leitura e produção de textos sem precisar de papel.</li>
                <li><b>Impressoras Braille:</b> impressoras como as <b>Index Basic-D</b>, <b>Everest</b> e <b>Juliet Pro</b> imprimem documentos digitais em Braille físico.</li>
                <li><b>Apps de Acessibilidade:</b> aplicativos como <b>Braille Tutor</b>, <b>BRLTTY</b> e <b>BrailleBack</b> oferecem suporte ao ensino e uso do Braille em dispositivos móveis.</li>
            </ol>

            <div class="linha"></div>

            <h3>Como o Braille Interage com a Web</h3>
            <p>A leitura do Braille no ambiente digital é possível por causa da interação entre padrões de acessibilidade e tecnologias assistivas. Um site acessível permite que o leitor de tela interprete corretamente textos, menus, botões, imagens e formulários, convertendo tudo para áudio ou Braille em tempo real.</p>

            <ol>
                <li><b>Estruturas semânticas corretas:</b> cabeçalhos, listas, tabelas e rótulos garantem leitura organizada em Braille.</li>
                <li><b>Descrições de imagens:</b> textos alternativos permitem que a pessoa cega compreenda elementos visuais.</li>
                <li><b>Compatibilidade com teclado:</b> essencial para navegar sem mouse.</li>
                <li><b>Conteúdo limpo e responsivo:</b> facilita o entendimento pelo leitor de tela e pelo Braille display.</li>
            </ol>

            <div class="linha"></div>

            <h3>Importância do Braille na Acessibilidade Digital</h3>
            <p>Mesmo com o avanço do áudio digital, o Braille continua sendo indispensável. Ele oferece alfabetização plena, compreensão ortográfica, independência e melhor desempenho escolar. Além disso, o Braille digital permite que estudantes e professores acessem conteúdos modernos, integrem dispositivos eletrônicos e utilizem plataformas online de forma totalmente inclusiva.</p>
            <p>Dessa forma, o Braille permanece como uma ponte entre o mundo físico e o digital, garantindo que pessoas com deficiência visual tenham total acesso à educação, informação e comunicação.</p>
        `
    },
    {
        title: "Braille no Esporte",
        borderColor: "#74c55eff", // Vermelho
        imageColor: "#4c1d95", // Roxo escuro
        content: `
            <p>O Braille também desempenha um papel importante no esporte, garantindo que pessoas com deficiência visual tenham acesso às regras, instruções, materiais e estratégias necessárias para participar de maneira autônoma e inclusiva. Embora o esporte adaptado utilize muitos recursos sonoros e táteis, o Braille continua sendo uma ferramenta essencial para comunicação, organização e aprendizado técnico.</p>
            <p>No ambiente esportivo, o Braille permite a leitura de tabelas, anotações, marcações de treino, estatísticas e orientações de segurança, oferecendo independência e fortalecendo o protagonismo dos atletas.</p>

            <ol>
                <li><b>Manuais e regras em Braille:</b> Organizações esportivas produzem versões oficiais de regras em Braille, como as do goalball, atletismo paralímpico e judô.</li>
                <li><b>Identificação tátil de equipamentos:</b> Etiquetas e marcações em Braille ajudam atletas a organizar materiais como bolas, uniformes, suplementos e acessórios.</li>
                <li><b>Quadros de treino:</b> Treinadores podem fornecer planos de treino, sequências de exercícios e rotinas semanais em Braille para atletas cegos.</li>
                <li><b>Anotações estratégicas:</b> Em esportes como xadrez adaptado, o registro de jogadas pode ser feito em Braille.</li>
            </ol>

            <div class="linha"></div>

            <h3>Esportes que Utilizam Recursos Táteis e Sonoros</h3>
            <p>O Braille complementa uma série de elementos sensoriais utilizados em modalidades específicas para pessoas com deficiência visual. Esses esportes são projetados para garantir competição justa, autonomia e segurança.</p>

            <ol>
                <li><b>Goalball:</b> esporte paralímpico exclusivo para pessoas cegas, que utiliza uma bola com guizos e orientações táteis na quadra.</li>
                <li><b>Futebol de 5:</b> versão adaptada do futebol, também com bola sonora e comunicação constante entre equipe e guia.</li>
                <li><b>Judô Paralímpico:</b> permite contato inicial entre competidores e segue regras adaptadas; instruções e regulamentos são frequentemente distribuídos em Braille.</li>
                <li><b>Atletismo para cegos:</b> provas de corrida com guias, lançamento de dardo e salto em distância contam com marcações táteis e manuais acessíveis.</li>
            </ol>

            <div class="linha"></div>

            <h3>Tecnologias Digitais e Braille no Ambiente Esportivo</h3>
            <p>Com o avanço da acessibilidade digital, cada vez mais atletas utilizam dispositivos que convertem dados de desempenho e rotinas de treino para Braille. Isso inclui o uso de leitores de tela, aplicativos compatíveis com displays Braille e impressoras que transcrevem anotações esportivas.</p>

            <ol>
                <li><b>Apps de monitoramento:</b> aplicativos de esporte compatíveis com leitores de tela permitem registro de ritmos, distâncias e progresso.</li>
                <li><b>Materiais de estudo digital:</b> PDFs acessíveis e documentos técnicos podem ser convertidos para Braille ou lidos com linha Braille.</li>
                <li><b>Plataformas educacionais:</b> cursos de formação de professores e treinadores oferecem conteúdos acessíveis em Braille para capacitar profissionais.</li>
            </ol>

            <div class="linha"></div>

            <h3>A Importância do Braille no Esporte</h3>
            <p>O Braille garante que atletas com deficiência visual tenham acesso total às informações necessárias para treinar, competir, aprender e evoluir dentro de suas modalidades esportivas. Ele fortalece a autonomia, aumenta a segurança, facilita a comunicação com treinadores e contribui para uma participação mais ativa no ambiente esportivo.</p>
            <p>Assim, o Braille no esporte representa não só acessibilidade, mas também inclusão, representatividade e o direito ao protagonismo esportivo em todos os níveis — escolar, amador ou profissional.</p>

        `
    },
    {
        title: "Design Universal",
        borderColor: "#eab308", // Amarelo
        imageColor: "#4c1d95", // Roxo escuro
        content: `
            <p>O Design Universal aplicado ao Braille busca criar ambientes, produtos e serviços que possam ser utilizados por todas as pessoas, independentemente de suas limitações visuais. A ideia central do Design Universal é garantir que a acessibilidade não seja um complemento, mas sim uma parte fundamental do projeto — e o Braille se torna uma ferramenta essencial dentro dessa abordagem.</p>
            <p>Quando integrado desde o início, o Braille promove inclusão, autonomia e segurança em ambientes públicos e privados, permitindo que pessoas cegas ou com baixa visão acessem informações importantes de maneira independente.</p>
                
            <ol>
                <li><b>Acessibilidade integrada:</b> o Braille é incorporado diretamente em sinalizações, materiais educativos e dispositivos de uso comum.</li>
                <li><b>Comunicação inclusiva:</b> permite que pessoas com deficiência visual compreendam orientações, regras e instruções sem depender totalmente de terceiros.</li>
                <li><b>Padrões internacionais:</b> o Braille segue normas universais, garantindo consistência em prédios, produtos e espaços urbanos.</li>
                <li><b>Autonomia e mobilidade:</b> o uso de Braille em locais estratégicos auxilia no deslocamento seguro e independente.</li>
            </ol>
                
            <div class="linha"></div>
                
            <h3>Como o Design Universal do Braille Atua</h3>
            <p>A presença do Braille em diferentes contextos garante que as informações estejam disponíveis em múltiplos formatos, fortalecendo a inclusão. Ele pode estar em superfícies táteis, placas, equipamentos e sinalizações, sempre com o objetivo de orientar, informar e guiar o usuário.</p>
            <img src="../../../src/img/ifbraille/pavimentoBraille.webp">
            <p style="text-align: center;">Foto em acesso pelo site "enablingvillage.sg" - <a href="https://enablingvillage.sg/universal-design/" target="_blank">Acesse aqui!</a></p>
            <ol>
                <li><b>Sinalização tátil:</b> placas com Braille e alto-relevo em portas, elevadores, banheiros e corredores.</li>
                <li><b>Piso tátil:</b> utilizado para guiar, alertar ou organizar fluxos de deslocamento em áreas públicas.</li>
                <li><b>Produtos acessíveis:</b> embalagens de medicamentos, aparelhos eletrodomésticos e tecnologias assistivas com etiquetas táteis ou marcações em Braille.</li>
                <li><b>Materiais educacionais:</b> livros, maquetes, mapas táteis e atividades escolares com versões acessíveis.</li>
            </ol>
                
            <div class="linha"></div>
                
            <h3>Onde o Braille Está Presente no Ambiente Social</h3>
            <p>O Braille aparece em diversos espaços do cotidiano, permitindo que pessoas cegas participem da vida social com independência. Ele não é exclusivo de escolas ou bibliotecas — está presente em cidades, transportes públicos, comércios e prédios oficiais, promovendo acessibilidade em múltiplas dimensões.</p>
                
            <ol>
                <li><b>Nas ruas e espaços urbanos:</b> placas de identificação, mapas táteis, semáforos acessíveis, pontos de ônibus e calçadas com piso tátil.</li>
                <li><b>Em escolas e universidades:</b> sinalização de salas, bibliotecas acessíveis, labirintos táteis, materiais de estudo e impressões Braille.</li>
                <li><b>Em edifícios públicos:</b> elevadores com botões em Braille, corrimãos sinalizados, banheiros adaptados e balcões informativos.</li>
                <li><b>No transporte público:</b> vagões com sinalização tátil, sistemas de estação com mapas acessíveis e avisos físicos em Braille.</li>
                <li><b>Em comércios e serviços:</b> cardápios acessíveis, caixas eletrônicos com Braille, embalagens de produtos e máquinas de autoatendimento.</li>
            </ol>
                
            <div class="linha"></div>
                
            <h3>A Importância do Design Universal com Braille</h3>
            <p>A presença do Braille no Design Universal garante que as cidades e instituições sejam verdadeiramente inclusivas. Quando o Braille é pensado desde o projeto inicial, cria-se um ambiente que não exclui, mas acolhe. Isso beneficia diretamente pessoas cegas e com baixa visão, mas também fortalece o conceito de igualdade de acesso para todos.</p>
            <p>Assim, o Design Universal com o uso do Braille é mais que uma solução técnica — é uma prática social que promove dignidade, acessibilidade e participação plena na sociedade.</p>
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
            <img src="../../../src/img/ifbraille/impressoraBasicDv4.webp">
            <p style="text-align: center;">Foto em acesso pelo site "indexbraille.com" - <a href="https://www.indexbraille.com/en-us/braille-embossers/discontinued/basic-d-v4" target="_blank">Acesse aqui!</a></p>
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