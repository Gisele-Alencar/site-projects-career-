import React from 'react';

export const Portfolio: React.FC = () => {
  return (
    <section
      id="portfolio"
      className="w-full p-8 md:p-16 border-b border-dark/80"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div>
          <span className="text-dark/60 font-bold tracking-widest uppercase text-sm mb-2 block">
            Portfólio
          </span>

          <h2 className="font-display text-5xl text-outline text-dark">
           My Work
        
          </h2>
        </div>
      </div>

      {/* Notion Embed */}
      <div className="w-full rounded-2xl overflow-hidden border border-black/30 backdrop-blur-xl bg-black/40 shadow-xl">
        <div className="relative w-full h-[75vh] md:h-[85vh]">
          <iframe
            src="https://even-bramble-15f.notion.site/113cfc4b7293442b9d805babefa3dbe1"
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};
