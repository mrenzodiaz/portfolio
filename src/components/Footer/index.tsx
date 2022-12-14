import React from 'react';
import ImageLazyLoader from '../ImageLazyLoader';

import './index.scss';

const Footer = () => {
  return (
    <footer className="footer flex justify-center">
      <div className="container flex flex-col items-center">
        <div className="footer-pitch flex sm:flex-row flex-col justify-between items-center w-full lg:w-1/2">
          <div>
            <p className="text-xl text-white text-center sm:text-left">
              Contact me
            </p>
            <p className="font-bold text-rose-400 text-lg">+63 927 332 9515</p>
          </div>
          <a
            href="mailto:mrenzodiaz@gmail.com"
            className="uppercase bg-rose-400 text-white rounded-full px-8 py-4 text-xs flex items-center transition hover:bg-rose-600 whitespace-nowrap mt-5 sm:mt-0"
          >
            Email Me
          </a>
        </div>
        <div className="relative flex flex-col items-center">
          {/* <ul className="text-sm xl:text-md links flex text-white">
          <li className="font-bold">Home</li>
          <li
            className="ml-8 link"
          >
            <Link to="/about">About Me</Link>
          </li>
          <li
            className="ml-8 link"
          >
            <Link to="/projects">Projects</Link>
          </li>
        </ul> */}
          <ul className="social-links flex mt-6 mb-5">
            <li className="px-2">
              <a
                href="https://www.facebook.com/mrenzdiaz/"
                target="_blank"
                rel="noreferrer"
              >
                <ImageLazyLoader
                  src="/portfolio/images/social-media/facebook.svg"
                  className="h-8 text-white-opaque"
                  alt="facebook"
                />
              </a>
            </li>
            <li className="px-2">
              <a
                href="https://www.instagram.com/mrenzdiaz/"
                target="_blank"
                rel="noreferrer"
              >
                <ImageLazyLoader
                  src="/portfolio/images/social-media/instagram.svg"
                  className="h-8 text-white-opaque"
                  alt="facebook"
                />
              </a>
            </li>
            <li className="px-2">
              <a
                href="https://www.linkedin.com/in/michael-renzo-diaz-b49986199/"
                target="_blank"
                rel="noreferrer"
              >
                <ImageLazyLoader
                  src="/portfolio/images/social-media/linkedin.svg"
                  className="h-8 text-white-opaque"
                  alt="facebook"
                />
              </a>
            </li>
            <li className="px-2">
              <a
                href="https://www.upwork.com/freelancers/~01c7d6274ef9d9dbe9/"
                target="_blank"
                rel="noreferrer"
              >
                <ImageLazyLoader
                  src="/portfolio/images/social-media/upwork-icon.svg"
                  className="h-8 text-white-opaque"
                  alt="upwork"
                />
              </a>
            </li>
          </ul>
          <p className="text-white text-base xl:text-base text-center xl:text-left">
            Michael Renzo Diaz © 2022
          </p>
        </div>
        <div className="relative flex flex-col items-center text-white mt-7">
          <p>This site is made with:</p>
          <div className="mt-2">
            <i
              className={'devicon-react-original mr-2'}
              style={{ fontSize: '250%', color: 'white' }}
            />
            <i
              className={'devicon-typescript-plain mr-2'}
              style={{ fontSize: '250%', color: 'white' }}
            />
            <i
              className={'devicon-tailwindcss-plain'}
              style={{ fontSize: '250%', color: 'white' }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
