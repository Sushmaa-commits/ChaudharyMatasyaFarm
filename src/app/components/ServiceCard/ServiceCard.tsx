import React from 'react';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="group mx-auto mb-10 max-w-[380px] text-center md:mb-16 bg-white rounded-lg shadow-md transition transform hover:-translate-y-2 hover:shadow-2xl duration-300 ease-in-out h-[400px] flex flex-col justify-between">
      <div className="mx-auto mb-6  mt-8 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-indigo-300 bg-opacity-5 transition group-hover:bg-indigo-900 group-hover:bg-opacity-10 md:mb-9 md:h-[80px] md:w-[80px]">
        <img className="img-fluid" src={icon} alt="Icon" />
      </div>
      <div className="p-4 flex-grow">
        <h3 className="mb-3 font-heading text-xl font-medium text-dark sm:text-2xl md:mb-5">
          {title}
        </h3>
        <p className="text-base text-gray-500">{description}</p>
      </div>
    </div>
  );
}
