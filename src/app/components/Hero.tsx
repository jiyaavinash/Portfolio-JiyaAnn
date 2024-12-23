import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="hero">
            <div className="mx-16 mt-8 text-center bg-blue-500 text-white p-16">
      <h1 className="text-xl font-bold">Jiya Ann</h1>
      <p className="text-lg mt-4">Software Engineer  | Front-end Developer </p>
      <p className="text-lg mt-4">Front-end developer specializing in Angular, React, Next.js, and Tailwind CSS, with a passion for creating seamless user experiences. Experienced in TypeScript, JavaScript, HTML5, CSS, and LESS.</p>
      <img
        src="/jiya.jpg"
        alt="Jiya Ann"
        width={200}
        height={200}/>
    </div>
    <div className="text-xl hover:underline text-center mt-4">
    <a href="https://drive.google.com/file/d/1T7IhLBZjACxf3iQ8eee0fXFBkgCER4id/view?usp=sharing" target="_blank"  className="text-xl  mx-4 hover:underline">Resume</a>
    <a href="https://github.com/jiyaavinash/Portfolio-JiyaAnn/tree/main" target="_blank" className="text-xl mx-4 hover:underline">GitHub</a>
    <a href="https://www.linkedin.com/in/jiya-ann" target="_blank" rel="noopener noreferrer" className="text-xl mx-4 hover:underline">LinkedIn</a>
    </div>
        </section>
    );
};

export default Hero;