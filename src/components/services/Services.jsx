import React from 'react'
//Import Css File
import './services.css'
//Import Sections Headers Props
import SectionH from '../sectionHeader/SectionH.jsx';

export default function Services() {
  return (
    <div>
      <div className="service">
        <div className="container">
          <SectionH one="S" two="E" three="R" four="V" five="I" six="C" seven="E" eight="S" />
          <div className="row my-5">
            <div className="col-12 col-md-6 col-lg-4 mb-4 text-center">
              <i class="fas fa-hotel"></i>
              <h3>Affordable Hotels</h3>
              <p>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Inventore Commodi Earum, Quis Voluptate Exercitationem Ut Minima Itaque Iusto Ipsum Corrupti!</p>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4 text-center">
              <i class="fas fa-utensils"></i>
              <h3>Food And Drinks</h3>
              <p>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Inventore Commodi Earum, Quis Voluptate Exercitationem Ut Minima Itaque Iusto Ipsum Corrupti!</p>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4 text-center">
              <i class="fas fa-bullhorn"></i>
              <h3>Safety Guide</h3>
              <p>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Inventore Commodi Earum, Quis Voluptate Exercitationem Ut Minima Itaque Iusto Ipsum Corrupti!</p>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4 text-center">
              <i class="fas fa-globe-europe"></i>
              <h3>Around The World</h3>
              <p>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Inventore Commodi Earum, Quis Voluptate Exercitationem Ut Minima Itaque Iusto Ipsum Corrupti!</p>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4 text-center">
              <i class="fas fa-plane"></i>
              <h3>Fastest Travel</h3>
              <p>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Inventore Commodi Earum, Quis Voluptate Exercitationem Ut Minima Itaque Iusto Ipsum Corrupti!</p>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4 text-center">
              <i class="fas fa-hiking"></i>
              <h3>Adventures</h3>
              <p>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Inventore Commodi Earum, Quis Voluptate Exercitationem Ut Minima Itaque Iusto Ipsum Corrupti!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
