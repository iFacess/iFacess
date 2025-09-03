function loadFooter() {
    const footerHTML = `
    <footer>
            <div class="container footer-content">
                <div class="footer-logo">iFacess</div>
                <div class="footer-links">
                    <a href="#">Inicio</a>
                    <a href="#">Sobre</a>
                    <a href="#">Projetos</a>
                    <a href="#">Parceiros</a>
                    <a href="#">Fórum</a>
                </div>
                <p>&copy;2025 iFacess - Todos os direitos reservados</p>
            </div>
        </footer>
    `;
    document.getElementById('footer').innerHTML = footerHTML;
}
document.addEventListener("DOMContentLoaded", loadFooter);