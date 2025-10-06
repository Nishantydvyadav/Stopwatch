let isStop = true;
let s = 0;
let min = 0;
let hr = 0;

function start() {
  if (isStop) {
    isStop = false;
    timer();
  }
}

function timer() {
  if (!isStop) {
    s++;

    if (s === 60) {
      s = 0;
      min++;
    }

    if (min === 60) {
      min = 0;
      hr++;
    }

    // Format time with leading zeros
    const formattedTime =
      (hr < 10 ? "0" + hr : hr) +
      " : " +
      (min < 10 ? "0" + min : min) +
      " : " +
      (s < 10 ? "0" + s : s);

    document.getElementById("stopwatch").innerHTML = formattedTime;

    setTimeout(timer, 1000);
  }
}

function stop() {
  isStop = true;
}

function reset() {
  isStop = true;
  s = 0;
  min = 0;
  hr = 0;
  document.getElementById("stopwatch").innerHTML = "00 : 00 : 00";
}
