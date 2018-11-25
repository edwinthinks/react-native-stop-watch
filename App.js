import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import TimeDisplay from './TimeDisplay'

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
    let toggleButton;

    if (this.hasStopped()) {
      toggleButton = <Button title='Start' onPress={this.start}/>
    } else {
      toggleButton = <Button title='Stop' onPress={this.stop}/>
    }

    return (
      <View style={styles.container}>
        <TimeDisplay seconds={this.state.seconds}/>
        {toggleButton}

        {this.hasStopped() &&
          <Button title='Clear' onPress={this.clear}/>
        }
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
