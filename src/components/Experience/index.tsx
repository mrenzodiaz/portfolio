import React from 'react';
import ExperienceItem from './ExperienceItem';
import ImageLazyLoader from '../ImageLazyLoader';
import Animate from '../Animate';
import './index.scss';

const ANIMATE_DURATION = 0.8;

const dataDrivenImages = () => {
  return (
    <div className="relative p-10 pt-2 mx-10 md:mx-0">
      <Animate
        animateOnce
        animateIn="animate__fadeInRight"
        className="text-right"
        offset={150}
        duration={ANIMATE_DURATION}
      >
        <ImageLazyLoader
          className="shadow-2xl w-auto"
          src="/portfolio/images/experiences/cm2.png"
          alt="Cloudmonitor AI 1"
        />
      </Animate>

      <Animate
        animateOnce
        animateIn="animate__fadeInRight"
        className="absolute -bottom-4 -left-2 md:-left-14 md:-bottom-6"
        offset={150}
        duration={ANIMATE_DURATION}
      >
        <ImageLazyLoader
          className="shadow-2xl w-6/12"
          src="/portfolio/images/experiences/cm1.png"
          alt="Cloudmonitor AI 2"
        />
      </Animate>
    </div>
  );
};

const sykesImages = () => {
  return (
    <>
      <div className="relative p-10 pt-2 mx-10 md:mx-0">
        <Animate
          animateOnce
          animateIn="animate__fadeInLeft"
          className="text-right"
          offset={150}
          duration={ANIMATE_DURATION}
        >
          <ImageLazyLoader
            className="shadow-2xl w-auto"
            src="/portfolio/images/experiences/mysykes2.png"
            alt="MySYKES 1"
          />
        </Animate>

        <Animate
          animateOnce
          animateIn="animate__fadeInLeft"
          className="absolute -bottom-4 -left-2 md:-left-14 md:-bottom-6"
          offset={150}
          duration={ANIMATE_DURATION}
        >
          <ImageLazyLoader
            className="shadow-2xl w-6/12"
            src="/portfolio/images/experiences/mysykes1.png"
            alt="MySYKES 2"
          />
        </Animate>
      </div>
    </>
  );
};

const pinionSoftwareImages = () => {
  return (
    <div className="relative p-10 pt-2 mx-10 md:mx-0">
      <Animate
        animateOnce
        animateIn="animate__fadeInLeft"
        className="text-right"
        offset={150}
        duration={ANIMATE_DURATION}
      >
        <ImageLazyLoader
          className="shadow-2xl w-auto"
          src="/portfolio/images/experiences/collicare1.png"
          alt="Collicare 1"
        />
      </Animate>

      <Animate
        animateOnce
        animateIn="animate__fadeInLeft"
        className="absolute -bottom-4 -left-2 md:-left-14 md:-bottom-6"
        offset={150}
        duration={ANIMATE_DURATION}
      >
        <ImageLazyLoader
          className="shadow-2xl w-6/12"
          src="/portfolio/images/experiences/collicare2.png"
          alt="Collicare 2"
        />
      </Animate>
    </div>
  );
};

const jnjImages = () => {
  return (
    <div className="relative pt-2">
      <Animate
        animateOnce
        animateIn="animate__fadeInRight"
        offset={150}
        duration={ANIMATE_DURATION}
      >
        <ImageLazyLoader
          className="shadow-2xl w-full md:w-12/12 lg:w-8/12 rounded-md"
          src="/portfolio/images/experiences/jnj.gif"
          alt="JnJ"
          width="100%"
        />
      </Animate>
    </div>
  );
};

const henlinImages = () => {
  return (
    <div className="relative pt-2">
      <Animate
        animateOnce
        animateIn="animate__fadeInLeft"
        offset={150}
        duration={ANIMATE_DURATION}
      >
        <ImageLazyLoader
          className="shadow-2xl w-full md:w-12/12 lg:w-8/12 rounded-md"
          src="/portfolio/images/experiences/henlin.png"
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
    position: 'Software Engineer',
    timeOfStay: 'May 2020 - Present',
    description:
      "I'm a mid-level Software Engineer at SYKES Asia Inc. (recently acquired by Sitel Group), I'm a frontend developer (ReactJS) that develops and maintain two of our internal",
    employmentStatus: 'Full-time',
    isCurrent: true,
    alignLeft: false,
    images: sykesImages(),
  },
  {
    company: 'Data Driven AI',
    position: 'Frontend React Engineer',
    timeOfStay: 'December 2021',
    description:
      'ReactJS contractor of Data Driven, we have developed CloudMonitor. CloudMonitor is an Microsoft Azure resource monitoring App that monitors your cloud consumption costs and looks for cost-saving opportunities.',
    employmentStatus: 'Freelance',
    isCurrent: false,
    alignLeft: true,
    images: dataDrivenImages(),
  },
  {
    company: 'Pinion Software',
    position: 'Junior Web Developer',
    timeOfStay: 'May 2019 - May 2020',
    description:
      '• Created mobile applications using React Native • Created web applications using different frontend frameworks such as ReactJS and VueJS • Translated design mock-ups into quality websites',
    employmentStatus: 'Full-time',
    isCurrent: false,
    alignLeft: false,
    images: pinionSoftwareImages(),
  },
  {
    company: 'Johnson & Johnson Global Services',
    position: 'Knowledge Management Specialist',
    timeOfStay: 'Sep 2017 - May 2019',
    description:
      'I have been a contractor in Johnson & Johnson Global Services Philippines under HR Knowledge Management Team. We developed a tool for the HR Knowledge Management team that automates their weekly and monthly report ReactJS and Laravel, but our main role as a contractor is to convert an HR related files to HTML and CSS that was being uploaded to their CMS (Salesforce.com).',
    employmentStatus: 'Full-time',
    isCurrent: false,
    alignLeft: true,
    images: jnjImages(),
  },
  {
    company: 'M&H Food Corporation',
    position: 'Management Information Systems Specialist',
    timeOfStay: 'Jan 2017 - Jul 2017',
    description:
      'As an MIS Staff, we do an all around IT stuffs (web development, technical support, network admin, system) for the company. Our time was divided for Web Development (50% of our time for the day) and the rest is for other technical stuffs. I have been involved in Front-end Web Development.',
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
          className="h-full border-2-2 absolute border-opacity-20 border-gray-700 md:border"
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
