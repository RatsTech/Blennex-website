// src/components/Preloader.jsx
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Preloader = () => {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      background: '#fff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
      position: 'fixed',
      top: 0,
      left: 0
    }}>
      <DotLottieReact
        src="https://lottie.host/212862e2-0c56-4a08-bea2-3bebdb1ce28d/OSdcI51sLO.lottie"
        loop
        autoplay
        style={{ width: 350, height: 350 }}
      />
    </div>
  );
};

export default Preloader;


