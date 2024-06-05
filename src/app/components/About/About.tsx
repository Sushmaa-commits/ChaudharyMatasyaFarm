'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import aboutData from '../../../../public/about.json';

interface SectionData {
  title: string;
  description: string[];
  images: string[];
}

interface AboutData {
  about: SectionData;
  mission: SectionData;
  vision: SectionData;
}

export default function About() {
  const [activeTab, setActiveTab] = useState<'about' | 'mission' | 'vision'>(
    'about'
  );
  const data: AboutData = aboutData as AboutData;

  const renderContent = (section: SectionData) => {
    return (
      <>
        <div className="w-full px-4 lg:w-1/2">
          <div className="relative z-30 mb-14 h-[490px] max-w-[600px] lg:mb-0">
            <div className="absolute left-0 top-0 aspect-[86/121] w-full max-w-[344px]">
              <Image
                alt="section image 1"
                layout="fill"
                objectFit="cover"
                src={section.images[0]}
              />
            </div>
            <div className="absolute right-0 top-1/2 z-10 aspect-[53/66] w-full max-w-[315px] -translate-y-1/2">
              <Image
                alt="section image 2"
                layout="fill"
                objectFit="cover"
                src={section.images[1]}
              />
              <div className="absolute -left-5 -top-5 -z-10 h-full w-full border border-primary border-opacity-10 bg-primary bg-opacity-5 backdrop-blur-[6px] dark:border-white dark:border-opacity-10 dark:bg-white dark:bg-opacity-10"></div>
            </div>
          </div>
        </div>
        <div className="w-full px-4 lg:w-1/2">
          <div className="max-w-[565px] lg:ml-auto">
            <h2 className="mb-8 font-heading text-2xl font-bold text-dark sm:text-[40px] sm:leading-[50px]">
              {section.title}
            </h2>
            {section.description.map((paragraph, index) => (
              <p key={index} className="mb-6 text-base text-gray-500">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="tabButtons flex w-full items-center justify-around">
        <button
          className={`w-full border-b px-2 pb-6 pt-8 font-heading text-base font-medium lg:pb-7 lg:pt-9 ${
            activeTab === 'about'
              ? 'border-indigo-600 text-indigo-600'
              : 'hover:border-primary hover:text-primary dark:border-[#D3D3D3] dark:text-black dark:hover:border-indigo-400'
          }`}
          onClick={() => setActiveTab('about')}
        >
          About Us
        </button>
        <button
          className={`w-full border-b px-2 pb-6 pt-8 font-heading text-base font-medium lg:pb-7 lg:pt-9 ${
            activeTab === 'mission'
              ? 'border-indigo-600 text-indigo-600'
              : 'hover:border-primary hover:text-primary dark:border-[#D3D3D3] dark:text-black dark:hover:border-indigo-400'
          }`}
          onClick={() => setActiveTab('mission')}
        >
          Our Mission
        </button>
        <button
          className={`w-full border-b px-2 pb-6 pt-8 font-heading text-base font-medium lg:pb-7 lg:pt-9 ${
            activeTab === 'vision'
              ? 'border-indigo-600 text-indigo-600'
              : 'hover:border-primary hover:text-primary dark:border-[#D3D3D3] dark:text-black dark:hover:border-indigo-400'
          }`}
          onClick={() => setActiveTab('vision')}
        >
          Our Vision
        </button>
      </div>
      <div className="w-full">
        <div className="-mx-4 flex w-full flex-wrap items-center pt-[70px]">
          {renderContent(data[activeTab])}
        </div>
      </div>
    </>
  );
}
