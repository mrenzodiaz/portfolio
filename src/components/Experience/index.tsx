import React from 'react';
import ExperienceItem from './ExperienceItem';
import { T_ExperienceItem } from '../../types/Experience';
import './index.scss';

const experiences = [
  {
    company: 'SYKES Asia Inc, (acquired by Sitel Group)',
    position: 'Software Engineer (ReactJS)',
    timeOfStay: 'May 2020 - Present',
    description: 'Lorem ipsum dolor.',
    employmentStatus: 'Full-time',
    isCurrent: true,
  },
  {
    company: 'Data Driven AI',
    position: 'Frontend React Engineer',
    timeOfStay: 'December 2021',
    description: 'Lorem ipsum dolor.',
    employmentStatus: 'Freelance',
    isCurrent: false,
  },
  {
    company: 'Junior Web Developer',
    position: 'Pinion Software ',
    timeOfStay: 'May 2019 - May 2020',
    description: 'Lorem ipsum dolor.',
    employmentStatus: 'Full-time',
    isCurrent: false,
  },
  {
    company: 'Johnson & Johnson Global Services',
    position: 'Knowledge Management Specialist',
    timeOfStay: 'Sep 2017 - May 2019',
    description: 'Lorem ipsum dolor.',
    employmentStatus: 'Full-time',
    isCurrent: false,
  },
  {
    company: 'M&H Food Corporation',
    position: 'Management Information Systems Specialist',
    timeOfStay: 'Jan 2017 - Jul 2017',
    description: 'Lorem ipsum dolor.',
    employmentStatus: 'Full-time',
    isCurrent: false,
  },
];

const Experience: React.FC = () => {
  return (
    <div className="experience">
      <ol className="container mx-auto relative border-l border-gray-200 dark:border-gray-700">
        {experiences.map((item) => (
          <ExperienceItem {...item} />
        ))}
      </ol>
    </div>
  );
};

export default Experience;
