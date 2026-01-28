
import React from 'react';
import { ShieldCheck, Eye, Compass, Workflow } from 'lucide-react';

const About = () => {
  return (
    <div className="animate-fade-in">
      <section className="py-24 bg-[#F9FAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-serif text-[#2C2C2C] mb-12">Systemic Philosophy</h1>
            <p className="text-xl text-gray-600 leading-relaxed font-light mb-12">
              MAGNIPROJEKTA (Pty) Ltd operates on a fundamental belief: the future of business is autonomous, but the soul of business must remain human.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-20">
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-serif text-[#2C2C2C] mb-6">Why Autonomous Businesses Matter</h3>
                <p className="text-gray-600 leading-relaxed">
                  Traditional business models are limited by linear scalability. Autonomous systems, when governed correctly, can operate 24/7 with zero latency in decision-making, allowing for global reach from a centralized, high-integrity node.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-serif text-[#2C2C2C] mb-6">Ethical Intelligence</h3>
                <p className="text-gray-600 leading-relaxed">
                  Intelligence is not just about computational power; it's about context and consequence. Our "Ethical Intelligence" framework ensures that every decision made by an autonomous system aligns with established ethical benchmarks and governance protocols.
                </p>
              </div>
            </div>
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-serif text-[#2C2C2C] mb-6">The Role of Human Oversight</h3>
                <p className="text-gray-600 leading-relaxed">
                  We do not believe in unchecked autonomy. Human oversight is the critical circuit breaker in our systems. Led by K. Thapedi, our oversight protocols ensure that MAGNIPROJEKTA remains accountable, transparent, and aligned with human values.
                </p>
              </div>
              <div className="bg-[#F9FAF8] p-8 border border-gray-100 rounded-sm">
                <div className="flex gap-4 items-center text-[#8FA691] mb-4">
                  <ShieldCheck size={24} />
                  <span className="font-semibold tracking-widest text-xs uppercase">Core Mandate</span>
                </div>
                <p className="text-sm text-gray-500 italic">
                  "To architect systems that serve, rather than disrupt, the human experience through intelligent, self-regulating autonomy."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-gray-100 bg-[#FDFDFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Eye size={24} />, label: "Transparency" },
              { icon: <Compass size={24} />, label: "Directional Ethics" },
              { icon: <Workflow size={24} />, label: "Systemic Control" },
              { icon: <ShieldCheck size={24} />, label: "Accountability" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-4">
                <div className="text-[#8FA691]">{item.icon}</div>
                <span className="text-xs uppercase tracking-widest font-medium text-gray-500">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
