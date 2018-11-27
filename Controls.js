import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Button, View } from 'react-native';

class Controls extends React.Component {

  render() {
    if (this.props.paused) {
      return (
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <Button title='Start' onPress={this.props.onStart}/>
          </View>

          <View style={styles.buttonContainer}>
            <Button title='Clear' color='grey' onPress={this.props.onClear}/>
          </View>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <Button title='Stop' color='red' onPress={this.props.onStop}/>
          </View>
        </View>
      )
    }
  }
}

Controls.propTypes = {
  paused: PropTypes.bool.isRequired,
  onStart: PropTypes.func.isRequired,
  onStop: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  buttonContainer: {
    paddingRight: 10
  }
})

export default Controls;
