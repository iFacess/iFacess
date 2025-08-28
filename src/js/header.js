function loadHeader() {
    // Detecta a página atual
    const currentPage = window.location.pathname.split("/").pop(); // Ex: "index.html" ou "ifbraille.html"

    // Define os links do menu padrão (index.html)
    let menuItems = `
        <a href="index.html" class="logo">iFacess</a>
            <nav>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#anchor_projects">Projetos</a></li>
                    <li><a href="#">Parceiros</a></li>
                    <li><a href="/public/html/forum/ifor1.html">Fórum</a></li>
                </ul>
            </nav>
    `;
    // Se estiver na página ifbraille.html, troca os itens
    if (currentPage === "ifbraille.html") {
        menuItems = `
            <a href="../../../public/html/ifbraille/ifbraille.html" class="logo"><img src='../../../src/img/ifbraille/ifbraille_white.png' style="width: 120px; margin-top:0.2rem"></a>
            <nav>
                <ul>
                    <li><a href="#">Início</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Aulas</a></li>
                    <li><a href="../../../public/html/forum/ifor1.html">Fórum</a></li>
                    <li><a href="../../../index.html">iFacess</a></li>
                </ul>
            </nav>
        `;
    }
    // Se estiver na página ifor1.html, troca os itens
    if (currentPage === "ifor1.html") {
        menuItems = `
        <a href="../../../public/html/forum/ifor1.html" class="logo">iFor1</a>
            <nav>
                <ul>
                    <li><a href="../../../index.html">Inicio</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Regras</a></li>
                    <li><a href="#">Categorias</a></li>
                </ul>
            </nav>
        `;
    }

    // Monta o header com base no menu definido
    const headerHTML = `
    <header>
        <div class="container header-content">
            ${menuItems}
        </div>
    </header>
    `;

    document.getElementById('header').innerHTML = headerHTML;

    // (Opcional) Caso você tenha o menu hamburger:
    const hamburger = document.querySelector('.hamburger');
    const navBox = document.querySelector('.navBox');

    if (hamburger && navBox) {
        // Evita animação no carregamento
        setTimeout(() => {
            navBox.style.display = "flex";
            navBox.classList.add("ready");
        }, 10);

        hamburger.addEventListener('click', () => {
            navBox.classList.toggle('active');
        });

        window.addEventListener("resize", () => {
            if (!navBox.classList.contains("active")) {
                navBox.style.transition = "none";
                setTimeout(() => {
                    navBox.style.transition = "";
                }, 100);
            }
        });
    }
}

document.addEventListener("DOMContentLoaded", loadHeader);


document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const heroSection = document.querySelector('.hero');
    
    // Ajustar o padding do hero para compensar a altura do header fixo
    function adjustHeroPadding() {
        const headerHeight = header.offsetHeight;
        heroSection.style.paddingTop = (headerHeight + 40) + 'px';
    }
    
    // Executar no carregamento e no redimensionamento da janela
    adjustHeroPadding();
    window.addEventListener('resize', adjustHeroPadding);
    
    // Adicionar efeito de redução do header no scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.2)';
        } else {
            header.style.padding = '15px 0';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
});
