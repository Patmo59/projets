import Navbar from './Components/Navbar/Navbar';
import Accueil from './Containers/Acceuil/Accueil';
import {Routes, Route } from 'react-router-dom';
import Favoris from './Containers/Favoris/Favoris';
import Details from './Containers/Details/Details';

export default function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Favoris" element={<Favoris />} />
        <Route path="/Details" element={<Details />} />
      </Routes>

    </div>
  );
}

 
