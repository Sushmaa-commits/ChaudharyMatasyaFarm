// import Footer from '@/app/components/Footer/Footer';
import Footer from '@/app/components/Footer/Footer';
import Navbar from '@/app/components/Navbar/Navbar';
import React from 'react';
import Contact from './contact/page';

export default function LandingLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <div className="flex min-h-full flex-col">
        <Navbar />
        <main className="flex-auto">{children}</main>
        <Footer />
      </div>
    </>
  );
}
