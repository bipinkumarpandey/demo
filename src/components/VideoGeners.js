import React from "react";

function VideoGeners() {
  return (
    <div>
      <div className="prs_feature_slider_main_wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="ne_recent_heading_main_wrapper">
                <h3>
                  Explore Video Genres
                  <a href="explore-movie-genres.html">
                    <span className="spanright1">View More</span>
                  </a>
                </h3>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="prs_feature_slider_wrapper">
                <div className="owl-carousel owl-theme">
                  <div className="item prs_feature_slider_item_wrapper">
                    <div className="prs_feature_img_box_wrapper">
                      <div className="prs_feature_img">
                        <img src="images/content/ft1.jpg" alt="feature_img" />
                        <div className="prs_ft_btn_wrapper">
                          <ul>
                            <li>
                              <a href="action-genres.html">ACTION</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item prs_feature_slider_item_wrapper">
                    <div className="prs_feature_img_box_wrapper">
                      <div className="prs_feature_img">
                        <img src="images/content/ft2.jpg" alt="feature_img" />
                        <div className="prs_ft_btn_wrapper">
                          <ul>
                            <li>
                              <a href="action-genres.html">COMEDY</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item prs_feature_slider_item_wrapper">
                    <div className="prs_feature_img_box_wrapper">
                      <div className="prs_feature_img">
                        <img src="images/content/ft3.jpg" alt="feature_img" />
                        <div className="prs_ft_btn_wrapper">
                          <ul>
                            <li>
                              <a href="action-genres.html">DRAMA</a>
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
  );
}

export default VideoGeners;
