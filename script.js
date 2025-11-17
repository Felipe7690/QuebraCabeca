const config = {
  timerStart: 90,
  penaltyTime: 15,
};

const personalities = [
  {
    nome: "Abdias do Nascimento",
    bio: "Ativista, artista e político. Fundador do Teatro Experimental do Negro.",
    dica: "Foi um grande defensor dos direitos civis e senador.",
    imagem: "imagens/abdias-do-nascimento.jpg"
  },
  {
    nome: "Aleijadinho",
    bio: "Antônio Francisco Lisboa, o maior escultor do barroco brasileiro.",
    dica: "Esculpia em pedra-sabão mesmo com limitações físicas.",
    imagem: "imagens/aleijadinho.jpg"
  },
  {
    nome: "Antonieta de Barros",
    bio: "Jornalista e professora. Primeira deputada estadual negra do Brasil.",
    dica: "Lutou pela educação e pelos direitos das mulheres.",
    imagem: "imagens/antonieta-barros.jpg"
  },
  {
    nome: "Barack Obama",
    bio: "44º presidente dos Estados Unidos, o primeiro negro a ocupar o cargo.",
    dica: "Ganhou o Prêmio Nobel da Paz em 2009.",
    imagem: "imagens/barack-obama.jpg"
  },
  {
    nome: "Carolina Maria de Jesus",
    bio: "Escritora brasileira famosa por relatar sua vida na favela em diários.",
    dica: "Autora do best-seller 'Quarto de Despejo'.",
    imagem: "imagens/carolina-maria-de-jesus.jpg"
  },
  {
    nome: "Conceição Evaristo",
    bio: "Escritora contemporânea, cunhou o termo 'escrevivência'.",
    dica: "Autora de 'Ponciá Vicêncio'.",
    imagem: "imagens/conceicao-evaristo.jpg"
  },
  {
    nome: "Dandara dos Palmares",
    bio: "Guerreira e líder quilombola, lutou capoeira e liderou exércitos.",
    dica: "Companheira de Zumbi na luta de Palmares.",
    imagem: "imagens/dandara.jpg"
  },
  {
    nome: "Lélia Gonzalez",
    bio: "Filósofa e antropóloga, pioneira no feminismo negro no Brasil.",
    dica: "Criou o conceito de 'Amefricanidade'.",
    imagem: "imagens/lelia-gonzalez.jpg"
  },
  {
    nome: "Luiz Gama",
    bio: "Advogado autodidata que libertou mais de 500 escravizados.",
    dica: "Patrono da Abolição da Escravidão no Brasil.",
    imagem: "imagens/luiz-gama.jpg"
  },
  {
    nome: "Machado de Assis",
    bio: "Um dos maiores escritores do mundo e fundador da ABL.",
    dica: "Escreveu 'Dom Casmurro' e 'Memórias Póstumas'.",
    imagem: "imagens/machado-de-assis.jpg"
  },
  {
    nome: "Martin Luther King Jr.",
    bio: "Líder do movimento pelos direitos civis nos EUA.",
    dica: "Famoso pelo discurso 'Eu Tenho um Sonho'.",
    imagem: "imagens/martin-luther-king.jpg"
  },
  {
    nome: "Milton Santos",
    bio: "Geógrafo renomado mundialmente, vencedor do prêmio Vautrin Lud.",
    dica: "Referência no estudo da globalização.",
    imagem: "imagens/milton-santos.jpg"
  },
  {
    nome: "Pixinguinha",
    bio: "Maestro e compositor, um dos pais da música popular brasileira.",
    dica: "Gênio do Choro, tocava flauta e saxofone.",
    imagem: "imagens/pixinguinha.jpg"
  }
];

let state = {
  screen: 'home',
  personality: null,
  pieces: [],
  board: Array(16).fill(null),
  placedCount: 0,
  timeLeft: 0,
  timerInterval: null,
  removeMode: false,
  isPlaying: false,
  audioPlaying: false
};

const screens = {
  home: document.getElementById('home-screen'),
  game: document.getElementById('game-screen'),
  victory: document.getElementById('victory-screen'),
  fail: document.getElementById('game-over-screen')
};
const els = {
  board: document.getElementById('puzzle-board'),
  pieces: document.getElementById('pieces-container'),
  timer: document.getElementById('timer-display'),
  score: document.getElementById('score-count'),
  modal: document.getElementById('quiz-modal'),
  options: document.getElementById('quiz-options'),
  finalImg: document.getElementById('final-image'),
  finalName: document.getElementById('victory-name'),
  finalBio: document.getElementById('victory-bio'),
  bgMusic: document.getElementById('bg-music'),
  removeBtn: document.getElementById('btn-remove-mode'),
  // NOVO ELEMENTO:
  resultTitle: document.getElementById('result-title'),
  revealBtn: document.getElementById('btn-reveal-fail')
};

document.getElementById('btn-start').addEventListener('click', () => switchScreen('game'));
document.getElementById('btn-replay-win').addEventListener('click', () => switchScreen('game'));
document.getElementById('btn-replay-fail').addEventListener('click', () => switchScreen('game'));
document.getElementById('btn-music').addEventListener('click', toggleMusic);
els.removeBtn.addEventListener('click', toggleRemoveMode);
// NOVO LISTENER
els.revealBtn.addEventListener('click', showReveal);

function switchScreen(screenName) {
  Object.values(screens).forEach(s => s.classList.remove('active'));
  screens[screenName].classList.add('active');
  state.screen = screenName;
  if (screenName === 'game') startGame();
  else stopGame();
}

function startGame() {
  state.isPlaying = true;
  state.placedCount = 0;
  state.board = Array(16).fill(null);
  state.timeLeft = config.timerStart;
  state.removeMode = false;
  els.removeBtn.classList.remove('active-mode');
  els.modal.classList.remove('active');
  
  state.personality = personalities[Math.floor(Math.random() * personalities.length)];
  
  els.board.innerHTML = '';
  els.pieces.innerHTML = '';
  updateTimerDisplay();
  
  const img = new Image();
  img.src = state.personality.imagem;
  
  img.onload = () => {
    initPuzzle(img.src);
    startTimer();
  };
  img.onerror = () => {
    alert(`Erro ao carregar a imagem: ${state.personality.imagem}`);
  };
}

function stopGame() {
  state.isPlaying = false;
  clearInterval(state.timerInterval);
}

function initPuzzle(imgSrc) {
  const rows = 4, cols = 4;
  const pieces = [];
  const shapes = []; 
  
  for(let r=0; r<rows; r++) {
    for(let c=0; c<cols; c++) {
      let shape = { top: 0, right: 0, bottom: 0, left: 0 };
      if(r > 0) shape.top = -shapes[(r-1)*cols + c].bottom;
      if(c < cols-1) shape.right = Math.random() > 0.5 ? 1 : -1;
      if(r < rows-1) shape.bottom = Math.random() > 0.5 ? 1 : -1;
      if(c > 0) shape.left = -shapes[r*cols + (c-1)].right;
      shapes.push(shape);
      pieces.push({ id: r*cols + c, r, c, shape, imgSrc, placed: false });
    }
  }
  
  state.pieces = pieces;
  
  pieces.forEach((p, i) => {
    const slot = document.createElement('div');
    slot.className = 'puzzle-slot';
    slot.dataset.index = i;
    
    const shapeDiv = document.createElement('div');
    shapeDiv.className = 'puzzle-slot-shape';
    const maskStyle = generateMask(p.shape);
    shapeDiv.style.setProperty('--mask', maskStyle);
    shapeDiv.style.webkitMaskImage = maskStyle;
    shapeDiv.style.maskImage = maskStyle;
    
    slot.appendChild(shapeDiv);
    slot.addEventListener('dragover', e => e.preventDefault());
    slot.addEventListener('drop', handleDrop);
    slot.addEventListener('click', handleSlotClick);
    els.board.appendChild(slot);
  });
  
  const shuffled = [...pieces].sort(() => Math.random() - 0.5);
  shuffled.forEach(p => {
    const el = createPieceElement(p);
    els.pieces.appendChild(el);
  });
  
  const starter = shuffled[0];
  renderPieceInSlot(starter.id, starter.id);
}

function createPieceElement(pieceData) {
  const el = document.createElement('div');
  el.className = 'puzzle-piece';
  el.draggable = true;
  el.dataset.id = pieceData.id;
  
  if(pieceData.imgSrc) {
    el.style.backgroundImage = `url(${pieceData.imgSrc})`;
    el.style.backgroundSize = '360px 360px';
    el.style.backgroundPosition = `${-(pieceData.c * 90)}px ${-(pieceData.r * 90)}px`;
  }

  const maskStyle = generateMask(pieceData.shape);
  el.style.setProperty('--mask', maskStyle);

  el.addEventListener('dragstart', handleDragStart);
  el.addEventListener('click', handlePieceClick);

  return el;
}

function generateMask(shape) {
  const s = 90, tab = 18;
  const black = '#000', transp = '#0000';
  let masks = [`linear-gradient(${black},${black}) center/${s-2*tab}px ${s-2*tab}px no-repeat`];
  
  if(shape.top === 1) masks.push(`radial-gradient(circle at center bottom, ${black} 70%, ${transp} 71%) top center / ${tab*2}px ${tab}px no-repeat`);
  else if(shape.top === -1) masks.push(`radial-gradient(circle at center top, ${transp} 70%, ${black} 71%) top center / 100% ${tab}px no-repeat`);
  else masks.push(`linear-gradient(${black},${black}) top center / 100% ${tab}px no-repeat`);
  
  if(shape.right === 1) masks.push(`radial-gradient(circle at left center, ${black} 70%, ${transp} 71%) right center / ${tab}px ${tab*2}px no-repeat`);
  else if(shape.right === -1) masks.push(`radial-gradient(circle at right center, ${transp} 70%, ${black} 71%) right center / ${tab}px 100% no-repeat`);
  else masks.push(`linear-gradient(${black},${black}) right center / ${tab}px 100% no-repeat`);
  
  if(shape.bottom === 1) masks.push(`radial-gradient(circle at center top, ${black} 70%, ${transp} 71%) bottom center / ${tab*2}px ${tab}px no-repeat`);
  else if(shape.bottom === -1) masks.push(`radial-gradient(circle at center bottom, ${transp} 70%, ${black} 71%) bottom center / 100% ${tab}px no-repeat`);
  else masks.push(`linear-gradient(${black},${black}) bottom center / 100% ${tab}px no-repeat`);

  if(shape.left === 1) masks.push(`radial-gradient(circle at right center, ${black} 70%, ${transp} 71%) left center / ${tab}px ${tab*2}px no-repeat`);
  else if(shape.left === -1) masks.push(`radial-gradient(circle at left center, ${transp} 70%, ${black} 71%) left center / ${tab}px 100% no-repeat`);
  else masks.push(`linear-gradient(${black},${black}) left center / ${tab}px 100% no-repeat`);

  return masks.join(',');
}

let selectedPieceId = null;

function handleDragStart(e) {
  e.dataTransfer.setData('text/plain', e.target.dataset.id);
  selectedPieceId = parseInt(e.target.dataset.id);
}

function handleDrop(e) {
  e.preventDefault();
  const slotIndex = parseInt(e.currentTarget.dataset.index);
  const pieceId = parseInt(e.dataTransfer.getData('text/plain'));
  executeMove(pieceId, slotIndex);
}

function handlePieceClick(e) {
  if (state.removeMode) {
    const pieceId = parseInt(e.currentTarget.dataset.id);
    if (state.board.includes(pieceId)) {
      e.stopPropagation();
      removePieceFromBoard(pieceId);
      toggleRemoveMode();
    }
    return;
  }
  const els = document.querySelectorAll('.puzzle-piece');
  els.forEach(p => p.classList.remove('selected-highlight'));
  e.currentTarget.classList.add('selected-highlight');
  selectedPieceId = parseInt(e.currentTarget.dataset.id);
}

function handleSlotClick(e) {
  const slotIndex = parseInt(e.currentTarget.dataset.index);
  if (state.removeMode) {
    if (state.board[slotIndex] !== null) {
      removePieceFromBoard(state.board[slotIndex]);
      toggleRemoveMode();
    }
    return;
  }
  if (selectedPieceId !== null) {
    executeMove(selectedPieceId, slotIndex);
    selectedPieceId = null;
    document.querySelectorAll('.puzzle-piece').forEach(p => p.classList.remove('selected-highlight'));
  }
}

function executeMove(pieceId, targetSlotIndex) {
  const sourceSlotIndex = state.board.indexOf(pieceId);
  const targetPieceId = state.board[targetSlotIndex];

  if (sourceSlotIndex === targetSlotIndex) return;

  if (sourceSlotIndex === -1) {
      if (targetPieceId === null) {
          renderPieceInSlot(pieceId, targetSlotIndex);
      } else {
          removePieceFromBoard(targetPieceId);
          renderPieceInSlot(pieceId, targetSlotIndex);
      }
  } else {
      if (targetPieceId === null) {
          clearSlot(sourceSlotIndex);
          state.board[sourceSlotIndex] = null;
          renderPieceInSlot(pieceId, targetSlotIndex);
      } else {
          clearSlot(sourceSlotIndex);
          clearSlot(targetSlotIndex);
          state.board[sourceSlotIndex] = null;
          state.board[targetSlotIndex] = null;
          renderPieceInSlot(targetPieceId, sourceSlotIndex);
          renderPieceInSlot(pieceId, targetSlotIndex);
      }
  }
  checkWinCondition();
}

function renderPieceInSlot(pieceId, slotIndex) {
  const piece = state.pieces.find(p => p.id === pieceId);
  const slot = els.board.children[slotIndex];
  
  const existingEls = document.querySelectorAll(`.puzzle-piece[data-id="${pieceId}"]`);
  existingEls.forEach(el => el.remove());
  
  const placedEl = createPieceElement(piece);
  placedEl.classList.add('placed');
  placedEl.addEventListener('click', (e) => {
    if(state.removeMode) {
        e.stopPropagation();
        removePieceFromBoard(pieceId);
        toggleRemoveMode();
    }
  });

  slot.innerHTML = '';
  slot.appendChild(placedEl);
  
  const shapeDiv = document.createElement('div');
  shapeDiv.className = 'puzzle-slot-shape';
  shapeDiv.style.display = 'none';
  const maskStyle = generateMask(piece.shape);
  shapeDiv.style.setProperty('--mask', maskStyle);
  slot.appendChild(shapeDiv);

  state.board[slotIndex] = pieceId;
  piece.placed = true;
  updateScore();
}

function removePieceFromBoard(pieceId) {
  const piece = state.pieces.find(p => p.id === pieceId);
  const slotIndex = state.board.indexOf(pieceId);
  
  if (slotIndex > -1) {
      state.board[slotIndex] = null;
      piece.placed = false;
      clearSlot(slotIndex);
      const el = createPieceElement(piece);
      els.pieces.appendChild(el);
      updateScore();
  }
}

function clearSlot(slotIndex) {
    const slot = els.board.children[slotIndex];
    slot.innerHTML = '';
    const correctPiece = state.pieces.find(p => p.id === slotIndex); 
    const shapeDiv = document.createElement('div');
    shapeDiv.className = 'puzzle-slot-shape';
    const maskStyle = generateMask(correctPiece.shape);
    shapeDiv.style.setProperty('--mask', maskStyle);
    shapeDiv.style.webkitMaskImage = maskStyle;
    shapeDiv.style.maskImage = maskStyle;
    slot.appendChild(shapeDiv);
}

function updateScore() {
    state.placedCount = state.board.filter(x => x !== null).length;
    els.score.textContent = state.placedCount;
}

function toggleRemoveMode() {
  state.removeMode = !state.removeMode;
  if(state.removeMode) {
    els.removeBtn.classList.add('active-mode');
    els.removeBtn.innerHTML = "CANCELAR";
    document.body.style.cursor = "crosshair";
  } else {
    els.removeBtn.classList.remove('active-mode');
    els.removeBtn.innerHTML = "🗑️ Remover Peça";
    document.body.style.cursor = "default";
  }
}

function startTimer() {
  clearInterval(state.timerInterval);
  state.timerInterval = setInterval(() => {
    state.timeLeft--;
    updateTimerDisplay();
    if(state.timeLeft <= 0) {
      clearInterval(state.timerInterval);
      showGameOver();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const m = Math.floor(state.timeLeft / 60).toString().padStart(2, '0');
  const s = (state.timeLeft % 60).toString().padStart(2, '0');
  els.timer.textContent = `${m}:${s}`;
  if(state.timeLeft < 10) els.timer.classList.add('urgent');
  else els.timer.classList.remove('urgent');
}

function checkWinCondition() {
  if (state.placedCount !== 16) return;
  
  // Pausa e pergunta
  clearInterval(state.timerInterval);
  triggerQuiz("Quem é esta Lenda?");
}

function triggerQuiz(title) {
  els.modal.classList.add('active');
  document.getElementById('quiz-title').textContent = title;
  document.getElementById('quiz-context').textContent = `Dica: ${state.personality.dica}`;
  generateOptions();
}

function generateOptions() {
  els.options.innerHTML = '';
  const correct = state.personality.nome;
  let pool = personalities.filter(p => p.nome !== correct).map(p => p.nome);
  pool = pool.sort(() => 0.5 - Math.random()).slice(0, 3);
  pool.push(correct);
  pool.sort(() => 0.5 - Math.random());
  
  pool.forEach(name => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = name;
    btn.onclick = () => handleAnswer(btn, name === correct);
    els.options.appendChild(btn);
  });
}

function handleAnswer(btn, isCorrect) {
  const opts = document.querySelectorAll('.option-btn');
  opts.forEach(b => b.disabled = true);
  
  if (isCorrect) {
    btn.classList.add('correct');
    setTimeout(() => {
      els.modal.classList.remove('active');
      showVictory(); // VENCEU!
    }, 1000);
  } else {
    btn.classList.add('wrong');
    // Punição
    const placedIndices = state.board.map((pid, idx) => pid !== null ? idx : -1).filter(i => i !== -1);
    if (placedIndices.length > 0) {
        const randomIdx = placedIndices[Math.floor(Math.random() * placedIndices.length)];
        removePieceFromBoard(state.board[randomIdx]);
    }
    setTimeout(() => {
      els.modal.classList.remove('active');
      startTimer(); // VOLTA AO JOGO
    }, 1500);
  }
}

function showVictory() {
  els.resultTitle.textContent = "História Revelada!";
  els.finalImg.src = state.personality.imagem;
  els.finalName.textContent = state.personality.nome;
  els.finalBio.textContent = state.personality.bio;
  switchScreen('victory');
}

// NOVA FUNÇÃO: Revela a lenda mesmo se perdeu
function showReveal() {
  els.resultTitle.textContent = "Esta era a Lenda";
  els.finalImg.src = state.personality.imagem;
  els.finalName.textContent = state.personality.nome;
  els.finalBio.textContent = state.personality.bio;
  switchScreen('victory');
}

function showGameOver() {
  switchScreen('fail');
}

function toggleMusic() {
  if(state.audioPlaying) {
    els.bgMusic.pause();
    state.audioPlaying = false;
    document.getElementById('btn-music').textContent = "🎵";
  } else {
    els.bgMusic.play();
    state.audioPlaying = true;
    document.getElementById('btn-music').textContent = "🔇";
  }
}