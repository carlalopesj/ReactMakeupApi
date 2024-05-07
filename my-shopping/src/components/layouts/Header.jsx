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
                <Link to="/home">Home</Link>
                <Link to="/products">Products</Link>
            </div>
        </div>
    )
}

export default Header