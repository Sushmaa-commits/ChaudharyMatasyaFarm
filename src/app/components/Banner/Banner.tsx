import React from 'react';
import banner from '../../../../public/banner.json';
import Image from 'next/image';

export default function Banner() {
  return (
    <section
      id="home"
      className="relative z-40 overflow-hidden pb-24 pt-28 sm:pt-36 lg:pb-[120px] lg:pt-[200px] mt-35"
    >
      <div className="mx-auto max-w-7xl px-4  sm:px-6 lg:px-8">
        <div className="-mx-4 flex flex-wrap ">
          <div className="w-full px-3 lg:w-1/2">
            <div className="mx-auto mb-12 max-w-[530px] text-center lg:mb-0 lg:ml-0 lg:text-left">
              <span className="mb-8 inline-block rounded-full  bg-opacity-5 px-5 py-[10px] font-heading text-base text-indigo-600 bg-indigo-300 dark:bg-opacity-10 ">
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-indigo-600"></span>
                {banner['banner-title']}
              </span>
              <h1 className="mb-5 font-heading text-2xl font-semibold  sm:text-4xl md:text-[50px] md:leading-[60px]">
                <span>{banner.title}</span>
              </h1>
              <p className="mb-12 text-base text-gray-500">
                {banner.description}
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start">
                <a
                  href="/#about"
                  className="inline-flex items-center rounded bg-indigo-700 px-6 py-[10px] font-heading text-base text-white hover:bg-opacity-90 md:px-8 md:py-[14px]"
                >
                  Get Started
                  <span
                    className="pl-3"
                    dangerouslySetInnerHTML={{ __html: banner.arrow }}
                  ></span>
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center rounded px-8 py-[14px] font-heading text-base text-dark hover:text-primary dark:hover:text-primary"
                >
                  <span
                    className="pr-3"
                    dangerouslySetInnerHTML={{ __html: banner.videoicon }}
                  ></span>
                  Watch a video
                </a>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInRight relative z-30 mx-auto h-[560px] w-full max-w-[700px] lg:ml-0">
              <div className="absolute right-0 top-0 lg:w-11/12">
                <Image
                  alt="banner-image1"
                  loading="lazy"
                  width="560"
                  height="520"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: 'transparent' }}
                  src={banner.bannerimg}
                />
              </div>
              <div className="absolute bottom-0 left-0 z-10">
                <Image
                  alt="banner-image2"
                  loading="lazy"
                  width="350"
                  height="420"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: 'transparent' }}
                  src={banner.bannerimg1}
                />
                <div className="absolute -right-6 -top-6 -z-10 h-full w-full border border-primary border-opacity-10 bg-primary bg-opacity-5 backdrop-blur-[6px] dark:border-white dark:border-opacity-10 dark:bg-white dark:bg-opacity-10"></div>
              </div>
              <div className="absolute bottom-0 left-0">
                <div dangerouslySetInnerHTML={{ __html: banner.svg1 }} />
              </div>
              <div className="absolute bottom-0 left-1/2">
                <div dangerouslySetInnerHTML={{ __html: banner.svg2 }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 -z-10 h-full w-full bg-noise-pattern bg-cover bg-center opacity-10 dark:opacity-40"></div>
      <div className="absolute right-0 top-0 -z-10">
        <div dangerouslySetInnerHTML={{ __html: banner.svg3 }} />
      </div>
      <div className="absolute bottom-0 left-0 -z-10">
        <div dangerouslySetInnerHTML={{ __html: banner.svg4 }} />
      </div>
    </section>
  );
}
