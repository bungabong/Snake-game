function snake_food_gameplay() {
  if (snake.eat(food)) {
    food.pickLocation();
  }
}