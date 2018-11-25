import React from 'react';
import PropTypes from 'prop-types';
import { Button, View } from 'react-native';

class Controls extends React.Component {
  render() {
    if (this.props.paused) {
      return (
        <View>
          <Button title='Start' onPress={this.props.onStart}/>
        </View>
      )
    } else {
      return (
        <View>
          <Button title='Stop' onPress={this.props.onStop}/>
          <Button title='Clear' onPress={this.props.onClear}/>
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

export default Controls;
