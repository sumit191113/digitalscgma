import React from 'react';
import { Users, BookOpen, Award, Monitor } from 'lucide-react';

const Highlights: React.FC = () => {
  const cards = [
    {
      icon: <Users size={40} />,
      title: "Qualified Teachers",
      description: "Experienced and dedicated faculty committed to student success."
    },
    {
      icon: <Monitor size={40} />,
      title: "Smart Classrooms",
      description: "Modern learning environment equipped with latest technology."
    },
    {
      icon: <BookOpen size={40} />,
      title: "Holistic Education",
      description: "Focus on academic, physical, and emotional growth."
    },
    {
      icon: <Award size={40} />,
      title: "Excellent Results",
      description: "Consistently producing top rankers in board examinations."
    }
  ];

  return (
    <section className="py-16 bg-white -mt-10 md:-mt-20 relative z-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-xl hover:shadow-2xl transition-shadow border-b-4 border-blue-900 group">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center text-blue-900 mb-6 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;