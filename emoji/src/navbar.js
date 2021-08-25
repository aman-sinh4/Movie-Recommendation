import React from 'react'
import {NavLink, Link} from 'react-router-dom';
import './navbar.css';
function Header() {
    return (
        <div class="header">

                <Link className="logo" to="/"><span>Home</span></Link>
                <ul className="icons-list">
                    
                    <NavLink className="icons" to="/emoji-Interpreter"><span>Emoji Interpreter</span></NavLink>

                    <NavLink className="icons" to="/movie-recommendation"><span>Movie</span></NavLink>

                    <NavLink className="icons" to="/book-recommendation"><span>Books</span></NavLink>
                    
                </ul>
        </div>
    )
}

export default Header
