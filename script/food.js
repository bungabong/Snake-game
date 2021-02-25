class Food {
  constructor () {
     this.x = Math.floor(Math.random() * rows) * scale;
     this.y = Math.floor(Math.random() * cols) * scale;
     this.width = 20;
     this.height = 20;
  }
  draw() {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  pickLocation() {
     this.x = Math.floor(Math.random() * rows) * scale;
     this.y = Math.floor(Math.random() * cols) * scale;
  }
}