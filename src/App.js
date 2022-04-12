import { Routes, Route } from 'react-router-dom';
import NoMatch from './components/NoMatch';
import Home from './components/pages/Home';
import Location from './components/pages/Location';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/locations/:id" element={<Location />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
