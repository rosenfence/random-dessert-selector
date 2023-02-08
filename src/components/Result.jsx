import React from 'react';
import { Button } from './common';

const Result = ({ onChangeStep, result }) => {
  const handleClick = () => onChangeStep('reset');
  const handleShare = () => {};

  return (
    <>
      <div className="flex-1 text-center text-2xl">
        결과
        <div>{result.icon}</div>
        <div>{result.name}</div>
      </div>
      <Button onClick={handleShare}>같이볼래?</Button>
      <div className="pt-1">
        <Button onClick={handleClick}>다시하기</Button>
      </div>
    </>
  );
};

export default Result;
