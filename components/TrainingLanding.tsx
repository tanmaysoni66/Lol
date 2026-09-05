"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CheckCircle2, ShieldCheck, Zap, Award, BookOpen, Users, HelpCircle, Thermometer, Box, Droplets, Leaf, Settings, Phone, MessageCircle } from "lucide-react";
import { trainingContent } from "@/lib/training-content";
import FAQAccordion from "@/components/FAQAccordion";

export default function TrainingLanding({ region }: { region: "in" | "us" }) {
  const pathname = usePathname();
  const data = trainingContent[region];

  return (
    <div className="w-full bg-[#f8f9fc] dark:bg-gray-900 min-h-screen pb-24 text-gray-800 dark:text-gray-200 font-sans selection:bg-purple-200 dark:selection:bg-purple-900">
      
      {/* HEADER SECTION */}
      <div className="w-full max-w-4xl mx-auto px-4 pt-6 pb-4">
        <h1 className="text-center text-xl sm:text-2xl font-black tracking-tight text-purple-700 dark:text-purple-400 uppercase mb-6">
          Mushroom Cultivation Training
        </h1>

        {/* Region Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-white dark:bg-gray-800 p-1 rounded-full inline-flex shadow-sm border border-gray-200 dark:border-gray-700">
            <Link 
              href="/training"
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${pathname === '/training' ? 'bg-purple-600 text-white shadow-md' : 'text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400'}`}
            >
              🇮🇳 India (INR)
            </Link>
            <Link 
              href="/usatraining"
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${pathname === '/usatraining' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'}`}
            >
              🌎 USA & Global (USD)
            </Link>
          </div>
        </div>

        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-lg font-bold mb-3 dark:text-white">Choose Your Training Program</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            {region === 'in' 
              ? "Start with self-paced online courses or gain hands-on commercial experience at our practical farm workshops."
              : "Mushroom farming is a highly profitable business worldwide. From dry heat to freezing winters, our training teaches you to master indoor climate control and grow high-demand mushrooms year-round, anywhere."}
          </p>
        </div>

        {/* 1. ONLINE CULTIVATION PROGRAMS */}
        <h3 className="text-lg font-bold mb-6 flex items-center uppercase tracking-wide dark:text-white">
          <span className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-400 flex items-center justify-center mr-3 text-sm">1</span>
          Online Cultivation Programs {region === 'in' && "(Self-Paced)"}
        </h3>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {data.online.map((plan, i) => (
            <div key={plan.id} className={`relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border ${i === 1 ? 'border-purple-300 dark:border-purple-700 shadow-purple-100/50 dark:shadow-purple-900/20 shadow-xl' : 'border-gray-200 dark:border-gray-700'}`}>
              {/* Badges */}
              <div className="flex gap-2 absolute -top-3 left-6">
                {plan.badge && (
                  <span className={`px-3 py-1 text-[10px] font-bold tracking-wider uppercase rounded-full text-white shadow-sm ${i === 1 ? 'bg-purple-600' : 'bg-blue-500'}`}>
                    {plan.badge}
                  </span>
                )}
                {plan.badge2 && (
                  <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase rounded-full bg-green-500 text-white shadow-sm flex items-center gap-1">
                    <Zap className="w-3 h-3" /> {plan.badge2}
                  </span>
                )}
              </div>

              <div className="mt-4 border-b border-gray-100 dark:border-gray-700 pb-5 mb-5">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{plan.title}</h4>
                {plan.target && <p className="text-xs text-blue-600 dark:text-blue-400 font-medium mb-3">{plan.target}</p>}
                <div className="flex items-baseline gap-2">
                  <span className={`text-3xl font-black ${i === 1 ? 'text-purple-700 dark:text-purple-400' : 'text-gray-900 dark:text-white'}`}>
                    {data.currencySymbol}{plan.price}
                  </span>
                  <span className="text-xs text-gray-500 font-bold tracking-wide uppercase">{plan.feeType}</span>
                </div>
              </div>

              <div className="mb-8">
                <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">
                  {region === 'in' ? 'What you will learn:' : 'Key Learnings:'}
                </p>
                <ul className="space-y-3">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${i === 1 ? 'text-purple-500' : 'text-gray-400 dark:text-gray-500'}`} />
                      <span className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {feat.bold && <strong className="text-gray-900 dark:text-gray-100 font-semibold">{feat.bold} </strong>}
                        {feat.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link 
                href={`${pathname}/enroll?plan=${plan.id}`}
                className={`block w-full py-3.5 px-4 rounded-xl text-center text-sm font-bold transition-all shadow-md ${i === 1 ? 'bg-purple-600 hover:bg-purple-700 text-white' : 'bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:hover:bg-white dark:text-gray-900 text-white'}`}
              >
                {region === 'in' ? 'Join Mushroom Training →' : 'Enroll Now'}
              </Link>
            </div>
          ))}
        </div>

        {/* 2. OFFLINE WORKSHOPS (India Only) */}
        {region === 'in' && data.offline.length > 0 && (
          <>
            <h3 className="text-lg font-bold mb-6 flex items-center uppercase tracking-wide dark:text-white mt-16">
              <span className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-400 flex items-center justify-center mr-3 text-sm">2</span>
              Offline Practical Workshops (Hands-On At Farm)
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {data.offline.map((plan, i) => (
                <div key={plan.id} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col">
                  <div className="mb-4">
                    <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 tracking-widest uppercase bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded inline-block mb-3">
                      Focus: {plan.focus}
                    </span>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{plan.title}</h4>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-black text-green-600 dark:text-green-500">
                        {data.currencySymbol}{plan.price}
                      </span>
                      <span className="text-xs text-gray-500 font-bold tracking-wide uppercase">{plan.feeType}</span>
                    </div>
                  </div>

                  <div className="flex-grow mb-8 border-t border-gray-100 dark:border-gray-700 pt-5">
                    <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">What you will get:</p>
                    <ul className="space-y-3">
                      {plan.features.map((feat, idx) => (
                         <li key={idx} className="flex items-start gap-3 text-sm">
                         <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0"></div>
                         <span className="text-gray-600 dark:text-gray-300 leading-relaxed">
                           <strong className="text-gray-900 dark:text-gray-100 font-semibold">{feat.bold} </strong>
                           {feat.text}
                         </span>
                       </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mt-auto">
                    <a href="tel:+919876543210" className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 font-bold text-gray-700 dark:text-gray-300 text-sm transition-colors">
                      <Phone className="w-4 h-4" /> Call
                    </a>
                    <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold text-sm transition-colors shadow-md shadow-green-500/20">
                      <MessageCircle className="w-4 h-4" /> WhatsApp
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

      </div>
      
      {/* WHAT YOU WILL GET (Shared styling) */}
      <div className="w-full bg-white dark:bg-gray-800 py-16 border-y border-gray-100 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-center text-xl font-black uppercase tracking-wider mb-2 dark:text-white">What You Will Get</h3>
          <p className="text-center text-sm text-gray-500 mb-12">Everything you need to succeed in commercial mushroom farming.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
            {[
              { icon: ShieldCheck, title: "Lifetime Support", desc: "Dedicated Q&A panels and expert assistance to scale your ongoing farming venture." },
              { icon: Users, title: "Live Training", access: true, desc: "Participate in bi-weekly live Q&A. Gain exclusive access to session recordings." },
              { icon: MessageCircle, title: "WhatsApp Group", desc: "Access to an exclusive, active community of growers for real-time networking." },
              { icon: BookOpen, title: "Practical Guidance", desc: "Actionable, real-world insights that drive commercial success rather than just book theory." },
              { icon: Settings, title: "Farm Setup Help", desc: "Comprehensive support on designing blueprints and choosing the right equipment." },
              { icon: Award, title: "Certification", desc: "Receive a professional completion certificate to build trust with buyers." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-4 shadow-sm border border-purple-100 dark:border-purple-800/50">
                  <item.icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-sm">{item.title}</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed max-w-[200px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TRAINING CURRICULUM */}
      <div className="w-full max-w-4xl mx-auto px-4 py-16">
        <h3 className="text-center text-xl font-black uppercase tracking-wider mb-2 dark:text-white">Training Curriculum</h3>
        <p className="text-center text-sm text-gray-500 mb-12">Master every aspect of the commercial cultivation ecosystem.</p>
        
        <div className="grid grid-cols-2 gap-x-6 gap-y-8">
          {[
            { num: "1", title: "Oyster Mushroom", desc: "Complete grower's guide to substrate pasteurization, pinning, and harvesting for high-yield cluster cultivation." },
            { num: "2", title: "Button Mushroom", desc: "Step-by-step advanced method covering composting, casing, pinning, and temperature-controlled harvesting." },
            { num: "3", title: "Low-Cost Setup", desc: "Smart, budget-friendly infrastructure designs utilizing locally available materials without compromising yield." },
            { num: "4", title: "Fogger System", desc: "Automation masterclass: controls, nozzle selection, and installation basics for maintaining optimal air moisture levels." },
            { num: "5", title: "Temperature Control", desc: "Learn insulation techniques and management methods to combat extreme seasons and ensure year-round fruiting." },
            { num: "6", title: "Spawn Making", desc: "Scientific process of grain selection, sterilization, inoculation, and pure culture maintenance for high-quality seeds." },
            { num: "7", title: "Marketing", desc: "Strategic insights on target markets, wholesale buyer networking, B2B vendor tie-ups, and digital positioning." },
            { num: "8", title: "Dry Mushroom", desc: "Standard solar and mechanistic dehydration protocols to preserve shelf life and maintain premium color quality." },
            { num: "9", title: "Mushroom Powder", desc: "Processing value-added products, grinding standards, packaging, and entering health supplement sectors." },
            { num: "10", title: "Farm Setup", desc: "Commercial layout planning, ventilation design, rack clearance, and hygiene protocols for sterile environments." }
          ].map((item, i) => (
             <div key={i} className="flex gap-4">
                <div className="w-8 h-8 shrink-0 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-400 flex items-center justify-center font-bold text-sm border border-gray-200 dark:border-gray-700">
                  {item.num}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1 text-sm">{item.title}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
             </div>
          ))}
        </div>
      </div>

      {/* CALL TO ACTION BANNER */}
      <div className="w-full bg-gradient-to-r from-gray-900 to-indigo-900 dark:from-black dark:to-indigo-950 py-12 px-4 text-center">
        <h3 className="text-xs font-bold text-blue-400 tracking-widest uppercase mb-2">Commercial Farming Essentials</h3>
        <h2 className="text-xl sm:text-2xl font-black text-white mb-4">Need High-Yield Commercial Mushroom Seed?</h2>
        <p className="text-sm text-gray-300 max-w-xl mx-auto mb-6">High-quality, lab-grown F1 hybrid spawns for Button, Oyster, and Milky Mushrooms. Bulk delivery across India & global export.</p>
        <button className="bg-white text-indigo-900 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors text-sm">
          Explore Organic Spawn & Seeds ↗
        </button>
      </div>

      {/* WHY CHOOSE OUR TRAINING */}
      <div className="w-full max-w-4xl mx-auto px-4 py-16">
        <h3 className="text-center text-xl font-black uppercase tracking-wider mb-12 dark:text-white">Why Choose Our Training?</h3>
        <div className="grid grid-cols-2 gap-8 text-center">
           {[
              { title: "Expert Trainers", desc: "Learn from industry stalwarts with years of hands-on experience in India and abroad." },
              { title: "Practical Knowledge", desc: "We focus only on actionable, tried-and-tested procedures that work globally." },
              { title: "Business Guidance", desc: "Focus on global marketing, B2B wholesale, and farm ROI management." },
              { title: "Training Support", desc: "Lifetime technical guidance for button and oyster mushroom setup." }
           ].map((item, i) => (
             <div key={i}>
                <div className="w-10 h-10 mx-auto rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-sm">{item.title}</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
             </div>
           ))}
        </div>
      </div>

      {/* ECOSYSTEM / ABOUT */}
      <div className="w-full bg-white dark:bg-gray-800 py-16 border-y border-gray-100 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-center text-xl font-black uppercase tracking-wider mb-10 dark:text-white">Experience Our Commercial Ecosystem</h3>
          
          <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-6 md:p-10 border border-gray-100 dark:border-gray-800">
             <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wide">Start Your Commercial Mushroom Farming Journey {region === 'in' ? 'in India' : 'Globally'}</h4>
             
             <div className="space-y-4 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
               <p>
                 Looking for the best <strong>mushroom farming training</strong>? At Organic Mushrooms Farm, we provide the most comprehensive button and oyster mushroom training courses designed specifically for international global market standards. Our modules cover everything from raw substrate preparation to precision climate control.
               </p>
               <p>
                 Our <strong>online mushroom farming training</strong> is perfect for those who want to learn at their own pace. We comprehensively cover technical aspects of high-yield milky mushroom and oyster mushroom growing in detailed multi-page formats as well, ensuring you have a diverse commercial portfolio.
               </p>
               <p>
                 If you're wondering <strong>how to start mushroom farming business</strong> in USA, Australia, or India, our training is the ultimate first step. We provide the blueprint for building an indoor commercial mushroom plant that yields high-quality produce consistently. From students learning farming basics to established entrepreneurs scaling their units, our curriculum caters to all.
               </p>
             </div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="w-full max-w-4xl mx-auto px-4 py-16">
        <h3 className="text-center text-xl font-black uppercase tracking-wider mb-10 dark:text-white">Common Commercial Farming Queries</h3>
        <FAQAccordion faqs={trainingContent.faqs} />
      </div>

      {/* BOTTOM CTA */}
      <div className="w-full max-w-3xl mx-auto px-4 text-center pb-10">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Ready to Start Your Commercial Mushroom Farming Journey?</h3>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-colors text-sm inline-flex items-center gap-2">
          Book Consultant <span className="text-lg leading-none">→</span>
        </button>
      </div>

      {/* EEAT */}
      <div className="w-full max-w-3xl mx-auto px-4 text-center pt-8 border-t border-gray-200 dark:border-gray-800">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 mb-4">
          <ShieldCheck className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Certified E-E-A-T Excellence</h3>
        <div className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed text-left space-y-3 bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
          <p><strong className="text-gray-700 dark:text-gray-300">Experience & Expertise:</strong> With years of hands-on cultivation of over 10 mushroom varieties (Button, Oyster, Milky, Cordyceps) and world-class commercial infrastructure setups pan-India.</p>
          <p><strong className="text-gray-700 dark:text-gray-300">Authoritativeness & Trust:</strong> Certified by leading agricultural bodies, led by agri-tech expert Tanish Soni, and highly rated by thousands of trained farmers globally. Verified operations.</p>
        </div>
      </div>

    </div>
  );
}
