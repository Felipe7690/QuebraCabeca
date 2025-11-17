const defaultConfig = {
  game_title: "Quebra-Cabeça do Saber: Desvendando Vozes Negras",
  timer_duration: "30",
  success_message: "Parabéns! É",
  error_message: "Resposta incorreta! Uma peça foi removida."
};

const personalities = [
  {
    nome: "Lélia Gonzalez",
    dica: "Intelectual, professora, antropóloga e uma das fundadoras do Movimento Negro Unificado.",
    imagem: "imagens/lelia-gonzalez.jpg"
  },
  {
    nome: "Luiz Gama",
    dica: "Advogado autodidata, jornalista e poeta. Libertou mais de 500 escravos nos tribunais.",
    imagem: "imagens/luiz-gama.jpg"
  },
  {
    nome: "Carolina Maria de Jesus",
    dica: "Escritora, compositora e poetisa. Autora do best-seller 'Quarto de Despejo'.",
    imagem: "imagens/carolina-maria-de-jesus.jpg"
  },
  {
    nome: "Machado de Assis",
    dica: "Considerado o maior nome da literatura brasileira, fundador da Academia Brasileira de Letras.",
    imagem: "imagens/machado-de-assis.jpg"
  },
  {
    nome: "Abdias do Nascimento",
    dica: "Ativista, artista plástico, escritor e político. Fundador do Teatro Experimental do Negro.",
    imagem: "imagens/abdias-do-nascimento.jpg"
  },
  {
    nome: "Conceição Evaristo",
    dica: "Escritora contemporânea, sua obra aborda a 'escrevivência' da mulher negra no Brasil.",
    imagem: "imagens/conceicao-evaristo.jpg"
  }
];

let currentPersonality = null;
let pieces = [];
let board = [];
let timeLeft = 30;
let timerInterval = null;
let gameActive = false;
let draggedPiece = null;
let placedPieces = 0;

const PUZZLE_ROWS = 4;
const PUZZLE_COLS = 4;
const TOTAL_PIECES = PUZZLE_ROWS * PUZZLE_COLS;

const startBtn = document.getElementById('start-btn');
const gameArea = document.getElementById('game-area');
const timer = document.getElementById('timer');
const puzzleBoard = document.getElementById('puzzle-board');
const piecesContainer = document.getElementById('pieces-container');
const piecesCount = document.getElementById('pieces-count');
const questionModal = document.getElementById('question-modal');
const answerInput = document.getElementById('answer-input');
const confirmBtn = document.getElementById('confirm-btn');
const feedback = document.getElementById('feedback');
const completeImage = document.getElementById('complete-image');
const hintText = document.getElementById('hint-text'); 

startBtn.addEventListener('click', startGame);
confirmBtn.addEventListener('click', checkAnswer);
answerInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') checkAnswer();
});

function startGame() {
  resetGame();
  selectRandomPersonality();
  
  // Pré-carrega a imagem. Isso é CRUCIAL para o jogo funcionar.
  const img = new Image();
  // O 'src' agora aponta para a pasta local
  img.src = currentPersonality.imagem; 
  
  // Só continua o jogo DEPOIS que a imagem for carregada
  img.onload = () => {
    completeImage.src = img.src; 
    
    gameArea.style.display = 'flex';

    const boardSize = puzzleBoard.clientWidth; // Agora isso vai ler 360 (ou 280)
    const pieceSize = boardSize / PUZZLE_COLS; // E isso vai ler 90 (ou 70)

    createPuzzlePieces(pieceSize, boardSize);
    createBoard();
    shuffleAndRenderPieces(pieceSize, boardSize);
    startTimer();
    
    startBtn.disabled = true;
    startBtn.textContent = 'Jogo em Andamento...';
    timer.classList.add('active');
    gameActive = true;
  };
  
  // Se a imagem não carregar (ex: nome errado na pasta)
  img.onerror = () => {
      alert("Erro ao carregar a imagem. Verifique se o arquivo '" + currentPersonality.imagem + "' existe na pasta 'imagens/'.");
      startBtn.disabled = false;
  }
}

function resetGame() {
  clearInterval(timerInterval);
  pieces = [];
  board = Array(TOTAL_PIECES).fill(null);
  placedPieces = 0;
  gameActive = false;
  
  puzzleBoard.innerHTML = '';
  piecesContainer.innerHTML = '';
  feedback.classList.remove('active');
  questionModal.classList.remove('active');
  completeImage.classList.remove('active');
  
  updatePiecesCount();
}

function selectRandomPersonality() {
  const randomIndex = Math.floor(Math.random() * personalities.length);
  currentPersonality = personalities[randomIndex];
}

function createPuzzlePieces(pieceSize, boardSize) {
  pieces = [];
  for (let row = 0; row < PUZZLE_ROWS; row++) {
    for (let col = 0; col < PUZZLE_COLS; col++) {
      pieces.push({
        id: row * PUZZLE_COLS + col,
        row: row,
        col: col,
        correctSlot: row * PUZZLE_COLS + col,
        placed: false,
        backgroundX: -col * pieceSize,
        backgroundY: -row * pieceSize
      });
    }
  }
}

function createBoard() {
  puzzleBoard.innerHTML = '';
  for (let i = 0; i < TOTAL_PIECES; i++) {
    const slot = document.createElement('div');
    slot.className = 'puzzle-slot';
    slot.dataset.slot = i;
    
    slot.addEventListener('dragover', handleDragOver);
    slot.addEventListener('dragleave', handleDragLeave);
    slot.addEventListener('drop', handleDrop);
    
    puzzleBoard.appendChild(slot);
  }
}

function shuffleAndRenderPieces(pieceSize, boardSize) {
  for (let i = pieces.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pieces[i], pieces[j]] = [pieces[j], pieces[i]];
  }
  
  renderPieces(pieceSize, boardSize);
}

function renderPieces(pieceSize, boardSize) {
  piecesContainer.innerHTML = '';
  
  pieces.filter(p => !p.placed).forEach(piece => {
    const pieceElement = createPieceElement(piece, pieceSize, boardSize);
    piecesContainer.appendChild(pieceElement);
  });
}

function createPieceElement(piece, pieceSize, boardSize) {
  const pieceElement = document.createElement('div');
  pieceElement.className = 'puzzle-piece';
  pieceElement.dataset.id = piece.id;
  pieceElement.draggable = true;
  
  // O 'backgroundImage' agora usa o caminho local
  pieceElement.style.backgroundImage = `url(${currentPersonality.imagem})`;
  pieceElement.style.backgroundSize = `${boardSize}px ${boardSize}px`;
  pieceElement.style.backgroundPosition = `${piece.backgroundX}px ${piece.backgroundY}px`;
  
  pieceElement.addEventListener('dragstart', handleDragStart);
  pieceElement.addEventListener('dragend', handleDragEnd);
  
  return pieceElement;
}

function handleDragStart(e) {
  if (!gameActive) return;
  
  draggedPiece = parseInt(e.target.dataset.id);
  e.target.classList.add('dragging');
}

function handleDragEnd(e) {
  e.target.classList.remove('dragging');
}

function handleDragOver(e) {
  e.preventDefault();
  e.currentTarget.classList.add('drag-over');
}

function handleDragLeave(e) {
  e.currentTarget.classList.remove('drag-over');
}

function handleDrop(e) {
  e.preventDefault();
  e.currentTarget.classList.remove('drag-over');
  
  if (!gameActive || draggedPiece === null) return;
  
  const slotIndex = parseInt(e.currentTarget.dataset.slot);
  const piece = pieces.find(p => p.id === draggedPiece);
  
  if (!piece || piece.placed || board[slotIndex] !== null) return;
  
  board[slotIndex] = piece.id;
  piece.placed = true;
  placedPieces++;
  
  const boardSize = puzzleBoard.clientWidth;
  const pieceSize = boardSize / PUZZLE_COLS;
  
  const placedPieceElement = createPieceElement(piece, pieceSize, boardSize);
  placedPieceElement.classList.add('placed');
  placedPieceElement.draggable = false;
  
  e.currentTarget.appendChild(placedPieceElement);
  e.currentTarget.classList.add('filled');
  
  renderPieces(pieceSize, boardSize);
  updatePiecesCount();
  
  draggedPiece = null;
  
  if (placedPieces === TOTAL_PIECES) {
    clearInterval(timerInterval);
    showQuestion();
  }
}

function updatePiecesCount() {
  piecesCount.textContent = `Peças montadas: ${placedPieces}/${TOTAL_PIECES}`;
}

function startTimer() {
  const config = window.elementSdk?.config || defaultConfig;
  timeLeft = parseInt(config.timer_duration) || 30;
  
  timerInterval = setInterval(() => {
    timeLeft--;
    timer.textContent = `Tempo: ${timeLeft}s`;
    
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      showQuestion();
    }
  }, 1000);
}

function showQuestion() {
  gameActive = false;
  
  // Atualiza o texto da dica antes de mostrar o modal
  hintText.textContent = `Dica: ${currentPersonality.dica}`;
  
  questionModal.classList.add('active');
  answerInput.focus();
}

function normalizeString(str) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function checkAnswer() {
  const userAnswer = normalizeString(answerInput.value.trim());
  const correctAnswer = normalizeString(currentPersonality.nome);
  const config = window.elementSdk?.config || defaultConfig;
  
  const correctParts = correctAnswer.split(' ');
  const firstName = correctParts[0];
  const lastName = correctParts.length > 1 ? correctParts[correctParts.length - 1] : '';

  // A verificação agora é mais flexível
  const isCorrect = userAnswer === correctAnswer ||
                      userAnswer === firstName ||
                      userAnswer === lastName ||
                      (userAnswer.length > 3 && correctAnswer.includes(userAnswer));
  
  questionModal.classList.remove('active');
  answerInput.value = '';
  
  if (isCorrect) {
    showSuccess(config);
  } else {
    showError(config);
    removePiece();
    if (placedPieces > 0) {
      setTimeout(() => {
        feedback.classList.remove('active');
        gameActive = true;
        startTimer();
      }, 2000);
    } else {
        setTimeout(() => {
          feedback.classList.remove('active');
          startBtn.disabled = false;
          startBtn.textContent = 'Tentar Novamente';
          gameArea.style.display = 'none';
          timer.classList.remove('active');
        }, 2000);
    }
  }
}

function showSuccess(config) {
  feedback.textContent = `${config.success_message || defaultConfig.success_message} ${currentPersonality.nome}!`;
  feedback.className = 'feedback success active';
  
  gameArea.style.display = 'none';
  timer.classList.remove('active');
  completeImage.classList.add('active');
  
  setTimeout(() => {
    startBtn.disabled = false;
    startBtn.textContent = 'Iniciar Novo Jogo';
  }, 1000);
}

function showError(config) {
  feedback.textContent = config.error_message || defaultConfig.error_message;
  feedback.className = 'feedback error active';
}

function removePiece() {
  if (placedPieces === 0) return;
  
  const placedPieceIds = board.filter(id => id !== null);
  if (placedPieceIds.length === 0) return;
  
  const randomIndex = Math.floor(Math.random() * placedPieceIds.length);
  const pieceToRemove = pieces.find(p => p.id === placedPieceIds[randomIndex]);
  
  if (pieceToRemove) {
    const slotIndex = board.findIndex(id => id === pieceToRemove.id);
    if (slotIndex === -1) return;
    
    board[slotIndex] = null;
    pieceToRemove.placed = false;
    placedPieces--;
    
    const slot = puzzleBoard.children[slotIndex];
    slot.innerHTML = '';
    slot.classList.remove('filled');
    
    const boardSize = puzzleBoard.clientWidth;
    const pieceSize = boardSize / PUZZLE_COLS;
    renderPieces(pieceSize, boardSize);
    updatePiecesCount();
  }
}

async function onConfigChange(config) {
  document.getElementById('game-title').textContent = config.game_title || defaultConfig.game_title;
}

if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange,
    mapToCapabilities: (config) => ({
      recolorables: [],
      borderables: [],
      fontEditable: undefined,
      fontSizeable: undefined
    }),
    mapToEditPanelValues: (config) => new Map([
      ["game_title", config.game_title || defaultConfig.game_title],
      ["timer_duration", config.timer_duration || defaultConfig.timer_duration],
      ["success_message", config.success_message || defaultConfig.success_message],
      ["error_message", config.error_message || defaultConfig.error_message]
    ])
  });
}