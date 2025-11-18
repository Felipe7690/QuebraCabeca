
const personalities = [
  {
    nome: "Abdias do Nascimento",
    bio: "Ativista, artista e político. Fundador do Teatro Experimental do Negro.",
    dica: "Foi um grande defensor dos direitos civis e senador.",
    imagem: "imagens/abdias-do-nascimento.jpg",
    fatos: [
      "Indicado ao Prêmio Nobel da Paz em 2010.",
      "Fundou o Teatro Experimental do Negro (TEN) em 1944.",
      "Foi professor universitário nos Estados Unidos e Nigéria.",
      "Um dos ícones do Pan-Africanismo no Brasil.",
      "Foi deputado federal e senador da República."
    ]
  },
  {
    nome: "Aleijadinho",
    bio: "Antônio Francisco Lisboa, o maior escultor do barroco brasileiro.",
    dica: "Esculpia em pedra-sabão mesmo com limitações físicas.",
    imagem: "imagens/aleijadinho.jpg",
    fatos: [
      "Perdeu os dedos das mãos devido a uma doença degenerativa.",
      "Seus discípulos amarravam as ferramentas aos seus punhos para ele esculpir.",
      "Suas obras mais famosas são os 12 Profetas em Congonhas.",
      "Trabalhava principalmente com pedra-sabão e madeira.",
      "É considerado o maior artista colonial do Brasil."
    ]
  },
  {
    nome: "Antonieta de Barros",
    bio: "Jornalista e professora. Primeira deputada estadual negra do Brasil.",
    dica: "Lutou pela educação e pelos direitos das mulheres.",
    imagem: "imagens/antonieta-barros.jpg",
    fatos: [
      "Foi a primeira mulher negra a ser eleita deputada no Brasil (1934).",
      "Criou o Dia do Professor em Santa Catarina (antes de virar nacional).",
      "Fundou o jornal 'A Semana' para debater política e educação.",
      "Lutou intensamente pelo voto feminino.",
      "Era filha de uma ex-escravizada."
    ]
  },
  {
    nome: "Barack Obama",
    bio: "44º presidente dos Estados Unidos, o primeiro negro a ocupar o cargo.",
    dica: "Ganhou o Prêmio Nobel da Paz em 2009.",
    imagem: "imagens/barack-obama.jpg",
    fatos: [
      "Foi o 44º presidente dos Estados Unidos.",
      "Ganhou o Prêmio Nobel da Paz em 2009.",
      "Formou-se em Direito pela Universidade de Harvard.",
      "Autor de best-sellers como 'Minha História'.",
      "Implementou o programa de saúde conhecido como 'Obamacare'."
    ]
  },
  {
    nome: "Carolina Maria de Jesus",
    bio: "Escritora brasileira famosa por relatar sua vida na favela em diários.",
    dica: "Autora do best-seller 'Quarto de Despejo'.",
    imagem: "imagens/carolina-maria-de-jesus.jpg",
    fatos: [
      "Seu livro 'Quarto de Despejo' foi traduzido para 13 idiomas.",
      "Era catadora de papel antes de ser descoberta.",
      "Escreveu também romances, contos e poemas.",
      "Vendeu mais de 100 mil cópias na semana de lançamento.",
      "Sua escrita é marcada pela realidade crua da fome."
    ]
  },
  {
    nome: "Conceição Evaristo",
    bio: "Escritora contemporânea, cunhou o termo 'escrevivência'.",
    dica: "Autora de 'Ponciá Vicêncio'.",
    imagem: "imagens/conceicao-evaristo.jpg",
    fatos: [
      "Cunhou o conceito de 'Escrevivência' (escrita + vida).",
      "Venceu o Prêmio Jabuti de Literatura.",
      "Trabalhou como empregada doméstica para custear os estudos.",
      "É Doutora em Literatura Comparada.",
      "Sua obra foca na memória e condição da mulher negra."
    ]
  },
  {
    nome: "Dandara dos Palmares",
    bio: "Guerreira e líder quilombola, lutou capoeira e liderou exércitos.",
    dica: "Companheira de Zumbi na luta de Palmares.",
    imagem: "imagens/dandara.jpg",
    fatos: [
      "Liderou exércitos femininos e masculinos em Palmares.",
      "Era estrategista militar e dominava a capoeira.",
      "Preferiu a morte à escravidão ao ser capturada.",
      "Esposa de Zumbi dos Palmares e mãe de três filhos.",
      "Símbolo da resistência negra feminina no Brasil."
    ]
  },
  {
    nome: "Lélia Gonzalez",
    bio: "Filósofa e antropóloga, pioneira no feminismo negro no Brasil.",
    dica: "Criou o conceito de 'Amefricanidade'.",
    imagem: "imagens/lelia-gonzalez.jpg",
    fatos: [
      "Introduziu o conceito de 'Amefricanidade'.",
      "Fundadora do Movimento Negro Unificado (MNU).",
      "Criticava o mito da democracia racial no Brasil.",
      "Foi professora na PUC-Rio e tradutora.",
      "Uma das intelectuais brasileiras mais citadas no exterior."
    ]
  },
  {
    nome: "Luiz Gama",
    bio: "Advogado autodidata que libertou mais de 500 escravizados.",
    dica: "Patrono da Abolição da Escravidão no Brasil.",
    imagem: "imagens/luiz-gama.jpg",
    fatos: [
      "Libertou mais de 500 escravizados nos tribunais.",
      "Aprendeu a ler sozinho aos 17 anos.",
      "Foi vendido como escravo pelo próprio pai aos 10 anos.",
      "É o Patrono da Abolição da Escravidão no Brasil.",
      "Foi jornalista e poeta satírico."
    ]
  },
  {
    nome: "Machado de Assis",
    bio: "Um dos maiores escritores do mundo e fundador da ABL.",
    dica: "Escreveu 'Dom Casmurro' e 'Memórias Póstumas'.",
    imagem: "imagens/machado-de-assis.jpg",
    fatos: [
      "Fundou e foi o primeiro presidente da Academia Brasileira de Letras.",
      "Neto de escravos alforriados, nasceu no Morro do Livramento.",
      "Escreveu clássicos como 'Dom Casmurro' e 'Memórias Póstumas'.",
      "Era epilético e gago, superando grandes preconceitos.",
      "Muitas fotos suas foram embranquecidas historicamente."
    ]
  },
  {
    nome: "Martin Luther King Jr.",
    bio: "Líder do movimento pelos direitos civis nos EUA.",
    dica: "Famoso pelo discurso 'Eu Tenho um Sonho'.",
    imagem: "imagens/martin-luther-king.jpg",
    fatos: [
      "Fez o famoso discurso 'I Have a Dream' em Washington.",
      "Prêmio Nobel da Paz em 1964.",
      "Defendia a resistência não-violenta e desobediência civil.",
      "Foi assassinado em 1968 em Memphis.",
      "Seu dia é feriado nacional nos Estados Unidos."
    ]
  },
  {
    nome: "Milton Santos",
    bio: "Geógrafo renomado mundialmente, vencedor do prêmio Vautrin Lud.",
    dica: "Referência no estudo da globalização.",
    imagem: "imagens/milton-santos.jpg",
    fatos: [
      "Ganhou o Vautrin Lud, considerado o 'Nobel da Geografia'.",
      "Escreveu 'Por uma outra globalização'.",
      "Foi preso e exilado durante a Ditadura Militar.",
      "Lecionou em universidades na Europa, África e Américas.",
      "Criticava a globalização perversa que aumenta desigualdades."
    ]
  },
  {
    nome: "Pixinguinha",
    bio: "Maestro e compositor, um dos pais da música popular brasileira.",
    dica: "Gênio do Choro, tocava flauta e saxofone.",
    imagem: "imagens/pixinguinha.jpg",
    fatos: [
      "Considerado um dos pais da Música Popular Brasileira (MPB).",
      "Compôs 'Carinhoso', uma das músicas mais famosas do Brasil.",
      "Era virtuoso na flauta e no saxofone.",
      "Integrou o grupo 'Os Oito Batutas', sucesso em Paris.",
      "Seu aniversário, 23 de abril, é o Dia Nacional do Choro."
    ]
  }
];

let state = {
  personality: null,
  pieces: [],
  boardSlots: Array(16).fill(null),
  timer: 90,
  timerInterval: null,
  removeMode: false,
  selectedPieceId: null,
  isPlaying: false,
  musicPlaying: false
};

const els = {
  screens: {
    home: document.getElementById('home-screen'),
    game: document.getElementById('game-screen'),
    victory: document.getElementById('victory-screen'),
    fail: document.getElementById('fail-screen')
  },
  board: document.getElementById('puzzle-board'),
  piecesContainer: document.getElementById('pieces-container'),
  timer: document.getElementById('timer-display'),
  placedCount: document.getElementById('placed-count'),
  modal: document.getElementById('quiz-modal'),
  quizTitle: document.getElementById('quiz-title'),
  quizHint: document.getElementById('quiz-hint'),
  quizOptions: document.getElementById('quiz-options'),
  btnRemove: document.getElementById('btn-remove'),
  audio: document.getElementById('bg-music'),
  endTitle: document.getElementById('end-title'),
  endImg: document.getElementById('final-image'),
  endName: document.getElementById('final-name'),
  endBio: document.getElementById('final-bio'),
  factBox: document.getElementById('fact-display'),
  factText: document.getElementById('fact-text')
};

function init() {
  document.getElementById('btn-start').onclick = () => goToScreen('game');
  document.getElementById('btn-replay').onclick = () => goToScreen('game');
  document.getElementById('btn-retry').onclick = () => goToScreen('game');
  document.getElementById('btn-reveal').onclick = showReveal;
  document.getElementById('btn-music').onclick = toggleMusic;
  els.btnRemove.onclick = toggleRemoveMode;
  
  checkMobileSize();
  window.onresize = () => {
    checkMobileSize();
    if(state.isPlaying) renderAll();
  };
}
init();

function goToScreen(screen) {
  Object.values(els.screens).forEach(s => s.classList.remove('active'));
  els.screens[screen].classList.add('active');
  if(screen === 'game') startGame();
  else stopGame();
}

function checkMobileSize() {
  const r = document.documentElement;
  if(window.innerWidth <= 600) {
    r.style.setProperty('--s', '70px');
    r.style.setProperty('--r', '18px');
  } else {
    r.style.setProperty('--s', '90px');
    r.style.setProperty('--r', '22px');
  }
}

function startGame() {
  state.boardSlots = Array(16).fill(null);
  state.timer = 90;
  state.removeMode = false;
  state.selectedPieceId = null;
  state.isPlaying = true;
  els.btnRemove.classList.remove('btn-remove-active');
  els.btnRemove.innerText = "🗑️ Remover";
  els.modal.classList.remove('active');
  
  els.factText.innerText = "Encaixe uma peça para descobrir um fato histórico...";
  
  state.personality = personalities[Math.floor(Math.random() * personalities.length)];
  
  els.board.innerHTML = '';
  els.piecesContainer.innerHTML = '';
  updateTimerDisplay();

  const img = new Image();
  img.src = state.personality.imagem;
  
  img.onload = () => { generatePiecesData(img.src); renderAll(); startTimer(); };
  img.onerror = () => { generatePiecesData(null); renderAll(); startTimer(); };
}

function stopGame() {
  state.isPlaying = false;
  clearInterval(state.timerInterval);
}

function generatePiecesData(imgSrc) {
  state.pieces = [];
  const shapes = [];
  
  for(let r=0; r<4; r++) {
    for(let c=0; c<4; c++) {
      let shape = { top: 0, right: 0, bottom: 0, left: 0 };
      if(r > 0) shape.top = -shapes[(r-1)*4 + c].bottom;
      if(c < 3) shape.right = Math.random() > 0.5 ? 1 : -1;
      if(r < 3) shape.bottom = Math.random() > 0.5 ? 1 : -1;
      if(c > 0) shape.left = -shapes[r*4 + (c-1)].right;
      shapes.push(shape);
      
      state.pieces.push({ id: r*4 + c, r, c, shape, imgSrc });
    }
  }
  
  // Ajuda inicial
  const starter = Math.floor(Math.random() * 16);
  state.boardSlots[starter] = starter;
  updateFact();
}

function updateFact() {
  const facts = state.personality.fatos;
  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  els.factText.innerText = randomFact;
  els.factBox.classList.remove('fact-animation');
  void els.factBox.offsetWidth;
  els.factBox.classList.add('fact-animation');
}


function renderAll() {
  els.board.innerHTML = '';
  els.piecesContainer.innerHTML = '';
  
  for(let i=0; i<16; i++) {
    const slot = document.createElement('div');
    slot.className = 'puzzle-slot';
    slot.dataset.index = i;
    
    slot.onclick = () => handleSlotClick(i);
    slot.ondragover = (e) => e.preventDefault();
    slot.ondrop = (e) => handleDrop(e, i);
    
    const pieceId = state.boardSlots[i];
    
    if(pieceId !== null) {
      const pieceEl = createPieceElement(pieceId);
      pieceEl.classList.add('placed');
      pieceEl.onclick = (e) => {
        e.stopPropagation();
        if(state.removeMode) {
          state.boardSlots[i] = null;
          renderAll();
          toggleRemoveMode();
        }
      };
      slot.appendChild(pieceEl);
    } else {
      const targetPiece = state.pieces[i];
      const ghost = document.createElement('div');
      ghost.className = 'slot-ghost';
      const svgUrl = getSvgMask(targetPiece.shape);
      ghost.style.setProperty('--mask', `url('${svgUrl}')`);
      slot.appendChild(ghost);
    }
    els.board.appendChild(slot);
  }
  
  const availablePieces = state.pieces.filter(p => !state.boardSlots.includes(p.id));
  availablePieces.forEach(p => {
    const pieceEl = createPieceElement(p.id);
    pieceEl.onclick = (e) => {
      e.stopPropagation();
      if(!state.removeMode) selectPiece(p.id);
    };
    els.piecesContainer.appendChild(pieceEl);
  });
  
  const count = state.boardSlots.filter(x => x !== null).length;
  els.placedCount.innerText = count;
  
  if(count === 16 && state.isPlaying && !els.modal.classList.contains('active')) {
    checkWinCondition();
  }
}

function createPieceElement(id) {
  const data = state.pieces.find(p => p.id === id);
  const el = document.createElement('div');
  el.className = 'puzzle-piece';
  if(state.selectedPieceId === id) el.classList.add('selected');
  
  const s = window.innerWidth <= 600 ? 70 : 90;
  const r = window.innerWidth <= 600 ? 18 : 22;

  if(data.imgSrc) {
    el.style.backgroundImage = `url(${data.imgSrc})`;
    el.style.backgroundSize = '360px 360px'; 
    if(window.innerWidth <= 600) el.style.backgroundSize = '280px 280px';
    el.style.backgroundPosition = `${-(data.c * s) + r}px ${-(data.r * s) + r}px`;
  } else {
    el.innerText = id + 1;
    el.style.display = "flex"; el.style.justifyContent = "center"; el.style.alignItems = "center";
    el.style.color = "rgba(255,255,255,0.5)"; el.style.fontSize = "20px";
  }
  
  const svgUrl = getSvgMask(data.shape);
  el.style.setProperty('--mask', `url('${svgUrl}')`);
  
  el.draggable = true;
  el.ondragstart = (e) => {
    e.dataTransfer.setData('text', id);
    selectPiece(id);
  };
  
  return el;
}

function getSvgMask(shape) {
  const s = 100; 
  const t = 26; 
  let path = `M 0 0`; 
  
  if(shape.top === 1) path += ` H 35 C 35 -${t}, 65 -${t}, 65 0 H 100`;
  else if(shape.top === -1) path += ` H 35 C 35 ${t}, 65 ${t}, 65 0 H 100`;
  else path += ` H 100`;
  
  if(shape.right === 1) path += ` V 35 C ${100+t} 35, ${100+t} 65, 100 65 V 100`;
  else if(shape.right === -1) path += ` V 35 C ${100-t} 35, ${100-t} 65, 100 65 V 100`;
  else path += ` V 100`;
  
  if(shape.bottom === 1) path += ` H 65 C 65 ${100+t}, 35 ${100+t}, 35 100 H 0`;
  else if(shape.bottom === -1) path += ` H 65 C 65 ${100-t}, 35 ${100-t}, 35 100 H 0`;
  else path += ` H 0`;
  
  if(shape.left === 1) path += ` V 65 C -${t} 65, -${t} 35, 0 35 V 0`;
  else if(shape.left === -1) path += ` V 65 C ${t} 65, ${t} 35, 0 35 V 0`;
  else path += ` V 0`;
  
  path += ` Z`;
  const vbStart = -t; const vbSize = s + 2*t;
  const svg = `<svg viewBox="${vbStart} ${vbStart} ${vbSize} ${vbSize}" xmlns="http://www.w3.org/2000/svg"><path d="${path}" fill="black"/></svg>`;
  return "data:image/svg+xml;base64," + btoa(svg);
}

function selectPiece(id) {
  state.selectedPieceId = (state.selectedPieceId === id) ? null : id;
  renderAll();
}

function handleSlotClick(idx) {
  if(state.removeMode) return;
  if(state.selectedPieceId !== null) movePieceToSlot(state.selectedPieceId, idx);
}

function handleDrop(e, idx) {
  e.preventDefault();
  const id = parseInt(e.dataTransfer.getData('text'));
  if(!isNaN(id)) movePieceToSlot(id, idx);
}


function movePieceToSlot(pieceId, targetIdx) {

  if (pieceId !== targetIdx) {
    const selectedEl = document.querySelector('.puzzle-piece.selected');
    if(selectedEl) {
      selectedEl.classList.add('shake-wrong');
      setTimeout(() => selectedEl.classList.remove('shake-wrong'), 400);
    }
    state.selectedPieceId = null;
    renderAll();
    return;
  }

  const currentIndex = state.boardSlots.indexOf(pieceId);
  if(currentIndex !== -1) state.boardSlots[currentIndex] = null;
  
  state.boardSlots[targetIdx] = pieceId;
  state.selectedPieceId = null;
  updateFact(); // Mostra fato novo
  renderAll();
}

function toggleRemoveMode() {
  state.removeMode = !state.removeMode;
  if(state.removeMode) {
    els.btnRemove.classList.add('btn-remove-active');
    els.btnRemove.innerText = "Cancelar";
  } else {
    els.btnRemove.classList.remove('btn-remove-active');
    els.btnRemove.innerText = "🗑️ Remover";
  }
}

function startTimer() {
  clearInterval(state.timerInterval);
  state.timerInterval = setInterval(() => {
    state.timer--;
    updateTimerDisplay();
    if(state.timer <= 0) {
      clearInterval(state.timerInterval);
      showFail();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const m = Math.floor(state.timer / 60).toString().padStart(2,'0');
  const s = (state.timer % 60).toString().padStart(2,'0');
  els.timer.innerText = `${m}:${s}`;
  if(state.timer < 10) els.timer.style.color = 'red';
  else els.timer.style.color = 'var(--c-primary)';
}

function checkWinCondition() {
  let allCorrect = true;
  for (let i = 0; i < 16; i++) {
      if (state.boardSlots[i] !== i) { allCorrect = false; break; }
  }
  
  if (allCorrect) {
      clearInterval(state.timerInterval);
      els.modal.classList.add('active');
      els.quizTitle.innerText = "Quem é esta Lenda?";
      els.quizHint.innerText = `Dica: ${state.personality.dica}`;
      generateQuizOptions();
  }
}

function generateQuizOptions() {
  els.quizOptions.innerHTML = '';
  const correct = state.personality.nome;
  let others = personalities.filter(p => p.nome !== correct).map(p => p.nome);
  others.sort(() => Math.random() - 0.5);
  let options = others.slice(0, 3);
  options.push(correct);
  options.sort(() => Math.random() - 0.5);
  
  options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option w-100 mb-2 rounded';
    btn.innerText = opt;
    btn.onclick = () => handleAnswer(btn, opt === correct);
    els.quizOptions.appendChild(btn);
  });
}

function handleAnswer(btn, isCorrect) {
  const all = els.quizOptions.querySelectorAll('button');
  all.forEach(b => b.disabled = true);
  
  if(isCorrect) {
    btn.classList.remove('btn-outline-dark');
    btn.classList.add('btn-success');
    setTimeout(() => {
      els.modal.classList.remove('active');
      showVictory();
    }, 1000);
  } else {
    btn.classList.remove('btn-outline-dark');
    btn.classList.add('btn-danger');
    const filled = state.boardSlots.map((v,i)=>v!==null?i:-1).filter(i=>i!==-1);
    if(filled.length > 0) {
      const rnd = filled[Math.floor(Math.random()*filled.length)];
      state.boardSlots[rnd] = null;
      renderAll();
    }
    setTimeout(() => {
      els.modal.classList.remove('active');
      startTimer();
    }, 1000);
  }
}

function showVictory() {
  els.endTitle.innerText = "História Revelada!";
  els.endTitle.className = "game-title text-success";
  fillEndScreen();
  goToScreen('victory');
}

function showReveal() {
  els.endTitle.innerText = "Esta era a Lenda";
  els.endTitle.className = "game-title text-muted";
  fillEndScreen();
  goToScreen('victory');
}

function fillEndScreen() {
  els.endImg.src = state.personality.imagem;
  els.endName.innerText = state.personality.nome;
  els.endBio.innerText = state.personality.bio;
}

function showFail() { goToScreen('fail'); }

function toggleMusic() {
  if(state.musicPlaying) {
    els.audio.pause(); state.musicPlaying = false;
    document.getElementById('btn-music').innerText = "🎵";
  } else {
    els.audio.play(); state.musicPlaying = true;
    document.getElementById('btn-music').innerText = "🔇";
  }
}