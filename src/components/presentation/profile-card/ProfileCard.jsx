import './profile-card.css';

export function ProfileCard({ data }) {
  if (!data) return null;

  return (
    <div className='profile-card'>
      <div className='profile-card-header'>
        <div className='profile-avatar'>{data.avatar || '👤'}</div>
        <div className='profile-info'>
          <h3 className='profile-name'>{data.fullName}</h3>
          <p className='profile-title'>{data.title}</p>
          <p className='profile-location'>{data.location}</p>
        </div>
      </div>

      <div className='profile-card-body'>
        <p className='profile-bio'>{data.bio}</p>

        <div className='profile-stats'>
          <div className='stat'>
            <span className='stat-number'>{data.experience}</span>
            <span className='stat-label'>Años experiencia</span>
          </div>
          <div className='stat'>
            <span className='stat-number'>{data.projectsCount}</span>
            <span className='stat-label'>Proyectos</span>
          </div>
          <div className='stat'>
            <span className='stat-number'>{data.technologiesCount}</span>
            <span className='stat-label'>Tecnologías</span>
          </div>
        </div>

        <div className='profile-contact'>
          <a href={`mailto:${data.email}`} className='contact-link'>
            📧 {data.email}
          </a>
          <a
            href={data.github}
            className='contact-link'
            target='_blank'
            rel='noopener noreferrer'
          >
            🐱 GitHub
          </a>
          <a
            href={data.linkedin}
            className='contact-link'
            target='_blank'
            rel='noopener noreferrer'
          >
            💼 LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
