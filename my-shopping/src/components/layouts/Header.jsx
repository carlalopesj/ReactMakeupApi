import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import '../layouts/HeaderStyle.css'


function Header() {
    return (
        <div className='nav-bar'>
            <div className="nav-logo">
                <img src={logo} alt='Logo' />
                <p>Mykar</p>
            </div>
            <div className="nav-links">
                <Link to="/blush">Blush</Link>
                <Link>Bronzer</Link>
                <Link>Eyebrow</Link>
                <Link>Eyeliner</Link>
                <Link>Eyeshadow</Link>
                <Link>Foundation</Link>
                <Link>Lip liner</Link>
                <Link>Lipstick</Link>
                <Link>Mascara</Link>
                <Link>Nail polish</Link>
            </div>
        </div>
    )
}

export default Header