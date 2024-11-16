import React from "react";
import ExperienceItem from "./ExperienceItem";
import ImageLazyLoader from "../ImageLazyLoader";
import Animate from "../Animate";
import "./index.scss";

const ANIMATE_DURATION = 0.8;

const propfitImages = () => {
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
          src="/portfolio/images/experiences/propfit2.png"
          alt="Propfit 2"
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
          src="/portfolio/images/experiences/propfit1.png"
          alt="Propfit 1"
        />
      </Animate>
    </div>
  );
};

const intelegenciaImages = () => {
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
          src="/portfolio/images/experiences/global-university-systems.png"
          alt="Global University Systems"
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
          src="/portfolio/images/experiences/gus-niagara.png"
          alt="GUS Niagara"
        />
      </Animate>
    </div>
  );
};

const darkFallsLLCImages = () => {
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
          className="shadow-2xl w-auto aspect-square"
          src="/portfolio/images/experiences/reference-cloud.png"
          alt="Reference Cloud"
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
          src="/portfolio/images/experiences/neighbors.png"
          alt="Neighbors"
        />
      </Animate>
    </div>
  );
};

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
    company: "PropFit for G Factor Technologies Pty Ltd (Australia)",
    position: "Senior Frontend Engineer",
    timeOfStay: "August 2023 - Present",
    description: [
      `Frontend Developer of PropFit. PropFit is a business
management platform. It's integrated with property
management APIs like Guesty and HomHero.`,
      "Technologies used: React, Tailwind, GraphQL, Node.js, Express.js, Github, CloudFlare, Storybook, Vite, etc.",
    ],
    employmentStatus: "Full-time",
    alignLeft: false,
    images: propfitImages(),
  },
  {
    company: "Intelegencia",
    position: "Senior Software Engineer",
    timeOfStay: "August 2022 - June 2024",
    description: [
      "I'm a Senior Software Engineer at Intelegencia. I've been assigned as a Frontend Developer to our client GUS (Global University Systems) that develops and maintain our client's customers' multiple web applications.",
      "Technologies used for multiple projects: React, Angular, jQuery, Tailwind, Bootstrap, Zustand, Jotai, Mobx, Umbraco CMS, Azure Devops, etc.",
    ],
    employmentStatus: "Full-time",
    alignLeft: true,
    images: intelegenciaImages(),
  },
  {
    company: "Dark Falls LLC",
    position: "Frontend React Engineer",
    timeOfStay: "June 2022 - December 2022",
    description:
      "ReactJS developer of Dark Falls LLC. Contributed to several projects of the company.",
    employmentStatus: "Freelance",
    alignLeft: false,
    images: darkFallsLLCImages(),
  },
  {
    company: "Data Driven AI",
    position: "Frontend React Engineer",
    timeOfStay: "December 2021 - June 2022",
    description: [
      "ReactJS contractor of Data Driven, we have developed CloudMonitor.",
      "CloudMonitor AI is an Microsoft Azure resource monitoring App that monitors your cloud consumption costs and looks for cost-saving opportunities.",
      "Technologies used: React, Material UI, MobX, Formik, GraphQL, Azure Devops, Azure Static Webapps, etc.",
    ],
    employmentStatus: "Freelance",
    alignLeft: true,
    images: dataDrivenImages(),
  },
  {
    company: "SYKES Asia",
    position: "Software Engineer",
    timeOfStay: "May 2020 - August 2022",
    description: [
      "Software Engineer (Frontend), built MySYKES (web and mobile) a scheduling application used by OMDs, TLs and Contact Center agents.",
      "Technologies used: ReactJS, Flutter, MobX, Semantic UI, SASS, Azure DevOps, etc.",
    ],
    employmentStatus: "Full-time",
    alignLeft: false,
    images: sykesImages(),
  },
  {
    company: "Pinion Software",
    position: "Junior Web Developer",
    timeOfStay: "May 2019 - May 2020",
    description: [
      "Created mobile applications using React Native",
      "Created web applications using different frontend frameworks such as ReactJS and VueJS",
      "Translated design mock-ups into quality websites",
    ],
    employmentStatus: "Full-time",
    alignLeft: true,
    images: pinionSoftwareImages(),
  },
  {
    company: "Johnson & Johnson Global Services",
    position: "Knowledge Management Specialist",
    timeOfStay: "Sep 2017 - May 2019",
    description: [
      "I have been a contractor in Johnson & Johnson Global Services Philippines under HR Knowledge Management Team.",
      "We developed a tool for the HR Knowledge Management team that automates their weekly and monthly report using ReactJS and Laravel, our main role as a contractor is to convert an HR related files to HTML and CSS that was being uploaded to their CMS (Salesforce.com).",
    ],
    employmentStatus: "Full-time",
    alignLeft: false,
    images: jnjImages(),
  },
  {
    company: "M&H Food Corporation",
    position: "Management Information Systems Specialist",
    timeOfStay: "Jan 2017 - Jul 2017",
    description: [
      "As an MIS Staff, we do an all around IT stuffs (web development, technical support, network admin, system) for the company. Our time was divided for Web Development (50% of our time for the day) and the rest is for other technical stuffs. I have been involved in Front-end Web Development.",
      "Technologies used: jQuery, Bootstrap, Codeigniter, MySQL, etc.",
    ],
    employmentStatus: "Full-time",
    alignLeft: true,
    images: henlinImages(),
  },
];

const Experience: React.FC = () => {
  return (
    <div className="container bg-gray-200 mx-auto w-full h-full">
      <div className="relative wrap overflow-hidden h-full p-2 md:p-7 sm:p-3">
        <div
          className="h-full border-2-2 absolute border-opacity-20 border-gray-700 md:border"
          style={{ left: "50%" }}
        ></div>

        {experiences.map((item, index) => (
          <ExperienceItem key={index} itemNumber={index + 1} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
