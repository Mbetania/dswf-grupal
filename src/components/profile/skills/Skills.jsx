import './skills.css';

const Skills = ({ skills }) => {
  if (!skills || skills.length === 0) {
    return <p>No hay habilidades disponibles.</p>;
  }

  return (
    <div className='skills-container'>
      {skills.map((skill, index) => (
        <div key={index} className='skill-item'>
          <div className='skill-header'>
            <span className='skill-name'>{skill.name}</span>
            <span className='skill-level'>{skill.level}%</span>
          </div>
          <div className='skill-bar'>
            <div
              className='skill-progress'
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
          <p className='skill-description'>{skill.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Skills;
