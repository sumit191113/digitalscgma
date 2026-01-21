import React from 'react';
import { CheckCircle } from 'lucide-react';

const Academics: React.FC = () => {
  return (
    <section id="academics" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">Academic Excellence</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Curriculum & Classes</h2>
          </div>
          <div className="hidden md:block w-1/3 bg-gray-200 h-1 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="border rounded-xl p-8 hover:shadow-xl transition-shadow bg-blue-50">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Primary Wing</h3>
            <p className="text-gray-600 mb-6">Focus on foundational literacy, numeracy, and creative expression through activity-based learning.</p>
            <ul className="space-y-3">
              {['Classes: Nursery to V', 'Play-way Method', 'Art & Craft', 'Phonics & Basic Math'].map(item => (
                <li key={item} className="flex items-center gap-2 text-gray-700">
                  <CheckCircle size={18} className="text-green-500" /> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2 */}
          <div className="border rounded-xl p-8 hover:shadow-xl transition-shadow bg-white shadow-lg border-blue-200 relative transform md:-translate-y-4">
            <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs px-2 py-1 rounded-bl-lg">Most Popular</div>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Middle Wing</h3>
            <p className="text-gray-600 mb-6">Transitioning to structured learning with a focus on subject-specific depth and critical thinking.</p>
            <ul className="space-y-3">
              {['Classes: VI to VIII', 'NCERT Curriculum', 'Computer Education', 'Science Labs'].map(item => (
                <li key={item} className="flex items-center gap-2 text-gray-700">
                  <CheckCircle size={18} className="text-green-500" /> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Card 3 */}
          <div className="border rounded-xl p-8 hover:shadow-xl transition-shadow bg-blue-50">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Senior Wing</h3>
            <p className="text-gray-600 mb-6">Preparing students for board exams and competitive entrance tests with rigorous academic discipline.</p>
            <ul className="space-y-3">
              {['Classes: IX to XII', 'Science & Commerce Streams', 'Career Counseling', 'Mock Tests'].map(item => (
                <li key={item} className="flex items-center gap-2 text-gray-700">
                  <CheckCircle size={18} className="text-green-500" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academics;