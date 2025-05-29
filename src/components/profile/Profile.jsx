import { useEffect, useState } from 'react';
import './profile.css';
import Skills from './skills/Skills';
import TechStack from './tech-stack/TechStack';

const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProfileData = async () => {
      try {
        const response = await fetch('/test/mock/profile.json');
        const data = await response.json();
        setProfileData(data);
      } catch (error) {
        console.error('Error loading profile data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProfileData();
  }, []);

  if (loading) {
    return (
      <div className='profile'>
        <div className='loading-container'>
          <div className='loading-spinner'></div>
          <p>Cargando perfil...</p>
        </div>
      </div>
    );
  }

  if (!profileData) {
    return (
      <div className='profile'>
        <div className='error-container'>
          <p>Error al cargar los datos del perfil</p>
        </div>
      </div>
    );
  }

  return (
    <div className='profile'>
      <header className='profile-header'>
        <div className='profile-hero'>
          <div className='profile-hero-avatar'>
            {profileData.avatar || '👨‍💻'}
          </div>
          <div className='profile-hero-info'>
            <h1 className='profile-hero-name'>{profileData.fullName}</h1>
            <h2 className='profile-hero-title'>{profileData.title}</h2>
            <p className='profile-hero-description'>
              {profileData.detailedBio}
            </p>
          </div>
        </div>
      </header>

      <div className='profile-content'>
        <section className='profile-section'>
          <h3 className='section-title'>
            <span className='section-icon'>💻</span>
            Habilidades en Programación
          </h3>
          <Skills skills={profileData.programmingSkills} />
        </section>

        <section className='profile-section'>
          <h3 className='section-title'>
            <span className='section-icon'>🛠️</span>
            Stack Tecnológico
          </h3>
          <TechStack technologies={profileData.technologies} />
        </section>

        <section className='profile-section'>
          <h3 className='section-title'>
            <span className='section-icon'>🚀</span>
            Proyectos Destacados
          </h3>
          <div className='projects-preview'>
            {profileData.featuredProjects?.map((project, index) => (
              <div key={index} className='project-preview-card'>
                <div className='project-preview-icon'>{project.icon}</div>
                <h4 className='project-preview-title'>{project.name}</h4>
                <p className='project-preview-description'>
                  {project.description}
                </p>
                <div className='project-preview-tech'>
                  {project.technologies.map((tech, i) => (
                    <span key={i} className='tech-tag'>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;
