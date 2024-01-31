import './style/createNav.css'
import { Link } from 'react-router-dom'

export default function CreateNav() {
    return <div className='createNav'>
        <Link to='/list' className='createNav_button_link'>
            <div className='createNav_button'>View Current Employees</div>
        </Link>
    </div>
}