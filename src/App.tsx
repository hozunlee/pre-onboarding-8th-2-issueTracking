import { useState } from 'react';
import About from './components/About';

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="App">
      하이
      <button type="button" onClick={increaseCount}>
        gㅏ이
      </button>
      {count}
      <About count={count} />
    </div>
  );
}

export default App;
