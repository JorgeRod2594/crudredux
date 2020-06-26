import React from 'react';


const Header = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary
        justify-content-between">

        <a className="navbar-brand" href="/">DoDoTask</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>


            <div className="collapse navbar-collapse">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="/productos/nuevo">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Features</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Pricing</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                </ul>

                <div class="d-block d-md-inline-block">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="/productos/nuevo">Agregar producto &#43;</a>
                        </li>
                    </ul>
                </div>

            </div>

        </nav>
     );
}
 
export default Header;