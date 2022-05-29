import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../App';

export default function Navbar() {
    const motion=useContext(Context);
  return (
    <motion.div animate={{scale:1}} initial={{scale:0.8}} >
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Maharaja Tutions</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/add_student">Add Student</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                </a>
                
                </li>
                
            </ul>
            
            </div>
        </div>
        </nav>
      </motion.div>
  )
}
