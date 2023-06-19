import React, { useEffect, useLayoutEffect, useRef } from 'react';

function UseLayoutEffectTrail() {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    inputRef.current.value = 'Ram';
    // setInterval(() =>
    // {
    //         inputRef.current.value = "Ram"
    // },2000)
  }, []);

  return (
    <div>
      <input
        defaultValue="Pedro"
        ref={inputRef}
        style={{ width: 400, height: 60 }}
      />
    </div>
  );
}

export default UseLayoutEffectTrail;
