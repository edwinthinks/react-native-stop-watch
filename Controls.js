import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Button, View } from 'react-native';

class Controls extends React.Component {
  render() {
    if (this.props.paused) {
      return (
        <View style={styles.container}>
          <Button title='Start' onPress={this.props.onStart}/>
          <Button title='Clear' onPress={this.props.onClear}/>
        </View>
      )
    } else {
      return (
        <View>
          <Button title='Stop' onPress={this.props.onStop}/>
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
    flexDirection: 'row',
  }
})

export default Controls;
