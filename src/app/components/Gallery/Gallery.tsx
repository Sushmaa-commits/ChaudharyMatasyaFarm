'use client';
import React, { useState, useEffect } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import portfolioItems from '../../../../public/gallery.json';

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

export default function Gallery() {
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [filteredItems, setFilteredItems] = useState<PortfolioItem[]>([]);

  useEffect(() => {
    setFilteredItems(portfolioItems);
    setLoading(false); // Initially set loading to false after setting items
  }, []);

  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(
        portfolioItems.filter((item) => item.category === activeCategory)
      );
    }
  }, [activeCategory]);

  return (
    <div className="w-full">
      <div className="portfolio-btn-wrapper mb-16 flex items-center justify-center overflow-x-auto pb-2">
        {['all', 'fish species', 'awards'].map((category) => (
          <button
            key={category}
            className={`whitespace-nowrap px-5 py-2 font-heading text-base capitalize text-dark cursor-pointer${
              activeCategory === category ? ' text-indigo-700' : ''
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <ClipLoader color="#4A90E2" loading={true} />
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="grid-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2"
            >
              <div className="group relative overflow-hidden rounded">
                <img
                  alt={item.title}
                  loading="lazy"
                  className="transition-opacity duration-500 opacity-100"
                  src={item.imageUrl}
                  onLoad={() => setLoading(false)}
                  onError={() => setLoading(false)}
                />
                <div className="absolute bottom-8 left-5 flex translate-y-8 items-center justify-between rounded bg-[#000] bg-opacity-30 px-4 py-5 opacity-0 backdrop-blur-[30px] transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:left-8 sm:px-6 lg:left-5 lg:px-4 xl:px-6 2xl:left-8">
                  <div className="border-r border-[#e9e9e9] border-opacity-30 pr-4 sm:pr-5 lg:pr-4 xl:pr-5">
                    <h3 className="font-heading text-base font-medium text-white sm:text-xl lg:text-base xl:text-xl">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#d9d9d9] sm:text-base lg:text-sm xl:text-base">
                      {item.description}
                    </p>
                  </div>
                  <div className="pl-4 sm:pl-5 lg:pl-4 xl:pl-5">
                    <a
                      href="#"
                      className="dark:hover:us-bg-primary flex h-10 w-10 items-center justify-center rounded-full bg-[#f8f8f8] bg-opacity-[15%] text-white hover:bg-primary hover:bg-opacity-100 dark:hover:bg-opacity-100"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        className="fill-current"
                      >
                        <path d="M13.4767 9.16689L9.00671 4.69689L10.185 3.51855L16.6667 10.0002L10.185 16.4819L9.00671 15.3036L13.4767 10.8336H3.33337V9.16689H13.4767Z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="w-full pt-10 text-center">
        <a
          href="#"
          className="inline-flex items-center rounded bg-primary px-8 py-[14px] font-heading text-base text-white hover:bg-opacity-90"
        >
          See More Projects
          <span className="pl-3">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.172 7L6.808 1.636L8.222 0.222L16 8L8.222 15.778L6.808 14.364L12.172 9H0V7H12.172Z"
                fill="white"
              ></path>
            </svg>
          </span>
        </a>
      </div>
    </div>
  );
}
