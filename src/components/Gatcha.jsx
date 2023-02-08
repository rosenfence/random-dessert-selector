import React, { useState, useEffect } from 'react';
import dessert from '../constants/dessert';
import { Button } from './common';

const Gatcha = ({ onChangeStep }) => {
  const [randomImogi, setRandomImogi] = useState('🥐');
  const [randomName, setRandomName] = useState('크로아상');
  let indexArr = Object.keys(dessert); // ['one, 'two', ...]

  const setGatcha = () => {
    let index = indexArr[Math.floor(Math.random() * indexArr.length)];
    let gatcha = {
      icon: dessert[index].icon,
      name: dessert[index].name,
    };
    return gatcha;
  };

  const handleClick = () => {
    onChangeStep('gatcha', setGatcha());
  };

  const changeImogi = () => {
    let index = indexArr[Math.floor(Math.random() * indexArr.length)];
    setRandomImogi(dessert[index].icon);
    setRandomName(dessert[index].name);
  };

  useEffect(() => {
    setInterval(() => changeImogi(), 100);
  }, []);

  return (
    <>
      <div className="flex-center flex-1 flex-col">
        <div className="flex-3 w-full text-9xl text-center">{randomImogi}</div>
        <div className="flex-1 w-full text-5xl text-center">{randomName}</div>
      </div>
      <Button onClick={handleClick}>골라줘!</Button>
    </>
  );
};

export default Gatcha;
