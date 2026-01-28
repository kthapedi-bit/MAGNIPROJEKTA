
import React from 'react';
import { Mail, MapPin, User, Globe, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  return (
    <div className="animate-fade-in">
      <section className="py-24 bg-[#F9FAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h1 className="text-4xl md:text-6xl font-serif text-[#2C2C2C] mb-12">Contact Leadership</h1>
              <p className="text-xl text-gray-600 leading-relaxed font-light mb-12">
                We are open to dialogue regarding strategic partnerships, governance inquiries, and autonomous systems integration.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="text-[#8FA691] mt-1"><User size={20} /></div>
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.2em] text-[#8FA691] font-semibold mb-1">Lead Human Oversight</h4>
                    <p className="text-lg font-medium text-[#2C2C2C]">K. Thapedi</p>
                    <p className="text-sm text-gray-500">Founder & CEO</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="text-[#8FA691] mt-1"><Mail size={20} /></div>
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.2em] text-[#8FA691] font-semibold mb-1">Direct Correspondence</h4>
                    <a href="mailto:K.Thapedi@magniprojekta.com" className="text-lg font-medium text-[#2C2C2C] hover:text-[#8FA691] transition-colors underline decoration-gray-200 underline-offset-4">
                      K.Thapedi@magniprojekta.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="text-[#8FA691] mt-1"><MapPin size={20} /></div>
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.2em] text-[#8FA691] font-semibold mb-1">Primary Operations</h4>
                    <p className="text-lg font-medium text-[#2C2C2C]">South Africa</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                      <Globe size={14} /> Global Distribution Active
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 shadow-sm border border-gray-100 rounded-sm">
              <h3 className="text-2xl font-serif text-[#2C2C2C] mb-8">Inquiry Initiation</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-semibold text-gray-400 mb-2">Full Name</label>
                    <input type="text" className="w-full bg-[#F9FAF8] border border-gray-100 px-4 py-3 text-sm focus:outline-none focus:border-[#8FA691] transition-colors" placeholder="e.g. Alexander Vance" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-semibold text-gray-400 mb-2">Organization</label>
                    <input type="text" className="w-full bg-[#F9FAF8] border border-gray-100 px-4 py-3 text-sm focus:outline-none focus:border-[#8FA691] transition-colors" placeholder="Entity Name" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-semibold text-gray-400 mb-2">Inquiry Type</label>
                    <select className="w-full bg-[#F9FAF8] border border-gray-100 px-4 py-3 text-sm focus:outline-none focus:border-[#8FA691] transition-colors appearance-none">
                      <option>Strategic Partnership</option>
                      <option>Media System Integration</option>
                      <option>Governance Consulting</option>
                      <option>General Correspondence</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-semibold text-gray-400 mb-2">Brief Context</label>
                    <textarea className="w-full bg-[#F9FAF8] border border-gray-100 px-4 py-3 text-sm focus:outline-none focus:border-[#8FA691] transition-colors h-32" placeholder="Describe the nature of your inquiry..."></textarea>
                  </div>
                </div>
                <button className="w-full py-4 bg-[#2C2C2C] text-white font-medium tracking-widest uppercase text-sm hover:bg-[#1A2421] transition-colors flex items-center justify-center gap-2">
                  Transmit Inquiry
                  <ArrowUpRight size={18} />
                </button>
              </form>
              <p className="mt-6 text-[10px] text-center text-gray-400 leading-relaxed">
                Communications are processed through an autonomous screening system prior to human review by lead oversight.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
