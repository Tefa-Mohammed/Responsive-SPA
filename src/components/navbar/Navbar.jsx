import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

export default function Navbar() {

    //======View Search Box=====
    function viewSBox() {
        document.querySelector('form').classList.toggle('active');
        if (document.querySelector('form').classList.contains('active')) {
            document.getElementById('sIcon').classList.add('fa-times');
            document.getElementById('sIcon').classList.remove('fa-search');
        } else {
            document.getElementById('sIcon').classList.remove('fa-times');
            document.getElementById('sIcon').classList.add('fa-search');
        }
    }

    // ======Open Navbar Links=======
    function openNav() {
        document.querySelector('ul').classList.toggle('active');
        if (document.querySelector('ul').classList.contains('active')) {
            document.getElementById('navIcon').classList.add('fa-times');
            document.getElementById('navIcon').classList.remove('fa-bars');
        } else {
            document.getElementById('navIcon').classList.remove('fa-times');
            document.getElementById('navIcon').classList.add('fa-bars');
        }
    }

    return (
        <div>
            <nav>
                <div className="container-fluid">
                    <span className="navIconSpan"><i className="fas fa-bars" id="navIcon" onClick={() => openNav()}></i></span>
                    <div className="logo">teaval</div>
                    <ul>
                        <li><NavLink to="/home">Home</NavLink></li>
                        <li><NavLink to="/book">Book</NavLink></li>
                        <li><NavLink to="/packages">Packages</NavLink></li>
                        <li><NavLink to="/services">Services</NavLink></li>
                        <li><NavLink to="/gallery">Gallery</NavLink></li>
                        <li><NavLink to="/review">Review</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                    <div className="search">
                        <span><i className="fas fa-search" id="sIcon" onClick={() => viewSBox()}></i></span>
                        <span><i className="fas fa-user"></i></span>
                    </div>
                    <form action="">
                        <input type="text" className="form-control" placeholder="Search Here..." />
                        <span><i className="fas fa-search ml-5"></i></span>
                    </form>
                </div>
            </nav>
        </div>
    )
}
