class StopScroll {
  constructor() {
    this.init();
  }
  init() {
    this.window = window;
    this.body = document.body;
  }
  stop() {
    this.mount = this.window.pageYOffset;
    this.body.style.cssText = `overflow: hidden; position: fixed; top: -${this.mount}px; left: 0;`;
  }
  reStart() {
    this.body.style.cssText = 'overflow: auto; position: static;';
    this.window.scrollTo(0, this.mount);
  }
}
export default StopScroll;
