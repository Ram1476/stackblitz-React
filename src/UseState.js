import React, { useState } from 'react';

function UseState() {
  const [count, setValue] = useState(0);
  return (
    <div>
      <button onClick={() => setValue(count + 1)}>Count -{count}</button>
    </div>
  );
}

export default UseState;
