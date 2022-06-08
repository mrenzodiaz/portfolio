import React from 'react';
import { T_ExperienceItem } from '../../types/Experience';

interface ExperienceItemProps extends T_ExperienceItem {
  itemNumber: number;
  images?: any;
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
  images,
}) => {
  return (
    <div
      className={`mb-16 flex justify-between items-center w-full ${
        alignLeft ? 'md:flex-row-reverse' : 'md:flex-row'
      } flex-col-reverse`}
    >
      <div className="order-1 w-full md:w-5/12 block">
        {images ? images : ''}
      </div>
      <div className="z-20 hidden items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full md:flex">
        <h1 className="mx-auto text-white font-semibold text-lg">
          {itemNumber}
        </h1>
      </div>
      <div
        className={`order-1 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4 bg-red-400`}
      >
        <div className="flex flex-col xl:flex-row">
          <span className="font-bold text-white text-xl mr-3 w-12/12">
            {company}
          </span>
          <span className=" text-white text-center text-sm rounded-lg shadow-xl px-1 py-1 bg-slate-700 break-words w-12/12 xl:w-3/12 lg:w-4/12">
            {employmentStatus}
          </span>
        </div>

        <h3 className="text-white text-lg">{position}</h3>
        <h3 className="mb-3 text-white text-md">{timeOfStay}</h3>
        <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100 text-justify">
          {description}
          {/* Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. */}
        </p>
      </div>
    </div>
  );
};

export default ExperienceItem;