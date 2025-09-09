function loadHeader() {
    const path = window.location.pathname;

  
    // ========= Marca (logo/título) + LINKS por rota =========
    let brandHTML = `<a href="index.html" class="logo">iFacess</a>`;
    let linksHTML = `
      <li><a href="#">Inicio</a></li>
      <li><a href="#">Sobre</a></li>
      <li><a href="#anchor_projects">Projetos</a></li>
      <li><a href="#">Parceiros</a></li>
      <li><a href="/forum">Fórum</a></li>
    `;  
  
    // ifBraille
    if (path.includes("ifbraille.html") || path.includes("/ifbraille")) {
      brandHTML = `<a href="" class="logo">iFacess</a> <img src='../../../src/img/ifbraille/ifbraille_white.png' style="width:110px; margin-left: " alt="IFBraille">`;
      linksHTML = `
        <li><a href="#">Início</a></li>
        <li><a href="#">Sobre</a></li>
        <li><a href="#">Aulas</a></li>
        <li><a href="/forum">Fórum</a></li>
        <li><a href="/">iFacess</a></li>
      `;
    }
  
    // iFor1
    if (path.includes("ifor1.html") || path.includes("/forum")) {
      brandHTML = `<a href="#" class="logo">iFor1</a>`;
      linksHTML = `
        <li><a href="/">Inicio</a></li>
        <li><a href="#">Sobre</a></li>
        <li><a href="#">Regras</a></li>
        <li><a href="#">Categorias</a></li>
      `;
    }
  
    // ========= HTML do Header =========
    const headerHTML = `
      <header>
        <div class="container header-content">
          ${brandHTML}
          <nav class="nav-desktop">
            <ul>${linksHTML}</ul>
          </nav>
          <button class="hamburger" aria-label="Abrir menu" aria-expanded="false">☰</button>
        </div>
      </header>
      <div class="navBox" aria-hidden="true" role="dialog">
        <ul>${linksHTML}</ul>
      </div>
      <div class="navBackdrop" aria-hidden="true"></div>
    `;
  
    document.getElementById('header').innerHTML = headerHTML;
  
    // ======= Seletores =======
    const headerEl   = document.querySelector('header');
    const heroSection = document.querySelector('.hero');
    const hamburger  = document.querySelector('.hamburger');
    const navBox     = document.querySelector('.navBox');
    const closeBtn   = document.querySelector('.close-nav');
    const backdrop   = document.querySelector('.navBackdrop');
  
    // ======= Funções auxiliares =======
    function setOffcanvasTop() {
      const top = headerEl.offsetHeight; // altura real do header (dinâmica)
      // Define variável CSS para usar em height e posicionamento
      document.documentElement.style.setProperty('--nav-top', top + 'px');
      navBox.style.top    = top + 'px';
      backdrop.style.top  = top + 'px';
    }
  
    function openNav() {
      setOffcanvasTop();
      navBox.classList.add('active');
      backdrop.classList.add('show');
      navBox.setAttribute('aria-hidden', 'false');
      backdrop.setAttribute('aria-hidden', 'false');
      hamburger.setAttribute('aria-expanded', 'true');
      hamburger.textContent = '✕';
    }
  
    function closeNav() {
      navBox.classList.remove('active');
      backdrop.classList.remove('show');
      navBox.setAttribute('aria-hidden', 'true');
      backdrop.setAttribute('aria-hidden', 'true');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.textContent = '☰';
    }
  
    // ======= Eventos =======
    // Ajuste inicial e em redimensionamentos/scroll (header muda de tamanho)
    setOffcanvasTop();
    window.addEventListener('resize', setOffcanvasTop);
    window.addEventListener('scroll', setOffcanvasTop);
  
    hamburger.addEventListener('click', () => {
      if (navBox.classList.contains('active')) {
        closeNav();
      } else {
        openNav();
      }
    });
    closeBtn.addEventListener('click', closeNav);
    backdrop.addEventListener('click', closeNav);
  
    // Fecha ao clicar em qualquer link do menu mobile
    navBox.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));
  
    // Se mudar para desktop com o menu aberto, fecha
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && navBox.classList.contains('active')) {
        closeNav();
      }
    });
  
    // ======= (Opcional) Ajuste do hero em relação ao header fixo =======
    if (heroSection) {
      function adjustHeroPadding() {
        const headerHeight = headerEl.offsetHeight;
        heroSection.style.paddingTop = (headerHeight + 40) + 'px';
      }
      adjustHeroPadding();
      window.addEventListener('resize', adjustHeroPadding);
      window.addEventListener('scroll', adjustHeroPadding);
  
      // Efeito de redução do header no scroll (mantido do seu código)
      window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
          headerEl.style.padding = '10px 0';
          headerEl.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.2)';
        } else {
          headerEl.style.padding = '15px 0';
          headerEl.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
      });
    }
  }
  
  document.addEventListener("DOMContentLoaded", loadHeader);

  // experiência do scroll
  document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const heroSection = document.querySelector('.hero');
    
    // Ajustar o padding do hero para compensar a altura do header fixo
    function adjustHeroPadding() {
        const headerHeight = header.offsetHeight;
        heroSection.style.paddingTop = (headerHeight + 40) + 'px';
    }
    adjustHeroPadding();
    window.addEventListener('resize', adjustHeroPadding);
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