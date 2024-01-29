import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from "../images/logo.png";

import SidebarLinkGroup from './SidebarLinkGroup';

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true');

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector('body').classList.add('sidebar-expanded');
    } else {
      document.querySelector('body').classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <div>
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'
          }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-slate-500 hover:text-slate-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
          <NavLink end to="/home" className="block">
            <img id='logo' src={logo} />
          </NavLink>
        </div>

        {/* Links */}
        <div className="space-y-8">
          {/* Pages group */}
          <div>
            <h3 className="text-xs uppercase text-slate-500 font-semibold pl-3">
              <span className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6" aria-hidden="true">
                •••
              </span>
              <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">Tableau de bord</span>
            </h3>
            <ul className="mt-3">
              {/* Dashboard */}
              {/* Marque */}
              <SidebarLinkGroup activecondition={pathname.includes('marque')}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href="#0"
                        className={`block text-slate-200 truncate transition duration-150 ${pathname.includes('marque') ? 'hover:text-slate-200' : 'hover:text-white'
                          }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                              <path
                                className={`fill-current ${pathname.includes('marque') ? 'text-indigo-300' : 'text-slate-400'}`}
                                d="M13 15l11-7L11.504.136a1 1 0 00-1.019.007L0 7l13 8z"
                              />
                              <path
                                className={`fill-current ${pathname.includes('marque') ? 'text-indigo-600' : 'text-slate-700'}`}
                                d="M13 15L0 7v9c0 .355.189.685.496.864L13 24v-9z"
                              />
                              <path
                                className={`fill-current ${pathname.includes('marque') ? 'text-indigo-500' : 'text-slate-600'}`}
                                d="M13 15.047V24l10.573-7.181A.999.999 0 0024 16V8l-11 7.047z"
                              />
                            </svg>
                            <NavLink to="/marque/Marque"
                              className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Marque
                            </NavLink>
                          </div>

                        </div>
                      </a>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>

              {/* Modele */}
              <SidebarLinkGroup activecondition={pathname.includes('modele')}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href="#0"
                        className={`block text-slate-200 truncate transition duration-150 ${pathname.includes('modele') ? 'hover:text-slate-200' : 'hover:text-white'
                          }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                              <path
                                className={`fill-current ${pathname.includes('modele') ? 'text-indigo-300' : 'text-slate-400'}`}
                                d="M21 11h-1V9c0-3.87-3.13-7-7-7S6 5.13 6 9v2H5c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h2c0 1.1.9 2 2 2s2-.9 2-2h6c0 1.1.9 2 2 2s2-.9 2-2h2c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2zm-7 9h-2v-2h2v2zm-4 0H8v-2h2v2zm0-4H8V9h2v7zm4 4h-2v-2h2v2zm4-4h-2V9h2v7zm2-8c0 .55-.45 1-1 1h-2V9c0-2.21-1.79-4-4-4s-4 1.79-4 4v1H5c-.55 0-1-.45-1-1V9c0-3.31 2.69-6 6-6s6 2.69 6 6v1z"
                              />
                            </svg>
                            <NavLink to="/modele/Modele"
                              className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Modele
                            </NavLink>
                          </div>

                        </div>
                      </a>

                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* Couleur */}
              <SidebarLinkGroup activecondition={pathname.includes('couleur')}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href="#0"
                        className={`block text-slate-200 truncate transition duration-150 ${pathname.includes('couleur') ? 'hover:text-slate-200' : 'hover:text-white'
                          }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <circle cx="12" cy="12" r="2" />
                              <circle cx="4.5" cy="8.5" r="2" />
                              <circle cx="19.5" cy="8.5" r="2" />
                              <circle cx="12" cy="19" r="2" />
                            </svg>



                            <NavLink to="/couleur/Couleur"
                              className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Couleur
                            </NavLink>
                          </div>

                        </div>
                      </a>

                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* Transmission */}
              <SidebarLinkGroup activecondition={pathname.includes('transmission')}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href="#0"
                        className={`block text-slate-200 truncate transition duration-150 ${pathname.includes('transmission') ? 'hover:text-slate-200' : 'hover:text-white'
                          }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                              <path
                                className={`fill-current ${pathname.includes('transmission') ? 'text-indigo-300' : 'text-slate-400'}`}
                                d="M7.27 7.27a2 2 0 10-2.83 2.83l5.66 5.66 2.83-2.83-5.66-5.66zm2.83 10.6l5.66 5.66a2 2 0 002.83-2.83l-5.66-5.66-2.83 2.83z"
                              />
                              <path
                                className={`fill-current ${pathname.includes('transmission') ? 'text-indigo-600' : 'text-slate-700'}`}
                                d="M15.34 13.41a2 2 0 102.83-2.83l-5.66-5.66-2.83 2.83 5.66 5.66zm-2.83 10.6l-5.66 5.66a2 2 0 002.83 2.83l5.66-5.66-2.83-2.83z"
                              />
                              <path
                                className={`fill-current ${pathname.includes('transmission') ? 'text-indigo-500' : 'text-slate-600'}`}
                                d="M21 5.41a1 1 0 00-1.41 0L13 12.59l-2.29-2.3a1 1 0 10-1.42 1.42L11 15.42l1.29 1.29a1 1 0 001.42 0L21 6.82a1 1 0 000-1.41z"
                              />
                            </svg>
                            <NavLink to="/transmission/Transmission"
                              className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Transmission
                            </NavLink>
                          </div>

                        </div>
                      </a>

                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              <SidebarLinkGroup activecondition={pathname.includes('moteur')}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href="#0"
                        className={`block text-slate-200 truncate transition duration-150 ${pathname.includes('moteur') ? 'hover:text-slate-200' : 'hover:text-white'
                          }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                              <path
                                className={`fill-current ${pathname.includes('moteur') ? 'text-indigo-300' : 'text-slate-400'}`}
                                d="M21 11h-1V3c0-.6-.4-1-1-1H5c-.6 0-1 .4-1 1v8H3c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1h1v3c0 .6.4 1 1 1h4c.3 0 .6-.1.8-.3l2-1.5 2 1.5c.2.2.5.3.7.3.4 0 .7-.2 1-.5l2-1.5 2 1.5c.2.2.5.3.7.3.4 0 .7-.2 1-.5l2-1.5 2 1.5c.2.2.5.3.7.3.6 0 1-.4 1-1v-3h1c.6 0 1-.4 1-1v-6c0-.6-.4-1-1-1zM7 5v4h10V5H7zm11 14H6v-2h12v2zM20 9H4V4h16v5z"
                              />
                            </svg>

                            <NavLink to="/moteur/Moteur"
                              className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Moteur
                            </NavLink>
                          </div>

                        </div>
                      </a>

                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>

              {/* Job Board */}
              <SidebarLinkGroup activecondition={pathname.includes('commission')}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href="#0"
                        className={`block text-slate-200 truncate transition duration-150 ${pathname.includes('commission') ? 'hover:text-slate-200' : 'hover:text-white'
                          }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                              <path
                                className={`fill-current ${pathname.includes('commission') ? 'text-indigo-300' : 'text-slate-400'}`}
                                d="M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm0-18a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm0-2a4 4 0 100-8 4 4 0 000 8z"
                              />
                            </svg>
                            <NavLink to="/commission/Commission"
                              className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Commission
                            </NavLink>
                          </div>
                          {/* Icon */}

                        </div>
                      </a>

                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>


              {/* Tasks */}
              <SidebarLinkGroup activecondition={pathname.includes('categorie')}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href="#0"
                        className={`block text-slate-200 truncate transition duration-150 ${pathname.includes('Categorie') ? 'hover:text-slate-200' : 'hover:text-white'
                          }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                              <path
                                className={`fill-current ${pathname.includes('categorie') ? 'text-indigo-300' : 'text-slate-400'}`}
                                d="M3 3h18c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2zm0 2v8h18V5H3zm5 8h2v2H8v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z"
                              />
                            </svg>
                            <NavLink to="/categorie/Categorie"
                              className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Categorie
                            </NavLink>
                          </div>
                          {/* Icon */}

                        </div>
                      </a>

                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              <SidebarLinkGroup activecondition={pathname.includes('carburant')}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href="#0"
                        className={`block text-slate-200 truncate transition duration-150 ${pathname.includes('carburant') ? 'hover:text-slate-200' : 'hover:text-white'
                          }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                              <g>
                                <path
                                  className={`fill-current ${pathname.includes('carburant') ? 'text-indigo-300' : 'text-slate-400'}`}
                                  d="M14 13.414l-5.707-5.707c-0.392-0.392-1.024-0.392-1.416 0s-0.392 1.024 0 1.416l6.707 6.707c0.392 0.392 1.024 0.392 1.416 0s0.392-1.024 0-1.416z"
                                />
                                <path
                                  className={`fill-current ${pathname.includes('carburant') ? 'text-indigo-600' : 'text-slate-700'}`}
                                  d="M14 16h-4c-0.553 0-1 0.447-1 1s0.447 1 1 1h4c0.553 0 1-0.447 1-1s-0.447-1-1-1z"
                                />
                                <path
                                  className={`fill-current ${pathname.includes('carburant') ? 'text-indigo-500' : 'text-slate-600'}`}
                                  d="M13 3c0 0.553-0.447 1-1 1s-1-0.447-1-1h-6c0-0.553 0.447-1 1-1h4c0.553 0 1-0.447 1-1s-0.447-1-1-1h-3c-0.553 0-1 0.447-1 1s-0.447 1-1 1h-3c-0.553 0-1 0.447-1 1s0.447 1 1 1h-0.586l5.707 5.707c0.392 0.392 1.024 0.392 1.416 0s0.392-1.024 0-1.416l-5.707-5.707h5.293c0.553 0 1-0.447 1-1z"
                                />
                              </g>
                            </svg>

                            <NavLink to="/carburant/Carburant"
                              className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Carburant
                            </NavLink>
                          </div>

                        </div>
                      </a>

                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* : */}
              <SidebarLinkGroup activecondition={pathname.includes('annonce')}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href="#0"
                        className={`block text-slate-200 truncate transition duration-150 ${pathname.includes('annonce') ? 'hover:text-slate-200' : 'hover:text-white'
                          }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            {/* svg */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              class="h-6 w-6"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <NavLink to="/annonce/Annonces"
                              className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Annonces
                            </NavLink>
                          </div>
                          {/* Icon */}

                        </div>
                      </a>

                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
