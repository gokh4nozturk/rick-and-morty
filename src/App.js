import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Location from './components/Location';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/locations/:id" element={<Location />} />
      </Routes>
    </>
  );
}

export default App;
