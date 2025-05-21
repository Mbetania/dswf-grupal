import { NavLink } from 'react-router-dom'
// import teamLogo from '@/assets/logos/team-logo.png'

export default function Sidebar() {
    <>
    <aside>
        {/* <LogoImg src={teamLogo} alt="Team Logo" /> */}
        <nav>
        <ul>
            <li><NavLink to="/">Inicio</NavLink></li>
            <li><NavLink to="/perfil/1">Mi Perfil</NavLink></li>
            <li><NavLink to="/json">Datos JSON</NavLink></li>
            <li><NavLink to="/api">Datos API</NavLink></li>
            <li><NavLink to="/bitacora">Bitácora</NavLink></li>
        </ul>
        </nav>
    </aside>
    
    </>
}