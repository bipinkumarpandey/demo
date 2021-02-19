import React from 'react';
import {Link} from 'react-router-dom';
function Navbar() {
    function openSearch() {
        document.getElementById("myOverlay").style.display = "block";
      }
    
      function closeSearch() {
        document.getElementById("myOverlay").style.display = "none";
      }
    return (
        <div>
             <div className="prs_navigation_main_wrapper">
                    <div className="container-fluid">
                        <div id="search_open" className="gc_search_box">
                            <input type="text" placeholder="Search here" />
                            <button><i className="fa fa-search" aria-hidden="true"></i>
                            </button>
                        </div>
                        <div className="prs_navi_left_main_wrapper">
                            <div className="prs_logo_main_wrapper">
                                <Link to="/">
                                    <img src="images/header/logo.png" alt="logo" />
                                </Link>
                            </div>
                            <div className="prs_menu_main_wrapper">
                                <nav className="navbar navbar-default">
                                    <div id="dl-menu" className="xv-menuwrapper responsive-menu">
                                        <button className="dl-trigger">
                                            <img src="images/header/bars.png" alt="bar_png" />
                                        </button>
                                        <div className="prs_mobail_searchbar_wrapper" id="search_button">	<i className="fa fa-search"></i>
                                        </div>
                                        <div className="clearfix"></div>
                                        <ul className="dl-menu">
                                            <li className="parent"><Link to="/">Home</Link></li>
                                            <li className="parent"><Link to="/about">Movies</Link></li>
                                            <li className="parent"><Link to="/about">Videos</Link></li>
                                            <li className="parent"><Link to="kids.html">Kids</Link></li>
                                            <li className="parent"><Link to="news.html">News</Link></li>
                                            <li className="parent"><Link to="sports.html">Sports</Link></li>
                                            <li className="parent"><Link to="music.html">Music</Link></li>
                                        </ul>
                                    </div>

                                </nav>
                            </div>
                        </div>
                        <div className="prs_navi_right_main_wrapper">
                            <div className="prs_slidebar_wrapper">
                                <button className="second-nav-toggler" type="button">
                                    <img src="images/header/bars.png" alt="bar_png" />
                                </button>
                            </div>

                            <div className="product-heading">
                                <div className="con">
                                    <button className="openBtn" onClick={()=>openSearch()}><i className="fa fa-search"></i>
                                    </button>
                                </div>
                                <div id="myOverlay" className="overlay">
                                    <span className="closebtn" onClick={()=>closeSearch()} title="Close Overlay">×</span>
                                    <div className="overlay-content">

                                        <input className="search_overlay" type="text" placeholder="search movies, videos.." name="search" />



                                        <div className="row">

                                            <h4 className="search_explore_text">Explore The Best Of</h4>
                                            <div className="col-md-10 search_explore_image">
                                                <div className="col-md-3">
                                                    <img src="images/s1.png" className="img-fluid img-responsive" />
                                                </div>
                                                <div className="col-md-3">
                                                    <img src="images/s1.png" className="img-fluid img-responsive" />
                                                </div>
                                                <div className="col-md-3">
                                                    <img src="images/s1.png" className="img-fluid img-responsive" />
                                                </div>
                                                <div className="col-md-3">
                                                    <img src="images/s1.png" className="img-fluid img-responsive" />
                                                </div>
                                            </div>
                                            <h4 className="search_explore_text">Trending Searches</h4>
                                            <div className="col-md-10 search_explore_image">
                                                <div className="col-md-3 mbt">
                                                    <a className="trending" href="#"><i className="fa fa-search-plus" aria-hidden="true"></i> War Movie</a>
                                                </div>
                                                <div className="col-md-3 mbt">
                                                    <a className="trending" href="#"><i className="fa fa-search-plus" aria-hidden="true"></i> War Movie</a>
                                                </div>
                                                <div className="col-md-3 mbt">
                                                    <a className="trending" href="#"><i className="fa fa-search-plus" aria-hidden="true"></i> War Movie</a>
                                                </div>
                                                <div className="col-md-3 mbt">
                                                    <a className="trending" href="#"><i className="fa fa-search-plus" aria-hidden="true"></i> War Movie</a>
                                                </div>

                                                <div className="col-md-3 mbt">
                                                    <a className="trending" href="#"><i className="fa fa-search-plus" aria-hidden="true"></i> War Movie</a>
                                                </div>
                                                <div className="col-md-3 mbt">
                                                    <a className="trending" href="#"><i className="fa fa-search-plus" aria-hidden="true"></i> War Movie</a>
                                                </div>
                                                <div className="col-md-3 mbt">
                                                    <a className="trending" href="#"><i className="fa fa-search-plus" aria-hidden="true"></i> War Movie</a>
                                                </div>
                                                <div className="col-md-3 mbt">
                                                    <a className="trending" href="#"><i className="fa fa-search-plus" aria-hidden="true"></i> War Movie</a>
                                                </div>

                                            </div>


                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="mobile-nav" data-prevent-default="true" data-mouse-events="true">
                            <div className="mobail_nav_overlay"></div>
                            <div className="mobile-nav-box">
                                <div className="mobile-logo">
                                    <a href="index.html" className="mobile-main-logo">
                                        <img src="images/ss.png" /><br /><span>Hello ! Vedmani</span>
                                    </a>
                                    <a href="#" className="manu-close"><i className="fa fa-times"></i></a>
                                </div>
                                <ul className="mobile-list-nav">
                                    <li><a href="watching-list.html">YOUR WATCHING LIST</a>
                                    </li>
                                    <li><a href="my-account.html">ACCOUNT & SETTING</a>
                                    </li>
                                    <li><a href="language.html">LANGUAGE</a>
                                    </li>
                                    <li><a href="contact.html">CONTACT US</a>
                                    </li>
                                    <li><a href="help.html">HELP</a>
                                    </li>
                                    <li><a href="#myModal1" data-toggle="modal">LOGOUT</a>
                                    </li>
                                </ul>


                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Navbar
