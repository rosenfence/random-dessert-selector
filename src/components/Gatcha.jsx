import React from 'react';
import { Button } from './common';

const Gatcha = ({ onChangeStep }) => {
  const handleClick = () => onChangeStep('gatcha', gatcha);

  //임시
  const gatcha = {
    icon: '🥐',
    name: '크로아상',
  };

  return (
    <div>
      <div className="text-center text-2xl">뽑기 페이지</div>
      <Button onClick={handleClick}>골라줘!</Button>
    </div>
  );
};

export default Gatcha;
