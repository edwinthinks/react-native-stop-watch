import React from 'react';
import { Text } from 'react-native';
import Controls from './Controls';

import renderer from 'react-test-renderer';

describe('<Controls/>', () => {
  let mountedControls;
  let paused;

  const startFunc = jest.fn();
  const stopFunc = jest.fn();
  const clearFunc = jest.fn();

  let controls = () => {
    if (!mountedControls) {
      mountedControls = renderer.create(<Controls {...props}/>)
    }
    return mountedControls;
  }

  beforeEach(() => {
    props = {
      onStart: startFunc,
      onStop: stopFunc,
      onClear: clearFunc
    }
    mountedControls = undefined;
  })

  describe('when not paused', () => {
    beforeEach(() => {
      props.paused = false;
    })

    it('should have the stop button', () => {
      stopButton = controls().root.findByProps({ title: 'Stop', onPress: stopFunc})
      expect(stopButton).toBeDefined();
    })

    it('should have the clear button', () => {
      clearButton = controls().root.findByProps({ title: 'Clear', onPress: clearFunc})
      expect(clearButton).toBeDefined();
    })
  })

  describe('when paused', () => {
    beforeEach(() => {
      props.paused = true;
    })

    it('should have the stop button', () => {
      startButton = controls().root.findByProps({ title: 'Start', onPress: startFunc})
      expect(startButton).toBeDefined();
    })
  })

})
