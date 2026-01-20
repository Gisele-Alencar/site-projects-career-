import React from 'react';

export const Portfolio: React.FC = () => {
  return (
    <section
      id="portfolio"
      className="p-8 md:p-16 border-b border-dark/80 bg-black/90 backdrop-blur-xl"
    >
      {/* Header */}
      <div className="mb-12">
        <h2 className="font-display text-5xl md:text-6xl uppercase text-white">
          Work <span className="text-white/50">| Projetos Acadêmicos</span>
        </h2>
        <p className="mt-4 text-white/60 max-w-xl text-sm font-bold tracking-wider uppercase">
          My Work • Portfólio 
        </p>
      </div>

      {/* Embed Notion */}
      <div className="w-full h-[85vh] rounded-3xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-2xl shadow-2xl">
        <iframe
          src="https://even-bramble-15f.notion.site/Portf-lio-Data-Science-113cfc4b7293442b9d805babefa3dbe1"
          className="w-full h-full"
          frameBorder="0"
          loading="lazy"
          title="Visualização de Projetos Integrada"
          allow="fullscreen"
        />
      </div>
    </section>
  );
};
