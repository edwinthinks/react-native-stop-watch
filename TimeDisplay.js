import React from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';

class TimeDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.formattedTime = this.formattedTime.bind(this);
  }

  formattedTime() {
    return moment.utc(this.props.seconds*1000).format('HH:mm:ss');
  }

  render() {
    // Yes.. you could conceivably set this to '5' and get your tests to pass for the tests. But
    // why would you do that? This is not self-sabotage proof.
    return (
      <View>
        <Text>{this.formattedTime()}</Text>
      </View>
    );
  }
}

export default TimeDisplay;
