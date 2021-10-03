import React from 'react';
import logo from '../img/PokeLogo.png';
import SearchBar from './SearchBar.jsx';
import { Link } from 'react-router-dom';

function Nav() {
//
// Main Components
//
    return (
        <nav className="navbar container ">
            <div className="row align-items-center justify-content-around">
                <div className='col'>
                    <Link to='/'>
                        <img src={logo} width='40%' alt="" />
                    </Link>
                </div>
                <div className='col'>
                    <Link to='/'>
                        <button type="button" className="btn btn-outline-danger">Home</button>
                    </Link>
                </div>
                <div className='col'>
                    <SearchBar />
                </div>
            </div>
        </nav>
    );
};


export default Nav;
