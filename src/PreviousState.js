import React, { useState } from 'react';

function PreviousState() {
  const initialValue = 0;
  const [count, setValue] = useState(0);
  return (
    <div>
      Count: {count}
      <div></div>
      <button onClick={() => setValue(initialValue)}>Reset</button>
      <button onClick={() => setValue(count + 1)}>Increment</button>
      <button onClick={() => setValue(count - 1)}>Decrement</button>
    </div>
  );
}

export default PreviousState;
