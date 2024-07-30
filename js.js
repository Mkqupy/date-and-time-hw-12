class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.intervalId = null;
    this.start();
  }

  start() {
    const timer = document.querySelector(this.selector);
    this.intervalId = setInterval(() => {
      const timeLeft = this.targetDate - Date.now();

      if (timeLeft < 0) {
        clearInterval(this.intervalId);
        return;
      }

      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((timeLeft % (1000 * 60)) / 1000);

      timer.querySelector('[data-value="days"]').textContent = days;
      timer.querySelector('[data-value="hours"]').textContent = hours.toString().padStart(2, '0');
      timer.querySelector('[data-value="mins"]').textContent = mins.toString().padStart(2, '0');
      timer.querySelector('[data-value="secs"]').textContent = secs.toString().padStart(2, '0');
    }, 1000);
  }
}
new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('2024-12-31T23:59:59'), 
});
