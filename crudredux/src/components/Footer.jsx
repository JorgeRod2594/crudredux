import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return ( 
        <footer className="py-5 bg-primary">
            <div className="container row">
                <div className="col-12 col-md">
                    <img src={"https://upload.wikimedia.org/wikipedia/commons/6/63/Ingress_Logo.png"} alt="Logo" width="54" height="54" />
                    <small className="d-block mb-3 text-style">Jorge Rojas © 2020</small>
                </div>
                <div className="col-6 col-md">
                    <h5>Features</h5>
                    <ul className="list-unstyled text-small">
                        <li><Link to={'#'} className="text-style">Cool stuff</Link></li>
                        <li><Link to={'#'} className="text-style">Random feature</Link></li>
                        <li><Link to={'#'} className="text-style">Team feature</Link></li>
                        <li><Link to={'#'} className="text-style">Stuff for developers</Link></li>
                        <li><Link to={'#'} className="text-style">Another one</Link></li>
                        <li><Link to={'#'} className="text-style">Last time</Link></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>Resources</h5>
                    <ul className="list-unstyled text-small">
                        <li><Link to={'#'} className="text-style">Resource</Link></li>
                        <li><Link to={'#'} className="text-style">Resource name</Link></li>
                        <li><Link to={'#'} className="text-style">Another resource</Link></li>
                        <li><Link to={'#'} className="text-style">Final resource</Link></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>Resources</h5>
                    <ul className="list-unstyled text-small">
                        <li><Link to={'#'} className="text-style">Business</Link></li>
                        <li><Link to={'#'} className="text-style">Education</Link></li>
                        <li><Link to={'#'} className="text-style">Government</Link></li>
                        <li><Link to={'#'} className="text-style">Gaming</Link></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>About</h5>
                    <ul className="list-unstyled text-small">
                        <li><Link to={'#'} className="text-style">Team</Link></li>
                        <li><Link to={'#'} className="text-style">Locations</Link></li>
                        <li><Link to={'#'} className="text-style">Privacy</Link></li>
                        <li><Link to={'#'} className="text-style">Terms</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;