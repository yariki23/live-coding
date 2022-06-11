'use strict';

// const obj = {
//   age: 100,
//   run: function () {
//     console.log(this);
//   },
// };

// console.log(obj.run());

// function run() {
//   console.log(this);
//   console.log(`I've done running in ${this.city}`);
// }

// run();


// function run(city) {
//   console.log(`I've done running in ${this.city}`);
// }

//==
// 1. what is context ?
// 2. when lose context
// 3. how to fix context

const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  intervalId: null,
  // in: none
  // out: undefined
  startTimer() {

    this.intervalId = setInterval(() => {
      this.secondsPassed += 1;
      console.log(this.secondsPassed);
      if (this.secondsPassed == 60) {
        this.minsPassed += 1;
        this.secondsPassed = 0;
      }
    }, 1000);
  },
  stopTimer() {
    clearInterval(this.intervalId);
  },
  getTimer() {
    if (this.secondsPassed < 10) {
      console.log(`${this.minsPassed}:0${this.secondsPassed}`);
      return `${this.minsPassed}:0${this.secondsPassed}`
    }
      return `${this.minsPassed}:${this.secondsPassed}`
  },
  resetTimer() {
      clearInterval(this.intervalId);
    this.minsPassed = 0;
    this.secondsPassed = 0;
  },
}

//test data
timer.startTimer();