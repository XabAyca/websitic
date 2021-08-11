import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import works from '../data/works.json'

const StudyCase = () => {
  const { project } = useParams();
  const [currentProject, setCurrentProject] = useState(null);
  
  useEffect(() => {
    const foundProject = works.works.find((work) => project.split('-')[0] === work.slug);
    setCurrentProject(foundProject)
  }, [project])
  
  return (
    <div className='study-case'>
      <h3>{currentProject && currentProject.title}</h3>
      <p>{currentProject && currentProject.content}</p>
    </div>
  );
};

export default StudyCase;