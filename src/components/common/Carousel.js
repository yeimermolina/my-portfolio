import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import Image1 from '../../images/cssgrid.jpeg'
import Image2 from '../../images/vue.jpeg'
import Image3 from '../../images/next.jpeg'
import Image4 from '../../images/reactjs.jpeg'
import Image5 from '../../images/responsive.jpeg'
import Image6 from '../../images/github.jpeg'

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "0",
  slidesToShow: 3,
  speed: 500,
  dots: true,
  arrows: false
}

const Carousel = () => (
  <div>
    <Slider {...settings}>
      <div className="prueba">
        <img src={Image1} alt="test"/>
      </div>
      <div className="prueba">
        <img src={Image2} alt="test"/>
      </div>
      <div className="prueba">
        <img src={Image3} alt="test"/>
      </div>
      <div className="prueba">
        <img src={Image4} alt="test"/>
      </div>
      <div className="prueba">
        <img src={Image5} alt="test"/>
      </div>
      <div className="prueba">
        <img src={Image6} alt="test"/>
      </div>
    </Slider>
  </div>
)

export { Carousel }
