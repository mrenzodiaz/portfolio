import React from 'react';
import ExperienceItem from './ExperienceItem';
import './index.scss';

const experiences = [
  {
    company: 'SYKES Asia Inc, (acquired by Sitel Group)',
    position: 'Software Engineer (ReactJS)',
    timeOfStay: 'May 2020 - Present',
    description: 'Lorem ipsum dolor.',
    employmentStatus: 'Full-time',
    isCurrent: true,
    alignLeft: false,
  },
  {
    company: 'Data Driven AI',
    position: 'Frontend React Engineer',
    timeOfStay: 'December 2021',
    description: 'Lorem ipsum dolor.',
    employmentStatus: 'Freelance',
    isCurrent: false,
    alignLeft: true,
  },
  {
    company: 'Junior Web Developer',
    position: 'Pinion Software ',
    timeOfStay: 'May 2019 - May 2020',
    description: 'Lorem ipsum dolor.',
    employmentStatus: 'Full-time',
    isCurrent: false,
    alignLeft: false,
  },
  {
    company: 'Johnson & Johnson Global Services',
    position: 'Knowledge Management Specialist',
    timeOfStay: 'Sep 2017 - May 2019',
    description: 'Lorem ipsum dolor.',
    employmentStatus: 'Full-time',
    isCurrent: false,
    alignLeft: true,
  },
  {
    company: 'M&H Food Corporation',
    position: 'Management Information Systems Specialist',
    timeOfStay: 'Jan 2017 - Jul 2017',
    description: 'Lorem ipsum dolor.',
    employmentStatus: 'Full-time',
    isCurrent: false,
    alignLeft: false,
  },
];

const Experience: React.FC = () => {
  return (
    <div className="container bg-gray-200 mx-auto w-full h-full">
      <div className="relative wrap overflow-hidden p-10 h-full">
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
