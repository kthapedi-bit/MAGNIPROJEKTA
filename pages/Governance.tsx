
import React from 'react';
import { UserCheck, Shield, BookOpen, Scale } from 'lucide-react';

const Governance = () => {
  return (
    <div className="animate-fade-in">
      <section className="py-24 bg-[#F9FAF8] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-serif text-[#2C2C2C] mb-12">Ethical Governance</h1>
            <p className="text-xl text-gray-600 leading-relaxed font-light mb-8">
              Autonomy is a capability; Governance is a responsibility. We treat governance not as a compliance checkbox, but as a core design feature.
            </p>
            <div className="flex items-center gap-2 text-[#8FA691] font-semibold tracking-widest uppercase text-xs">
              <UserCheck size={18} />
              Human-in-the-loop oversight
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-[#8FA691] mb-6"><Shield size={32} /></div>
              <h3 className="text-xl font-serif text-[#2C2C2C] mb-4">Principles of Ethical Intelligence</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Our systems are guided by a fixed set of ethical axioms. No autonomous logic is permitted to bypass these fundamental constraints, ensuring alignment with global ethical standards.
              </p>
            </div>
            <div>
              <div className="text-[#8FA691] mb-6"><Scale size={32} /></div>
              <h3 className="text-xl font-serif text-[#2C2C2C] mb-4">Systemic Balance</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                We maintain a balance between output efficiency and ethical integrity. If a system's proposed action falls below our ethical threshold, it is automatically flagged for human review.
              </p>
            </div>
            <div>
              <div className="text-[#8FA691] mb-6"><BookOpen size={32} /></div>
              <h3 className="text-xl font-serif text-[#2C2C2C] mb-4">Governance Audit Logs</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Every decision made by a MAGNIPROJEKTA entity is logged in a transparent, immutable audit trail. This ensures absolute accountability for all autonomous operations.
              </p>
            </div>
          </div>

          <div className="mt-24 p-12 bg-[#F9FAF8] border border-gray-100 text-center max-w-4xl mx-auto">
            <h2 className="text-2xl font-serif text-[#2C2C2C] mb-8">Human Oversight Lead</h2>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-[#2C2C2C] rounded-full flex items-center justify-center text-[#8FA691] mb-4 font-serif text-2xl">
                KT
              </div>
              <h4 className="text-xl font-semibold text-[#2C2C2C]">K. Thapedi</h4>
              <span className="text-sm text-[#8FA691] uppercase tracking-[0.2em] font-medium mb-6">Founder & Human Oversight Lead</span>
              <p className="text-gray-500 leading-relaxed max-w-xl text-sm italic">
                "My role is to serve as the final validator for our systems. We build autonomous businesses that we are proud to stand behind, ensuring that our technological footprint is both massive and ethical."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Governance;
