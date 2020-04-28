import React, { Component } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';
import Result from './components/Result';
import Reset from './components/Reset';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      fontsize: 12
    }
  }

  onSetColor = (param) => {
    this.setState({
      color: param
    });
  }

  onSetSize = (param) => {
    if (this.state.fontsize + param >= 8 && this.state.fontsize + param <= 36) {
      this.setState({
        fontsize: this.state.fontsize + param
      });
    }
  }

  onSettingDefault = () => {
    this.setState({
      color: 'red',
      fontsize: 12
    });
  }

  render() {
    return (
      <div className='container mt-50'>
        <div className='row'>
          <ColorPicker
            color={this.state.color}
            fontsize={this.state.fontsize}
            onReceiveColor={this.onSetColor}
          />
          <SizeSetting
            fontsize={this.state.fontsize}
            onReceiveFontSize={this.onSetSize}
          />
          <Reset onSettingDefault={this.onSettingDefault} />
          <Result
            color={this.state.color}
            fontsize={this.state.fontsize}
          />
        </div>
      </div>
    );
  }
}

export default App;
