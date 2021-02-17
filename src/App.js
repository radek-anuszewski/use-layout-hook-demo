import React, {useCallback, useEffect, useLayoutEffect, useState} from 'react';

const Step = ({ step, onClick }) => {
  return (
    <div>
      You are on step {step}. <button onClick={onClick}>Next</button>
    </div>
  )
}

const StepUseEffect = ({ step, onClick }) => {
  useEffect(() => {
    if (step === 3) {
      onClick();
    }
  }, [step, onClick]);

  return <Step onClick={onClick} step={step} />
}
const StepUseLayoutEffect = ({ step, onClick }) => {
  useLayoutEffect(() => {
    if (step === 3) {
      onClick();
    }
  }, [step, onClick]);

  return <Step onClick={onClick} step={step} />
}

function App() {
  const [stepWithEffect, setStepWithEffect] = useState(1);
  const [stepWithLayoutEffect, setStepWithLayoutEffect] = useState(1);

  const onClickWithEffect = useCallback(() => {
    setStepWithEffect(step => step + 1);
  }, [setStepWithEffect]);
  const onClickWithLayoutEffect = useCallback(() => {
    setStepWithLayoutEffect(step => step + 1);
  }, [setStepWithLayoutEffect]);
  const resetCounters = useCallback(() => {
    setStepWithEffect(1);
    setStepWithLayoutEffect(1);
  }, [setStepWithEffect, setStepWithLayoutEffect]);


  return (
    <div style={{paddingLeft: 20, paddingTop: 20}}>
      <button onClick={resetCounters}>Reset counters</button>
      <h2>useLayoutEffect</h2>
      <StepUseLayoutEffect step={stepWithLayoutEffect} onClick={onClickWithLayoutEffect} />
      <br />
      <h2>useEffect</h2>
      <StepUseEffect step={stepWithEffect} onClick={onClickWithEffect}/>
    </div>
  );
}

export default App;
