import './style/error.css'
import { Link } from 'react-router-dom'

export default function Error() {
    return <>
        <div className='header color_error'>
            <h1 className='header_title'>ERROR 404</h1>
        </div>
        <div className='error_bloc'>
            <div className='error_text'>Il semblerait qu&apos;une erreur c&apos;est produite !</div>
            <div className='error_text'>Pour retourner à la page d&apos;acceuil cliquez sur ce bouton.</div>
            <Link to='/' className='error_link'>
                <div className='error_link_button'>Home</div>
            </Link>
        </div>
    </>
}