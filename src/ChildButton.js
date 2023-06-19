import React, { useState, forwardRef, useImperativeHandle } from 'react';

const ChildButton = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));
  return (
    <div>
      <button>Button From Child</button>
      {toggle && <p>This is a Sample Text</p>}
    </div>
  );
});

export default ChildButton;
