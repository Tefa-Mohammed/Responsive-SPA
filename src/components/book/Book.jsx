import React from 'react'
//Import Css File
import './book.css'
//Import Images
import svgI from '../../images/book-img.svg';
//Import Button Props
import Button from '../button/Button.jsx';
//Import Sections Headers Props
import SectionH from '../sectionHeader/SectionH'

export default function Book() {

  //====Stop Page Refresh When Click The Button====
  function deleteDefault(e) {
    e.preventDefault();
  }

  return (
    <>
      <div className="book">
        <div className="container">
          <SectionH one="B" two="O" three="O" four="K" five="" six="N" seven="O" eight="W" />
          <div className="row my-5">
            <div className="col-12 col-md-6  mb-4 mb-md-0">
              <img src={svgI} alt="" className="img-fluid" />
            </div>
            <div className="col-12 col-md-6  mb-4 mb-md-0">
              <form action="" onSubmit={deleteDefault}>
                <div className="row">
                  <div className="col-12">
                    <label htmlFor="place">Where To</label>
                    <input id="place" type="text" name="place" placeholder="place name ..." className="form-control" />
                  </div>
                  <div className="col-12">
                    <label htmlFor="number">How Many</label>
                    <input id="number" type="number" name="number" min="1" placeholder="number of guests ..." className="form-control" />
                  </div>
                  <div className="col-12">
                    <label htmlFor="arrival">Arrivals</label>
                    <input id="arrival" type="date" name="date" className="form-control" />
                  </div>
                  <div className="col-12">
                    <label htmlFor="leave">Leaving</label>
                    <input id="leave" type="date" name="date" placeholder="mm/dd/yyyy" className="form-control" />
                  </div>
                </div>
                <Button title="Book Now" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
