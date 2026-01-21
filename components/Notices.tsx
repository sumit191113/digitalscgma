import React from 'react';
import { Notice } from '../types';
import { Bell, Calendar } from 'lucide-react';

const Notices: React.FC = () => {
  const notices: Notice[] = [
    { id: 1, title: 'Half-Yearly Examination Schedule Released', date: 'Oct 15, 2023', isNew: true, category: 'Exam' },
    { id: 2, title: 'Annual Sports Day Registration Open', date: 'Oct 12, 2023', isNew: true, category: 'Event' },
    { id: 3, title: 'Parent-Teacher Meeting for Classes X & XII', date: 'Oct 10, 2023', isNew: false, category: 'General' },
    { id: 4, title: 'Winter Vacation Dates Announced', date: 'Oct 05, 2023', isNew: false, category: 'Holiday' },
  ];

  return (
    <section id="notices" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">Updates</h4>
            <h2 className="text-3xl font-bold text-gray-900">Notice Board</h2>
          </div>
          <button className="text-blue-600 font-semibold hover:underline">View Archive &rarr;</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Main Large Notice */}
          <div className="bg-blue-900 text-white rounded-xl p-8 shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[300px]">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Bell size={150} />
            </div>
            <div>
              <span className="bg-yellow-500 text-blue-900 text-xs font-bold px-2 py-1 rounded mb-4 inline-block">LATEST</span>
              <h3 className="text-2xl font-bold mb-4">Admissions Open for Academic Session 2024-25</h3>
              <p className="text-blue-100 mb-6">Registration forms are available at the school office and online. Secure your child's future with us.</p>
            </div>
            <button className="bg-white text-blue-900 px-6 py-2 rounded-lg font-bold self-start hover:bg-gray-100 transition-colors">
              Apply Now
            </button>
          </div>

          {/* List of Notices */}
          <div className="flex flex-col gap-4">
            {notices.map((notice) => (
              <div key={notice.id} className="bg-gray-50 border-l-4 border-blue-600 rounded-r-xl p-4 shadow-sm hover:shadow-md transition-all flex justify-between items-center group">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded ${
                      notice.category === 'Exam' ? 'bg-red-100 text-red-600' :
                      notice.category === 'Event' ? 'bg-green-100 text-green-600' :
                      'bg-gray-200 text-gray-600'
                    }`}>
                      {notice.category}
                    </span>
                    {notice.isNew && <span className="text-xs font-bold text-red-500 animate-pulse">NEW</span>}
                  </div>
                  <h4 className="font-semibold text-gray-800 group-hover:text-blue-700 transition-colors">{notice.title}</h4>
                </div>
                <div className="text-right pl-4">
                  <div className="flex items-center text-gray-500 text-sm gap-1">
                    <Calendar size={14} />
                    <span>{notice.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Notices;