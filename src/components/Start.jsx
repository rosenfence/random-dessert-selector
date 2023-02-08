import React from 'react';
import { Lottie, Button } from './common';

const Start = ({ onChangeStep }) => {
  const handleClick = () => onChangeStep('start');

  return (
    <>
      <div className="flex-3 flex-center pb-[32px]">
        <Lottie listIdx="0" className="w-[60%]" />
      </div>
      <div className="flex-1 text-2xl text-center">오늘의 식후 디저트로는 뭐가 좋을까?</div>
      <Button onClick={handleClick}>시작하기</Button>
    </>
  );
};

export default Start;
