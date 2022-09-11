const game = new Game();

document.getElementById("begin-game").addEventListener("click", function () {
  game.startGame();
  this.style.display = "none";
  document.getElementById("play-area").style.opacity = "1";
});

//Listens for keyboard presses

document.addEventListener("keydown", function (event) {
  game.handleKeydown(event);
});

//call startgame function from game -> call drawBoard and drawMethod tokens from startGameMethod ->
//                                           