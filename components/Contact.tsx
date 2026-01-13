import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="w-full bg-pink-400/70 backdrop-blur-xl border-b border-black/20"
    >
      <div className="max-w-4xl mx-auto p-8 md:p-16 lg:p-24 text-center">
        <h2 className="font-display text-5xl md:text-6xl uppercase mb-8 text-black">
          Entre em <br />
          <span className="text-pink-600">contato</span>
        </h2>

        <p className="mb-12 text-black/80 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
          Tenho projetos abertos para novos desafios. Se você tem uma ideia incrível, vamos conversar.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <a
            href="mailto:unigisele@gmail.com"
            className="text-2xl md:text-3xl font-bold text-black hover:text-pink-600 transition-colors border-b-2 border-transparent hover:border-pink-600 pb-1"
          >
            unigisele@gmail.com
          </a>

          <div className="hidden md:block w-px h-8 bg-black/30"></div>

          <p className="text-xl md:text-2xl text-black/70 font-display">
            +55 85 99256-3910
          </p>
        </div>
      </div>
    </section>
  );
};
