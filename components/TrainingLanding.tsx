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
    <div className="w-full bg-transparent min-h-screen pb-8 text-gray-800 dark:text-gray-200 font-sans selection:bg-purple-200 dark:selection:bg-purple-900">
      
      {/* HEADER SECTION */}
      <div className="w-full max-w-4xl mx-auto px-3 pt-3 pb-2">
        <h1 className="text-center text-base sm:text-lg font-black tracking-tight text-purple-700 dark:text-purple-400 uppercase mb-3">
          Mushroom Cultivation Training
        </h1>

        {/* Region Toggle */}
        <div className="flex justify-center mb-6">
          <div className="bg-transparent backdrop-blur-md p-1 rounded-full inline-flex shadow-xl border border-white/20 dark:border-white/10">
            <Link 
              href="/training"
              className={`px-3 py-1.5 rounded-full text-[10px] font-semibold transition-all ${pathname === '/training' ? 'bg-purple-600 text-white shadow-md' : 'text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'}`}
            >
              🇮🇳 India (INR)
            </Link>
            <Link 
              href="/usatraining"
              className={`px-3 py-1.5 rounded-full text-[10px] font-semibold transition-all ${pathname === '/usatraining' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}`}
            >
              🌎 USA & Global (USD)
            </Link>
          </div>
        </div>

        <div className="text-center max-w-2xl mx-auto mb-5">
          <h2 className="text-sm font-bold mb-1 dark:text-white">Choose Your Training Program</h2>
          <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
            {region === 'in' 
              ? "Start with self-paced online courses or gain hands-on commercial experience at our practical farm workshops."
              : "Mushroom farming is a highly profitable business worldwide. From dry heat to freezing winters, our training teaches you to master indoor climate control and grow high-demand mushrooms year-round, anywhere."}
          </p>
        </div>

        {/* 1. ONLINE CULTIVATION PROGRAMS */}
        <h3 className="text-sm font-bold mb-3 flex items-center uppercase tracking-wide dark:text-white">
          <span className="w-4 h-4 rounded-full bg-purple-500/20 text-purple-700 dark:text-purple-400 flex items-center justify-center mr-2 text-[10px]">1</span>
          Online Cultivation Programs {region === 'in' && "(Self-Paced)"}
        </h3>

        <div className="grid md:grid-cols-2 gap-3 mb-6">
          {data.online.map((plan, i) => (
            <div key={plan.id} className={`relative bg-transparent backdrop-blur-xl rounded-xl p-3 shadow-xl border ${i === 1 ? 'border-purple-400/50 dark:border-purple-500/30 shadow-purple-500/10' : 'border-white/20 dark:border-white/10'}`}>
              {/* Badges */}
              <div className="flex gap-2 absolute -top-2.5 left-4">
                {plan.badge && (
                  <span className={`px-2 py-0.5 text-[9px] font-bold tracking-wider uppercase rounded-full text-white shadow-sm ${i === 1 ? 'bg-purple-600' : 'bg-blue-500'}`}>
                    {plan.badge}
                  </span>
                )}
                {plan.badge2 && (
                  <span className="px-2 py-0.5 text-[9px] font-bold tracking-wider uppercase rounded-full bg-green-500 text-white shadow-sm flex items-center gap-1">
                    <Zap className="w-2.5 h-2.5" /> {plan.badge2}
                  </span>
                )}
              </div>

              <div className="mt-3 border-b border-gray-200/20 dark:border-gray-700/50 pb-3 mb-3">
                <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-0.5">{plan.title}</h4>
                {plan.target && <p className="text-[9px] text-blue-600 dark:text-blue-400 font-medium mb-1.5">{plan.target}</p>}
                <div className="flex items-baseline gap-1.5">
                  <span className={`text-xl font-black ${i === 1 ? 'text-purple-700 dark:text-purple-400' : 'text-gray-900 dark:text-white'}`}>
                    {data.currencySymbol}{plan.price}
                  </span>
                  <span className="text-[10px] text-gray-500 font-bold tracking-wide uppercase">{plan.feeType}</span>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-[9px] font-bold text-gray-500 uppercase tracking-wider mb-2">
                  {region === 'in' ? 'What you will learn:' : 'Key Learnings:'}
                </p>
                <ul className="space-y-1.5">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-1.5 text-[11px]">
                      <CheckCircle2 className={`w-3 h-3 shrink-0 mt-0.5 ${i === 1 ? 'text-purple-500' : 'text-gray-400 dark:text-gray-500'}`} />
                      <span className="text-gray-700 dark:text-gray-300 leading-tight">
                        {feat.bold && <strong className="text-gray-900 dark:text-gray-100 font-semibold">{feat.bold} </strong>}
                        {feat.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link 
                href={`${pathname}/enroll?plan=${plan.id}`}
                className={`block w-full py-2 px-3 rounded-lg text-center text-[11px] font-bold transition-all shadow-md ${i === 1 ? 'bg-purple-600 hover:bg-purple-700 text-white' : 'bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:hover:bg-white dark:text-gray-900 text-white'}`}
              >
                {region === 'in' ? 'Join Mushroom Training →' : 'Enroll Now'}
              </Link>
            </div>
          ))}
        </div>

        {/* 2. OFFLINE WORKSHOPS (India Only) */}
        {region === 'in' && data.offline.length > 0 && (
          <>
            <h3 className="text-sm font-bold mb-3 flex items-center uppercase tracking-wide dark:text-white mt-8">
              <span className="w-4 h-4 rounded-full bg-purple-500/20 text-purple-700 dark:text-purple-400 flex items-center justify-center mr-2 text-[10px]">2</span>
              Offline Practical Workshops (Hands-On At Farm)
            </h3>

            <div className="grid md:grid-cols-2 gap-3 mb-6">
              {data.offline.map((plan, i) => (
                <div key={plan.id} className="bg-transparent backdrop-blur-xl rounded-xl p-3 shadow-xl border border-white/20 dark:border-white/10 flex flex-col">
                  <div className="mb-2.5">
                    <span className="text-[8px] font-bold text-blue-600 dark:text-blue-400 tracking-widest uppercase bg-blue-500/10 px-2 py-0.5 rounded inline-block mb-1.5">
                      Focus: {plan.focus}
                    </span>
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1">{plan.title}</h4>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-lg font-black text-green-600 dark:text-green-500">
                        {data.currencySymbol}{plan.price}
                      </span>
                      <span className="text-[10px] text-gray-500 font-bold tracking-wide uppercase">{plan.feeType}</span>
                    </div>
                  </div>

                  <div className="flex-grow mb-4 border-t border-gray-200/20 dark:border-gray-700/50 pt-3">
                    <p className="text-[9px] font-bold text-gray-500 uppercase tracking-wider mb-2">What you will get:</p>
                    <ul className="space-y-1.5">
                      {plan.features.map((feat, idx) => (
                         <li key={idx} className="flex items-start gap-1.5 text-[11px]">
                         <div className="w-1 h-1 rounded-full bg-green-500 mt-1.5 shrink-0"></div>
                         <span className="text-gray-700 dark:text-gray-300 leading-tight">
                           <strong className="text-gray-900 dark:text-gray-100 font-semibold">{feat.bold} </strong>
                           {feat.text}
                         </span>
                       </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mt-auto">
                    <a href="tel:+919203544140" className="flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg border border-gray-300/30 dark:border-gray-600/30 hover:bg-white/5 font-bold text-gray-800 dark:text-gray-200 text-[10px] transition-colors">
                      <Phone className="w-3 h-3" /> Call
                    </a>
                    <a href="https://wa.me/919203544140" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg bg-green-500/90 hover:bg-green-500 text-white font-bold text-[10px] transition-colors shadow-md">
                      <MessageCircle className="w-3 h-3" /> WhatsApp
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

      </div>
      
      {/* WHAT YOU WILL GET (Shared styling) */}
      <div className="w-full bg-transparent backdrop-blur-sm py-6 border-y border-white/10 dark:border-gray-800/50">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-center text-base font-black uppercase tracking-wider mb-0.5 dark:text-white">What You Will Get</h3>
          <p className="text-center text-[10px] text-gray-500 mb-6">Everything you need to succeed in commercial mushroom farming.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-5">
            {[
              { icon: ShieldCheck, title: "Lifetime Support", desc: "Dedicated Q&A panels and expert assistance to scale your ongoing farming venture." },
              { icon: Users, title: "Live Training", access: true, desc: "Participate in bi-weekly live Q&A. Gain exclusive access to session recordings." },
              { icon: MessageCircle, title: "WhatsApp Group", desc: "Access to an exclusive, active community of growers for real-time networking." },
              { icon: BookOpen, title: "Practical Guidance", desc: "Actionable, real-world insights that drive commercial success rather than just book theory." },
              { icon: Settings, title: "Farm Setup Help", desc: "Comprehensive support on designing blueprints and choosing the right equipment." },
              { icon: Award, title: "Certification", desc: "Receive a professional completion certificate to build trust with buyers." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-1.5 shadow-sm border border-purple-500/20">
                  <item.icon className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-0.5 text-[11px]">{item.title}</h4>
                <p className="text-[9px] text-gray-600 dark:text-gray-400 leading-tight max-w-[140px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TRAINING CURRICULUM */}
      <div className="w-full max-w-4xl mx-auto px-4 py-8">
        <h3 className="text-center text-base font-black uppercase tracking-wider mb-0.5 dark:text-white">Training Curriculum</h3>
        <p className="text-center text-[10px] text-gray-500 mb-6">Master every aspect of the commercial cultivation ecosystem.</p>
        
        <div className="grid grid-cols-2 gap-x-3 gap-y-4">
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
             <div key={i} className="flex gap-2">
                <div className="w-5 h-5 shrink-0 rounded-full bg-transparent text-gray-700 dark:text-gray-300 flex items-center justify-center font-bold text-[9px] border border-white/20 dark:border-white/10 backdrop-blur-sm">
                  {item.num}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-0.5 text-[11px]">{item.title}</h4>
                  <p className="text-[9px] text-gray-600 dark:text-gray-400 leading-tight">{item.desc}</p>
                </div>
             </div>
          ))}
        </div>
      </div>

      {/* CALL TO ACTION BANNER */}
      <div className="w-full max-w-4xl mx-auto my-4 rounded-xl bg-gradient-to-r from-gray-900/60 to-indigo-900/60 backdrop-blur-xl dark:from-black/40 dark:to-indigo-950/40 py-6 px-4 text-center border border-white/20 shadow-xl">
        <h3 className="text-[9px] font-bold text-blue-300 tracking-widest uppercase mb-1">Commercial Farming Essentials</h3>
        <h2 className="text-base sm:text-lg font-black text-white mb-2">Need High-Yield Commercial Mushroom Seed?</h2>
        <p className="text-[10px] text-gray-300 max-w-xl mx-auto mb-4">High-quality, lab-grown F1 hybrid spawns for Button, Oyster, and Milky Mushrooms. Bulk delivery across India & global export.</p>
        <button className="bg-white text-indigo-900 font-bold py-1.5 px-5 rounded-full shadow-lg hover:bg-gray-100 transition-colors text-[11px]">
          Explore Organic Spawn & Seeds ↗
        </button>
      </div>

      {/* WHY CHOOSE OUR TRAINING */}
      <div className="w-full max-w-4xl mx-auto px-4 py-8">
        <h3 className="text-center text-base font-black uppercase tracking-wider mb-6 dark:text-white">Why Choose Our Training?</h3>
        <div className="grid grid-cols-2 gap-4 text-center">
           {[
              { title: "Expert Trainers", desc: "Learn from industry stalwarts with years of hands-on experience in India and abroad." },
              { title: "Practical Knowledge", desc: "We focus only on actionable, tried-and-tested procedures that work globally." },
              { title: "Business Guidance", desc: "Focus on global marketing, B2B wholesale, and farm ROI management." },
              { title: "Training Support", desc: "Lifetime technical guidance for button and oyster mushroom setup." }
           ].map((item, i) => (
             <div key={i}>
                <div className="w-7 h-7 mx-auto rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-1.5 border border-blue-500/20">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-0.5 text-[11px]">{item.title}</h4>
                <p className="text-[9px] text-gray-600 dark:text-gray-400 leading-tight">{item.desc}</p>
             </div>
           ))}
        </div>
      </div>

      {/* ECOSYSTEM / ABOUT */}
      {region === "in" && (
        <div className="w-full bg-transparent py-10 border-y border-gray-200/20 dark:border-gray-700/20">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-center text-lg font-black uppercase tracking-wider mb-6 dark:text-white">Experience Our Commercial Ecosystem</h3>
            
            <div className="bg-transparent rounded-2xl p-5 md:p-6 border border-gray-200/20 dark:border-gray-700/20">
              <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">Start Your Commercial Mushroom Farming Journey {region === 'in' ? 'in India' : 'Globally'}</h4>
              
              <div className="space-y-3 text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
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
      )}

      {/* FAQs */}
      <div className="w-full max-w-4xl mx-auto px-4 py-10">
        <h3 className="text-center text-lg font-black uppercase tracking-wider mb-6 dark:text-white">Common Commercial Farming Queries</h3>
        <div className="bg-transparent">
          <FAQAccordion faqs={trainingContent.faqs} />
        </div>
      </div>

      {/* BOTTOM CTA */}
      <div className="w-full max-w-3xl mx-auto px-4 text-center pb-8">
        <h3 className="text-base font-bold text-gray-900 dark:text-white mb-4">Ready to Start Your Commercial Mushroom Farming Journey?</h3>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2.5 px-6 rounded-lg shadow-lg transition-colors text-xs inline-flex items-center gap-2">
          Book Consultant <span className="text-base leading-none">→</span>
        </button>
      </div>

      {/* EEAT */}
      <div className="w-full max-w-3xl mx-auto px-4 text-center pt-6 border-t border-gray-200/50 dark:border-gray-700/50">
        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-purple-100/50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 mb-3">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <h3 className="text-base font-bold text-gray-900 dark:text-white mb-3">Certified E-E-A-T Excellence</h3>
        <div className="text-[10px] text-gray-500 dark:text-gray-400 leading-relaxed text-left space-y-2 bg-transparent p-4 rounded-xl border border-gray-200/20 dark:border-gray-700/20">
          <p><strong className="text-gray-700 dark:text-gray-300">Experience & Expertise:</strong> With years of hands-on cultivation of over 10 mushroom varieties (Button, Oyster, Milky, Cordyceps) and world-class commercial infrastructure setups pan-India.</p>
          <p><strong className="text-gray-700 dark:text-gray-300">Authoritativeness & Trust:</strong> Certified by leading agricultural bodies, led by agri-tech expert Tanish Soni, and highly rated by thousands of trained farmers globally. Verified operations.</p>
        </div>
      </div>

      {region === "us" && (
        <div className="w-full bg-transparent py-10 border-t border-gray-200/20 dark:border-gray-700/20 mt-10">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-center text-lg font-black uppercase tracking-wider mb-6 dark:text-white">
              Build a Highly Profitable Organic Mushroom Farm: A Global Blueprint
            </h3>

            <div className="bg-transparent rounded-2xl p-5 md:p-6 border border-gray-200/20 dark:border-gray-700/20 mb-8">
              <div className="space-y-4 text-[11px] md:text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  The demand for fresh, locally grown organic mushrooms is skyrocketing worldwide. From bustling local farmer&apos;s markets to high-end restaurants and organic grocery chains, buyers are constantly looking for premium-quality Oyster, Button, and specialty mushrooms.
                </p>
                <p>
                  Our comprehensive online mushroom cultivation training program is specifically designed to help you tap into this lucrative agricultural market, no matter where you live. Whether you want to start a small homestead project in your basement or launch a full-scale commercial indoor mushroom farm, we provide the exact blueprints, climate control strategies, and scalable business models you need to succeed globally.
                </p>
              </div>
            </div>

            <h4 className="text-center text-base font-bold uppercase tracking-wider mb-6 dark:text-white">
              Why Choose Indoor Mushroom Cultivation?
            </h4>
            <div className="grid md:grid-cols-3 gap-4 mb-10">
              <div className="bg-transparent p-4 rounded-xl border border-gray-200/20 dark:border-gray-700/20 text-center">
                <h5 className="font-bold text-gray-900 dark:text-white mb-2 text-xs">Year-Round Harvest</h5>
                <p className="text-[10px] md:text-[11px] text-gray-600 dark:text-gray-400">
                  With the right indoor setup, you become completely independent of outside weather conditions. This allows for continuous, predictable income, whether you face freezing winters or scorching summers.
                </p>
              </div>
              <div className="bg-transparent p-4 rounded-xl border border-gray-200/20 dark:border-gray-700/20 text-center">
                <h5 className="font-bold text-gray-900 dark:text-white mb-2 text-xs">High Yield, Small Space</h5>
                <p className="text-[10px] md:text-[11px] text-gray-600 dark:text-gray-400">
                  You don&apos;t need acres of expensive agricultural land. Our training teaches you how to grow hundreds of pounds of mushrooms in a standard spare room, garage, or custom grow tent using vertical farming techniques.
                </p>
              </div>
              <div className="bg-transparent p-4 rounded-xl border border-gray-200/20 dark:border-gray-700/20 text-center">
                <h5 className="font-bold text-gray-900 dark:text-white mb-2 text-xs">Fast Return on Investment (ROI)</h5>
                <p className="text-[10px] md:text-[11px] text-gray-600 dark:text-gray-400">
                  Unlike traditional farming, mushrooms have a rapid growth cycle. With our step-by-step mushroom farming business plan, you can start seeing returns on your investment in just a matter of weeks.
                </p>
              </div>
            </div>

            <h4 className="text-center text-base font-bold uppercase tracking-wider mb-6 dark:text-white">
              Frequently Asked Questions (FAQs)
            </h4>
            
            <div className="space-y-3">
              {[
                {
                  q: "Do I need a large farm to take this online mushroom cultivation course?",
                  a: "No! Our Basic Cultivation module teaches you how to start a profitable mushroom business in small spaces like a spare room, garage, or basement using strictly controlled indoor environments."
                },
                {
                  q: "Are the climate control methods suitable for my local weather?",
                  a: "Absolutely. The Advanced Commercial Training covers automated HVAC, humidifiers, and fogger systems that help you maintain the perfect fruiting temperatures indoors, regardless of how hot, cold, dry, or humid your outside weather conditions are."
                },
                {
                  q: "How can I sell my mushrooms locally?",
                  a: "The advanced program includes a dedicated module on B2B sales and marketing strategies. You will learn exactly how to approach local farmer's markets, organic grocery stores, and local restaurants for highly profitable wholesale tie-ups."
                },
                {
                  q: "What payment methods are accepted for international students?",
                  a: "We accept all major global credit and debit cards through our secure payment gateways. For your convenience and global accessibility, our course pricing is clearly listed in USD ($)."
                },
                {
                  q: "Is mushroom farming a profitable business model?",
                  a: "Yes, specialty organic mushrooms like Oyster and Button carry a premium price tag at farmer's markets and organic stores worldwide. Our Advanced Commercial Training covers specific marketing and sales strategies to help you connect with high-paying local buyers, restaurants, and wholesalers to maximize your profit margins."
                },
                {
                  q: "Do I need a large agricultural property to get started?",
                  a: "Not at all. Our step-by-step guides focus heavily on controlled indoor environments. The Basic Cultivation plan is perfect for utilizing small spaces like a spare bedroom, while the Advanced Plan teaches you how to scale up using vertical racking systems in commercial warehouses, basements, or large sheds."
                },
                {
                  q: "Where will I get the equipment and mushroom spawn in my country?",
                  a: "Our training teaches you the fundamental universal principles of substrate preparation, sterilization, and climate control. The equipment required (like humidifiers, HEPA filters, and HVAC units) can be easily sourced from local hardware stores or global online retailers like Amazon. We also guide you on how to identify and select high-quality spawn from reliable regional suppliers near you."
                },
                {
                  q: "How much time does it take to maintain a mushroom grow room daily?",
                  a: "Once your automated climate systems (covered in our Advanced Plan) are set up, daily maintenance is minimal. For a basic home setup, it takes less than 30 minutes a day to monitor humidity, temperature, and fresh air exchange."
                },
                {
                  q: "Which mushroom varieties are best to grow in my specific climate?",
                  a: "We cover cultivation techniques for multiple varieties to ensure global success. For colder regions, traditional Button and Oyster mushrooms are excellent choices. If you live in a hotter, tropical, or arid climate, our Advanced program includes training on high-temperature varieties like Milky Mushrooms, ensuring you can grow successfully no matter where you are located on the map."
                },
                {
                  q: "Will I receive ongoing support after purchasing the course?",
                  a: "Absolutely. We understand that hands-on farming comes with unique challenges. Enrolling in our Advanced Commercial Training gives you exclusive access to our private community and ongoing technical support to help you troubleshoot any contamination issues or climate control problems as you scale your farm."
                },
                {
                  q: "Are the climate control metrics easy to understand for international growers?",
                  a: "Yes, the training is designed to be universally applicable. We explain the exact science behind perfect humidity, airflow, and temperature control, making it easy to adapt the settings on your local thermostats and hygrometers, whether you measure in Celsius or Fahrenheit."
                }
              ].map((faq, i) => (
                <div key={i} className="bg-transparent rounded-xl p-4 md:p-5 border border-gray-200/20 dark:border-gray-700/20">
                  <h5 className="text-[12px] md:text-[13px] font-bold text-gray-900 dark:text-white mb-2 flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400">Q:</span> {faq.q}
                  </h5>
                  <p className="text-[10px] md:text-[11px] text-gray-700 dark:text-gray-300 leading-relaxed pl-5">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
