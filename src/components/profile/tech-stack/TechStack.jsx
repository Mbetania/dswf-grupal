import './tech-stack.css';

const TechStack = ({ technologies }) => {
  if (!technologies || technologies.length === 0) {
    return <p>No hay tecnologías disponibles.</p>;
  }

  return (
    <div className='tech-stack'>
      {technologies.map((tech, index) => (
        <div key={index} className='tech-item'>
          <div className='tech-icon'>{tech.icon}</div>
          <div className='tech-info'>
            <h4 className='tech-name'>{tech.name}</h4>
            <p className='tech-category'>{tech.category}</p>
            <div className='tech-experience'>
              <span className='experience-text'>
                Experiencia: {tech.experience}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
