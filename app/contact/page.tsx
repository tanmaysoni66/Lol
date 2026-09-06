import { Metadata } from "next";
import Link from "next/link";
import { 
  Phone, MessageCircle, Mail, MapPin, 
  CheckCircle2, BookOpen, Factory, Settings, TestTube, Truck, Calendar, HelpCircle, ChevronDown 
} from "lucide-react";
import StructuredData from "./StructuredData";
import contactMetadata from "./metadata";

export const metadata: Metadata = contactMetadata;

export default function ContactPage() {
  const faqs = [
    { q: "How can I contact Organic Mushroom Farm?", a: "You can contact us by phone or WhatsApp at +91 9203544140 or email us at support@mushroomtraining.online." },
    { q: "Where is Organic Mushroom Farm located?", a: "Our location is Katangi, Jabalpur, Madhya Pradesh, India." },
    { q: "Do you provide mushroom farming training?", a: "Yes, information about our available mushroom training programs can be found on our Training page. You can also contact us directly for training-related enquiries." },
    { q: "Can I get guidance for starting a mushroom farm?", a: "Yes. You can contact us to discuss your mushroom farming requirements, project plans, infrastructure needs, and other related questions." },
    { q: "Do you provide mushroom farm setup services?", a: "You can contact us regarding mushroom farm setup and turnkey project requirements. Our team can discuss your project and provide relevant information." },
    { q: "Can I visit the mushroom farm?", a: "Farm visits may be available with prior confirmation. Please contact us before visiting so that we can confirm the schedule and availability." },
    { q: "How can I book a consultation?", a: "You can contact us through WhatsApp or phone at +91 9203544140 or submit the enquiry form on this page." },
  ];

  const services = [
    { title: "Mushroom Training", desc: "Learn the fundamentals and practical aspects of mushroom cultivation through our mushroom training programs.", icon: BookOpen, link: "/training", label: "Explore Training" },
    { title: "Mushroom Farm Setup", desc: "Planning to start a mushroom farm? Get guidance related to farm planning, infrastructure, production setup, and other project requirements.", icon: Factory, link: "/farm-setup", label: "Explore Farm Setup" },
    { title: "Turnkey Mushroom Project", desc: "Looking for complete support for your mushroom farming project? Contact us to discuss your project requirements and get suitable guidance.", icon: Settings, link: "/turnkey-projects", label: "Learn About Turnkey Projects" },
    { title: "Mushroom Spawn", desc: "Contact us for information about mushroom spawn availability, varieties, quantities, and requirements.", icon: TestTube, link: "/spawn", label: "Enquire About Spawn" },
    { title: "Compost Unit", desc: "Learn about mushroom compost requirements and compost unit setup for mushroom cultivation.", icon: Truck, link: "/compost", label: "Explore Compost Solutions" },
    { title: "Site Visit & Consultation", desc: "Get professional guidance based on your proposed mushroom farming project through site visit and consultation services.", icon: Calendar, link: "/on-site-visit", label: "Book a Consultation" },
  ];

  return (
    <div className="min-h-screen bg-transparent relative z-10">
      <StructuredData />
      
      {/* Hero Section */}
      <section className="pt-20 pb-10 px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-semibold mb-2">
            <Phone className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Contact Organic <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-500">Mushroom Farm</span>
          </h1>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
            Have questions about mushroom farming, training, farm setup, spawn, compost, or project consultation? Our team is here to help you get the right information and guidance for your mushroom farming journey.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
            <a href="tel:+919203544140" className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-semibold rounded-full hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-sm">
              <Phone className="w-3.5 h-3.5" />
              Call Now
            </a>
            <a href="https://wa.me/919203544140" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-[#25D366] text-white text-xs font-semibold rounded-full hover:bg-[#20bd5a] transition-colors shadow-sm">
              <MessageCircle className="w-3.5 h-3.5" />
              WhatsApp Us
            </a>
            <a href="#enquiry-form" className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-semibold rounded-full hover:bg-emerald-200 dark:hover:bg-emerald-500/20 transition-colors shadow-sm border border-emerald-200 dark:border-emerald-500/20">
              <Mail className="w-3.5 h-3.5" />
              Send an Enquiry
            </a>
          </div>
        </div>
      </section>

      {/* Main Content & Contact Cards */}
      <section className="py-12 md:py-20 px-4 md:px-6 max-w-7xl mx-auto space-y-16">
        
        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-1 gap-4 max-w-2xl mx-auto">
          <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-5 rounded-3xl shadow-sm border border-slate-200/50 dark:border-slate-800/50 flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4">
            <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div className="flex-grow space-y-1">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Call or WhatsApp Us</h3>
              <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">+91 9203544140</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                For quick assistance regarding mushroom farming, training programs, project setup, consultation, and other services.
              </p>
            </div>
            <div className="pt-2 md:pt-0 shrink-0">
              <a href="https://wa.me/919203544140" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                Call / WhatsApp
              </a>
            </div>
          </div>

          <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-5 rounded-3xl shadow-sm border border-slate-200/50 dark:border-slate-800/50 flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4">
            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-500/10 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div className="flex-grow space-y-1">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Email Us</h3>
              <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 break-all">support@mushroomtraining.online</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                For training enquiries, business enquiries, project requirements, and detailed information.
              </p>
            </div>
            <div className="pt-2 md:pt-0 shrink-0">
              <a href="mailto:support@mushroomtraining.online" className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                Send Email
              </a>
            </div>
          </div>

          <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-5 rounded-3xl shadow-sm border border-slate-200/50 dark:border-slate-800/50 flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4">
            <div className="w-10 h-10 bg-orange-100 dark:bg-orange-500/10 rounded-full flex items-center justify-center text-orange-600 dark:text-orange-400 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="flex-grow space-y-1">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Visit Our Location</h3>
              <p className="text-sm font-semibold text-orange-600 dark:text-orange-400">Katangi, Jabalpur, MP, India</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                If you would like to visit our farm or discuss a mushroom farming project in person, please contact us in advance.
              </p>
            </div>
            <div className="pt-2 md:pt-0 shrink-0">
              <a href="https://maps.google.com/?q=Organic+Mushroom+Farm+Katangi+Jabalpur" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                Get Directions
              </a>
            </div>
          </div>
        </div>

        {/* Enquiry Form and Why Contact Us */}
        <div id="enquiry-form" className="max-w-3xl mx-auto items-center scroll-mt-24 space-y-8">
          
          <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-6 md:p-8 rounded-3xl shadow-sm border border-slate-200/50 dark:border-slate-800/50 text-center space-y-4">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Need Detailed Assistance?</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-xl mx-auto">
              If you have specific requirements regarding farm setup, bulk spawn, or project consultation, please fill out our detailed enquiry form.
            </p>
            <div className="pt-2">
              <Link href="/enquiry" className="inline-flex items-center justify-center gap-1.5 px-6 py-2.5 bg-emerald-600 text-white text-sm font-semibold rounded-full hover:bg-emerald-700 transition-colors shadow-sm">
                Fill Enquiry Form
              </Link>
            </div>
          </div>
          
          <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-6 md:p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Why Contact Us?</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">Your Mushroom Farming Journey Starts With the Right Guidance</p>
              
              <ul className="space-y-5">
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">Practical Guidance</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mt-1">Get useful guidance to understand mushroom cultivation and plan your farming activities effectively.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">Training Support</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mt-1">Learn mushroom cultivation through structured training designed for people interested in starting or improving mushroom farming.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">Project Consultation</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mt-1">Discuss your mushroom farming project requirements and get guidance based on your proposed production setup.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">Farm Setup Assistance</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mt-1">Get information and guidance related to mushroom farm infrastructure, growing rooms, equipment, and project planning.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">Direct Communication</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mt-1">Connect directly with our team through phone, WhatsApp, or email for quick and convenient communication.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Visit Farm CTA */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900 p-6 md:p-8 rounded-3xl shadow-sm text-white space-y-4">
              <h3 className="text-xl font-bold">Visit Our Mushroom Farm</h3>
              <p className="font-medium text-emerald-400 text-sm">Experience Mushroom Farming in Practice.</p>
              <p className="text-sm text-slate-300 leading-relaxed">
                Want to understand mushroom farming beyond theory? You can enquire about visiting our mushroom farming facility in Katangi, Jabalpur, Madhya Pradesh and learn more about mushroom cultivation and farm operations. Please contact us in advance before planning your visit so that we can confirm availability and schedule.
              </p>
              <div className="pt-2">
                <Link href="/on-site-visit" className="inline-flex items-center justify-center px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold rounded-full transition-colors shadow-sm">
                  Book a Site Visit
                </Link>
              </div>
            </div>
          </div>

        {/* Services Grid */}
        <div className="space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">How Can We Help You?</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Explore Our Mushroom Farming Services</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col items-start text-left group hover:border-emerald-500/50 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{service.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 flex-grow">{service.desc}</p>
                <Link href={service.link} className="text-sm font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors flex items-center gap-1.5 mt-auto">
                  {service.label} &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-6 md:p-10 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 space-y-8 max-w-4xl mx-auto">
          <div className="text-center space-y-3 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Frequently Asked Questions</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Contact & Mushroom Farming FAQs</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group bg-white/50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer p-5 font-semibold text-slate-900 dark:text-white text-sm md:text-base">
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-5 pb-5 pt-0 text-slate-600 dark:text-slate-400 text-sm leading-relaxed border-t border-slate-200 dark:border-slate-800/50 ml-[44px] mr-4 mt-2">
                  <div className="pt-3">{faq.a}</div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="py-12 md:py-16 px-4 md:px-6 max-w-7xl mx-auto w-full relative z-10">
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-4 rounded-3xl shadow-sm border border-slate-200/50 dark:border-slate-800/50 overflow-hidden">
          <iframe
            src="https://maps.google.com/maps?q=Organic+Mushroom+Farm,+Katangi,+Jabalpur,+Madhya+Pradesh+483105,+India&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="450"
            style={{ border: 0, borderRadius: '1.25rem' }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map of Organic Mushroom Farm, Katangi, Jabalpur"
          ></iframe>
        </div>
      </section>

      {/* Footer Callout */}
      <section className="py-16 md:py-24 px-4 bg-emerald-600/90 dark:bg-emerald-900/90 backdrop-blur-md text-center relative z-10">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-black text-white">Let's Build Your Mushroom Farming Project Together</h2>
          <p className="text-emerald-100 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Whether you are starting mushroom farming for the first time, looking for professional training, planning a new farm, or seeking project consultation, we are ready to hear from you. Have a question? Have a project idea? Let's talk.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <a href="tel:+919203544140" className="inline-flex items-center justify-center gap-1.5 px-6 py-3 bg-white text-emerald-700 text-sm font-bold rounded-full hover:bg-emerald-50 transition-colors shadow-lg">
              <Phone className="w-4 h-4" /> Call Now
            </a>
            <a href="https://wa.me/919203544140" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-1.5 px-6 py-3 bg-[#25D366] text-white text-sm font-bold rounded-full hover:bg-[#20bd5a] transition-colors shadow-lg border border-[#20bd5a]">
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
      
      {/* Map SEO snippet visually hidden */}
      <div className="hidden">
        <h3>Find Us</h3>
        <p>Organic Mushroom Farm</p>
        <p>Katangi, Jabalpur, Madhya Pradesh, India</p>
        <p>For better local SEO, keep the same business name, location, and contact details consistently across your website and business listings.</p>
      </div>
    </div>
  );
}
