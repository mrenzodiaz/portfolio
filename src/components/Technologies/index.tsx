import React from 'react';
import { T_TechStackItem } from '../../types/Technologies';

const techStack = [
  {
    name: 'JavaScript',
    class: 'devicon-javascript-plain',
  },
  {
    name: 'TypeScript',
    class: 'devicon-typescript-plain',
  },
  {
    name: 'React',
    class: 'devicon-react-original',
  },
  {
    name: 'React Native',
    class: 'devicon-react-original',
  },
  {
    name: 'TaildwindCSS',
    class: 'devicon-tailwindcss-plain',
  },
  {
    name: 'Material UI',
    class: 'devicon-materialui-plain',
  },
  {
    name: 'MobX',
    class: 'devicon-redux-original',
  },
  {
    name: 'Redux',
    class: 'devicon-redux-original',
  },
  {
    class: 'devicon-npm-original-wordmark',
    name: 'NPM',
  },
  {
    class: 'devicon-yarn-plain',
    name: 'Yarn',
  },
  {
    class: 'devicon-jquery-plain',
    name: 'Jquery',
  },
  {
    name: 'HTML 5',
    class: 'devicon-html5-plain',
  },
  {
    name: 'CSS 3',
    class: 'devicon-css3-plain',
  },
  {
    name: 'Bootstrap',
    class: 'devicon-bootstrap-plain',
  },
  {
    name: 'Sass',
    class: 'devicon-sass-original',
  },
  {
    name: 'Node',
    class: 'devicon-nodejs-plain',
  },
  {
    name: 'Express',
    class: 'devicon-express-original',
  },
  {
    name: 'MongoDB',
    class: 'devicon-mongodb-plain',
  },
  {
    name: 'MS Azure',
    class: 'devicon-azure-plain',
  },
  {
    name: 'Google Cloud',
    class: 'devicon-googlecloud-plain',
  },
  {
    name: 'AWS',
    class: 'devicon-amazonwebservices-original',
  },
  {
    name: 'Git',
    class: 'devicon-git-plain',
  },
  {
    name: 'GitHub',
    class: 'devicon-github-original',
  },
  {
    name: 'GitLab',
    class: 'devicon-gitlab-plain',
  },
];

const Technologies = () => {
  return (
    <div className="sm:rounded-3xl bg-slate-600 sm:pt-32 sm:px-24 p-8 pt-24">
      <p className="uppercase text-xl sm:text-3xl font-bold text-white text-center">
        Tech Stack
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 justify-items-center items-center mt-10 sm:mt-16 pb-20 sm:py-0 text-center">
        {techStack.map((tech: T_TechStackItem) => (
          <div className="w-32 my-4 sm:my-8">
            <div className="h-32 w-32 rounded-3xl bg-slate-800 shadow-2xl flex items-center justify-center">
              <i
                className={tech.class}
                style={{ fontSize: '350%', color: 'white' }}
              />
            </div>
            <span className="uppercase text-center mt-6 font-bold text-white">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
