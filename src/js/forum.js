// ==================================================================
// 1. CONFIGURAÇÃO DO SUPABASE
//    Insira suas credenciais do Supabase aqui.
// ==================================================================
const SUPABASE_URL = 'https://hfosdkkujbukurxvhrjr.supabase.co'; // Ex: 'https://xyz.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhmb3Nka2t1amJ1a3VyeHZocmpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY4NDAyNDYsImV4cCI6MjA3MjQxNjI0Nn0.8mALut0U5erB6mzADvTQ_QPXLibx5EeJfwIWyQzlfhw'; // Ex: 'ey...'

const { createClient } = supabase;
const dbClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ==================================================================
// 3. LÓGICA PRINCIPAL DO FÓRUM
// ==================================================================
const elContent = document.getElementById('content');
const elBreadcrumb = document.getElementById('breadcrumb');
const elAuthSection = document.getElementById('auth-section');

let state = {
  view: 'categories',
  categoryId: null,
  topicId: null,
  user: null,
  allTags: []
};

function formatDate(d) {
  return new Date(d).toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' });
}

async function renderBreadcrumb() {
  let html = '';
  if (state.view === 'categories') {
    html = `<span><b>Início</b></span>`;
  } else if (state.view === 'topicList') {
    const { data: cat } = await dbClient.from('categoria').select('nome').eq('categoria_id', state.categoryId).single();
    html = `<span onclick="goTo('categories')">Início</span> &raquo; <span><b>${cat ? cat.nome : ''}</b></span>`;
  } else if (state.view === 'topicView') {
    const { data: topic } = await dbClient.from('forum').select('title, categoria(nome, categoria_id)').eq('forum_id', state.topicId).single();
    if (topic) {
      html = `<span onclick="goTo('categories')">Início</span> &raquo; <span onclick="goTo('topicList', '${topic.categoria.categoria_id}')">${topic.categoria.nome}</span> &raquo; <span><b>${topic.title}</b></span>`;
    }
  }
  elBreadcrumb.innerHTML = html;
}

window.goTo = function (view, id = null) {
  state.view = view;
  if (view === 'categories') {
    state.categoryId = null;
    state.topicId = null;
  } else if (view === 'topicList') {
    state.categoryId = id;
    state.topicId = null;
  } else if (view === 'topicView') {
    state.topicId = id;
  }
  render();
};

async function renderCategories() {
  elContent.innerHTML = `<p>Carregando categorias...</p>`;
  const { data, error } = await dbClient.from('categoria').select('*');

  if (error) {
    elContent.innerHTML = `<p>Erro ao carregar categorias. Tente novamente.</p>`;
    console.error(error);
    return;
  }

  let html = `<div class="category-list"><h2>Categorias</h2><ul>`;
  data.forEach(cat => {
    html += `<li onclick="goTo('topicList', '${cat.categoria_id}')">${cat.nome}</li>`;
  });
  html += `</ul></div>`;
  elContent.innerHTML = html;
}

async function renderTopicList() {
  elContent.innerHTML = `<p>Carregando tópicos...</p>`;
  const { data: cat, error: catError } = await dbClient.from('categoria').select('nome').eq('categoria_id', state.categoryId).single();
  if (catError || !cat) {
    elContent.innerHTML = '<p>Categoria não encontrada.</p>';
    return;
  }

  const { data: topics, error: topicsError } = await dbClient
    .from('forum')
    .select('*, usuario(nome), forum_tag(tag(name)))')
    .eq('categoria_id', state.categoryId);

  if (topicsError) {
    elContent.innerHTML = `<p>Erro ao carregar tópicos.</p>`;
    console.error(topicsError);
    return;
  }

  let html = `<div class="topic-list"><h2>${cat.nome}</h2>`;
  if (topics.length === 0) {
    html += `<p><i>Sem tópicos ainda. Crie o primeiro!</i></p>`;
  } else {
    topics.forEach(t => {
      const tagHTML = t.forum_tag.map(ft => `<span class="tag">${ft.tag.name}</span>`).join(" ");
      html += `
                        <div class="topic-card" onclick="goTo('topicView','${t.forum_id}')">
                          <div class="topic-header">
                            <h3>${t.title}</h3>
                            <div class="tags">${tagHTML}</div>
                          </div>
                          <div class="topic-meta">Criado por ${t.usuario.nome || 'Anônimo'} em ${formatDate(t.criado_em)}</div>
                        </div>`;
    });
  }
  html += `</div>`;

  if (state.user) {
    html += `<div style="text-align: right;">
                             <button class="create-forum-btn" onclick="showNewTopicForm()">Criar Fórum</button>
                           </div>`;
  } else {
    html += `<p style="margin-top: 1rem;"><i>Faça login para criar um novo fórum.</i></p>`;
  }

  elContent.innerHTML = html;
}

window.showNewTopicForm = async function () {
  let formHtml = `
              <div class="form-section">
                <h3>Criar novo Fórum</h3>
                <form id="newTopicForm">
                  <label for="topicTitle">Título:</label>
                  <input type="text" id="topicTitle" name="topicTitle" required minlength="5" maxlength="100" />
                  
                  <label for="topicContent">Mensagem inicial:</label>
                  <textarea id="topicContent" name="topicContent" rows="4" required minlength="10"></textarea>
                  
                  <label>Escolha ao menos uma tag:</label>
                  <div class="tag-options">
                    ${state.allTags.map(tag => `
                      <div class="tag-option" data-id="${tag.tag_id}">${tag.name}</div>
                    `).join("")}
                  </div>
                  
                  <button type="submit">Criar fórum</button>
                </form>
              </div>`;
  elContent.innerHTML += formHtml;

  document.querySelectorAll(".tag-option").forEach(el => {
    el.addEventListener("click", () => el.classList.toggle("selected"));
  });

  document.getElementById('newTopicForm').addEventListener('submit', handleNewTopicSubmit);
  document.querySelector('.create-forum-btn').style.display = 'none';
};

async function handleNewTopicSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const submitButton = form.querySelector('button[type="submit"]');
  submitButton.disabled = true;
  submitButton.textContent = "Criando...";

  const title = form.topicTitle.value.trim();
  const content = form.topicContent.value.trim();
  const selectedTags = [...document.querySelectorAll(".tag-option.selected")].map(el => el.dataset.id);

  if (title.length < 5 || content.length < 10 || selectedTags.length === 0) {
    alert('Preencha todos os campos e selecione ao menos uma tag.');
    submitButton.disabled = false;
    submitButton.textContent = "Criar fórum";
    return;
  }

  const { data: forumData, error: forumError } = await dbClient
    .from('forum')
    .insert({ title, categoria_id: state.categoryId, usuario_id: state.user.id })
    .select()
    .single();

  if (forumError) {
    console.error("Erro ao criar fórum:", forumError);
    alert("Não foi possível criar o fórum.");
    submitButton.disabled = false;
    submitButton.textContent = "Criar fórum";
    return;
  }

  const newForumId = forumData.forum_id;

  const { error: postError } = await dbClient.from('post').insert({
    conteudo: content, forum_id: newForumId, usuario_id: state.user.id
  });

  const tagsToInsert = selectedTags.map(tagId => ({ forum_id: newForumId, tag_id: tagId }));
  const { error: tagsError } = await dbClient.from('forum_tag').insert(tagsToInsert);

  if (postError || tagsError) {
    alert("Fórum criado, mas houve um erro ao salvar o post ou as tags.");
  }

  goTo('topicView', newForumId);
}

async function renderTopicView() {
  elContent.innerHTML = `<p>Carregando tópico...</p>`;
  const { data: topic, error: topicError } = await dbClient
    .from('forum')
    .select('*, usuario(nome), forum_tag(tag(name)))')
    .eq('forum_id', state.topicId)
    .single();

  if (topicError || !topic) {
    elContent.innerHTML = '<p>Tópico não encontrado.</p>';
    return;
  }

  const { data: posts, error: postsError } = await dbClient
    .from('post')
    .select('*, usuario(nome)')
    .eq('forum_id', state.topicId)
    .order('criado_em', { ascending: true });

  const tagHTML = topic.forum_tag.map(ft => `<span class="tag">${ft.tag.name}</span>`).join(" ");
  let html = `<div class="topic-view">
                <h2>${topic.title}</h2>
                <div class="tags">${tagHTML}</div>
                <div class="topic-meta">Criado por ${topic.usuario.nome || 'Anônimo'} em ${formatDate(topic.criado_em)}</div>
                <div class="posts-list" style="margin-top: 1rem;">`;

  posts.forEach(post => {
    html += `<div class="topic-post">
                  <strong>${post.usuario.nome || 'Anônimo'}</strong>
                  <small>${formatDate(post.criado_em)}</small>
                  <p>${post.conteudo.replace(/\n/g, '<br>')}</p>
                </div>`;
  });
  html += `</div>`;

  if (state.user) {
    html += `
                  <div class="form-section">
                    <h3>Responder tópico</h3>
                    <form id="replyForm">
                      <textarea id="replyContent" rows="4" required minlength="5" placeholder="Sua resposta..."></textarea>
                      <button type="submit">Enviar resposta</button>
                    </form>
                  </div>`;
  } else {
    html += `<p style="margin-top: 1rem;"><i>Faça login para responder.</i></p>`;
  }

  elContent.innerHTML = html;

  if (state.user) {
    document.getElementById('replyForm').addEventListener('submit', handleReplySubmit);
  }
}

async function handleReplySubmit(e) {
  e.preventDefault();
  const form = e.target;
  const submitButton = form.querySelector('button[type="submit"]');
  const content = form.replyContent.value.trim();

  if (content.length < 5) {
    alert('Resposta muito curta.');
    return;
  }

  submitButton.disabled = true;
  submitButton.textContent = "Enviando...";

  const { error } = await dbClient.from('post').insert({
    conteudo: content, forum_id: state.topicId, usuario_id: state.user.id
  });

  if (error) {
    console.error("Erro ao responder:", error);
    alert("Não foi possível enviar sua resposta.");
  }
  renderTopicView();
}

function render() {
  renderBreadcrumb();
  if (state.view === 'categories') renderCategories();
  else if (state.view === 'topicList') renderTopicList();
  else if (state.view === 'topicView') renderTopicView();
  else elContent.innerHTML = '<p>Visualização inválida.</p>';
}

// ==================================================================
// 4. LÓGICA DE AUTENTICAÇÃO
// ==================================================================

function renderAuthUI() {
  if (state.user) {
    elAuthSection.innerHTML = `
                  <div class="user-info">
                    <p>Logado como: <strong>${state.user.email}</strong></p>
                    <button id="logoutBtn">Sair</button>
                  </div>
                `;
    document.getElementById('logoutBtn').addEventListener('click', async () => {
      await dbClient.auth.signOut();
    });
  } else {
    elAuthSection.innerHTML = `
                   <div class="auth-container">
                       <form id="login-form" class="auth-form">
                           <h3>Entrar</h3>
                           <input type="email" id="login-email" placeholder="Seu e-mail" required />
                           <input type="password" id="login-password" placeholder="Sua senha" required />
                           <button type="submit">Entrar</button>
                           <button type="button" class="google-btn">Entrar com Google</button>
                       </form>

                       <form id="signup-form" class="auth-form">
                           <h3>Registrar-se</h3>
                           <input type="text" id="signup-name" placeholder="Seu nome" required />
                           <input type="email" id="signup-email" placeholder="Seu e-mail" required />
                           <input type="password" id="signup-password" placeholder="Crie uma senha" required />
                           <button type="submit">Criar Conta</button>
                       </form>
                       
                       <div class="form-toggle">
                           <p id="toggle-p">Não tem uma conta? <a id="show-signup">Registre-se</a></p>
                       </div>
                   </div>
                 `;

    document.getElementById('login-form').addEventListener('submit', handleEmailLogin);
    document.getElementById('signup-form').addEventListener('submit', handleEmailSignUp);
    document.querySelector('.google-btn').addEventListener('click', handleGoogleLogin);

    const showSignupLink = document.getElementById('show-signup');

    const toggleForms = () => {
      const loginForm = document.getElementById('login-form');
      const signupForm = document.getElementById('signup-form');
      const toggleP = document.getElementById('toggle-p');

      if (signupForm.style.display === 'block') {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
        toggleP.innerHTML = 'Não tem uma conta? <a id="show-signup">Registre-se</a>';
        document.getElementById('show-signup').addEventListener('click', toggleForms);
      } else {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
        toggleP.innerHTML = 'Já tem uma conta? <a id="show-login">Entrar</a>';
        document.getElementById('show-login').addEventListener('click', toggleForms);
      }
    };

    showSignupLink.addEventListener('click', toggleForms);
  }
}

async function handleEmailLogin(e) {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  const { error } = await dbClient.auth.signInWithPassword({ email, password });
  if (error) alert(`Erro no login: ${error.message}`);
}

async function handleEmailSignUp(e) {
  e.preventDefault();
  const name = document.getElementById('signup-name').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  // Para que o nome seja salvo, é recomendável criar uma Função de Banco de Dados (Trigger) no Supabase
  // que copie o 'full_name' dos metadados para a sua tabela 'usuario'.
  // Ex: https://supabase.com/docs/guides/auth/managing-user-data
  const { data, error } = await dbClient.auth.signUp({
    email, password, options: { data: { full_name: name } }
  });

  if (error) {
    alert(`Erro no registro: ${error.message}`);
  } else if (data.user) {
    alert('Registro realizado! Por favor, verifique seu e-mail para confirmar a conta.');
  }
}

async function handleGoogleLogin() {
  const { error } = await dbClient.auth.signInWithOAuth({ provider: 'google' });
  if (error) console.error('Erro no login com Google:', error);
}

dbClient.auth.onAuthStateChange((event, session) => {
  state.user = session ? session.user : null;
  renderAuthUI();
  render();
});

// ==================================================================
// 5. INICIALIZAÇÃO DA APLICAÇÃO
// ==================================================================
async function initializeApp() {
  if (SUPABASE_URL === 'SUA_URL_SUPABASE_AQUI' || SUPABASE_ANON_KEY === 'SUA_CHAVE_ANON_AQUI') {
    document.body.innerHTML = `<div style="padding: 2rem; text-align: center; background: #ffdddd; border: 2px solid red;">
                    <h1>Configuração Incompleta</h1>
                    <p>Por favor, adicione sua URL e Chave Pública (Anon Key) do Supabase no início do script no arquivo HTML.</p>
                </div>`;
    return;
  }


  const { data: tags } = await dbClient.from('tag').select('*');
  if (tags) state.allTags = tags;

  const { data: { session } } = await dbClient.auth.getSession();
  state.user = session ? session.user : null;
  renderAuthUI();

  render();
}

initializeApp();
