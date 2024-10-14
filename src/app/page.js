import AppDownload from '@/app/components/app-download';
import Blogs from '@/app/components/blogs';
import ClientsWeServe from '@/app/components/clients-we-serve';
import Footer from '@/app/components/footer';
import FreeQuote from '@/app/components/free-quote';
import Hero from '@/app/components/hero';
import Map from '@/app/components/map';
import MoveClean from '@/app/components/move-and-clean';
import Navbar from '@/app/components/navbar';
import OurTeam from '@/app/components/our-team';
import WhatWeRepresent from '@/app/components/what-we-represent';
import WhyUs from '@/app/components/why-us';

export default function Home() {
  return (
    <>
      <Hero />
      <WhyUs />
      <OurTeam />
      <WhatWeRepresent />
      <Map />
      <ClientsWeServe />
      <Blogs />
      <FreeQuote />
      <AppDownload />
      <MoveClean />
    </>
  );
}
