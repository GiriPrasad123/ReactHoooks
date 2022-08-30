import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("Giri");
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>{name}</h1>
      <button onClick={() => setName("M.N.Giriprasad")}> Change </button><br />
      <h1>{count}</h1>
      <button style={{margin : "10px"}} onClick={() => setCount(count - 1)}> count-1 </button>
      <button style={{margin : "10px"}} onClick={() => setCount(count + 1)}> count+1 </button>
      <button style={{margin : "10px"}} onClick={() => setCount(0)}> reset </button>
    </div>
  );
}
export default App;
