import React from 'react';
import Logo from '../Logo/Logo';
import SocialLinks from '../SocialLinks/SocialLinks';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="-mx-4 flex flex-wrap mt-10">
          <div className="w-full px-4 sm:w-1/2 md:w-5/12 lg:w-4/12 xl:w-4/12">
            <div className="mb-20 max-w-[330px]">
              <div style={{ marginTop: '-10px' }}>
                <a className="mb-6 inline-block" href="/">
                  <Logo sm />
                </a>
                <p className="mb-10 text-base  text-gray-600">
                  Chaudhary Matasya Farm is a renowned aquaculture enterprise
                  based in Gadhi-2, Bhamari of Sunsari District, Nepal. With
                  decades of experience and a commitment to excellence, we
                  specialize in breeding and supplying high-quality fish species
                  to customers across the country.
                </p>
              </div>
              <div className="flex items-center space-x-5">
                <SocialLinks />
              </div>
            </div>
          </div>

          <div className="w-1/2 px-4 md:w-3/12 lg:w-2/12 xl:w-2/12">
            <div className="mb-20">
              <h3 className="mb-9 font-heading text-2xl font-medium text-dark">
                Quick Links
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    className="font-heading text-base text-gray-600 hover:text-indigo-800"
                    href="index.html"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="font-heading text-base text-gray-600 hover:text-indigo-800"
                    href="index.html"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    className="font-heading text-base text-gray-600 hover:text-indigo-800"
                    href="index.html"
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-1/2 px-4 md:w-3/12 lg:w-2/12 xl:w-2/12">
            <div className="mb-20">
              <h3 className="mb-9 font-heading text-2xl font-medium text-dark">
                Services
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    className="font-heading text-base text-gray-600 hover:text-indigo-800"
                    href="#service"
                  >
                    Oxygen Packing
                  </a>
                </li>
                <li>
                  <a
                    className="font-heading text-base text-gray-600 hover:text-indigo-800"
                    href="#service"
                  >
                    Fish Selection
                  </a>
                </li>
                <li>
                  <a
                    className="font-heading text-base text-gray-600 hover:text-indigo-800"
                    href="#service"
                  >
                    Breeding Services
                  </a>
                </li>
                <li>
                  <a
                    className="font-heading text-base text-gray-600 hover:text-indigo-800"
                    href="contact.html"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 md:w-5/12 lg:w-4/12 xl:w-4/12">
            <div className="mb-20">
              <h3 className="mb-9 font-heading text-2xl font-medium text-dark">
                Get in touch
              </h3>
              <div className="space-y-7">
                <div>
                  <p className="font-heading text-base font-semibold text-gray-600">
                    Home Address:
                  </p>
                  <p className="font-heading text-base text-gray-600">
                    Gadhi-2, Bhamari, Sunsari, Nepal
                  </p>
                </div>
                <div>
                  <p className="font-heading text-base font-semibold text-gray-600">
                    Phone:
                  </p>
                  <a
                    href="tel:+9779827369058"
                    className="font-heading text-base text-dark hover:text-indigo-500"
                  >
                    +977 9827369058
                  </a>
                </div>
                <div>
                  <p className="font-heading text-base font-semibold text-gray-600">
                    Email:
                  </p>
                  <a
                    href="mailto: cshyamsundar26@gmail.com"
                    className="font-heading text-base text-gray-600 hover:text-indigo-500"
                  >
                    cshyamsundar26@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="dark:border-[#2E333D] md:border-t">
          <div className="-mx-4 flex flex-wrap py-5 md:py-7">
            <div className="w-full px-4 md:w-1/2 lg:w-2/3">
              <div className="mb-5 flex items-center justify-center space-x-5 border-b pb-5 dark:border-[#2E333D] md:mb-0 md:justify-start md:border-0 md:pb-0">
                <a
                  href="#"
                  className="font-heading text-base text-gray-600 hover:text-indigo-800"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div>
                <p className="text-center font-heading text-base text-gray-600 lg:text-right">
                  © 2024 Chaudhary Matasya Farm. All rights reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
