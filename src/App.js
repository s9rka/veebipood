import { Link, Route, Routes } from 'react-router-dom'; 
import './App.css';
import Avaleht from './pages/Avaleht';
import Ostukorv from './pages/Ostukorv';

// cmd -> npm start järgselt
// brauseris -> inspect console

function App() {
  return (
    <div>
      <div>
        <Link to={'/'}>
          <button className='nupp'>Avalehele</button>
        </Link>
        <Link to={'/ostukorv'}>
          <button className='nupp'>Ostukorvi</button>
        </Link>
      </div>
      <Routes>
        {/* localhost:3000/ */}
        <Route path='/' exact element={ <Avaleht /> }></Route>
        {/* localhost:3000/ostukorv */}
        <Route path='/ostukorv' exact element={ <Ostukorv /> }></Route>
      </Routes>
    </div>
    

  );
}

export default App;
