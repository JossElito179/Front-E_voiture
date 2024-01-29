import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

// import config from './backconfig';
import './css/style.css';
import './css/additional-styles/product.css';


import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import Annonces from './pages/Annonces';
import Produits from './pages/Produits';
import Login from './pages/Login';
import Marque from './pages/Marque';
import Modele from './pages/Modele';
import Transmission from './pages/Transmission';
import Moteur from './pages/Moteur';
import Commission from './pages/Commission';
import Categorie from './pages/Categorie';
import Couleur from './pages/Couleur';
import Carburant from './pages/Carburant';




function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Dashboard />} />
        <Route exact path="/annonce/Annonces" element={<Annonces />} />
        <Route exact path="/produit/Produits" element={<Produits />} />
        <Route exact path="/modele/Modele" element={<Modele />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/marque/Marque" element={<Marque />} />
        <Route exact path="/transmission/Transmission" element={<Transmission />} />
        <Route exact path="/moteur/Moteur" element={<Moteur />} />
        <Route exact path="/commission/Commission" element={<Commission />} />
        <Route exact path="/categorie/Categorie" element={<Categorie />} />
        <Route exact path="/couleur/Couleur" element={<Couleur />} />
        <Route exact path="/carburant/Carburant" element={<Carburant />} />
        <Route path="/produits/:id" element={<Produits />} />

      </Routes>
    </>
  );
}

export default App;
