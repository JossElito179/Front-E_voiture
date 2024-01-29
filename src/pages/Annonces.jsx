import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import ListeAnnonces from '../partials/dashboard/ListeAnnonces';
import Login from './Login';

function Annonces() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  if(sessionStorage.getItem('token')!==null){
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                <span className="hidden xs:block ml-2"> Listes des annonces
                </span>

              </div>

            </div>
            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">

              <ListeAnnonces />

            </div>
          </div>
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

export default Annonces;