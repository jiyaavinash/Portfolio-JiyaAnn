import React from 'react';

interface SkillWithVersion {
    skill: string;
    version: string;
    category: string;
}

const Skills: React.FC<{ skillsWithVersions: SkillWithVersion[] }> = ({ skillsWithVersions }) => {


    return (
        <section className='container mx-auto p-4'>
            <div className="text-center">
                <h2 className="text-2xl font-bold">Skills & Tools</h2>
                <p className="text-gray-600 mt-4">Technologies I work with to build amazing experiences.</p>
            </div>
                <div className='border p-4 my-4'>
                    <div className="grid grid-cols-3 font-bold border-b-2">
                        <span>Skill</span>
                        <span>Version</span>
                        <span>Category</span>
                    </div>
                    <ol className='list-decimal list-inside'>
                        {skillsWithVersions.map((skillWithVersion, index) => (
                            <li key={index} className="grid grid-cols-3 border-t items-center bg-white p-4 shadow-md rounded-lg hover:shadow-lg transition">
                                <span className="text-xl font-semibold">{skillWithVersion.skill}</span>
                                <span>{skillWithVersion.version}</span>
                                <span className="text-sm text-gray-500 mt-2">{skillWithVersion.category}</span>
                            </li>
                        ))}
                    </ol>
                </div>
                </section>
    );
};

export default Skills;