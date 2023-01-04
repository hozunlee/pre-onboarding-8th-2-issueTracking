import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import AddIssueInput from './components/AddIssueInput';

import Nav from './components/Nav';
import Home from './pages/Main';

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="h-screen w-full overflow-y-hidden overflow-x-scroll">
      <header></header>
      <Router>
        <Nav />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/add" element={<AddIssueInput />} />
          {/* <Route path='/admin' element={<Admin />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
