import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Sayaç: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Artır</button>
      <button onClick={() => setCount(count - 1)}>Azalt</button>
      <button onClick={() => setCount(0)}>Sıfırla</button>
    </div>
  );
}

export default App;