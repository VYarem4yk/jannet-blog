import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    return (
      <div>
        <h3>Альбом</h3>
        <div className="sliderBlock">
          <Slider {...settings}>
            {this.props.curentAlbumPhotos.map((photo) => {
              let adress = photo.imagePreviewUrl.slice(7);
              return (
                <div className="imgSliderWrapper">
                  <img
                    src={`http://www.janekorsunova.info/Photos/${adress}`}
                    className="imgSlider"
                  ></img>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}
