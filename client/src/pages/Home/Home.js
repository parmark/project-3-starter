import React, { useState } from 'react';
import Gallery from "../../components/Gallery"
import "./Home.css"
import { Carousel } from 'react-bootstrap'

function HomePage(props) {

  const [show] = useState(false)

  const [interval] = useState(10000)

  return (
    <div>
      <div className='title'>
        <h1 className='abel translate-up'>Baton Pass!</h1>
        <p className='titilium translate-up'>The pleasure of drawing. One pass at a time.</p>
      </div>

      <div className="container">

        <div className="row">
          <div className="col-9 move-right fade-in">

            <Carousel className="carousel" interval={interval} indicators={false}>
              {props.homeGallery.map((image) =>

                <Carousel.Item key={image.alt}>

                  <Gallery show={show} images={image.image} >
                  </Gallery>
                </Carousel.Item>)}
            </Carousel>

          </div>
        </div>
      </div>
    </div>
  );
}


export default HomePage;
