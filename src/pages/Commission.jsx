// Modele.js
import React, { useState,useEffect } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
// import dataTable from '../dataTable';
import axios from 'axios';
import { link } from '../BackConfig';

function Commission() {
  const [dataCommission,setCommission]=useState([]);
  const [errors, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  
  useEffect(() => {
    const token=sessionStorage.getItem('token');
    const fetchCommissions = async () => {
      try {
        const response = await axios.get(`${link}commission/findAll`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCommission(response.data);
        setIsLoading(false);
      } catch (error) {
        setError('Erreur lors de la récupération des données.');
        setIsLoading(false);
      }
    };
    fetchCommissions();
  }, []);
  
  if (isLoading) {
    return <p>Chargement en cours...</p>;
  }
  
  if (errors) {
    return <p>Erreur: {errors}</p>;
  }
  const handleModifiercommission = (nom) => {
    console.log(`Modifier ${nom} dans commission`);
  };

  const handleSupprimercommission = (nom) => {
    console.log(`Supprimer ${nom} dans commission`);
  };
  if(sessionStorage.getItem('token')!==null){

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
              <span className="hidden xs:block ml-2">La commission</span>
            </div>
          </div>
          <TabCommission/>
        </main>
      </div>
    </div>
  );
}else{
  return (
    <Login></Login>
  );
}
}

export default Commission;
