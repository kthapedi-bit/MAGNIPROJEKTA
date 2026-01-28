
import React from 'react';
import { Link } from 'react-router-dom';
// Added MessageSquare to imports
import { ArrowRight, Shield, Cpu, Network, Zap, Settings, MessageSquare } from 'lucide-react';

const Home = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-[#F9FAF8] py-24 md:py-40 overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_2px_2px,#2C2C2C_1px,transparent_0)] [background-size:48px_48px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-serif text-[#2C2C2C] leading-tight mb-6">
              MAGNIPROJEKTA <span className="text-sm font-sans align-top tracking-[0.2em] text-[#8FA691] font-normal">(Pty) Ltd</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 font-light tracking-wide mb-8">
              Ethical Intelligence. An Autonomous Business.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-12 max-w-2xl">
              We engineer autonomous systems that operate with precision and integrity, bridging the gap between advanced technology and human values.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-[#2C2C2C] text-white font-medium tracking-wide hover:bg-[#1A2421] transition-all rounded-sm">
                Initiate Inquiry
                <ArrowRight className="ml-2" size={18} />
              </Link>
              <Link to="/about" className="inline-flex items-center justify-center px-8 py-4 border border-gray-200 text-[#2C2C2C] font-medium tracking-wide hover:bg-gray-50 transition-all rounded-sm">
                Our Philosophy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#8FA691] font-semibold text-xs uppercase tracking-[0.3em] block mb-4">Foundation</span>
              <h2 className="text-3xl md:text-4xl font-serif text-[#2C2C2C] mb-8 leading-snug">
                Who We Are
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed font-light">
                MAGNIPROJEKTA (Pty) Ltd is an autonomous business operating at the intersection of artificial intelligence, media systems, and ethical governance. 
              </p>
            </div>
            <div className="bg-[#F9FAF8] p-12 rounded-sm border border-gray-100">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white shadow-sm rounded-full text-[#8FA691]">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2C2C2C] mb-1">Ethical Integrity</h4>
                    <p className="text-sm text-gray-500">Governance is baked into every system we deploy.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white shadow-sm rounded-full text-[#8FA691]">
                    <Cpu size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2C2C2C] mb-1">Autonomous Logic</h4>
                    <p className="text-sm text-gray-500">Self-sustaining operations that learn and adapt.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-[#F9FAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-[#8FA691] font-semibold text-xs uppercase tracking-[0.3em] block mb-4">Operations</span>
            <h2 className="text-3xl md:text-4xl font-serif text-[#2C2C2C]">Core Competencies</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { icon: <Network size={20} />, title: "Content Systems", desc: "Autonomous content generation and management." },
              { icon: <MessageSquare size={20} />, title: "Intelligent Engagement", desc: "Advanced audience interaction models." },
              { icon: <Zap size={20} />, title: "Digital Distribution", desc: "Optimised pathways for information flow." },
              { icon: <Settings size={20} />, title: "Embedded Advertising", desc: "Contextually aware, seamless execution." },
              { icon: <Cpu size={20} />, title: "Continuous Learning", desc: "Systems that evolve through operation." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                <div className="text-[#8FA691] mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="font-semibold text-[#2C2C2C] mb-3 text-sm tracking-wide">{item.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* M.A.S.T.E.R Section */}
      <section className="py-24 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-[#8FA691] font-semibold text-xs uppercase tracking-[0.3em] block mb-4">Technology</span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#2C2C2C] mb-8">
              M.A.S.T.E.R Framework
            </h2>
            <p className="text-xl text-gray-600 font-light mb-8 leading-relaxed">
              Introducing <span className="font-medium text-[#2C2C2C]">Magnificent Autonomous System Technology</span>. 
              The proprietary engine enabling continuous operation, adaptive learning, and stringent ethical control across all MAGNIPROJEKTA entities.
            </p>
            <Link to="/master" className="inline-flex items-center text-[#8FA691] font-medium hover:text-[#2C2C2C] transition-colors">
              Explore M.A.S.T.E.R Architecture
              <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>
        </div>
        <div className="hidden lg:block absolute top-1/2 right-[-10%] translate-y-[-50%] opacity-10">
          <div className="w-[800px] h-[800px] border border-[#8FA691] rounded-full flex items-center justify-center">
            <div className="w-[600px] h-[600px] border border-[#8FA691] rounded-full flex items-center justify-center">
              <div className="w-[400px] h-[400px] border border-[#8FA691] rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Governance CTA */}
      <section className="py-32 bg-[#1A2421] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif mb-8 italic">
              "Autonomy without governance is risk. We build both."
            </h2>
            <p className="text-gray-400 mb-12 font-light">
              Our operations are rooted in South Africa with a global footprint, maintained through high-level human oversight.
            </p>
            <Link to="/contact" className="inline-block px-10 py-4 bg-[#8FA691] text-white font-medium tracking-widest hover:bg-[#A0B8A2] transition-colors rounded-sm uppercase text-sm">
              Contact Leadership
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
