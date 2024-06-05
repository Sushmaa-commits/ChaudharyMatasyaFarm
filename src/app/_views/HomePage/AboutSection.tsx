import About from '@/app/components/About/About';
import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="pt-14 sm:pt-20 lg:pt-[130px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto mb-12 max-w-[620px] pt-6 text-center md:mb-20 lg:pt-16">
          <span className="title">ABOUT US</span>
          <h2 className="mb-5 font-heading text-3xl font-semibold text-dark sm:text-4xl md:text-[50px] md:leading-[60px]">
            Know Details About Our Farm
          </h2>
          <p className="text-base text-gray-500">
            Our farm is dedicated to promoting aquaculture across Nepal. We
            offer expert advice on raising various fish species and provide
            high-quality hatchlings and fingerlings for sale. Join us in
            advancing sustainable fish farming practices.
          </p>
        </div>
        <div className="relative z-10 overflow-hidden rounded px-8 pb-8 pt-0 md:px-[70px] md:pb-[70px] lg:px-[60px] lg:pb-[60px] xl:px-[70px] xl:pb-[70px]">
          <div className="absolute left-0 top-0 -z-10 h-full w-full bg-noise-pattern bg-cover bg-center opacity-10 dark:opacity-40"></div>
          <div className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2">
            <svg
              width="1174"
              height="560"
              viewBox="0 0 1174 560"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.4" filter="url(#filter0_f_41_257)">
                <rect
                  x="450.531"
                  y="279"
                  width="272.933"
                  height="328.051"
                  fill="url(#paint0_linear_41_257)"
                ></rect>
              </g>
              <defs>
                <filter
                  id="filter0_f_41_257"
                  x="0.531494"
                  y="-171"
                  width="1172.93"
                  height="1228.05"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    stdDeviation="225"
                    result="effect1_foregroundBlur_41_257"
                  ></feGaussianBlur>
                </filter>
                <linearGradient
                  id="paint0_linear_41_257"
                  x1="425.16"
                  y1="343.693"
                  x2="568.181"
                  y2="660.639"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#ABBCFF"></stop>
                  <stop offset="0.859375" stopColor="#4A6CF7"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <About />
        </div>
      </div>
    </section>
  );
}
