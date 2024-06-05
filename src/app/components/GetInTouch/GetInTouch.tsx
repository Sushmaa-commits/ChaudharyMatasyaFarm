import React from 'react';

export default function GetInTouch() {
  return (
    <section id="cta" className="pt-14 sm:pt-20 lg:pt-[130px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-cover bg-center px-10 py-[60px] drop-shadow-light dark:drop-shadow-none sm:px-[70px]">
          <div className="absolute left-0 top-0 -z-10 h-full w-full bg-noise-pattern bg-cover bg-center opacity-10 dark:opacity-40"></div>
          <div className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2">
            <svg
              width="1215"
              height="259"
              viewBox="0 0 1215 259"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.6" filter="url(#filter0_f_63_363)">
                <rect
                  x="450"
                  y="189"
                  width="315"
                  height="378"
                  fill="url(#paint0_linear_63_363)"
                ></rect>
              </g>
              <defs>
                <filter
                  id="filter0_f_63_363"
                  x="0"
                  y="-261"
                  width="1215"
                  height="1278"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    flood-opacity="0"
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
                    result="effect1_foregroundBlur_63_363"
                  ></feGaussianBlur>
                </filter>
                <linearGradient
                  id="paint0_linear_63_363"
                  x1="420.718"
                  y1="263.543"
                  x2="585.338"
                  y2="628.947"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#ABBCFF"></stop>
                  <stop offset="0.859375" stop-color="#4A6CF7"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-2/3">
              <div className="mx-auto mb-10 max-w-[550px] text-center lg:mb-0 lg:ml-0 lg:text-left">
                <h2 className="mb-4 font-heading text-xl font-semibold leading-tight text-dark sm:text-[38px]">
                  Have Questions? We are Here to Help!
                </h2>
                <p className="text-base text-gray-600">
                  Reach out for any inquiries or support. Our team is ready to
                  assist you.
                </p>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/3">
              <div className="text-center lg:text-right">
                <a
                  href="/contact"
                  className="inline-flex items-center rounded bg-indigo-700 px-8 py-[14px] font-heading text-base text-white hover:bg-opacity-90"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
