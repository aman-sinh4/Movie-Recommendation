import React from 'react'
import {Link} from 'react-router-dom';
import './navbar.css';
function Header() {
    return (
        <div class="header">

                <Link className="icons" to="/"><span>Home</span></Link>
                <Link className="icons" to="/emojiInterpreter"><span>Emoji Interpreter</span></Link>
            
        </div>
    )
}

export default Header
