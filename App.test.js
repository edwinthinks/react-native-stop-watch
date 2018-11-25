import React from 'react';
import { Button } from 'react-native';
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

  describe('rendered start/stop button', () => {

    describe('when the timer has started', () => {
      let button;

      beforeEach(() => {
        app().root.instance.start();
        button = app().root.findByProps({title: "Stop"})
      })

      it('should render a stop button', () => {
        expect(button).toBeDefined();
      })

      it('should have a Stop title', () => {
        expect(button.props.title).toBe('Stop');
      })

      it('should on press trigger stop', () => {
        expect(button.props.onPress).toBe(app().root.instance.stop)
      })

    })

    describe('when the timer has stopped', () => {
      let button;

      beforeEach(() => {
        app().root.instance.start();
        app().root.instance.stop();
        startButton = app().root.findByProps({title: 'Start'})
        clearButton = app().root.findByProps({title: 'Clear'})
      })

      it('should render a Start button', () => {
        expect(startButton).toBeDefined();
      })

      it('should on Start press trigger start', () => {
        expect(startButton.props.onPress).toBe(app().root.instance.start)
      })

      it('should render a Clear button', () => {
        expect(clearButton).toBeDefined();
      })

      it('should on Clear press trigger clear', () => {
        expect(clearButton.props.onPress).toBe(app().root.instance.clear)
      })
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

  describe('clear', () => {
    beforeEach(() => {
      app().root.instance.start();
    })

    it('should set the seconds back to 0', () => {
      jest.advanceTimersByTime(1000);
      expect(app().root.instance.state.seconds).toBe(1);
      app().root.instance.clear();
      expect(app().root.instance.state.seconds).toBe(0);
    })
  })
})
