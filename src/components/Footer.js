import React from "react";
import {Link} from 'react-router-dom';
function Footer() {
  return (
    <div>
      <div className="prs_footer_main_section_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="prs_footer_cont1_wrapper prs_footer_cont1_wrapper_1">
                <ul>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <a href="privacy-policy.html">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="term-of-use.html">Term of Use</a>
                  </li>
                  <li>
                    <a href="disclaimer.html">Disclaimer</a>
                  </li>
                  <li>
                    <a href="help.html">Help</a>
                  </li>
                </ul>
                <br />
                <p>
                  © 2020 Cinemagix. All Rights Reserved. Home Box Office and all
                  related channel and programming logos are service marks of,
                  and all related programming visuals and elements are the
                  property of, Home Box Office, Inc. All rights reserved.
                </p>
                <br />
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <div className="prs_footer_cont1_wrapper">
                <p>Connect with us !</p>
                <div className="prs_footer_social_wrapper">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <div className="prs_footer_cont1_wrapper prs_footer_cont1_wrapper_4">
                <p>Download Cinemagix App!</p>
                <ul>
                  <li>
                    <a href="#">
                      <img src="images/content/f1.jpg" alt="footer_img" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/content/f2.jpg" alt="footer_img" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="prs_bottom_footer_wrapper">
        {" "}
        <a href="javascript:" id="return-to-top">
          <i className="fa fa-arrow-up" aria-hidden="true"></i>
        </a>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="prs_bottom_footer_cont_wrapper">
                <p className="text-center">
                  Copyright 2020-21 <a href="#">CINEMAGIX</a> . All rights
                  reserved - Design by <a href="#">Skyscraper Solutions</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div
        className="modal"
        id="myModal1"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-sm">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="clr">
                Logout <i className="fa fa-lock"></i>
              </h4>
            </div>
            <div className="modal-body">
              <i className="fa fa-question-circle"></i> Are you sure you want to
              log-off?
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-primary btn-block"
                data-dismiss="modal"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
