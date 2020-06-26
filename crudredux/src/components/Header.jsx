import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">

            <Link to={'/'} className="navbar-brand">DoDoTask</Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link to={'/'} className="nav-link">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link to={'/'} className="nav-link">Features</Link>
                    </li>
                    <li class="nav-item">
                        <Link to={'/'} className="nav-link">Pricing</Link>
                    </li>
                    <li class="nav-item">
                        <Link to={'/'} className="nav-link">About</Link>
                    </li>
                </ul>

                <div class="d-block d-md-inline-block">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link to={'/productos/nuevo'} className="nav-link">Agregar producto &#43;</Link>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>
     );
}
 
export default Header;