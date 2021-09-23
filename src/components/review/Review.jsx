import React from 'react'
//Import Css File
import './review.css'
//Import React Slick For Carousel
import Slider from "react-slick";
//Import Sections Headers Props
import SectionH from '../sectionHeader/SectionH.jsx';
// Import Images
import i1 from '../../images/pic1.png';
import i2 from '../../images/pic2.png';
import i3 from '../../images/pic3.png';
import i4 from '../../images/pic4.png';


export default function Review() {

  //=======Settings Of Slick Carousel
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          speed: 500,
          autoplaySpeed: 2000,
          infinite: true
        }
      }
    ]
  };
  return (
    <div>
      <div className="review">
        <SectionH one="" two="R" three="E" four="V" five="I" six="E" seven="W" eight="" />
        <Slider {...settings} className="py-5 my-5 slider">
          <div className="text-center myCard">
            <img src={i1} alt="" className="img-fluid rounded-circle w-50" />
            <h3>Emilly Riyos</h3>
            <p>Inventore Commodi Earum, Quis Voluptate Exercitationem Ut Minima Itaque Iusto Ipsum Corrupti!</p>
            <span>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </span>
          </div>
          <div className="text-center myCard">
            <img src={i2} alt="" className="img-fluid rounded-circle w-50" />
            <h3>Charles Baker</h3>
            <p>Inventore Commodi Earum, Quis Voluptate Exercitationem Ut Minima Itaque Iusto Ipsum Corrupti!</p>
            <span>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </span>
          </div>
          <div className="text-center myCard">
            <img src={i3} alt="" className="img-fluid rounded-circle w-50" />
            <h3>Krysten Ritter</h3>
            <p>Inventore Commodi Earum, Quis Voluptate Exercitationem Ut Minima Itaque Iusto Ipsum Corrupti!</p>
            <span>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
            </span>
          </div>
          <div className="text-center myCard">
            <img src={i4} alt="" className="img-fluid rounded-circle w-50" />
            <h3>Matty Jones</h3>
            <p>Inventore Commodi Earum, Quis Voluptate Exercitationem Ut Minima Itaque Iusto Ipsum Corrupti!</p>
            <span>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
            </span>
          </div>
        </Slider>
      </div>
    </div>
  )
}
