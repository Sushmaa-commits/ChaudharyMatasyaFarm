'use client';
import React, { useState, useEffect } from 'react';
import Logo from '../Logo/Logo';
import NavLink from '../NavLink/NavLink';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className="fixed w-full z-50  py-5"
      style={{
        ...(isScrolled
          ? {
              backgroundColor: '#fefeff',
              backdropFilter: 'blur(5px)',
              boxShadow: 'inset 0 -1px 0 0 rgba(0, 0, 0, .1)',
            }
          : { backgroundColor: '#fefeff' }),
      }}
    >
      <nav>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative flex justify-between items-center">
          <div className="flex items-center gap-16">
            <a aria-label="Home" href="/">
              <Logo sm />
            </a>
            <div className="hidden lg:flex lg:gap-10">
              <NavLink title="About" href="/#about" />
              <NavLink title="Services" href="/#service" />
              <NavLink title="Gallery" href="/#gallery" />
              <NavLink title="FAQs" href="/#faqs" />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="lg:hidden">
              <button
                className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 ui-not-focus-visible:outline-none"
                aria-label="Toggle site navigation"
                type="button"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  className="h-6 w-6"
                >
                  <path
                    d="M5 6h14M5 18h14M5 12h14"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
            <a
              className="w-full  hidden lg:block md:block whitespace-nowrap rounded bg-indigo-700 px-6 py-3 text-center font-heading text-white hover:bg-opacity-90 lg:w-auto"
              href="/contact"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
