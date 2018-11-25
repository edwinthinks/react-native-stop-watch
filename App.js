import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import TimeDisplay from './TimeDisplay'
import Controls from './Controls'

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      seconds: 0,
      tickingProcess: undefined
    };

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.clear = this.clear.bind(this);
    this.hasStopped = this.hasStopped.bind(this);
  }

  start() {
    this.setState(() => {
      return {
        tickingProcess: setInterval(() => {
          this.setState(() => {
            return { seconds: this.state.seconds + 1 }
          })
        }, 1000)
      }
    })
  }

  stop() {
    this.setState(() => {
      clearInterval(this.state.tickingProcess);
      return { tickingProcess: undefined }
    })
  }

  clear() {
    this.setState(() => {
      return { seconds: 0 }
    })
  }

  hasStopped() {
    if (this.state.tickingProcess !== undefined) {
      return false
    } else {
      return true
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TimeDisplay seconds={this.state.seconds}/>
        <Controls
          paused={this.hasStopped()}
          onStart={this.start}
          onStop={this.stop}
          onClear={this.clear}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
