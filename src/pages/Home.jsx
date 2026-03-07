import React, { useEffect, useState }  from 'react'
import Navbar from '../components/layout/Navbar'
import Hero from '../components/layout/Hero'
import Faqs from '../components/layout/Faqs';
import Footer from '../components/layout/Footer';
export default function Home() {
  const [navStyle , setNavStyle ] = useState("fixed top-0 w-full");
  useEffect(() => {
    const handleScroll = ()=> {
      if(window.scrollY  > 10) {
        setNavStyle('fixed top-0 w-full backdrop-blur-2xl');
      }else {
        setNavStyle('fixed top-0 w-full');
      }
    };

    window.addEventListener("scroll" , handleScroll);

    return ()=> {
      window.removeEventListener("scroll" , handleScroll);
    }
  } , [])
  return (
    <div className="w-full flex flex-col overflow-x-hidden relative min-h-screen">
      <div className={navStyle}>
        <Navbar />
      </div>
      <div className='mt-45'>
        <Hero />
      </div>
      <Faqs />
      <Footer />
    </div>
  );
}
