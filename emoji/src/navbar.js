import React from 'react'
import {NavLink, Link} from 'react-router-dom';
import './navbar.css';
function Header() {
    return (
        <div class="header">

                
                <ul className="icons-list">
                    
                    <Link className="icons" to="/"><span>Emoji Interpreter</span></Link>

                    <NavLink className="icons" to="/movie-recommendation"><span>Movie</span></NavLink>

                    <NavLink className="icons" to="/book-recommendation"><span>Books</span></NavLink>
                    
                </ul>
        </div>
    )
}

export default Header
