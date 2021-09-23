import React from 'react'
//Import Css File
import './packages.css'
//Import Images
import img1 from '../../images/p-1.jpg';
import img2 from '../../images/p-2.jpg'
import img3 from '../../images/p-3.jpg'
import img4 from '../../images/p-4.jpg'
import img5 from '../../images/p-5.jpg'
import img6 from '../../images/p-6.jpg'

//Import Button Props
import Button from '../button/Button.jsx';
//Import Sections Headers Props
import SectionH from '../sectionHeader/SectionH'

export default function Packages() {
    return (
        <div>
            <div className="package">
                <div className="container">
                    <SectionH one="P" two="A" three="C" four="K" five="A" six="G" seven="E" eight="S" />
                    <div className="row my-5">
                        <div className="col-12 col-md-6 col-lg-4 mb-5">
                            <div className="card">
                                <img src={img1} className="card-img-top img-fluid" alt="" />
                                <div className="card-body">
                                    <h5 className="card-title"><i className="fas fa-map-marker-alt mr-2"></i>Mumbai</h5>
                                    <p className="card-text">Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Nulla, Laudantium!.</p>
                                    <span>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </span>
                                    <div className="price">
                                        <span>$ 90.00 </span>
                                        <span>$ 120.00</span>
                                    </div>
                                    <Button title="Book Now" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 mb-5">
                            <div className="card">
                                <img src={img2} className="card-img-top img-fluid" alt="" />
                                <div className="card-body">
                                    <h5 className="card-title"><i className="fas fa-map-marker-alt mr-2"></i>Hawaii</h5>
                                    <p className="card-text">Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Nulla, Laudantium!.</p>
                                    <span>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </span>
                                    <div className="price">
                                        <span>$ 90.00 </span>
                                        <span>$ 120.00</span>
                                    </div>
                                    <Button title="Book Now" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 mb-5">
                            <div className="card">
                                <img src={img3} className="card-img-top img-fluid" alt="" />
                                <div className="card-body">
                                    <h5 className="card-title"><i className="fas fa-map-marker-alt mr-2"></i>Sydney</h5>
                                    <p className="card-text">Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Nulla, Laudantium!.</p>
                                    <span>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </span>
                                    <div className="price">
                                        <span>$ 90.00 </span>
                                        <span>$ 120.00</span>
                                    </div>
                                    <Button title="Book Now" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 mb-5">
                            <div className="card">
                                <img src={img4} className="card-img-top img-fluid" alt="" />
                                <div className="card-body">
                                    <h5 className="card-title"><i className="fas fa-map-marker-alt mr-2"></i>Paris</h5>
                                    <p className="card-text">Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Nulla, Laudantium!.</p>
                                    <span>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </span>
                                    <div className="price">
                                        <span>$ 90.00 </span>
                                        <span>$ 120.00</span>
                                    </div>
                                    <Button title="Book Now" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 mb-5">
                            <div className="card">
                                <img src={img5} className="card-img-top img-fluid" alt="" />
                                <div className="card-body">
                                    <h5 className="card-title"><i className="fas fa-map-marker-alt mr-2"></i>Tokyo</h5>
                                    <p className="card-text">Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Nulla, Laudantium!.</p>
                                    <span>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </span>
                                    <div className="price">
                                        <span>$ 90.00 </span>
                                        <span>$ 120.00</span>
                                    </div>
                                    <Button title="Book Now" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 mb-5">
                            <div className="card">
                                <img src={img6} className="card-img-top img-fluid" alt="" />
                                <div className="card-body">
                                    <h5 className="card-title"><i className="fas fa-map-marker-alt mr-2"></i>Egypt</h5>
                                    <p className="card-text">Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Nulla, Laudantium!.</p>
                                    <span>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </span>
                                    <div className="price">
                                        <span>$ 90.00 </span>
                                        <span>$ 120.00</span>
                                    </div>
                                    <Button title="Book Now" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
