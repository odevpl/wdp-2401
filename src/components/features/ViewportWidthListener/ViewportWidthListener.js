import React, { useState, useEffect } from 'react';
import styles from './ViewportWidthListener.module.scss';

const ViewportWidthListener = () => {
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

  const updateViewport = () => {
    const newWidth = window.innerWidth;
    setViewportWidth(newWidth);
    setCurrentMode(getCurrentMode(newWidth));
  };

  useEffect(() => {
    updateViewport();

    window.addEventListener('resize', updateViewport);

    return () => {
      window.removeEventListener('resize', updateViewport);
    };
  }, [updateViewport]);

  return (
    <div className={styles.currentMode}>
      <p>Current mode: {currentMode}</p>
    </div>
  );
};

export default ViewportWidthListener;
