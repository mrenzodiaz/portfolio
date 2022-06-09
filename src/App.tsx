import React from 'react';
import { CodeIcon } from '@heroicons/react/solid';
import Experience from './components/Experience/';
import Technologies from './components/Technologies';
import Footer from './components/Footer';

import './App.scss';

function App() {
  return (
    <>
      <div className="container mx-auto">
        <header className="header">
          <div className="container relative flex flex-col justify-center items-center z-10">
            <CodeIcon className="h-14 w-14 text-white" />
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
        <Technologies />
      </div>
      <Footer />
    </>
  );
}

export default App;
