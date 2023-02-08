import React from 'react';
import { Button } from './common';

const Result = ({ onChangeStep, result }) => {
  const handleClick = () => onChangeStep('reset');
  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(`${result.icon} 오늘 ${result.name} 먹자! - 무작위 디저트 선택자`);
      alert('클립보드에 복사됐어요!');
    } catch (e) {
      alert('클립보드 복사가 실패했어요. 접근권한을 확인해주세요.');
    }
  };

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
