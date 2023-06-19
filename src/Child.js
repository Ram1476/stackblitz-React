import React, { useEffect } from 'react';

function Child({ returnComment }) {
  useEffect(() => {
    console.log('UseEffect Function is Called...');
  }, [returnComment]);
  return <div>{returnComment(' React Developer')}</div>;
}

export default Child;
