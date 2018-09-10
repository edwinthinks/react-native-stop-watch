import React from 'react';
import App from './App';
import TimeDisplay from './TimeDisplay';

import renderer from 'react-test-renderer';

jest.useFakeTimers();

describe('App', () => {
  let mountedApp;
  const app = () => {
    if (!mountedApp) {
      mountedApp = renderer.create(<App/>)
    }
    return mountedApp;
  };

  beforeEach(() => {
    mountedApp = undefined;
  })

  describe('rendered TimeDisplay', () => {
    let timeDisplay = app().root.findByType(TimeDisplay)

    it('should exist', () => {
      expect(timeDisplay).toBeDefined();
    })

    it('should be given seconds', () => {
      expect(timeDisplay.instance.props.seconds).toBe(app().root.instance.state.seconds)
    })
  })

  describe('start', () => {
    beforeEach(() => {
      app().root.instance.start();
    })

    it('should increment seconds count every second', () => {
      let initSeconds = app().root.instance.state.seconds;
      jest.advanceTimersByTime(1000);
      expect(app().root.instance.state.seconds).toBe(initSeconds+1);
      jest.advanceTimersByTime(1000);
      expect(app().root.instance.state.seconds).toBe(initSeconds+2);
    })
  })

  describe('stop', () => {
    beforeEach(() => {
      app().root.instance.start();
      app().root.instance.stop();
    })

    it('should not increment seconds count every second', () => {
      let initSeconds = app().root.instance.state.seconds;
      jest.advanceTimersByTime(1000);
      expect(app().root.instance.state.seconds).toBe(initSeconds);
    })
  })

})
