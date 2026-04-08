import React, { useState } from 'react';
import Faqs from '../components/layout/Faqs';
import plateData from '../data/plates-data.json';
import colorData from '../data/colors-data.json';
import SearchNavigation from '../components/layout/SearchNavigation';
import ContentGrid from '../components/ui/ContentGrid';
import Hero from '../components/layout/Hero';
import Preloader from '../components/layout/Preloader';

export default function Home() {
  const platesColorsData = plateData.plates;
  const singalColorData = colorData.colors;

  const [activeView, setActiveView] = useState('colors');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Logic for filtering
  const filteredColors = singalColorData.filter(
    color =>
      color.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      color.hex.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredPlates = platesColorsData.filter(plate =>
    plate.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* preloader */}
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      {/*main site content */}
      <div
        className={`w-full min-h-screen background-color text-white font-serif overflow-x-hidden transition-opacity duration-1000 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <Hero />

        <main className="max-w-[1600px] mx-auto px-6 md:px-12 py-32 md:py-44">
          {/* Search Area */}
          <SearchNavigation
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            activeView={activeView}
            setActiveView={setActiveView}
          />

          {/* Results Grid */}
          <ContentGrid
            activeView={activeView}
            filteredColors={filteredColors}
            filteredPlates={filteredPlates}
            searchQuery={searchQuery}
          />
        </main>

        <Faqs />
      </div>
    </>
  );
}

/* Empty Results Component */
export function EmptyState({ query }) {
  return (
    <div className="col-span-full py-32 flex flex-col items-center">
      <span className="text-6xl mb-4 opacity-20 font-sans">:(</span>
      <p className="text-zinc-500 font-serif italic text-xl md:text-2xl text-center">
        No results in the registry for <span className="text-white not-italic">"{query}"</span>
      </p>
      <button
        onClick={() => window.location.reload()}
        className="mt-6 text-[10px] uppercase tracking-widest border-b border-zinc-700 pb-1 hover:text-[#E2FF46] hover:border-[#E2FF46] transition-all"
      >
        Reset Archive Filters
      </button>
    </div>
  );
}
