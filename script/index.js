let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
const scale = 20;
const canvas_width = canvas.clientWidth;
const canvas_height = canvas.clientHeight;
const rows = canvas_width / 20;
const cols = canvas_height / 20;
let snake;
let food;
let snake_tail = [];
let snake_total = 0;