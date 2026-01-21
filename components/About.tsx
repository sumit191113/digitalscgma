import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Intro Section - Semantic and Informative */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">About Digital SCGM</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
            Nurturing Knowledge & Excellence in Barabanki
          </h3>
          <p className="text-gray-600 leading-relaxed text-xl font-light">
            Samrat Chandra Gupta Maurya Academy (SCGMA) is a premier educational institution established in Barabanki, Uttar Pradesh. 
            We offer a comprehensive curriculum designed for modern needs, ensuring our students excel in both academics and competitive life.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Principal Message Section */}
          <article className="w-full lg:w-1/2">
            <div className="bg-white p-10 rounded-3xl shadow-2xl relative border border-gray-100">
              <div className="absolute -top-6 -left-6 bg-yellow-400 w-24 h-24 rounded-full opacity-10 animate-pulse"></div>
              <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-blue-900 inline-block"></span> Principal's Message
              </h3>
              <div className="flex flex-col sm:flex-row gap-8 items-start">
                <div className="relative flex-shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=300&h=300&auto=format&fit=crop" 
                    alt="Mr. Vinay Maurya - Principal of Samrat Chandra Gupta Maurya Academy" 
                    className="w-28 h-28 rounded-2xl object-cover border-4 border-blue-50 shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-blue-900 text-white p-1 rounded-md shadow">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                  </div>
                </div>
                <div>
                  <blockquote className="text-gray-600 italic mb-6 text-lg leading-relaxed">
                    "At SCGMA, we believe in 'Digital Excellence' combined with traditional values. Our mission is to prepare students to be leaders of tomorrow by fostering creativity, discipline, and a lifelong love for learning."
                  </blockquote>
                  <div className="border-t border-gray-100 pt-4">
                    <p className="font-bold text-gray-900 text-xl">Mr. Vinay Maurya</p>
                    <p className="text-blue-600 font-semibold tracking-wide">Principal, SCGM Academy</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Values with Better Icons/Labels */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { label: 'Discipline', color: 'bg-blue-900' },
                { label: 'Integrity', color: 'bg-blue-800' },
                { label: 'Innovation', color: 'bg-blue-700' }
              ].map((val) => (
                <div key={val.label} className={`${val.color} text-white text-center py-5 rounded-2xl font-bold shadow-lg transform hover:-translate-y-1 transition-transform cursor-default`}>
                  {val.label}
                </div>
              ))}
            </div>
          </article>

          {/* Optimized Image Grid */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-6 relative">
             <div className="absolute -z-10 bg-blue-50 w-full h-full rounded-full blur-3xl opacity-50 -top-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop" 
              alt="Classroom facilities at Samrat Chandra Gupta Maurya Academy" 
              className="rounded-3xl shadow-xl w-full h-64 object-cover transform translate-y-10 border-4 border-white"
            />
            <img 
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop" 
              alt="Digital library at SCGMA Barabanki" 
              className="rounded-3xl shadow-xl w-full h-64 object-cover border-4 border-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;