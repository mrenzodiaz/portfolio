import React from 'react';
import { T_ExperienceItem } from '../../types/Experience';

interface ExperienceItemProps extends T_ExperienceItem {
  itemNumber: number;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  company,
  position,
  timeOfStay,
  description,
  employmentStatus,
  isCurrent,
  alignLeft,
  itemNumber,
}) => {
  return (
    <div
      className={`mb-8 flex justify-between items-center w-full ${
        alignLeft ? 'flex-row-reverse' : ''
      }`}
    >
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto text-white font-semibold text-lg">
          {itemNumber}
        </h1>
      </div>
      <div
        className={`order-1 rounded-lg shadow-xl w-5/12 px-6 py-4 ${
          alignLeft ? 'bg-red-400' : 'bg-gray-400'
        }`}
      >
        <h3 className="font-bold text-gray text-xl">{company}</h3>
        <h3 className="font-bold text-white text-lg">{position}</h3>
        <h3 className="mb-3 text-white text-md">{timeOfStay}</h3>
        <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
  );
};

export default ExperienceItem;
