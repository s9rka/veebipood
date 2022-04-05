import { Route, Routes } from 'react-router-dom'; 
import './App.css';
import Menüü from './components/Menüü';
import AdminHome from './pages/AdminHome';
import Avaleht from './pages/Avaleht';
import HaldaTooteid from './pages/HaldaTooteid';
import AddProduct from './pages/AddProduct';
import VaataToode from './pages/VaataToode';

import Ostukorv from './pages/Ostukorv';


// cmd -> npm start järgselt
// brauseris -> inspect console

function App() {
  return (
    <div>
      <Menüü />
      
      {/* Routes sees on defineeritud kõik URL ja lehtede seosed */}
      <Routes>
        {/* localhost:3000/ */}
        <Route path='/' exact element={ <Avaleht /> } />
        {/* localhost:3000/ostukorv */}
        <Route path='/ostukorv' exact element={ <Ostukorv /> } />
        <Route path='/admin' exact element={ <AdminHome /> } />
        <Route path='/toode/:toodeID' exact element={ <VaataToode />} />

        <Route path='/admin/addproduct' exact element={ <AddProduct /> } />
        {/* Kui panna '/admin/lisa-toode' siis lööb täielikult errorisse
        Tundub, et talle ei meeldinud see "lisa toode" sõnapaar. Kohe kui panin addproduct, siis toimis */}
        <Route path='/admin/halda-tooteid' exact element={ <HaldaTooteid /> } />
      </Routes>
    </div>
    

  );
}

export default App;
