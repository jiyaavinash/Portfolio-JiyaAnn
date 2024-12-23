import React from 'react';

interface Project {
    client: string;
    title: string;
    description: string[];
    tech: string[];
  }

const Projects: React.FC<{project:Project[]}> = ({project}) => {
    return (
        <div>
            <h1 className='text-xl text-center text-underline'>Projects</h1>
            <p>Below are some of the clients I've collaborated with and the projects we've completed.</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                {project.map((project, index) => (
                    <div key={index} className='border p-4 my-4'>
                        <h2 className='text-xl font-semibold'>{project.client}</h2>
                        <h3 className='text-gray-600 text-sm'>{project.title}</h3>
                        <ul className="mt-2">
                            {project.description.map((desc, index) => (
                                <li key={index}>{desc}</li>
                            ))}
                        </ul>
                        <div className="mt-4">
                        <h4 className="font-semibold">Technologies Used:</h4>
                        <ul>
                            {project.tech.map((tech, index) => (
                                <li key={index} className="list-disc list-inside pl-5">{tech}</li>
                            ))}
                        </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;