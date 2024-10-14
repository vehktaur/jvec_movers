import AppDownload from './components/app-download';
import Blogs from './components/blogs';
import ClientsWeServe from './components/clients-we-serve';
import Footer from './components/footer';
import FreeQuote from './components/free-quote';
import Hero from './components/hero';
import Map from './components/map';
import MoveClean from './components/move-and-clean';
import Navbar from './components/navbar';
import OurTeam from './components/our-team';
import WhatWeRepresent from './components/what-we-represent';
import WhyUs from './components/why-us';

function App() {
  return (
    <>
      <Navbar />
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
      <Footer />
    </>
  );
}

export default App;
