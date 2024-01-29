import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { link } from '../../BackConfig';

function ListeAnnonces() {
  const [allAnnonces, setAllAnnonces] = useState([]);
  const [errors, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    const fetchAllAnnonces = async () => {
      try {
        const response = await axios.get(`${link}annonce/findAllAnnonceNonValide`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setAllAnnonces(response.data.allAnnonces);
        setIsLoading(false);
      } catch (error) {
        setError('Erreur lors de la récupération des données.');
        setIsLoading(false);
      }
    };
    fetchAllAnnonces();
  }, []);

  const handlePrevious = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const totalItems = allAnnonces.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = allAnnonces.slice(startIndex, endIndex);

  if (sessionStorage.getItem('token') !== null) {
    return (
      <div>
        <table id="tab">
          <tbody>
            {currentItems.map((annonce) => (
              <tr key={annonce.id_annonce}>
                <td className="w-1/4 sm:w-1/6 md:w-1/4 lg:w-1/6">
                  <p>Description: {annonce.description}</p>
                  <p>{annonce.marque} {annonce.modeles}</p>
                  <p>{annonce.prix} {annonce.date_annonce}</p>
                  {/* <Link to={`/produits/${annonce.id_annonce}`}>
                    Voir les détails
                  </Link> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div id='ajoutListe' className="flex justify-between mt-4">
          <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white mr-15" onClick={handlePrevious} disabled={currentPage === 1}>
            Précédent
          </button>

          <button className="btn bg-indigo-500 hover.bg-indigo-600 text-white ml-16" onClick={handleNext} disabled={currentPage === totalPages}>
            Suivant
          </button>
        </div>
      </div>
    );
  }else{
    return (
      <Login></Login>
    );
  }
}
export default ListeAnnonces;
