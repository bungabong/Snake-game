(function setup() {
  snake = new Snake();
  food = new Food();
  window.setInterval(() => {
    document.addEventListener("keydown", keyPush);
    ctx.clearRect(0, 0, canvas_width, canvas_height);
    snake.draw();
    snake.update();
    snake.gameplay();
    food.draw();
    snake_food_gameplay();
  }, 1000/10);
})();

function keyPush(evt){
  switch(evt.keyCode) {
    case 37: 
      if (snake.xv == 1 * scale) {
        snake.xv = 1 * scale;
      } else {
        snake.xv = -1 * scale;
        snake.yv = 0;
      }
    break;
    case 38:
      if (snake.yv == 1 * scale) {
        snake.yv = 1 * scale;
      } else {
        snake.xv = 0
        snake.yv = -1 * scale;
      }
    break;
    case 39:
      if (snake.xv == -1 * scale) {
        snake.xv = -1 * scale;
      } else {
        snake.xv = 1 * scale;
        snake.yv = 0;
      }
    break;
    case 40:
      if (snake.yv == -1 * scale) {
        snake.yv = -1 * scale;
      } else {
        snake.xv = 0;
        snake.yv = 1 * scale;
      }
  }
}