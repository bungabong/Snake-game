class Snake {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.xv = 1 * scale;
    this.yv = 0;
    this.tail = [];
    this.total = 0;
  }
  draw() {
    ctx.fillStyle = "black";
    for (let i = 0; i < this.tail.length; i++) {
      ctx.fillRect(this.tail[i].x, this.tail[i].y, 20, 20);
    }
    ctx.fillRect(this.x, this.y, scale, scale);
  }
  update() {
    for (let i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i+1];
    }
    this.tail[this.total] = {x: this.x, y: this.y};
    this.x += this.xv;
    this.y += this.yv;
  }
  gameplay() {
    let canvasLeft = canvas.width - canvas.width;
    let canvasRight = canvas.width;
    let canvasTop = canvas.height - canvas.height;
    let canvasBottom = canvas.height;

      if (this.x < canvasLeft) {
         this.x = canvasRight - scale;
      }
      if (this.x > canvasRight - scale) {
         this.x = canvasLeft;
      }
      if (this.y < canvasTop) {
          this.y = canvasBottom - scale;
      }
      if (this.y > canvasBottom - scale) {
          this.y = canvasTop;
     }
  }
  eat(other) {
    //get track of snake sides..
    const snakeLeft = this.x;
    const snakeRight = this.x + scale;
    const snakeTop = this.y;
    const snakeBottom = this.y + scale;  
    //get track of other sides..
    const otherLeft = other.x;
    const otherRight = other.x + scale;
    const otherTop = other.y;
    const otherBottom = other.y + scale;

    let eaten = true;

    if (snakeLeft < otherRight && snakeRight > otherLeft && snakeTop < otherBottom && snakeBottom > otherTop) {
      this.total++;
      return eaten;
    }
    return false;
  } 
}