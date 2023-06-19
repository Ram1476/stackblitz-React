import React, { useState } from 'react';

function UseState() {
  const [count, setValue] = useState(0);
  const [name, setName] = useState('Ram');

  changeName = (event) => {
    const newValue = event.target.value;
    setName(newValue);
  };
  return (
    // <div>
    //   <button onClick={() => setValue(count + 1)}>Count -{count}</button>
    // </div>

    <div>
      <input type="text" onChange={changeName} />
      {name}
    </div>
  );
}

export default UseState;
