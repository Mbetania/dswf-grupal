import { useEffect, useState } from 'react';
import './presentation.css';
import { ProfileCard } from './profile-card/ProfileCard';

const Presentation = () => {
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
      <div className='presentation'>
        <div className='loading-container'>
          <div className='loading-spinner'></div>
          <p>Cargando presentación...</p>
        </div>
      </div>
    );
  }

  return (
    <div className='presentation'>
      <header className='presentation-header'>
        <h1 className='presentation-title'>¡Bienvenido a mi Portfolio!</h1>
      </header>

      <section className='hero-section'>
        <div className='hero-content'>
          <div className='hero-text'>
            <h2>Sobre este proyecto</h2>
            <p>
              Esta Single Page Application (SPA) fue desarrollada con React.
            </p>
            <div className='hero-features'>
              <div className='feature'>
                <span className='feature-icon'>⚛️</span>
                <span>React & Router</span>
              </div>
              <div className='feature'>
                <span className='feature-icon'>📱</span>
                <span>Diseño Responsivo</span>
              </div>
              <div className='feature'>
                <span className='feature-icon'>🌐</span>
                <span>Consumo de APIs: Open Weather</span>
              </div>
              <div className='feature'>
                <span className='feature-icon'>🎨</span>
                <span>UI/UX amigable</span>
              </div>
            </div>
          </div>
          <div className='hero-image'>
            <div className='hero-avatar'>👩🏽‍🦱</div>
          </div>
        </div>
      </section>

      {profileData && (
        <section className='profile-section'>
          <h2 className='section-title'>Mi Perfil</h2>
          <ProfileCard data={profileData} />
        </section>
      )}
    </div>
  );
};

export default Presentation;
