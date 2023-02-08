import React, { useState } from 'react';
import { Header, Layout } from './components/common';
import { Start, Gatcha, Result } from './components';

const initValue = {
  icon: '',
  name: '',
};

const App = () => {
  const [step, setStep] = useState(0);
  const [result, setResult] = useState(initValue);

  const reset = () => {
    setStep(0);
    setResult(initValue);
  };

  const handleChangeStep = (type, value) => {
    switch (type) {
      case 'gatcha':
        setResult(value);
        break;
    }
    if (type !== 'reset') setStep(step + 1);
    else reset();
  };

  return (
    <Layout>
      <Header />
      <main className="h-full flex flex-col">
        {step === 0 && <Start onChangeStep={handleChangeStep} />}
        {step === 1 && <Gatcha onChangeStep={handleChangeStep} />}
        {step === 2 && <Result onChangeStep={handleChangeStep} result={result} />}
      </main>
    </Layout>
  );
};

export default App;
