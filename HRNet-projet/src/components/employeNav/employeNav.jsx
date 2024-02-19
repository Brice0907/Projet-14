import './style/employeNav.css'
import { Link } from 'react-router-dom'

export default function EmployeNav() {
    return <div className='employeNav'>
        <Link to='/' className='employeNav_link'>
            <div className='employeNav_link_btn'>Home</div>
        </Link>
    </div>
}