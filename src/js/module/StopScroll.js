class StopScroll {
  constructor() {
    this.init();
  }
  init() {
    this.body = document.body;
  }
  stop() {
    this.body.style.cssText = 'overflow: hidden;';
  }
  reStart() {
    this.body.style.cssText = 'overflow: auto;';
  }
}
export default StopScroll;
