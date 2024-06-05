import ServiceCard from '@/app/components/ServiceCard/ServiceCard';
import React from 'react';
import serviceData from '../../../../public/service.json';

export default function ServiceSection() {
  return (
    <section id="service" className="pt-14 sm:pt-20 lg:pt-[130px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto mb-12 max-w-[620px] pt-6 text-center md:mb-20 lg:pt-16">
          <span className="title"> Services</span>
          <h2 className="mb-5 font-heading text-3xl font-semibold text-dark  sm:text-4xl md:text-[50px] md:leading-[60px]">
            {serviceData.title}
          </h2>
          <p className="text-base text-dark-text">{serviceData.description}</p>
        </div>
        <div className="flex flex-wrap -mx-4 justify-center">
          {serviceData.services.map((item, index) => (
            <div key={index} className="w-full px-4 md:w-1/2 lg:w-1/3">
              <ServiceCard
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
