import { useState } from 'react';
import Nav from './components/Nav';
import Home from './pages/Main';

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="h-screen w-full overflow-y-hidden overflow-x-scroll">
      <header>
        <Nav />
      </header>
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
