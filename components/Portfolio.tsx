import React from 'react';

export const Portfolio: React.FC = () => {
  const notionUrl = "https://even-bramble-15f.notion.site/Portf-lio-Data-Science-113cfc4b7293442b9d805babefa3dbe1";

  return (
    <section
      id="portfolio"
      className="p-8 md:p-16 border-b border-dark/80 bg-black/90 backdrop-blur-xl"
    >
      {/* Header */}
      <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <h2 className="font-display text-5xl md:text-6xl uppercase text-white">
            Work <span className="text-white/50">| Projetos Acadêmicos</span>
          </h2>
          <p className="mt-4 text-white/60 max-w-xl text-sm font-bold tracking-wider uppercase">
            Exploração de Dados e Design de Interface
          </p>
        </div>

        {/* Botão de Fallback - Estratégia de UX */}
        <a 
          href={notionUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors border border-white/20 px-4 py-2 rounded-full backdrop-blur-sm"
        >
          Não está visualizando? Clique aqui para abrir em nova aba
        </a>
      </div>

      {/* Embed Notion */}
      <div className="w-full h-[85vh] rounded-3xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-2xl shadow-2xl">
        <iframe
          src={notionUrl}
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
