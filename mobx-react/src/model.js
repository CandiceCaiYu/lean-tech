import { observable, action, extendObservable, when, autorun } from 'mobx';

export default class AppState {
  constructor(options) {
    extendObservable(this, {
      timer: 0,
      inited: true,
      timee: null,
      ...(options || {})
    });

    when(() => this.inited, () => this.setTimee());
  }
  // 设置定时器
  setTimee = action(() => {
    this.timee = setInterval(
      action(() => {
        console.log('timer: ', this.timer, this.timee);
        this.timer++;
      }),
      1000
    );
  });
  // 重启定时器
  resetTimer = action(() => {
    this.timer = 0;
    clearInterval(this.timee);
  });
  // 重置定时器
  restartTimer = action(() => {
    clearInterval(this.timee);
    this.setTimee();
  });
}
