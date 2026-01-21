import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div>
            <h4 className="text-yellow-400 font-bold uppercase tracking-widest text-sm mb-2">Get in Touch</h4>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact Us</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-800 p-3 rounded-lg">
                  <MapPin className="text-yellow-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">School Address</h3>
                  <p className="text-blue-200">Ahmadpur, Barabanki<br/>Uttar Pradesh, India - 225001</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-800 p-3 rounded-lg">
                  <Phone className="text-yellow-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Phone Numbers</h3>
                  <p className="text-blue-200">+91 98765 43210<br/>+91 5248 123456</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-800 p-3 rounded-lg">
                  <Mail className="text-yellow-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Email Address</h3>
                  <p className="text-blue-200">info@scgma.edu.in<br/>admissions@scgma.edu.in</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-800 p-3 rounded-lg">
                  <Clock className="text-yellow-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Office Hours</h3>
                  <p className="text-blue-200">Mon - Sat: 8:00 AM - 3:00 PM<br/>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Embed */}
          <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-blue-800 h-96 lg:h-auto">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56903.62645672235!2d81.16850508535154!3d26.937827599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399958aa260d8b5b%3A0x6d9f345862295a63!2sBarabanki%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="School Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;