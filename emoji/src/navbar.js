import React from 'react'
import {Link} from 'react-router-dom';
import './navbar.css';
function Header() {
    return (
        <div class="header">

                <Link className="logo" to="/"><span>Home</span></Link>
                <ul className="icons-list">
                    
                    <Link className="icons" to="/emoji-Interpreter"><span>Emoji Interpreter</span></Link>

                    <Link className="icons" to="/movie-recommendation"><span>Movie</span></Link>

                    <Link className="icons" to="/emojiInterpreter"><span>Books</span></Link>
                    
                </ul>
        </div>
    )
}

export default Header
