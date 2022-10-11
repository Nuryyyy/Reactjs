import './TopBar.css';
import { NavLink } from 'react-router-dom'

function TopBar() {
    return (
        <nav>
        <div className="topnav">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/movies">Movies</NavLink>
            <NavLink to="/books">Books</NavLink>
            <NavLink to="/about">About</NavLink>
        </div>
        </nav>
    )
}


export default TopBar