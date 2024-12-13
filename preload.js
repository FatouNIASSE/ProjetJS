const { contextBridge } = require("electron");
const gameController = require("./controllers/gameController");

contextBridge.exposeInMainWorld("api", {
  getLevel: () => gameController.getLevel(),
  checkAnswer: (answer) => gameController.checkAnswer(answer),
  nextLevel: () => gameController.nextLevel(),
  resetGame: () => gameController.resetGame(),
});
