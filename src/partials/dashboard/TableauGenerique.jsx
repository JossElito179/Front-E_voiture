// TableauGenerique.js
import React, { useState } from 'react';
import ModalInsert from '../../components/ModalInsert'; // Adjust the import path
import ModalEdit from '../../components/ModalEdit'; // Adjust the import path

function TableauGenerique({ data ,requestMapping }) {
  const [isModalInsertOpen, setModalInsertOpen] = useState(false);
  const [isModalEditOpen, setModalEditOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const handleAjouterModal = () => {
    setModalInsertOpen(true);
    setEditingItem(null);
  };

  const handleModifierModal = (nom) => {
    setModalEditOpen(true);
    setEditingItem(nom);
  };

  return (
    <div>
      <table id="tableau">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.nom}>
              <td className="w-1/4 sm:w-1/6 md:w-1/4 lg:w-1/6">{item.nom}</td>
              <td className="w-1/4 sm:w-1/6 md:w-1/4 lg:w-1/6">
                <center><button
                  id='edit'
                  onClick={() => handleModifierModal(item.nom)}
                >
                  Modifier
                </button>
                </center>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div id='ajoutListe'>
        <button
          className="btn bg-indigo-500 hover:bg-indigo-600 text-white"
          onClick={handleAjouterModal}
        >
          <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
            <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
          </svg>
          <span className="hidden xs:block ml-2">Ajouter</span>
        </button>
      </div>

      {/* ModalInsert component */}
      <ModalInsert
        id="modal-insert"
        modalOpen={isModalInsertOpen}
        onClose={() => {
          setModalInsertOpen(false);
          setEditingItem(null);
        }}
        onValidate={(inputValue) => {
          console.log('Validating with input:', inputValue);
          // Add any logic you need for handling the validation result
          setModalInsertOpen(false); // Close the modal after validation
          setEditingItem(null);
        }}
        editingItem={editingItem}
        requestMap={requestMapping}
      />

      {/* ModalEdit component */}
      <ModalEdit
        id="modal-edit"
        modalOpen={isModalEditOpen}
        onClose={() => {
          setModalEditOpen(false);
          setEditingItem(null);
        }}
        onValidate={(inputValue) => {
          console.log('Validating with input:', inputValue);
          // Add any logic you need for handling the validation result
          setModalEditOpen(false); // Close the modal after validation
          setEditingItem(null);
        }}
      />
    </div>
  );
}

export default TableauGenerique;
