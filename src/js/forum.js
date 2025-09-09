(() => {
  // ===== Dados simulados (em memória) =====
  const categories = [
    {id: 'geral', name: 'Impressoras Braille (Geral)'},
    {id: 'problemas', name: 'Problemas Técnicos'},
    {id: 'alunos', name: 'Dúvidas de Alunos'},
    {id: 'recursos', name: 'Recursos e Tutoriais'},
    {id: 'anuncios', name: 'Anúncios e Novidades'},
  ];

  const users = [
    {id: 'user1', name: 'Maria'},
    {id: 'user2', name: 'João'},
    {id: 'user3', name: 'Ana'},
  ];

  let currentUser = users[1]; // usuário logado (simulado)

  // Lista de tags fixas
  const availableTags = ["Desenvolvimento", "Dúvidas", "Problemas Técnicos", "Sugestões", "Outros"];

  // Estrutura: {id, categoryId, title, authorId, tags:[], posts:[{authorId, content, date}]}
  let topics = [];

  // Criar tópicos fake para cada categoria
  categories.forEach((cat, idx) => {
    const randomTag = availableTags[Math.floor(Math.random() * availableTags.length)];
    topics.push({
      id: 'demo' + idx,
      categoryId: cat.id,
      title: `Exemplo de fórum em ${cat.name}`,
      authorId: users[Math.floor(Math.random()*users.length)].id,
      tags: [randomTag],
      posts: [
        {authorId: currentUser.id, content: 'Este é um post de demonstração para mostrar tags.', date: new Date()}
      ]
    });
  });

  // ===== Estado de navegação =====
  let state = {
    view: 'categories', // categories, topicList, topicView
    categoryId: null,
    topicId: null
  };

  const elContent = document.getElementById('content');
  const elBreadcrumb = document.getElementById('breadcrumb');

  // ===== Utilitários =====
  function formatDate(d) {
    return d.toLocaleString('pt-BR', {dateStyle:'short', timeStyle:'short'});
  }
  function findUserName(id) {
    const u = users.find(u => u.id === id);
    return u ? u.name : 'Desconhecido';
  }

  // ===== Breadcrumb =====
  function renderBreadcrumb() {
    let html = '';
    if(state.view === 'categories') {
      html = `<span><b>Início</b></span>`;
    }
    else if(state.view === 'topicList') {
      const cat = categories.find(c => c.id === state.categoryId);
      html = `<span style="cursor:pointer" onclick="goTo('categories')">Início</span> &raquo; <span><b>${cat ? cat.name : ''}</b></span>`;
    }
    else if(state.view === 'topicView') {
      const cat = categories.find(c => c.id === state.categoryId);
      const top = topics.find(t => t.id === state.topicId);
      html = `<span style="cursor:pointer" onclick="goTo('categories')">Início</span> &raquo; <span style="cursor:pointer" onclick="goTo('topicList', '${state.categoryId}')">${cat ? cat.name : ''}</span> &raquo; <span><b>${top ? top.title : ''}</b></span>`;
    }
    elBreadcrumb.innerHTML = html;
  }

  // ===== Navegação =====
  window.goTo = function(view, id) {
    state.view = view;
    if(view === 'categories') {
      state.categoryId = null;
      state.topicId = null;
    }
    else if(view === 'topicList') {
      state.categoryId = id;
      state.topicId = null;
    }
    else if(view === 'topicView') {
      const topic = topics.find(t => t.id === id);
      if(topic) {
        state.topicId = id;
        state.categoryId = topic.categoryId;
      }
    }
    render();
  };

  // ===== Categorias =====
  function renderCategories() {
    let html = `<div class="category-list"><h2>Categorias</h2><ul>`;
    categories.forEach(cat => {
      html += `<li onclick="goTo('topicList', '${cat.id}')">${cat.name}</li>`;
    });
    html += `</ul></div>`;
    elContent.innerHTML = html;
  }

  // ===== Lista de tópicos =====
  function renderTopicList() {
    const cat = categories.find(c => c.id === state.categoryId);
    if(!cat) {
      elContent.innerHTML = '<p>Categoria não encontrada.</p>';
      return;
    }
    const catTopics = topics.filter(t => t.categoryId === cat.id);
    let html = `<div class="topic-list"><h2>${cat.name}</h2>`;

    if(catTopics.length === 0) html += `<p><i>Sem tópicos ainda. Crie um!</i></p>`;
    else {
      catTopics.forEach(t => {
        const preview = t.posts[0]?.content.slice(0,200) + "...";
        const tagHTML = t.tags.map(tag => `<span class="tag">${tag}</span>`).join(" ");
        html += `
          <div class="topic-card" onclick="goTo('topicView','${t.id}')">
            <div class="topic-header">
              <h3>${t.title}</h3>
              <div class="tags">${tagHTML}</div>
            </div>
            <div class="topic-meta">Criado por ${findUserName(t.authorId)} - ${formatDate(t.posts[0].date)}</div>
            <div class="topic-preview">${preview}</div>
          </div>`;
      });
    }
    html += `</div>`;

    // Botão dentro do container, alinhado à direita
    html += `<div style="text-align: right;">
               <button class="create-forum-btn" onclick="showNewTopicForm()">Criar Fórum</button>
             </div>`;

    elContent.innerHTML = html;
  }

  // Mostrar formulário ao clicar no botão
window.showNewTopicForm = function() {
  const cat = categories.find(c => c.id === state.categoryId);
  let html = `
    <div class="form-section">
      <h3>Criar novo tópico</h3>
      <form id="newTopicForm">
        <label for="topicTitle">Título:</label>
        <input type="text" id="topicTitle" name="topicTitle" required minlength="5" maxlength="100" />
        
        <label for="topicContent">Mensagem inicial:</label>
        <textarea id="topicContent" name="topicContent" rows="4" required minlength="10"></textarea>
        
        <label>Escolha ao menos uma tag:</label>
        <div class="tag-options">
          ${availableTags.map(tag => `
            <div class="tag-option" data-value="${tag}">${tag}</div>
          `).join("")}
        </div>
        
        <button type="submit">Criar tópico</button>
      </form>
    </div>`;
  elContent.innerHTML += html;

  // ===== Controle de seleção das tags =====
  const tagEls = document.querySelectorAll(".tag-option");
  tagEls.forEach(el => {
    el.addEventListener("click", () => {
      el.classList.toggle("selected");
    });
  });

  // ===== Submissão =====
  document.getElementById('newTopicForm').addEventListener('submit', e => {
    e.preventDefault();
    const title = e.target.topicTitle.value.trim();
    const content = e.target.topicContent.value.trim();
    const tags = [...document.querySelectorAll(".tag-option.selected")].map(el => el.dataset.value);

    if(title.length < 5 || content.length < 10) {
      alert('Preencha título (5+) e mensagem (10+) corretamente.');
      return;
    }
    if(tags.length === 0) {
      alert('Escolha ao menos uma tag!');
      return;
    }

    const newId = 't' + (topics.length + 1);
    topics.push({
      id: newId,
      categoryId: cat.id,
      title,
      authorId: currentUser.id,
      tags,
      posts: [{authorId: currentUser.id, content, date: new Date()}]
    });
    goTo('topicView', newId);
  });
};


  // ===== Visualização do tópico =====
  function renderTopicView() {
    const topic = topics.find(t => t.id === state.topicId);
    if(!topic) {
      elContent.innerHTML = '<p>Tópico não encontrado.</p>';
      return;
    }
    const tagHTML = topic.tags.map(tag => `<span class="tag">${tag}</span>`).join(" ");
    let html = `<div class="topic-view">
      <h2>${topic.title}</h2>
      <div class="tags">${tagHTML}</div>
      <div><i>Criado por ${findUserName(topic.authorId)}</i></div>
      <div class="posts-list">`;

    topic.posts.forEach((post) => {
      html += `<div class="topic-post">
        <strong>${findUserName(post.authorId)}</strong>
        <small>${formatDate(post.date)}</small>
        <p>${post.content.replace(/\n/g, '<br>')}</p>
      </div>`;
    });
    html += `</div>`;

    // Form para responder
    html += `
    <div class="form-section">
      <h3>Responder tópico</h3>
      <form id="replyForm">
        <textarea id="replyContent" rows="4" required minlength="5" placeholder="Sua resposta..."></textarea>
        <button type="submit">Enviar resposta</button>
      </form>
    </div>`;

    elContent.innerHTML = html;

    document.getElementById('replyForm').addEventListener('submit', e => {
      e.preventDefault();
      const content = e.target.replyContent.value.trim();
      if(content.length < 5) {
        alert('Resposta muito curta.');
        return;
      }
      topic.posts.push({authorId: currentUser.id, content, date: new Date()});
      renderTopicView();
    });
  }

  // ===== Render principal =====
  function render() {
    renderBreadcrumb();
    if(state.view === 'categories') renderCategories();
    else if(state.view === 'topicList') renderTopicList();
    else if(state.view === 'topicView') renderTopicView();
    else elContent.innerHTML = '<p>Visualização inválida.</p>';
  }

  render();
})();
