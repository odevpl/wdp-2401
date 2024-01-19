import React, { useRef, useEffect } from 'react';
import Hammer from 'hammerjs';
import PropTypes from 'prop-types';

const Swipeable = ({ leftAction, rightAction, children }) => {
  const swipeContainerRef = useRef(null);

  useEffect(() => {
    const hammer = new Hammer(swipeContainerRef.current);

    hammer.on('swipeleft', () => {
      if (leftAction) {
        leftAction();
      }
    });

    hammer.on('swiperight', () => {
      if (rightAction) {
        rightAction();
      }
    });

    return () => {
      hammer.destroy();
    };
  }, [leftAction, rightAction]);

  return (
    <div ref={swipeContainerRef} style={{ overflow: 'hidden', touchAction: 'pan-y' }}>
      {children}
    </div>
  );
};

Swipeable.propTypes = {
  children: PropTypes.node,
  leftAction: PropTypes.func,
  rightAction: PropTypes.func,
};

export default Swipeable;
