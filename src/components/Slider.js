import React from "react";

function Slider(props) {
    
  return (
    <div>
      <div className="st_slider_index_sidebar_main_wrapper float_left">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="st_indx_slider_main_container float_left">
                <div className="row">
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="ne_busness_main_slider_wrapper">
                          <div className="ne_recent_heading_main_wrapper">
                            <h3>
                              {props.data['title']}   
                              <a href="trending.html">
                                <span className="spanright">View More</span>
                              </a>
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="ne_businees_slider_wrapper">
                          <div className="owl-carousel owl-theme">
                            <div className="item">
                              <div className="hs_blog_box1_main_wrapper">
                                <div className="hs_blog_box1_img_wrapper">
                                  <img
                                    src="images/content/ws2.jpg"
                                    alt="movie_img"
                                  />
                                  <div className="prs_ms_scene_img_overlay">
                                    <ul>
                                      <li>
                                        <a
                                          className="pptest-popup-link"
                                          href="play-movies.html"
                                        >
                                          <img
                                            src="images/index_III/icon.png"
                                            alt="img"
                                          />
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="item">
                              <div className="hs_blog_box1_main_wrapper">
                                <div className="hs_blog_box1_img_wrapper">
                                  <img
                                    src="images/content/ws3.jpg"
                                    alt="movie_img"
                                  />
                                  <div className="prs_ms_scene_img_overlay">
                                    <ul>
                                      <li>
                                        <a
                                          className="pptest-popup-link"
                                          href="play-movies.html"
                                        >
                                          <img
                                            src="images/index_III/icon.png"
                                            alt="img"
                                          />
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="item">
                              <div className="hs_blog_box1_main_wrapper">
                                <div className="hs_blog_box1_img_wrapper">
                                  <img
                                    src="images/content/ws4.jpg"
                                    alt="movie_img"
                                  />
                                  <div className="prs_ms_scene_img_overlay">
                                    <ul>
                                      <li>
                                        <a
                                          className="pptest-popup-link"
                                          href="play-movies.html"
                                        >
                                          <img
                                            src="images/index_III/icon.png"
                                            alt="img"
                                          />
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
