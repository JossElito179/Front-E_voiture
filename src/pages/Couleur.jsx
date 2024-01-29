// Modele.js
import React from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import TableauGenerique from '../partials/dashboard/TableauGenerique';
import dataTable from '../dataTable';

function Couleur() {
const datacouleur = dataTable.couleur;

  const handleModifiercouleur = (nom) => {
    console.log(`Modifier ${nom} dans couleur`);
  };

  const handleSupprimercouleur = (nom) => {
    console.log(`Supprimer ${nom} dans couleur`);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar />
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header />
        {/* Content of the Modele page */}
        <main className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
          <div className="sm:flex sm:justify-between sm:items-center mb-8">
            <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
              <span className="hidden xs:block ml-2">Liste des couleurs</span>
            </div>
          </div>
          <TableauGenerique
            data={datacouleur}
            handleModifier={handleModifiercouleur}
            handleSupprimer={handleSupprimercouleur}
          />
        </main>
      </div>
    </div>
  );
}

export default Couleur;
