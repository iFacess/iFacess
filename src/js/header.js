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
                    <li><a href="#">Fórum</a></li>
                </ul>
            </nav>
    `;

    // Se estiver na página ifbraille.html, troca os itens
    if (currentPage === "ifbraille.html") {
        menuItems = `
            <a href="../../../public/html/ifbraille/ifbraille.html" class="logo"><img src='../../../src/img/ifbraille/ifbraille_white.png' style="width: 120px; margin-top:0.2rem"></a>
            <nav>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Aulas</a></li>
                    <li><a href="../../">iFacess</a></li>
                    <li><a href="#">Fórum</a></li>
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
