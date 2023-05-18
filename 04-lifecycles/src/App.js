import Counter from './components/Counter';
import { useState } from 'react';

function App() {

  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
  {isVisible && <Counter/>}

  <button onClick={()=>setIsVisible(!isVisible)}>Toogle</button>
    </>
  );
}

export default App;
