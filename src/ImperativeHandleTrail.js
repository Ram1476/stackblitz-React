import React, { useRef } from 'react';
import ChildButton from './ChildButton';

function ImperativeHandleTrail() {
  const buttonRef = useRef(null);
  const showText = () => {
    buttonRef.current.alterToggle();
  };
  return (
    <div>
      <button onClick={showText}>Button From Parent</button>
      <ChildButton ref={buttonRef} />
    </div>
  );
}

export default ImperativeHandleTrail;
