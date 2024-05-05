class Counter {
  count = 0;

  incrementEverySecond() {
    setInterval(() => {
      this.count++;  // 'this' refers to the instance of the Counter class, not the setInterval function
      console.log(this.count);
    }, 1000);
  }

  incrementEverySecond2() {
    const self = this;
    setInterval(function () {
      self.count++;
      console.log(self.count);
    }, 1000);
  }

  incrementEverySecond3() {
    setInterval(function() {
      this.count++;  // 'this' now refers to the Counter instance
      console.log(this.count);
    }.bind(this), 1000);  // Bind 'this' to the function
  }
}

const counter = new Counter();
counter.incrementEverySecond3();
