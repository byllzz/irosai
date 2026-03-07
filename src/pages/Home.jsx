import Hero from '../components/layout/Hero'
import Faqs from '../components/layout/Faqs';
export default function Home() {
  return (
    <div className="w-full flex flex-col overflow-x-hidden relative min-h-screen">
      <div className='mt-45'>
        <Hero />
      </div>
      <Faqs />
    </div>
  );
}
