import React from "react";
import { CodeIcon } from "@heroicons/react/solid";
import Experience from "./components/Experience/";
import Technologies from "./components/Technologies";
import Footer from "./components/Footer";
import { PopupWidget } from "react-calendly";

import "./App.scss";

const App: React.FC = () => {
  return (
    <>
      <div className="container mx-auto">
        <header className="header">
          <div className="container relative flex flex-col justify-center items-center z-10">
            <CodeIcon className="h-20 w-20 md:h-26 md:w-26 lg:h-32 lg:w-32 text-white" />
            <p className="subpixel-antialiased my-5 text-center text-xl sm:text-4xl">
              Hi, I am{" "}
              <span className="text-rose-400 font-extrabold">
                Michael Renzo Diaz
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
      <PopupWidget
        url="https://calendly.com/mrenzodiaz/interview-michael"
        rootElement={document.getElementById("root")!}
        text="Book an Interview!"
        textColor="#ffffff"
        color="#fb7185"
      />
    </>
  );
};

export default App;
