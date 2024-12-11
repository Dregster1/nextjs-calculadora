"use client";
import Link from "next/link";
import React, { useState } from "react";

const NavBar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Calculadora
          </span>
        </Link>

        <div className="flex-grow flex items-center justify-end relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center justify-between w-auto py-2 px-4 text-gray-900 bg-gray-100 rounded hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"
          >
            Modos
            <svg
              className="w-2.5 h-2.5 ms-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          {isDropdownOpen && (
            <div className="absolute top-full  mt-2 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 z-10">
              <ul className="grid grid-cols-1 gap-3 py-2 text-sm text-gray-700 dark:text-gray-200">
              <p className="text-2xl">
                    Calculadora:
                </p>
                <li>
                  <Link
                    href="/"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Estandar
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cientifica"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Cientifica
                  </Link>
                </li>
                
                <p className="text-2xl">
                    Conversiones:
                </p>
                <li>
                  <Link
                    href="/medidas"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Medidas
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pesos"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Peso
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tiempo"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Tiempo
                  </Link>
                </li>
                <li>
                  <Link
                    href="/monedas"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Monedas
                  </Link>
                </li>
                
              </ul>
            </div>
          )}
        </div>


      </div>
    </nav>
  );
};

export default NavBar;
