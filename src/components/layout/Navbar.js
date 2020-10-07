import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-white">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="/"><FaGithub /></a>
            <div className="collapse navbar-collapse" id="navbarToggler">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <NavLink exact className="nav-link" activeClassName="active" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/trending">Trending</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/starred">Starred</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}


export default Navbar;