import './style/header.css';
import { useLocation } from 'react-router-dom';

export default function Header() {

    const location = useLocation();

    return <div className={location.pathname === '/list' ? ('header color_employe') : ('header color_hrnet')}>
        <h1 className='header_title'>{location.pathname === "/list" ? ('Current Employees') : ('HRnet')}</h1>
    </div>
}