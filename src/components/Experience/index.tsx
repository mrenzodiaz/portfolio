import React from 'react';
import ExperienceItem from './ExperienceItem';
import ImageLazyLoader from '../ImageLazyLoader';
import Animate from '../Animate';
import './index.scss';

const dataDrivenImages = () => {
  return (
    <div className="relative">
      <Animate
        animateOnce
        animateIn="animate__fadeInRight"
        offset={200}
        duration={0.5}
      >
        <ImageLazyLoader
          className="shadow-2xl sm:w-96 xl:w-auto"
          src="/Experiences/cm2.png"
          alt="Cloudmonitor AI 1"
          height={300}
          width={400}
        />
      </Animate>

      <Animate
        animateOnce
        animateIn="animate__fadeInRight"
        className="absolute left-65 -right-8 lg:left-auto xl:left-60"
        offset={200}
        duration={0.5}
        style={{ top: '10.5rem' }}
      >
        <ImageLazyLoader
          className="shadow-2xl sm:w-96 xl:w-auto"
          src="/Experiences/cm1.png"
          alt="Cloudmonitor AI 2"
          width={250}
        />
      </Animate>
    </div>
  );
};

const sykesImages = () => {
  return (
    <div className="relative">
      <Animate
        animateOnce
        animateIn="animate__fadeInLeft"
        className="text-right"
        offset={200}
        duration={0.5}
      >
        <ImageLazyLoader
          className="shadow-2xl xl:w-auto"
          src="/Experiences/mysykes2.png"
          alt="MySYKES 1"
          height={300}
          width={400}
        />
      </Animate>

      <Animate
        animateOnce
        animateIn="animate__fadeInLeft"
        className="absolute -left-8 xl:left-10"
        offset={200}
        duration={0.5}
        style={{ top: '9rem' }}
      >
        <ImageLazyLoader
          className="shadow-2xl w-96"
          src="/Experiences/mysykes1.png"
          alt="MySYKES 2"
          width={250}
        />
      </Animate>
    </div>
  );
};

const pinionSoftwareImages = () => {
  return (
    <div className="relative">
      <Animate
        animateOnce
        animateIn="animate__fadeInLeft"
        className="text-right"
        offset={200}
        duration={0.5}
      >
        <ImageLazyLoader
          className="shadow-2xl xl:w-auto"
          src="/Experiences/collicare1.png"
          alt="MySYKES 1"
          height={300}
          width={400}
        />
      </Animate>

      <Animate
        animateOnce
        animateIn="animate__fadeInLeft"
        className="absolute -left-8 xl:left-10"
        offset={200}
        duration={0.5}
        style={{ top: '9rem' }}
      >
        <ImageLazyLoader
          className="shadow-2xl w-96"
          src="/Experiences/collicare2.png"
          alt="MySYKES 2"
          width={250}
        />
      </Animate>
    </div>
  );
};

const jnjImages = () => {
  return (
    <div className="relative">
      <Animate
        animateOnce
        animateIn="animate__fadeInRight"
        offset={200}
        duration={0.5}
      >
        <ImageLazyLoader
          className="shadow-2xl sm:w-96 xl:w-8/12 rounded-md"
          src="/Experiences/jnj.gif"
          alt="JnJ"
          width="100%"
        />
      </Animate>
    </div>
  );
};

const henlinImages = () => {
  return (
    <div className="relative">
      <Animate
        animateOnce
        animateIn="animate__fadeInLeft"
        offset={200}
        duration={0.5}
      >
        <ImageLazyLoader
          className="shadow-2xl sm:w-full xl:w-full rounded-md"
          src="/Experiences/henlin.png"
          alt="JnJ"
          width="100%"
        />
      </Animate>
    </div>
  );
};

const experiences = [
  {
    company: 'Sitel Group (former SYKES Asia)',
    position: 'Software Engineer (ReactJS)',
    timeOfStay: 'May 2020 - Present',
    description: 'Lorem ipsum dolor.',
    employmentStatus: 'Full-time',
    isCurrent: true,
    alignLeft: false,
    images: sykesImages(),
  },
  {
    company: 'Data Driven AI',
    position: 'Frontend React Engineer',
    timeOfStay: 'December 2021',
    description: 'Lorem ipsum dolor.',
    employmentStatus: 'Freelance',
    isCurrent: false,
    alignLeft: true,
    images: dataDrivenImages(),
  },
  {
    company: 'Pinion Software',
    position: 'Junior Web Developer',
    timeOfStay: 'May 2019 - May 2020',
    description: 'Lorem ipsum dolor.',
    employmentStatus: 'Full-time',
    isCurrent: false,
    alignLeft: false,
    images: pinionSoftwareImages(),
  },
  {
    company: 'Johnson & Johnson Global Services',
    position: 'Knowledge Management Specialist',
    timeOfStay: 'Sep 2017 - May 2019',
    description: 'Lorem ipsum dolor.',
    employmentStatus: 'Full-time',
    isCurrent: false,
    alignLeft: true,
    images: jnjImages(),
  },
  {
    company: 'M&H Food Corporation',
    position: 'Management Information Systems Specialist',
    timeOfStay: 'Jan 2017 - Jul 2017',
    description: 'Lorem ipsum dolor.',
    employmentStatus: 'Full-time',
    isCurrent: false,
    alignLeft: false,
    images: henlinImages(),
  },
];

const Experience: React.FC = () => {
  return (
    <div className="container bg-gray-200 mx-auto w-full h-full">
      <div className="relative wrap overflow-hidden h-full p-2 md:p-7 sm:p-3">
        <div
          className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
          style={{ left: '50%' }}
        ></div>

        {experiences.map((item, index) => (
          <ExperienceItem itemNumber={index + 1} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
