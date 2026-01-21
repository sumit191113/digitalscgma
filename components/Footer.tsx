import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ChevronRight, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Mission */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <img 
                src="https://i.postimg.cc/m2LfsRKp/image-removebg-preview.png" 
                alt="Samrat Chandra Gupta Maurya Academy Logo" 
                className="h-14 w-auto bg-white rounded-xl p-1 shadow-lg"
              />
              <div className="font-extrabold text-xl leading-tight">
                Samrat Chandra Gupta <br/> <span className="text-yellow-400 uppercase">Maurya Academy</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              <strong>Digital SCGM</strong> is dedicated to providing high-quality educational experiences to students in Barabanki. 
              Our focus remains on character building, digital proficiency, and academic excellence.
            </p>
            <div className="flex space-x-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="bg-white/5 p-2.5 rounded-lg hover:bg-yellow-500 hover:text-blue-900 transition-all border border-white/10" aria-label="Social Media Link">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h3 className="text-lg font-bold mb-8 text-yellow-400 border-l-4 border-yellow-400 pl-4 uppercase tracking-wider">Quick Navigation</h3>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Academics', 'Admissions', 'Gallery', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-gray-400 hover:text-yellow-400 text-sm flex items-center transition-colors group">
                    <ChevronRight size={14} className="mr-2 text-yellow-400 group-hover:translate-x-1 transition-transform" /> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-bold mb-8 text-yellow-400 border-l-4 border-yellow-400 pl-4 uppercase tracking-wider">Direct Contact</h3>
            <div className="space-y-5">
              <div className="flex gap-4">
                <MapPin className="text-yellow-400 shrink-0" size={20} />
                <p className="text-gray-400 text-sm leading-relaxed">Ahmadpur, Barabanki<br/>Uttar Pradesh - 225001</p>
              </div>
              <div className="flex gap-4">
                <Phone className="text-yellow-400 shrink-0" size={20} />
                <p className="text-gray-400 text-sm">+91 98765 43210</p>
              </div>
              <div className="flex gap-4">
                <Mail className="text-yellow-400 shrink-0" size={20} />
                <p className="text-gray-400 text-sm">info@scgma.edu.in</p>
              </div>
            </div>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h3 className="text-lg font-bold mb-8 text-yellow-400 border-l-4 border-yellow-400 pl-4 uppercase tracking-wider">Digital Newsletter</h3>
            <p className="text-gray-400 text-sm mb-6">Stay informed about admissions and results via our digital updates.</p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/5 border border-white/10 text-white px-5 py-3 rounded-xl outline-none w-full text-sm focus:ring-2 focus:ring-yellow-500 transition-all"
                required
              />
              <button className="w-full bg-yellow-500 text-blue-900 px-6 py-3 rounded-xl hover:bg-white transition-all text-sm font-extrabold uppercase tracking-widest shadow-lg">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>&copy; {new Date().getFullYear()} <strong>Samrat Chandra Gupta Maurya Academy</strong>. Built for Digital Excellence.</p>
          <div className="flex gap-6 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;