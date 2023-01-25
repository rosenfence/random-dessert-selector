import React from 'react';
import { Button } from './common';

const Result = ({ onChangeStep }) => {
  const handleClick = () => onChangeStep('reset');

  return (
    <div>
      <div className="text-center text-2xl">결과 페이지</div>
      <Button onClick={handleClick}>같이볼래?</Button>
      <div className="pt-1">
        <Button onClick={handleClick}>다시하기</Button>
      </div>
    </div>
  );
};

export default Result;
