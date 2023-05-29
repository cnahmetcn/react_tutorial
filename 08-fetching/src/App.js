import React, {useState, useEffect} from 'react'
import UserList from './component/Project/UserList';
import DetailList from './component/Project/DetailList';
import './App.css';

function App() {

  const [activeUserId, setActiveUserId] = useState(null);

  return (
    <div className="Row">
          <div><UserList setActiveUserId={setActiveUserId}/></div>
          {
            activeUserId && <div><DetailList activeUserId={activeUserId}/></div>
          }
    </div>
  );
}

export default App;
