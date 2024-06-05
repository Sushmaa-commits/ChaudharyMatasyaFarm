import SocialLinks from '@/app/components/SocialLinks/SocialLinks';
import React from 'react';

export default function Contact() {
  return (
    <section className="contact pt-14 sm:pt-20 lg:pt-[130px] mb-10 mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 xl:w-10/12">
            <div className="flex flex-wrap items-center border-b pb-14 border-gray-200 lg:pb-0">
              <div className="w-full px-4 lg:w-1/2">
                <div className="relative mb-12 max-w-[500px] pt-6 md:mb-14 lg:pt-16">
                  <span className="title !left-0 !translate-x-0 uppercase">
                    Contact Us
                  </span>
                  <h2 className="mb-5 text-3xl font-semibold text-dark  sm:text-4xl md:text-[50px] md:leading-[60px]">
                    Need Any Help? Say hello
                  </h2>
                  <p className="text-base text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    Donec vitae tortor aliquam ante.
                  </p>
                </div>
              </div>
              <div className="w-full px-4 lg:w-1/2">
                <div className="mb-6 flex items-center space-x-5 lg:justify-end">
                  <SocialLinks />
                </div>
              </div>
            </div>
            <div className="-mx-4 flex flex-wrap pt-12">
              <div className="w-full px-4 md:w-1/2 lg:w-1/4">
                <div className="mb-6">
                  <h3 className="mb-2  text-base text-dark  sm:text-xl">
                    Email Address
                  </h3>
                  <p className="text-base font-medium text-gray-500">
                    cshyamsundar26@gmail.com
                  </p>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 lg:w-1/4">
                <div className="mb-6">
                  <h3 className="mb-2  text-base text-dark  sm:text-xl">
                    Phone Number
                  </h3>
                  <p className="text-base font-medium text-gray-500">
                    +977 9827369058
                  </p>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 lg:w-1/4">
                <div className="mb-6">
                  <i className="bi bi-telephone"></i>
                  <h3 className="mb-2  text-base text-dark  sm:text-xl">
                    Farm Location
                  </h3>
                  <p className="text-base font-medium text-gray-500">
                    Gadhi-2, Bhamari bajar, Sunsari,Nepal
                  </p>
                </div>
              </div>

              <div className="w-full px-4 md:w-1/2 lg:w-1/4">
                <div className="mb-6">
                  <h3 className="mb-2  text-base text-dark  sm:text-xl">
                    Open Hours
                  </h3>
                  <p className="text-base font-medium text-gray-500">
                    Sunday-Saturday,7 A.M. to 5 P.M.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-[780px] pt-[130px]">
          <form className="">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4 sm:w-1/2">
                <div className="mb-12">
                  <label
                    htmlFor="name"
                    className="mb-3 block  text-base text-dark "
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Full Name"
                    className="w-full border-b bg-transparent py-5 text-base font-medium text-dark placeholder-dark-text outline-none focus:border-indigo-700 border-gray-200 "
                    name="name"
                  />
                </div>
              </div>
              <div className="w-full px-4 sm:w-1/2">
                <div className="mb-12">
                  <label
                    htmlFor="email"
                    className="mb-3 block  text-base text-dark "
                  >
                    Email Address{' '}
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email Address"
                    className="w-full border-b bg-transparent py-5 text-base font-medium text-dark placeholder-dark-text outline-none focus:border-indigo-700 border-gray-200  "
                    name="email"
                  />
                </div>
              </div>
              <div className="w-full px-4 sm:w-1/2">
                <div className="mb-12">
                  <label
                    htmlFor="phone"
                    className="mb-3 block  text-base text-dark"
                  >
                    Phone(Optional)
                  </label>
                  <input
                    type="text"
                    id="phone"
                    placeholder="Phone Number"
                    className="w-full border-b bg-transparent py-5 text-base font-medium text-dark placeholder-dark-text outline-none focus:border-indigo-700 border-gray-200  "
                    name="phone"
                  />
                </div>
              </div>
              <div className="w-full px-4 sm:w-1/2">
                <div className="mb-12">
                  <label
                    htmlFor="subject"
                    className="mb-3 block  text-base text-dark"
                  >
                    Subject{' '}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="Type Subject"
                    className="w-full border-b bg-transparent py-5 text-base font-medium text-dark placeholder-dark-text outline-none focus:border-indigo-700 border-gray-200 "
                    name="subject"
                  />
                </div>
              </div>
              <div className="w-full px-4">
                <div className="mb-10">
                  <label
                    htmlFor="message"
                    className="mb-3 block  text-base text-dark "
                  >
                    Message
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    id="message"
                    placeholder="Type Message"
                    className="w-full resize-none border-b bg-transparent py-5 text-base font-medium text-dark placeholder-dark-text outline-none focus:border-indigo-700 border-gray-200  "
                  ></textarea>
                </div>
              </div>

              <div className="w-full px-4">
                <button className="flex w-full items-center justify-center rounded bg-indigo-700 px-8 py-[14px]  text-base text-white hover:bg-opacity-90">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
