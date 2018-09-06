import React from 'react';
import { Text } from 'react-native';
import TimeDisplay from './TimeDisplay';

import renderer from 'react-test-renderer';

describe('TimeDisplay', () => {
  let mountedTimeDisplay;

  // Create a helper method to be able to easily create the component
  // in our specs.
  const timeDisplay = () => {
    // Add support for retaining the same component through out the
    // test case. That is, I want to use this method without having to
    // worry about creating more components than I need (should only need 1!)
    if (!mountedTimeDisplay) {
      mountedTimeDisplay = renderer.create(<TimeDisplay {...props}/>)
    }

    return mountedTimeDisplay;
  };

  // We want to ensure that the variables we set for each test case doesn't
  // bleed into each other. Our tests should be isolated and well controlled,
  // aka no spilling of variables!
  beforeEach(() => {
    props = {
      seconds: undefined
    };
  })

  describe('when given 5 seconds', () => {
    // We setup the state that we specify in our 'describe' statement. That is,
    // we want to express 'when given 5 seconds' in our setup. This is achieved
    // by modifying the props to used in the creation of this test's TimeDisplay
    // component. Note - timeDisplay() has yet to be called! and hence we have
    // the opportunity to change its 'initialization'
    beforeEach(() => {
      props.seconds = 5
    })

    it('should render 5 as text', () => {
      // We now need to generate the component with the modified props specified
      // in the setup and check if the contents of a Text is '5'.
      expect(timeDisplay().root.findByType(Text).props.children).toBe(props.seconds);
    })
  })
})
