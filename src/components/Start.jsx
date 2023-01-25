import React from 'react';
import { Lottie, Button } from './common';

const Start = ({ onChangeStep }) => {
  const handleClick = () => onChangeStep('start');

  return (
    <div>
      <div className="flex-center flex-1">
        <Lottie className="w-[60%]" alt="시작" />
      </div>
      <div className="text-center text-2xl">오늘의 식후 디저트로는 뭐가 좋을까?</div>
      <Button onClick={handleClick}>시작하기</Button>
    </div>
  );
};

export default Start;
