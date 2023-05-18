import {useState} from 'react';

function Counter() {
    const [num, setNum] = useState(0);

    const decrease = () => {
        if(num > 0)
        {
            setNum(num - 1)
        }
    }
  return (
    <>
    <p>{num}</p>
    <button onClick={() => setNum(num + 1)}>+</button>
    <button onClick={decrease}>-</button>
    </>
  )
}

export default Counter