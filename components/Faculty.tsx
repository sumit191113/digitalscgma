import React from 'react';
import { FacultyMember } from '../types';

const Faculty: React.FC = () => {
  const teachers: FacultyMember[] = [
    { id: 1, name: 'Mr. Rohit sir', subject: 'Mathematics', qualification: 'M.Sc, B.Ed', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop' },
    { id: 2, name: 'Mr. Karan sir', subject: 'Physics', qualification: 'M.Sc Physics', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop' },
    { id: 3, name: 'Ms. A. Gupta', subject: 'English', qualification: 'MA English, B.Ed', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop' },
    { id: 4, name: 'Mr. K. Yadav', subject: 'Computer Sc.', qualification: 'MCA', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Meet Our Mentors</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher) => (
            <div key={teacher.id} className="bg-white rounded-xl shadow-lg overflow-hidden text-center group border border-gray-100">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={teacher.image} 
                  alt={teacher.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/20 transition-colors"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{teacher.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{teacher.subject}</p>
                <p className="text-sm text-gray-500">{teacher.qualification}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;