import { NavLink } from 'react-router-dom';
import { Logo } from './logo/logo';
import './sidebar.css';
import { useTheme } from '@/providers/ThemeProvider';

const navigationItems = [
  { path: '/', label: 'Presentación', icon: '👋' },
  { path: '/perfil', label: 'Mi Perfil', icon: '👤' },
  { path: '/proyectos', label: 'Proyectos', icon: '💼' },
  { path: '/clima', label: 'API Clima', icon: '🌤️' },
  { path: '/bitacora', label: 'Bitácora', icon: '📝' },
];

const Sidebar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <aside className='sidebar'>
      <Logo />
      
      <div className="theme-toggle-container">
        <input 
          type="checkbox" 
          className="theme-toggle" 
          checked={theme === 'dark'}
          onChange={toggleTheme}
          aria-label={`Cambiar a tema ${theme === 'light' ? 'oscuro' : 'claro'}`}
        />
      </div>

      <nav className='sidebar-nav'>
        <ul className='nav-list'>
          {navigationItems.map((item) => (
            <li key={item.path} className='nav-item'>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'nav-link--active' : ''}`
                }
              >
                <span className='nav-icon'>{item.icon}</span>
                <span className='nav-label'>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;