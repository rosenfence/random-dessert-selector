import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animation from '../../lottie/cup.json';

const Lottie = () => {
  const container = useRef();

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animation,
    });
  }, []);

  return (
    <>
      <div ref={container} style={{ width: '300px' }}></div>
    </>
  );
};

export default Lottie;
