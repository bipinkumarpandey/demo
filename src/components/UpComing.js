import React from "react";
import Slider from "react-slick";
function UpComing() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 800,
    dots: false,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMargin: "15px",
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          arrows: false,
          centerMode: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          arrows: false,
          centerMode: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          arrows: false,
          centerMode: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 820,
        settings: {
          arrows: false,
          centerMode: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          arrows: false,
          centerMode: false,
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="prs_slider_upcoming_main_wrapper">
      <div className="prs_slider_upcom_heading_wrapper">
          <div className="prs_slider_upcom_heading_img_overlay"></div>
          <h3>
            movies <br />
            just <br />
            arrived
          </h3>
        </div>
      <Slider {...settings}>
        
      <div className="prs_slider_upcom_heading_slider_wrapper">
          <div className="prs_top_main_upcom_slider_wrapper">
            <div className="img_main_up">
              <img src="images/bot-1.jpg" />
              <h4>
                <a href="#">Aquaman</a> &nbsp;&nbsp;
                <span>release on 30 nov</span>
              </h4>
            </div>
            <div className="img_main_up">
              <img src="images/bot-2.jpg" />
              <h4>
                <a href="#">Aquaman</a> &nbsp;&nbsp;
                <span>release on 30 nov</span>
              </h4>
            </div>
            <div className="img_main_up">
              <img src="images/bot-3.jpg" />
              <h4>
                <a href="#">Aquaman</a> &nbsp;&nbsp;
                <span>release on 30 nov</span>
              </h4>
            </div>
            <div className="img_main_up">
              <img src="images/bot-4.jpg" />
              <h4>
                <a href="#">Aquaman</a> &nbsp;&nbsp;
                <span>release on 30 nov</span>
              </h4>
            </div>
            <div className="img_main_up">
              <img src="images/bot-5.jpg" />
              <h4>
                <a href="#">Aquaman</a> &nbsp;&nbsp;
                <span>release on 30 nov</span>
              </h4>
            </div>
            <div className="img_main_up">
              <img src="images/bot-6.jpg" />
              <h4>
                <a href="#">Aquaman</a> &nbsp;&nbsp;
                <span>release on 30 nov</span>
              </h4>
            </div>
          </div>
        </div>
      </Slider>
    </div>
    </div>
  );
}

export default UpComing;
