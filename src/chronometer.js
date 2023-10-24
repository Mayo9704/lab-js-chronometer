class Chronometer {
  constructor() {
   this.currentTime = 0;
   this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if(printTimeCallback){
        printTimeCallback()
      };
    }, 1000);

  }

  getMinutes() {
    let minutesResult = Math.floor(this.currentTime / 60);  

    return minutesResult;
  }

  getSeconds() {
    let secondsResult = this.currentTime % 60;

    return secondsResult;
  }

  computeTwoDigitNumber(value) {
    let twoDigitResult = value.toString();

    if (twoDigitResult.slice(1)) {
      return twoDigitResult;
    }

    return `0${twoDigitResult}`;

  }

  stop() {
   clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const minutes = this.getMinutes();
    const seconds = this.getSeconds();
    const twoDigits = `${this.computeTwoDigitNumber(minutes)}:${this.computeTwoDigitNumber(seconds)}`;

    return twoDigits;
  }
}
