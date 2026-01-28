
import React from 'react';
import { Box, Layers, Database, Radio, Share2 } from 'lucide-react';

const Ecosystem = () => {
  const entities = [
    { 
      name: "MediaSync Alpha", 
      type: "Distribution Node", 
      desc: "Autonomous content syndication and multi-platform distribution engine.",
      status: "Operational"
    },
    { 
      name: "CogniStream", 
      type: "Engagement Entity", 
      desc: "System focused on intelligent audience dialogue and sentiment analysis.",
      status: "Active"
    },
    { 
      name: "AdLogic Prime", 
      type: "Commercial Layer", 
      desc: "Autonomous management of embedded advertising and strategic placements.",
      status: "Stable"
    },
    { 
      name: "DataNode Global", 
      type: "Intelligence Core", 
      desc: "Regional data gathering and processing for South African and global markets.",
      status: "Operational"
    }
  ];

  return (
    <div className="animate-fade-in">
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-6xl font-serif text-[#2C2C2C] mb-12">Entity Ecosystem</h1>
            <p className="text-xl text-gray-600 leading-relaxed font-light">
              MAGNIPROJEKTA operates multiple autonomous entities as modular systems. Each entity functions independently but remains unified under the M.A.S.T.E.R governance framework.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {entities.map((entity, i) => (
              <div key={i} className="p-8 border border-gray-100 bg-[#F9FAF8] group hover:border-[#8FA691] transition-all">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white rounded-sm shadow-sm text-[#8FA691]">
                    <Box size={20} />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest px-3 py-1 bg-white border border-gray-100 rounded-full font-semibold text-[#8FA691]">
                    {entity.status}
                  </span>
                </div>
                <h3 className="text-xl font-serif text-[#2C2C2C] mb-2">{entity.name}</h3>
                <span className="text-xs text-[#8FA691] font-medium uppercase tracking-widest block mb-4">{entity.type}</span>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">{entity.desc}</p>
                <div className="pt-6 border-t border-gray-100 flex gap-4 text-gray-400">
                  <Layers size={14} />
                  <Database size={14} />
                  <Radio size={14} />
                  <Share2 size={14} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 p-12 bg-[#1A2421] text-white rounded-sm flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="text-2xl font-serif mb-4">Scalable Autonomy</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Our ecosystem is modular by design. New autonomous entities can be deployed to meet specific market needs or technological shifts without disrupting existing operations.
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-[#8FA691] font-serif italic text-4xl">Modularity.</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ecosystem;
