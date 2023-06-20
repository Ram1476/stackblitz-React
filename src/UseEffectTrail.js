import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UseEffectTrail() {
  const [data, setData] = useState('');

  const getData = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/comments`
    );
    setData(data);
  };
  useEffect(() => {
    // axios
    //   .get('https://jsonplaceholder.typicode.com/comments')
    //   .then((response) => {
    //     setData(response.data[0].email);
    //     console.log('API CALLED');
    //   });
    getData();
  }, []);
  return (
    <div>
      <div>{data}</div>
      <div>Hello This is a UseEffect Example</div>
    </div>
  );
}

export default UseEffectTrail;
