import React from "react";

function Header(){
    return (
        <header>
            <nav className="nav-bar">
                <h1>Logo</h1>
                <ul className="nav-items">
                    <li className="nav-item">Home</li>
                    <li className="nav-item">Login</li>
                    <li className="nav-item">Contact</li>
                    <li className="nav-item">About</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;