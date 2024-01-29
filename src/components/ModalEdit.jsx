// ModalEdit.js
import React, { useRef, useEffect } from 'react';
import Transition from '../utils/Transition';

function ModalEdit({
  id,
  modalOpen,
  onClose,
  onValidate
}) {
  const modalContent = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    modalOpen && inputRef.current.focus();
  }, [modalOpen]);

  const handleValidation = () => {
    const inputValue = inputRef.current.value;
    onValidate(inputValue);
    onClose();
  };

  return (
    <>
      {/* Modal backdrop */}
      <Transition
        className="fixed inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity"
        show={modalOpen}
        enter="transition ease-out duration-200"
        enterStart="opacity-0"
        enterEnd="opacity-100"
        leave="transition ease-out duration-100"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
        aria-hidden="true"
      />
      {/* Modal dialog */}
      <Transition
        id={id}
        className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center"
        role="dialog"
        aria-modal="true"
        show={modalOpen}
        enter="transition ease-in-out duration-200"
        enterStart="opacity-0 translate-y-4"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-in-out duration-200"
        leaveStart="opacity-100 translate-y-0"
        leaveEnd="opacity-0 translate-y-4"
      >
        <div
          ref={modalContent}
          className="bg-white dark:bg-slate-800 border border-transparent dark:border-slate-700 overflow-hidden w-80 max-w-full mx-auto rounded shadow-lg"
        >
          {/* Content */}
          <div className="p-4">
            <span>Modification</span>
            {/* Input field */}
            <div className="mb-4">
              <label htmlFor="inputField" className="sr-only">
                Entrer un(e) nouveau(lle)
              </label>
              <input
                id="inputField"
                className="w-full dark:text-slate-300 bg-white dark:bg-slate-800 border-0 focus:ring-transparent placeholder-slate-400 dark:placeholder-slate-500 appearance-none py-3 px-4"
                type="text"
                placeholder="Entrer un(e) nouveau(lle)"
                ref={inputRef}
              />
            </div>
            {/* Buttons */}
            <div className="flex justify-end">
              <button
                className="mr-2 bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded"
                onClick={handleValidation}
              >
                Valider
              </button>
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded"
                onClick={onClose}
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
}

export default ModalEdit;
