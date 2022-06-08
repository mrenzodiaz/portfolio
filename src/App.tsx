import React from 'react';
import { CodeIcon } from '@heroicons/react/solid';
import Experience from './components/Experience/';

import './App.scss';

function App() {
  return (
    <>
      <header className="header">
        <div className="container relative flex flex-col justify-center items-center z-10">
          <CodeIcon className="h-14 w-14 text-blue-500" />
          <p className="subpixel-antialiased my-5 text-center text-xl sm:text-4xl">
            Hi, I am{' '}
            <span className="text-rose-400 font-extrabold">
              Michael Renzo T. Diaz
            </span>
          </p>
          <p className="antialiased text-center text-lg sm:text-2xl">
            Software Engineer | Frontend Developer
          </p>
        </div>
      </header>

      <Experience />
    </>
  );
}

export default App;