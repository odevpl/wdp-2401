import React, { useState, useEffect } from 'react';
import styles from './ViewportWidthListener.module.scss';
import { useDispatch } from 'react-redux';
import { changeCurrentMode } from '../../../redux/currentModeRedux';

const ViewportWidthListener = () => {
  const dispatch = useDispatch();

  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [currentMode, setCurrentMode] = useState(getCurrentMode(viewportWidth));

  function getCurrentMode(width) {
    if (width >= 1024) {
      return 'desktop';
    } else if (width >= 768) {
      return 'tablet';
    } else {
      return 'mobile';
    }
  }

  useEffect(() => {
    const updateViewport = () => {
      const newWidth = window.innerWidth;
      setViewportWidth(newWidth);
      setCurrentMode(getCurrentMode(newWidth));
      dispatch(changeCurrentMode(currentMode));
    };

    updateViewport();

    window.addEventListener('resize', updateViewport);

    return () => {
      window.removeEventListener('resize', updateViewport);
    };
  }, [currentMode, dispatch]);

  return (
    <div className={styles.currentMode}>
      <p>Current mode: {currentMode}</p>
    </div>
  );
};

export default ViewportWidthListener;
