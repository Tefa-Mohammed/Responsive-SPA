import React from 'react';
//Import Css File
import './home.css';
//Import Button Props
import Button from '../button/Button.jsx';
//=====import images=====
import v1 from '../../images/vid-1.mp4';
import v2 from '../../images/vid-3.mp4';
import v3 from '../../images/vid-5.mp4';
import v4 from '../../images/vid-4.mp4';

export default function Home() {

  return (
    <>
      <header>

        <div id="carouselExampleIndicators" className="carousel slide carousel-fade">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <video loop autoPlay muted className="w-100">
                <source src={v1} type="video/mp4" />
              </video>
              <div className="carousel-caption d-none d-lg-block">
                <h1>ADVENTURE IS WORTHWHILE</h1>
                <p>Discover New Places With Us, Adventure Awaits</p>
                <Button title="Discover More" />
              </div>
            </div>
            <div className="carousel-item">
              <video loop autoPlay muted className="w-100">
                <source src={v2} type="video/mp4" />
              </video>
              <div className="carousel-caption d-none d-lg-block">
                <h1>ADVENTURE IS WORTHWHILE</h1>
                <p>Discover New Places With Us, Adventure Awaits</p>
                <Button title="Discover More" />
              </div>
            </div>
            <div className="carousel-item">
              <video loop autoPlay muted className="w-100">
                <source src={v3} type="video/mp4" />
              </video>
              <div className="carousel-caption d-none d-lg-block">
                <h1>ADVENTURE IS WORTHWHILE</h1>
                <p>Discover New Places With Us, Adventure Awaits</p>
                <Button title="Discover More" />
              </div>
            </div>
            <div className="carousel-item">
              <video loop autoPlay muted className="w-100">
                <source src={v4} type="video/mp4" />
              </video>
              <div className="carousel-caption d-none d-lg-block">
                <h1>ADVENTURE IS WORTHWHILE</h1>
                <p>Discover New Places With Us, Adventure Awaits</p>
                <Button title="Discover More" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
