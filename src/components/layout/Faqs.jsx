import React, { useState } from 'react';

const faqData = [
  {
    question: "Who was Wada Sanzō?",
    answer: "Wada Sanzō (1883–1967) was a Japanese artist, teacher, and costume designer who won an Academy Award for his work on 'Gate of Hell'. He was a pioneer in modern Japanese color theory."
  },
  {
    question: "What is the 'Haishoku Sōkan'?",
    answer: "It is Wada's seminal six-volume work published in the 1930s. It laid the foundation for contemporary color combinations, blending traditional Japanese aesthetics with Western modernism."
  },
  {
    question: "How should I use these color plates?",
    answer: "These palettes are designed as 'chords.' You can use them for graphic design, interior decor, or fashion by maintaining the proportional weights suggested in the card layouts."
  }
];

export default function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="h-auto  my-50 py-20 px-6 sm:px-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-fair text-4xl mb-12 text-zinc-100 tracking-tight text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border-b border-zinc-800 transition-all duration-300"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full py-6 flex justify-between items-center text-left group"
              >
                <span className={`font-fair text-xl transition-colors duration-300 ${activeIndex === index ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'}`}>
                  {item.question}
                </span>
                <span className={`text-2xl transform transition-transform duration-300 ${activeIndex === index ? 'rotate-45 text-white' : 'text-zinc-500'}`}>
                  +
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? 'max-h-96 pb-8' : 'max-h-0'}`}
              >
                <p className="text-zinc-500 leading-relaxed font-light text-lg">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
