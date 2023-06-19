import * as React from 'react';
import UseState from './UseState.js';
import PreviousState from './PreviousState.js';
import UseReduce from './UseReduce.js';
import UseEffectTrail from './UseEffectTrail.js';
import UseLayoutEffectTrail from './UseLayoutEffectTrail.js';
import ImperativeHandleTrail from './ImperativeHandleTrail';
import UseCallBackTrail from './UseCallBackTrail.js';
import UseMemoTrail from './UseMemoTrail.js';
import './style.css';

export default function App() {
  return (
    <div>
      <UseMemoTrail />
      {/* <UseCallBackTrail /> */}
      {/* <UseLayoutEffectTrail /> */}
      {/* <ImperativeHandleTrail /> */}
      {/* <UseEffectTrail /> */}
      {/* <UseReduce /> */}
      {/* <UseState /> */}
      {/* <PreviousState /> */}
    </div>
  );
}
