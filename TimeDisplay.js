import React from 'react';
import { View, Text } from 'react-native';

class TimeDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // Yes.. you could conceivably set this to '5' and get your tests to pass for the tests. But
    // why would you do that? This is not self-sabotage proof.
    return (
      <View>
        <Text>{this.props.seconds}</Text>
      </View>
    );
  }
}

export default TimeDisplay;
