import Gallery from '@/app/components/Gallery/Gallery';
import React from 'react';

export default function GallerySection() {
  return (
    <section id="gallery" className="pt-14 sm:pt-20 lg:pt-[130px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto mb-12 max-w-[620px] pt-6 text-center md:mb-20 lg:pt-16">
          <span className="title">PORTFOLIO</span>
          <h2 className="mb-5 font-heading text-3xl font-semibold text-dark sm:text-4xl md:text-[50px] md:leading-[60px]">
            Discover Our Aquatic Gallery
          </h2>
          <p className="text-base text-dark-text">
            Dive into our diverse collection of aquatic wonders! Explore a
            vibrant showcase featuring an array of colorful fish species, each
            captured in stunning detail. From graceful bettas to majestic koi,
            our gallery offers a captivating glimpse into the mesmerizing world
            beneath the waves
          </p>
        </div>
        <Gallery />
      </div>
    </section>
  );
}
