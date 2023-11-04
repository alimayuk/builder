import React, { Component } from "react";
import Slider from "react-slick";
import "./section.css";
export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="SectionNews">
        <div className="container">
          <h1> Recent News </h1>
          <Slider {...settings}>
            <div className="item">
              <img src="https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="asda"  />
              <h3>Audio Post</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum minima saepe amet aperiam vitae sunt. Facere commodi
                quaerat dolores distinctio fuga at provident! Laudantium illo,
                obcaecati porro magni animi tempora?
              </p>
            </div>
            <div className="item">
              <img src="https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="asda"  />
              <h3>How to save 10 grand a year with digital blueprints</h3>
              <p>
                Ask any construction business professional or an architect if
                they suffer from tantrums when penning their contract drawings,
                and you are more than…
              </p>
            </div>
            <div className="item">
              <img src="https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  alt="asda" />
              <h3>Working on a multiplex cinema</h3>
              <p>
                Considering all the experience that we’ve previously had with
                doing entertainment industry building construction, we’ve seen
                this multiplex cinema as an easy business.…
              </p>
            </div>
            <div className="item">
              <img src="https://images.pexels.com/photos/159375/construction-site-build-construction-work-159375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="asda"  />
              <h3>Solar panels required by law</h3>
              <p>
                Newest development in the CA state legislature made it
                obligatory to add a solar panel or two atop of any newly built
                building……
              </p>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
