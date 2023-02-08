import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import cup from '../../lottie/cup.json';

const Lottie = ({ listIdx }) => {
  const container = useRef();
  const list = [cup];

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: list[listIdx],
    });
  }, []);

  return (
    <>
      <div ref={container}></div>
    </>
  );
};

export default Lottie;
