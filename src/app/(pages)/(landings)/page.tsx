import Banner from '@/app/components/Banner/Banner';

import FAQSection from '@/app/_views/HomePage/FAQSection';
import ServiceSection from '@/app/_views/HomePage/ServiceSection';
import AboutSection from '@/app/_views/HomePage/AboutSection';
import GetInTouch from '@/app/components/GetInTouch/GetInTouch';
import GallerySection from '@/app/_views/HomePage/GallerySection';

export default function Home() {
  return (
    <>
      <Banner />
      <AboutSection />
      <ServiceSection />
      <GallerySection />
      <FAQSection />
      <GetInTouch />
    </>
  );
}
