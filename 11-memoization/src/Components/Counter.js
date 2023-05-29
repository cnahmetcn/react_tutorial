import React, {useState, useMemo, useCallback} from 'react'
import Header from './Header'
import User from './User'
import Count from './Count';

const userData = {
    id: 1,
    name: 'Ahmet',
};

const Counter = () => {
    const [count, setCount] = useState(0);

    const headerData = useMemo(() => {
        return {
            id: 1,
            name: 'Ahmet',
        }
    }, []);

    const increment = useCallback(() => {
        setCount(prev => prev + 1);
    }, []);

    console.log("Counter component is rendering")
  return (
    <div>
        <Header data={headerData} />

        <br/>

        <User data={userData} />

        <br/>

        <Count increment={increment} />

        <hr/>

        <h3>{count}</h3>

        <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}

export default Counter