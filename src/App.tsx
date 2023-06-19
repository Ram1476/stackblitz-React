import * as React from 'react';
import UseState from './UseState.js';
import PreviousState from './PreviousState.js';
import UseReduce from './UseReduce.js';
import UseEffectTrail from './UseEffectTrail.js';
import UseLayoutEffectTrail from './UseLayoutEffectTrail.js';
import './style.css';

export default function App() {
  return (
    <div>
      <UseLayoutEffectTrail />
      {/* <UseEffectTrail /> */}
      {/* <UseReduce /> */}
      {/* <UseState /> */}
      {/* <PreviousState /> */}
    </div>
  );
}
