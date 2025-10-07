let startTime = 0;
let elapsed = 0;
let running = false;
let animationFrame;

function formatTime(time) {
  const totalMilliseconds = Math.floor(time);
  const microseconds = Math.floor((time % 1) * 1000);

  const hours = String(Math.floor(totalMilliseconds / 3600000)).padStart(2, '0');
  const minutes = String(Math.floor((totalMilliseconds % 3600000) / 60000)).padStart(2, '0');
  const seconds = String(Math.floor((totalMilliseconds % 60000) / 1000)).padStart(2, '0');
  const milliseconds = String(Math.floor(totalMilliseconds % 1000)).padStart(3, '0');
  const micro = String(microseconds).padStart(3, '0');

  return `${hours} : ${minutes} : ${seconds} : ${milliseconds} : ${micro}`;
}

function update() {
  if (!running) return;
  const currentTime = performance.now();
  const time = (currentTime - startTime) + elapsed;
  document.getElementById("stopwatch").textContent = formatTime(time);
  animationFrame = requestAnimationFrame(update);
}

function start() {
  if (!running) {
    running = true;
    startTime = performance.now();
    animationFrame = requestAnimationFrame(update);
  }
}

function stop() {
  if (running) {
    running = false;
    cancelAnimationFrame(animationFrame);
    elapsed += performance.now() - startTime;
  }
}

function reset() {
  running = false;
  cancelAnimationFrame(animationFrame);
  startTime = 0;
  elapsed = 0;
  document.getElementById("stopwatch").textContent = "00 : 00 : 00 : 000 : 000";
}

function saveTime() {
  const display = document.getElementById("stopwatch").textContent;
  const list = document.getElementById("historyList");

  const item = document.createElement("li");
  item.textContent = display;

  list.appendChild(item);
}

function reset() {
  running = false;
  cancelAnimationFrame(animationFrame);
  startTime = 0;
  elapsed = 0;
  document.getElementById("stopwatch").textContent = "00 : 00 : 00 : 000 : 000";
  document.getElementById("historyList").innerHTML = ""; // clear history
}
