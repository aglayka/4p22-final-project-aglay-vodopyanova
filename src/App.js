import './App.css';
import Feedback from './pages/Feedback/Feedback';
import DefaultLayot from './layot/DefaultLayot'
import Product from './pages/Product/Product';
import { Route, Routes } from 'react-router-dom';

import Indexpage from './pages/Indexpage/Indexpage';

function App() {
  return ( 
    <div className="App">
      <Routes>
        <Route path={'/'} element={<DefaultLayot />} >
          <Route index element={<Indexpage />} />
          <Route path={'product'}>
            <Route path={':cardId'} element={<Product />} />
          </Route>
        </Route>
        <Route path={'feedback'} element={<Feedback />} />
      </Routes>
     </div>
  );
}

export default App;
