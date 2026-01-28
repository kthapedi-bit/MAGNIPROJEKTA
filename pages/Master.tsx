
import React from 'react';
import { Cpu, Zap, Lock, RefreshCw, BarChart } from 'lucide-react';

const Master = () => {
  return (
    <div className="animate-fade-in">
      <section className="py-24 bg-[#1A2421] text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-[#8FA691] font-semibold text-xs uppercase tracking-[0.3em] block mb-4">The Engine</span>
            <h1 className="text-5xl md:text-7xl font-serif mb-8">M.A.S.T.E.R</h1>
            <p className="text-2xl text-gray-400 font-light tracking-wide leading-relaxed">
              Magnificent Autonomous System Technology
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 flex items-center justify-center">
          <Cpu size={500} strokeWidth={0.5} className="text-[#8FA691]" />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-serif text-[#2C2C2C] mb-8">Conceptual Architecture</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                M.A.S.T.E.R is the foundational logic layer that powers MAGNIPROJEKTA. It is not a single piece of software, but a proprietary ecosystem of interconnected autonomous protocols designed for the high-level orchestration of business entities.
              </p>
              <p className="text-gray-600 leading-relaxed mb-10">
                It exists to eliminate human bandwidth bottlenecks, allowing for the execution of complex global strategies with minimal manual intervention while maintaining strict adherence to ethical governance.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 border border-gray-100 bg-[#F9FAF8]">
                  <h4 className="font-semibold text-[#2C2C2C] mb-2 flex items-center gap-2">
                    <Zap size={16} className="text-[#8FA691]" /> Performance
                  </h4>
                  <p className="text-xs text-gray-500">Optimized for low-latency distribution and engagement.</p>
                </div>
                <div className="p-6 border border-gray-100 bg-[#F9FAF8]">
                  <h4 className="font-semibold text-[#2C2C2C] mb-2 flex items-center gap-2">
                    <Lock size={16} className="text-[#8FA691]" /> Security
                  </h4>
                  <p className="text-xs text-gray-500">Immutable governance chains protect system integrity.</p>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <div className="bg-[#F9FAF8] p-10 border-l-4 border-[#8FA691]">
                <h3 className="text-xl font-semibold text-[#2C2C2C] mb-6 uppercase tracking-wider">How it Operates</h3>
                <ul className="space-y-8">
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center text-xs font-bold text-[#8FA691] border border-gray-100 shadow-sm">01</div>
                    <div>
                      <h4 className="font-medium text-[#2C2C2C] mb-1">Observation & Learning</h4>
                      <p className="text-sm text-gray-500">Continually monitors environment data for patterns and shifts.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center text-xs font-bold text-[#8FA691] border border-gray-100 shadow-sm">02</div>
                    <div>
                      <h4 className="font-medium text-[#2C2C2C] mb-1">Adaptive Strategy</h4>
                      <p className="text-sm text-gray-500">Self-modifies operational tactics based on success metrics.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center text-xs font-bold text-[#8FA691] border border-gray-100 shadow-sm">03</div>
                    <div>
                      <h4 className="font-medium text-[#2C2C2C] mb-1">Ethical Filtering</h4>
                      <p className="text-sm text-gray-500">Validates all outputs against the Ethical Intelligence database.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center text-xs font-bold text-[#8FA691] border border-gray-100 shadow-sm">04</div>
                    <div>
                      <h4 className="font-medium text-[#2C2C2C] mb-1">Autonomous Execution</h4>
                      <p className="text-sm text-gray-500">Deploying content, engagement, or media systems globally.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F9FAF8] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <RefreshCw size={48} className="text-[#8FA691] mb-6" />
              <h3 className="text-2xl font-serif text-[#2C2C2C] mb-4">Continuous Adaptation</h3>
              <p className="text-gray-600">
                Unlike static software, M.A.S.T.E.R evolves. Every interaction, every byte of distribution, and every audience response serves as feedback to refine the system's accuracy and effectiveness over time.
              </p>
            </div>
            <div className="flex-1">
              <BarChart size={48} className="text-[#8FA691] mb-6" />
              <h3 className="text-2xl font-serif text-[#2C2C2C] mb-4">Metrics of Integrity</h3>
              <p className="text-gray-600">
                We measure success not just through efficiency, but through "Integrity Scores"—a proprietary metric that calculates a system's adherence to its ethical operating parameters.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Master;
