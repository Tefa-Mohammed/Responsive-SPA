import React from 'react'
import './footer.css';
export default function Footer() {
    return (
        <>
            <footer>
                <div className="px-3 py-5">
                    <div className="row">
                        <div className="col-6 col-md-3">
                            <h3>About Us</h3>
                            <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Assumenda Quas Magni Pariatur Est Accusantium Voluptas Enim Nemo Facilis Sit Debitis.</p>
                        </div>
                        <div className="col-6 col-md-3 mb-4 mb-md-0">
                            <h3>Branch Locations</h3>
                            <ul>
                                <li>India</li>
                                <li>USA</li>
                                <li>Japan</li>
                                <li>France</li>
                            </ul>
                        </div>
                        <div className="col-6 col-md-3 mb-4 mb-md-0">
                            <h3>Quick Links</h3>
                            <ul>
                                <li>Home</li>
                                <li>Book</li>
                                <li>Packages</li>
                                <li>Services</li>
                                <li>Review</li>
                                <li>Gallery</li>
                                <li>contact</li>
                            </ul>
                        </div>
                        <div className="col-6 col-md-3">
                            <h3>Follow Us</h3>
                            <ul>
                                <li>Facebook</li>
                                <li>Instagram</li>
                                <li>Twitter</li>
                                <li>Linkedin</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <p className="mb-0">Created With ♥ By <span>Tefa Mohammed</span> | All Rights Reserved!</p>
            </footer>
        </>
    )
}
