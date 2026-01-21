
import React from 'react';
import { FeeStructure } from '../types';
// Added ArrowRight to imports
import { FileText, CheckCircle, ArrowRight } from 'lucide-react';

const Admissions: React.FC = () => {
  const fees: FeeStructure[] = [
    { grade: 'Primary (Nursery - V)', admissionFee: 5000, tuitionFee: 1500, annualCharges: 3000 },
    { grade: 'Middle (VI - VIII)', admissionFee: 6000, tuitionFee: 1800, annualCharges: 4000 },
    { grade: 'Secondary (IX - X)', admissionFee: 8000, tuitionFee: 2200, annualCharges: 5000 },
  ];

  return (
    <section id="admissions" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Join Our Community</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Apply today to Samrat Chandra Gupta Maurya Academy. We follow a simple and transparent admission process for all grades.</p>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full"></div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Fee Information Section */}
          <div>
            <h3 className="text-2xl font-bold text-blue-900 mb-8 flex items-center gap-3">
              <span className="p-2 bg-blue-100 rounded-lg"><CheckCircle className="text-blue-600" /></span> 
              Academic Fee Structure
            </h3>
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-left">
                  <thead className="bg-blue-900 text-white">
                    <tr>
                      <th className="px-6 py-5 font-semibold">Grade</th>
                      <th className="px-6 py-5 font-semibold">Admission Fee</th>
                      <th className="px-6 py-5 font-semibold">Monthly Tuition</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {fees.map((fee, idx) => (
                      <tr key={idx} className="hover:bg-blue-50/50 transition-colors">
                        <td className="px-6 py-4 font-bold text-gray-800">{fee.grade}</td>
                        <td className="px-6 py-4 text-gray-600">₹{fee.admissionFee.toLocaleString()}</td>
                        <td className="px-6 py-4 text-gray-600">₹{fee.tuitionFee.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-12 bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                <FileText className="text-blue-600" size={20} /> Essential Documentation
              </h3>
              <ul className="space-y-4 text-gray-700">
                {['Birth Certificate (Original & Copy)', 'Transfer Certificate (Previous School)', '3 Recent Photographs', 'Aadhar Card (Student & Parent)'].map((doc, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Inquiry Form - Professional Polish */}
          <div className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full -mr-16 -mt-16"></div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Admission Inquiry Form</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="student-name" className="block text-sm font-semibold text-gray-700 mb-2">Student Full Name</label>
                  <input id="student-name" type="text" className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50" placeholder="Enter student name" required />
                </div>
                <div>
                  <label htmlFor="parent-name" className="block text-sm font-semibold text-gray-700 mb-2">Parent/Guardian Name</label>
                  <input id="parent-name" type="text" className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50" placeholder="Enter parent name" required />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Mobile Number</label>
                  <input id="phone" type="tel" className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50" placeholder="+91" required />
                </div>
                <div>
                  <label htmlFor="grade-apply" className="block text-sm font-semibold text-gray-700 mb-2">Target Class</label>
                  <select id="grade-apply" className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50 appearance-none">
                    <option>Select Class</option>
                    <option>Nursery - KG</option>
                    <option>Class 1 - 5</option>
                    <option>Class 6 - 8</option>
                    <option>Class 9 - 10</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Additional Information</label>
                <textarea id="message" rows={3} className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50" placeholder="Any specific requirements?"></textarea>
              </div>

              <button type="submit" className="w-full bg-blue-900 text-white py-4 rounded-xl font-bold hover:bg-blue-800 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 group">
                Send Admission Inquiry <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-center text-xs text-gray-400 mt-4 italic">Our admissions team will contact you within 24-48 hours.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;
