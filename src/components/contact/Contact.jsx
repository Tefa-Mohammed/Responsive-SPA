import React from 'react'
//Import Css File
import './contact.css'
//Import React Slick For Carousel
import Slider from "react-slick";
//=====import images======
import svgI from '../../images/contact-img.svg';
import s1 from '../../images/1.jpg';
import s2 from '../../images/2.jpg';
import s3 from '../../images/3.jpg';
import s4 from '../../images/4.jpg';
import s5 from '../../images/5.jpg';
import s6 from '../../images/6.jpg';

//====import button props===== 
import Button from '../button/Button.jsx';
//Import Sections Headers Props
import SectionH from '../sectionHeader/SectionH.jsx';


export default function Contact() {

  //====Stop Page Refresh When Click The Button====
  function deleteDefault(e) {
    e.preventDefault();
  }

  //=======Settings Of Slick Carousel
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          speed: 500,
          autoplaySpeed: 2000,
          infinite: true
        }
      }
    ]
  };
  return (
    <>
      <div className="contact">
        <div className="container">
          <SectionH one="C" two="O" three="N" four="T" five="A" six="C" seven="T" />
          <div className="row my-5">
            <div className="col-12 col-md-6  mb-4 mb-md-0">
              <img src={svgI} alt="" className="img-fluid" />
            </div>
            <div className="col-12 col-md-6  mb-4 mb-md-0">
              <form action="" onSubmit={deleteDefault}>
                <div className="row">
                  <div className="col-6">
                    <input type="text" name="name" placeholder="name ..." className="form-control" />
                  </div>
                  <div className="col-6">
                    <input type="email" name="email" placeholder="email ..." className="form-control" />
                  </div>
                  <div className="col-6">
                    <input type="number" min="1" name="number" placeholder="number ..." className="form-control" />
                  </div>
                  <div className="col-6">
                    <input type="text" name="subject" placeholder="subject ..." className="form-control" />
                  </div>
                  <div className="col-12">
                    <textarea name="message" className="form-control w-100" cols="30" rows="5" placeholder="message ..."></textarea>
                  </div>
                </div>
                <Button title="Send Message" />
              </form>
            </div>
          </div>
        </div>
        <Slider {...settings} className="my-5">
          <img src={s1} alt="" className="img-fluid w-75" />
          <img src={s2} alt="" className="img-fluid w-75" />
          <img src={s3} alt="" className="img-fluid w-75" />
          <img src={s4} alt="" className="img-fluid w-75" />
          <img src={s5} alt="" className="img-fluid w-75" />
          <img src={s6} alt="" className="img-fluid w-75" />
        </Slider>
      </div>
    </>
  )
}
