import {useState, useEffect} from 'react';
const Counter = () => {

    const [num, setNum] = useState(0);
    const [name, setName] = useState('Ahmet');
  
    useEffect(() => {
      console.log("State güncellendi")
    })
  
    useEffect(() => {
      console.log("Number state i güncellendi")
    }, [num])
  
    useEffect(() => {
      console.log("Componenet mount edildi");

     const interval = setInterval(()=> {
        setNum((n) => n+1);
      },1000);

    return () => clearInterval(interval);

    }, [])

  return (
    <div>
        <h4>{num}</h4>
      <button onClick={() => setNum(num + 1)}>+</button>

      <h4>{name}</h4>
      <button onClick={() => setName('Kübra')}>Değiştir</button>
    </div>
  )
}

export default Counter