import React, { useEffect, useState } from 'react';

const App = function App() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setCounter((prev) => prev + 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [counter]);
  return (
    <div>
      <h1>Hello React!</h1>
      <h2>{counter}</h2>
    </div>
  );
};

export default App;
