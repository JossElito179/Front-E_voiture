import React, { useState } from 'react';
import Produit1 from '../../images/ID1Car1.jpg';
import Produit2 from '../../images/ID1Car2.jpg';
import Produit3 from '../../images/ID1Car3.jpg';

function ListeProduit() {
  const [imageActuelle, setImageActuelle] = useState(Produit1);

  const changerImage = (nouvelleImage) => {
    setImageActuelle(nouvelleImage);
  };

  return (
    <div className="col-span-full xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Annonce 1</h2>
      </header>
      <div className="card-wrapper">
        <style>
          {`
            .gap-6 {
              gap: 10.7rem;
            }
            img {
              width: 100%;
            }
          `}
        </style>
        <div className="card">
          <div className="product-imgs">
            <div className="img-display">
              <div className="img-showcase">
                <img src={imageActuelle} alt="shoe image" />
              </div>
            </div>
            <div className="img-select">
              <div className="img-item">
                <img
                  src={Produit1}
                  alt="shoe image"
                  onClick={() => changerImage(Produit1)}
                />
              </div>
              <div className="img-item">
                <img
                  src={Produit2}
                  alt="shoe image"
                  onClick={() => changerImage(Produit2)}
                />
              </div>
              <div className="img-item">
                <img
                  src={Produit3}
                  alt="shoe image"
                  onClick={() => changerImage(Produit3)}
                />
              </div>
            </div>
          </div>

          <div className="product-content">
            <h2 className="product-title">Nom voiture</h2>
            <a href="#" className="product-link">Description</a>

            <div className="product-price">
              <p className="new-price">Prix: <span>$249.00</span></p>
            </div>

            <div className="product-detail">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.</p>
              <ul>
                <li>Marque : <span></span></li>
                <li>Modèle : <span></span></li>
                <li>Transmission : <span></span></li>
                <li>Moteur : <span></span></li>
                <li>Commission : <span></span></li>
                <li>Catégorie : <span></span></li>
                <li>Carburant : <span></span></li>
                <li>Couleur : <span></span></li>
              </ul>
            </div>

            <div className="purchase-info">
              <button type="button" className="btn">
                Valider <i className="fas fa-shopping-cart"></i>
              </button>
              <button type="button" className="btn">Supprimer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListeProduit;
