(() => {
    // Dados simulados (em memória)
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
  
    // Estrutura: {id, categoryId, title, authorId, posts: [{authorId, content, date}]}
    let topics = [
      {
        id: 't1',
        categoryId: 'geral',
        title: 'Como calibrar minha impressora Braille?',
        authorId: 'user1',
        posts: [
          {authorId: 'user1', content: 'Alguém pode me ajudar com a calibração?', date: new Date('2025-08-01T10:00')},
          {authorId: 'user2', content: 'Claro, qual modelo você usa?', date: new Date('2025-08-01T10:10')},
        ],
      },
      {
        id: 't2',
        categoryId: 'problemas',
        title: 'Erro no software de impressão',
        authorId: 'user3',
        posts: [
          {authorId: 'user3', content: 'O programa trava ao enviar o arquivo.', date: new Date('2025-08-02T14:20')},
        ],
      },
    ];
  
    // Mensagens privadas (simples, pares de usuários)
    // Ex: {userA, userB, messages: [{senderId, content, date}]}
    let privateMessages = [
      {
        userA: 'user1',
        userB: 'user2',
        messages: [
          {senderId: 'user1', content: 'Oi João, consegue me ajudar com o problema na impressora?', date: new Date('2025-08-03T09:00')},
          {senderId: 'user2', content: 'Oi Maria! Claro, pode mandar o modelo?', date: new Date('2025-08-03T09:05')},
        ]
      }
    ];
  
    // Estado de navegação
    let state = {
      view: 'categories', // categories, topicList, topicView, privateMessages
      categoryId: null,
      topicId: null,
      privateChatUserId: null,
    };
  
    const elContent = document.getElementById('content');
    const elBreadcrumb = document.getElementById('breadcrumb');
  
    // Funções utilitárias
    function formatDate(d) {
      return d.toLocaleString('pt-BR', {dateStyle:'short', timeStyle:'short'});
    }
  
    function findUserName(id) {
      const u = users.find(u => u.id === id);
      return u ? u.name : 'Desconhecido';
    }
  
    // Render breadcrumb
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
      else if(state.view === 'privateMessages') {
        html = `<span style="cursor:pointer" onclick="goTo('categories')">Início</span> &raquo; <span><b>Mensagens Privadas</b></span>`;
      }
      elBreadcrumb.innerHTML = html;
    }
  
    // Navegação
    window.goTo = function(view, id) {
      state.view = view;
      if(view === 'categories') {
        state.categoryId = null;
        state.topicId = null;
        state.privateChatUserId = null;
      }
      else if(view === 'topicList') {
        state.categoryId = id;
        state.topicId = null;
        state.privateChatUserId = null;
      }
      else if(view === 'topicView') {
        // id = topic id
        const topic = topics.find(t => t.id === id);
        if(topic) {
          state.topicId = id;
          state.categoryId = topic.categoryId;
          state.privateChatUserId = null;
        }
      }
      else if(view === 'privateMessages') {
        state.privateChatUserId = id; // conversa com este user id
        state.categoryId = null;
        state.topicId = null;
      }
      render();
    };
  
    // Render categoria lista
    function renderCategories() {
      let html = `<div class="category-list"><h2>Categorias</h2><ul>`;
      categories.forEach(cat => {
        html += `<li onclick="goTo('topicList', '${cat.id}')">${cat.name}</li>`;
      });
      html += `</ul>`;
      html += `<button onclick="goTo('privateMessages', '${users.find(u => u.id !== currentUser.id).id}')">Mensagens Privadas</button>`;
      html += `</div>`;
      elContent.innerHTML = html;
    }
  
    // Render lista de tópicos por categoria
    function renderTopicList() {
      const cat = categories.find(c => c.id === state.categoryId);
      if(!cat) {
        elContent.innerHTML = '<p>Categoria não encontrada.</p>';
        return;
      }
      const catTopics = topics.filter(t => t.categoryId === cat.id);
      let html = `<div class="topic-list"><h2>${cat.name}</h2><ul>`;
      if(catTopics.length === 0) html += `<li><i>Sem tópicos ainda. Crie um!</i></li>`;
      catTopics.forEach(t => {
        html += `<li onclick="goTo('topicView', '${t.id}')">${t.title} <small>(por ${findUserName(t.authorId)})</small></li>`;
      });
      html += `</ul>`;
  
      // Form para novo tópico
      html += `
      <div class="form-section">
        <h3>Criar novo tópico</h3>
        <form id="newTopicForm">
          <label for="topicTitle">Título:</label>
          <input type="text" id="topicTitle" name="topicTitle" required minlength="5" maxlength="100" />
          <label for="topicContent">Mensagem inicial:</label>
          <textarea id="topicContent" name="topicContent" rows="4" required minlength="10"></textarea>
          <button type="submit">Criar tópico</button>
        </form>
      </div>`;
  
      elContent.innerHTML = html;
  
      document.getElementById('newTopicForm').addEventListener('submit', e => {
        e.preventDefault();
        const title = e.target.topicTitle.value.trim();
        const content = e.target.topicContent.value.trim();
        if(title.length < 5 || content.length < 10) {
          alert('Preencha título (5+) e mensagem (10+) corretamente.');
          return;
        }
        const newId = 't' + (topics.length + 1);
        topics.push({
          id: newId,
          categoryId: cat.id,
          title,
          authorId: currentUser.id,
          posts: [{authorId: currentUser.id, content, date: new Date()}]
        });
        goTo('topicView', newId);
      });
    }
  
    // Render página de tópico
    function renderTopicView() {
      const topic = topics.find(t => t.id === state.topicId);
      if(!topic) {
        elContent.innerHTML = '<p>Tópico não encontrado.</p>';
        return;
      }
      let html = `<div class="topic-view">
        <h2>${topic.title}</h2>
        <div><i>Criado por ${findUserName(topic.authorId)}</i></div>
        <div class="posts-list">`;
  
      topic.posts.forEach((post, idx) => {
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
  
    // Render mensagens privadas simples
    function renderPrivateMessages() {
      let html = `<div class="private-messages">
        <h2>Mensagens Privadas</h2>`;
  
      // Lista usuários para conversar
      html += `<h3>Contatos</h3><ul>`;
      users.forEach(u => {
        if(u.id !== currentUser.id) {
          html += `<li style="cursor:pointer;${state.privateChatUserId===u.id?'font-weight:bold;':''}" onclick="goTo('privateMessages','${u.id}')">${u.name}</li>`;
        }
      });
      html += `</ul>`;
  
      if(state.privateChatUserId) {
        const chatUser = users.find(u => u.id === state.privateChatUserId);
        html += `<div class="chat-container">
          <div class="chat-header">Conversa com ${chatUser ? chatUser.name : ''}</div>
          <div class="chat-messages" id="chatMessages">`;
  
        // Busca conversa entre currentUser e chatUser
        const chat = privateMessages.find(c => 
          (c.userA === currentUser.id && c.userB === state.privateChatUserId) ||
          (c.userB === currentUser.id && c.userA === state.privateChatUserId)
        );
  
        if(chat) {
          chat.messages.forEach(m => {
            html += `<div class="chat-message"><span class="sender">${findUserName(m.senderId)}:</span> ${m.content}</div>`;
          });
        } else {
          html += `<div><i>Nenhuma mensagem nesta conversa.</i></div>`;
        }
  
        html += `</div>
        <form id="chatForm" class="chat-inputs">
          <input type="text" id="chatInput" placeholder="Escreva uma mensagem" autocomplete="off" required />
          <button type="submit">Enviar</button>
        </form>
        </div>`;
      } else {
        html += `<p>Selecione um contato para começar a conversar.</p>`;
      }
  
      html += `</div>`;
      elContent.innerHTML = html;
  
      if(state.privateChatUserId) {
        const chatForm = document.getElementById('chatForm');
        chatForm.addEventListener('submit', e => {
          e.preventDefault();
          const input = document.getElementById('chatInput');
          const msg = input.value.trim();
          if(msg.length === 0) return;
  
          let chat = privateMessages.find(c => 
            (c.userA === currentUser.id && c.userB === state.privateChatUserId) ||
            (c.userB === currentUser.id && c.userA === state.privateChatUserId)
          );
          if(!chat) {
            chat = {userA: currentUser.id, userB: state.privateChatUserId, messages: []};
            privateMessages.push(chat);
          }
          chat.messages.push({senderId: currentUser.id, content: msg, date: new Date()});
          input.value = '';
          renderPrivateMessages();
        });
      }
    }
  
    // Render tudo
    function render() {
      renderBreadcrumb();
      if(state.view === 'categories') renderCategories();
      else if(state.view === 'topicList') renderTopicList();
      else if(state.view === 'topicView') renderTopicView();
      else if(state.view === 'privateMessages') renderPrivateMessages();
      else elContent.innerHTML = '<p>Visualização inválida.</p>';
    }
  
    render();
  })();