import { Link } from 'react-router-dom'
import './Header.css'

function Header() {

    return (
        <header className='Header'>
            <Link className='link' to={""}>
                <h1 className='RMC'>RMC</h1>
                <h2>Rate My Course</h2>
            </Link>
        </header >
    )
}

export default Header
