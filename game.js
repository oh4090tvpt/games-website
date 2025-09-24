const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let car = { x: 380, y: 500, width: 40, height: 80, speed: 5 };
let trackLines = [];
for (let i = 0; i < 20; i++) {
  trackLines.push({ x: 390, y: i * 40, width: 20, height: 20 });
}

function drawCar() {
  ctx.fillStyle = 'red';
  ctx.fillRect(car.x, car.y, car.width, car.height);
}

function drawTrack() {
  ctx.fillStyle = 'white';
  trackLines.forEach(line => {
    ctx.fillRect(line.x, line.y, line.width, line.height);
  });
}

function updateTrack() {
  trackLines.forEach(line => {
    line.y += 5;
    if (line.y > canvas.height) {
      line.y = -20;
    }
  });
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawTrack();
  drawCar();
  updateTrack();
  requestAnimationFrame(update);
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft' && car.x > 0) {
    car.x -= car.speed;
  }
  if (e.key === 'ArrowRight' && car.x + car.width < canvas.width) {
    car.x += car.speed;
  }
});

update();
