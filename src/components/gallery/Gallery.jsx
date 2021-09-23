import React from 'react'
//Import Css File
import './gallery.css'
//Import Images
import img1 from '../../images/g-1.jpg';
import img2 from '../../images/g-2.jpg'
import img9 from '../../images/g-3.jpg'
import img4 from '../../images/g-4.jpg'
import img5 from '../../images/g-5.jpg'
import img7 from '../../images/g-6.jpg'
import img6 from '../../images/g-7.jpg'
import img8 from '../../images/g-8.jpg'
import img3 from '../../images/g-9.jpg'


//Import Button Props
import Button from '../button/Button.jsx';
//Import Sections Headers Props
import SectionH from '../sectionHeader/SectionH'

export default function Gallery() {

    return (
        <div>
            <div className="gallery">
                <div className="container">
                    <SectionH one="G" two="A" three="L" four="L" five="E" six="R" seven="Y" eight="" />
                    <div className="box my-5">
                        <div className="img_box">
                            <div className="img">
                                <div className="overlay">
                                    <div>
                                        <h3>CHEGEVE</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                        <Button title="See More" />
                                    </div>
                                </div>
                                <img src={img1} alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="img_box">
                            <div className="img">
                                <div className="overlay">
                                    <div>
                                        <h3>CHEGEVE</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                        <Button title="See More" />
                                    </div>
                                </div>
                                <img src={img2} alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="img_box">
                            <div className="img">
                                <div className="overlay">
                                    <div>
                                        <h3>CHEGEVE</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                        <Button title="See More" />
                                    </div>
                                </div>
                                <img src={img3} alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="img_box">
                            <div className="img">
                                <div className="overlay">
                                    <div>
                                        <h3>CHEGEVE</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                        <Button title="See More" />
                                    </div>
                                </div>
                                <img src={img4} alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="img_box">
                            <div className="img">
                                <div className="overlay">
                                    <div>
                                        <h3>CHEGEVE</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                        <Button title="See More" />
                                    </div>
                                </div>
                                <img src={img5} alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="img_box">
                            <div className="img">
                                <div className="overlay">
                                    <div>
                                        <h3>CHEGEVE</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                        <Button title="See More" />
                                    </div>
                                </div>
                                <img src={img6} alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="img_box">
                            <div className="img">
                                <div className="overlay">
                                    <div>
                                        <h3>CHEGEVE</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                        <Button title="See More" />
                                    </div>
                                </div>
                                <img src={img7} alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="img_box">
                            <div className="img">
                                <div className="overlay">
                                    <div>
                                        <h3>CHEGEVE</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                        <Button title="See More" />
                                    </div>
                                </div>
                                <img src={img8} alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="img_box">
                            <div className="img">
                                <div className="overlay">
                                    <div>
                                        <h3>CHEGEVE</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                        <Button title="See More" />
                                    </div>
                                </div>
                                <img src={img9} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
