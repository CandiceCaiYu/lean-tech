import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
export default class TimerView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Seconds passed: {this.props.appState.timer}</h1>
        <button onClick={this.props.appState.resetTimer.bind(this)}>重置</button>
        <button onClick={this.props.appState.restartTimer.bind(this)}>重启</button>
      </div>
    );
  }
}
