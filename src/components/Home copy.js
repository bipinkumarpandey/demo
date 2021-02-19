import { React } from 'react'
function Home() {
    return (
        <div>
            <body>
                <div class="prs_navigation_main_wrapper">
                    <div class="container-fluid">
                        <div id="search_open" class="gc_search_box">
                            <input type="text" placeholder="Search here" />
                            <button><i class="fa fa-search" aria-hidden="true"></i>
                            </button>
                        </div>
                        <div class="prs_navi_left_main_wrapper">
                            <div class="prs_logo_main_wrapper">
                                <a href="index.html">
                                    <img src="images/header/logo.png" alt="logo" />
                                </a>
                            </div>
                            <div class="prs_menu_main_wrapper">
                                <nav class="navbar navbar-default">
                                    <div id="dl-menu" class="xv-menuwrapper responsive-menu">
                                        <button class="dl-trigger">
                                            <img src="images/header/bars.png" alt="bar_png" />
                                        </button>
                                        <div class="prs_mobail_searchbar_wrapper" id="search_button">	<i class="fa fa-search"></i>
                                        </div>
                                        <div class="clearfix"></div>
                                        <ul class="dl-menu">
                                            <li class="parent"><a href="index.html">Home</a></li>
                                            <li class="parent"><a href="movies.html">Movies</a></li>
                                            <li class="parent"><a href="videos.html">Videos</a></li>
                                            <li class="parent"><a href="kids.html">Kids</a></li>
                                            <li class="parent"><a href="news.html">News</a></li>
                                            <li class="parent"><a href="sports.html">Sports</a></li>
                                            <li class="parent"><a href="music.html">Music</a></li>
                                        </ul>
                                    </div>

                                </nav>
                            </div>
                        </div>
                        <div class="prs_navi_right_main_wrapper">
                            <div class="prs_slidebar_wrapper">
                                <button class="second-nav-toggler" type="button">
                                    <img src="images/header/bars.png" alt="bar_png" />
                                </button>
                            </div>

                            <div class="product-heading">
                                <div class="con">
                                    <button class="openBtn" onclick="openSearch()"><i class="fa fa-search"></i>
                                    </button>
                                </div>
                                <div id="myOverlay" class="overlay">
                                    <span class="closebtn" onclick="closeSearch()" title="Close Overlay">×</span>
                                    <div class="overlay-content">

                                        <input class="search_overlay" type="text" placeholder="search movies, videos.." name="search" />



                                        <div class="row">

                                            <h4 class="search_explore_text">Explore The Best Of</h4>
                                            <div class="col-md-10 search_explore_image">
                                                <div class="col-md-3">
                                                    <img src="images/s1.png" class="img-fluid img-responsive" />
                                                </div>
                                                <div class="col-md-3">
                                                    <img src="images/s1.png" class="img-fluid img-responsive" />
                                                </div>
                                                <div class="col-md-3">
                                                    <img src="images/s1.png" class="img-fluid img-responsive" />
                                                </div>
                                                <div class="col-md-3">
                                                    <img src="images/s1.png" class="img-fluid img-responsive" />
                                                </div>
                                            </div>
                                            <h4 class="search_explore_text">Trending Searches</h4>
                                            <div class="col-md-10 search_explore_image">
                                                <div class="col-md-3 mbt">
                                                    <a class="trending" href="#"><i class="fa fa-search-plus" aria-hidden="true"></i> War Movie</a>
                                                </div>
                                                <div class="col-md-3 mbt">
                                                    <a class="trending" href="#"><i class="fa fa-search-plus" aria-hidden="true"></i> War Movie</a>
                                                </div>
                                                <div class="col-md-3 mbt">
                                                    <a class="trending" href="#"><i class="fa fa-search-plus" aria-hidden="true"></i> War Movie</a>
                                                </div>
                                                <div class="col-md-3 mbt">
                                                    <a class="trending" href="#"><i class="fa fa-search-plus" aria-hidden="true"></i> War Movie</a>
                                                </div>

                                                <div class="col-md-3 mbt">
                                                    <a class="trending" href="#"><i class="fa fa-search-plus" aria-hidden="true"></i> War Movie</a>
                                                </div>
                                                <div class="col-md-3 mbt">
                                                    <a class="trending" href="#"><i class="fa fa-search-plus" aria-hidden="true"></i> War Movie</a>
                                                </div>
                                                <div class="col-md-3 mbt">
                                                    <a class="trending" href="#"><i class="fa fa-search-plus" aria-hidden="true"></i> War Movie</a>
                                                </div>
                                                <div class="col-md-3 mbt">
                                                    <a class="trending" href="#"><i class="fa fa-search-plus" aria-hidden="true"></i> War Movie</a>
                                                </div>

                                            </div>


                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="mobile-nav" data-prevent-default="true" data-mouse-events="true">
                            <div class="mobail_nav_overlay"></div>
                            <div class="mobile-nav-box">
                                <div class="mobile-logo">
                                    <a href="index.html" class="mobile-main-logo">
                                        <img src="images/ss.png" /><br /><span>Hello ! Vedmani</span>
                                    </a>
                                    <a href="#" class="manu-close"><i class="fa fa-times"></i></a>
                                </div>
                                <ul class="mobile-list-nav">
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

                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="prs_mc_slider_wrapper">
                        <div class="owl-carousel owl-theme">
                            <div class="item">
                                <a href="#"><img src="images/p1.jpg" alt="about_img" /></a>
                            </div>
                            <div class="item">
                                <a href="#"><img src="images/p2.jpg" alt="about_img" /></a>
                            </div>
                            <div class="item">
                                <a href="#"><img src="images/p3.jpg" alt="about_img" /></a>
                            </div>
                        </div>
                    </div>
                </div>



                <div>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mtop">

                                <img src="images/ad.jpg" class="img-responsive" />

                            </div>
                        </div>
                    </div>
                </div>


                <div class="prs_slider_upcoming_main_wrapper">
                    <div class="prs_slider_upcom_heading_wrapper">
                        <div class="prs_slider_upcom_heading_img_overlay"></div>
                        <h3>movies <br />
just <br />
arrived</h3>
                    </div>
                    <div class="prs_slider_upcom_heading_slider_wrapper">
                        <div class="prs_top_main_upcom_slider_wrapper">
                            <div class="img_main_up">
                                <img src="images/bot-1.jpg" />
                                <h4><a href="#">Aquaman</a> &nbsp;&nbsp;<span>release on 30 nov</span></h4>
                            </div>
                            <div class="img_main_up">
                                <img src="images/bot-2.jpg" />
                                <h4><a href="#">Aquaman</a> &nbsp;&nbsp;<span>release on 30 nov</span></h4>
                            </div>
                            <div class="img_main_up">
                                <img src="images/bot-3.jpg" />
                                <h4><a href="#">Aquaman</a> &nbsp;&nbsp;<span>release on 30 nov</span></h4>
                            </div>
                            <div class="img_main_up">
                                <img src="images/bot-4.jpg" />
                                <h4><a href="#">Aquaman</a> &nbsp;&nbsp;<span>release on 30 nov</span></h4>
                            </div>
                            <div class="img_main_up">
                                <img src="images/bot-5.jpg" />
                                <h4><a href="#">Aquaman</a> &nbsp;&nbsp;<span>release on 30 nov</span></h4>
                            </div>
                            <div class="img_main_up">
                                <img src="images/bot-6.jpg" />
                                <h4><a href="#">Aquaman</a> &nbsp;&nbsp;<span>release on 30 nov</span></h4>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="prs_feature_slider_main_wrapper">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="ne_recent_heading_main_wrapper">
                                    <h3>Continue Watching<a href="#"><span class="spanright1">View More</span></a></h3>
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="prs_feature_slider_wrapper">
                                    <div class="owl-carousel owl-theme">
                                        <div class="item prs_feature_slider_item_wrapper">
                                            <div class="prs_feature_img_box_wrapper">
                                                <div class="prs_feature_img">
                                                    <a href="play-movies.html"><img src="images/content/ft1.jpg" alt="feature_img" /></a>

                                                </div>
                                                <div class="prs_upcom_movie_content_box">
                                                    <div class="prs_upcom_movie_content_box_inner">
                                                        <h2><a href="play-movies.html">E95 : Bondita sneaks out!</a></h2>
                                                        <p>Drama , Acation</p>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="item prs_feature_slider_item_wrapper">
                                            <div class="prs_feature_img_box_wrapper">
                                                <div class="prs_feature_img">
                                                    <a href="play-movies.html"><img src="images/content/ft2.jpg" alt="feature_img" /></a>

                                                </div>
                                                <div class="prs_upcom_movie_content_box">
                                                    <div class="prs_upcom_movie_content_box_inner">
                                                        <h2><a href="play-movies.html">E95 : Bondita sneaks out!</a></h2>
                                                        <p>Drama , Acation</p>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="item prs_feature_slider_item_wrapper">
                                            <div class="prs_feature_img_box_wrapper">
                                                <div class="prs_feature_img">
                                                    <a href="play-movies.html"><img src="images/content/ft3.jpg" alt="feature_img" /></a>

                                                </div>
                                                <div class="prs_upcom_movie_content_box">
                                                    <div class="prs_upcom_movie_content_box_inner">
                                                        <h2><a href="play-movies.html">E95 : Bondita sneaks out!</a></h2>
                                                        <p>Drama , Acation</p>
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




                <div class="st_slider_index_sidebar_main_wrapper float_left">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class="st_indx_slider_main_container float_left">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="ne_busness_main_slider_wrapper">
                                                        <div class="ne_recent_heading_main_wrapper">
                                                            <h3>Trending<a href="trending.html"><span class="spanright">View More</span></a></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="ne_businees_slider_wrapper">
                                                        <div class="owl-carousel owl-theme">
                                                            <div class="item">
                                                                <div class="hs_blog_box1_main_wrapper">
                                                                    <div class="hs_blog_box1_img_wrapper">
                                                                        <img src="images/content/ws2.jpg" alt="movie_img" />
                                                                        <div class="prs_ms_scene_img_overlay">
                                                                            <ul>
                                                                                <li><a class="pptest-popup-link" href="play-movies.html"><img src="images/index_III/icon.png" alt="img" /></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div class="item">
                                                                <div class="hs_blog_box1_main_wrapper">
                                                                    <div class="hs_blog_box1_img_wrapper">
                                                                        <img src="images/content/ws3.jpg" alt="movie_img" />
                                                                        <div class="prs_ms_scene_img_overlay">
                                                                            <ul>
                                                                                <li><a class="pptest-popup-link" href="play-movies.html"><img src="images/index_III/icon.png" alt="img" /></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div class="item">
                                                                <div class="hs_blog_box1_main_wrapper">
                                                                    <div class="hs_blog_box1_img_wrapper">
                                                                        <img src="images/content/ws4.jpg" alt="movie_img" />
                                                                        <div class="prs_ms_scene_img_overlay">
                                                                            <ul>
                                                                                <li><a class="pptest-popup-link" href="play-movies.html"><img src="images/index_III/icon.png" alt="img" /></a>
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

                <div class="prs_feature_slider_main_wrapper">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="ne_recent_heading_main_wrapper">
                                    <h3>Explore Movies Genres<a href="explore-movie-genres.html"><span class="spanright1">View More</span></a></h3>
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="prs_feature_slider_wrapper">
                                    <div class="owl-carousel owl-theme">
                                        <div class="item prs_feature_slider_item_wrapper">
                                            <div class="prs_feature_img_box_wrapper">
                                                <div class="prs_feature_img">
                                                    <img src="images/content/ft1.jpg" alt="feature_img" />
                                                    <div class="prs_ft_btn_wrapper">
                                                        <ul>
                                                            <li><a href="action-genres.html">ACTION</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="item prs_feature_slider_item_wrapper">
                                            <div class="prs_feature_img_box_wrapper">
                                                <div class="prs_feature_img">
                                                    <img src="images/content/ft2.jpg" alt="feature_img" />
                                                    <div class="prs_ft_btn_wrapper">
                                                        <ul>
                                                            <li><a href="action-genres.html">COMEDY</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="item prs_feature_slider_item_wrapper">
                                            <div class="prs_feature_img_box_wrapper">
                                                <div class="prs_feature_img">
                                                    <img src="images/content/ft3.jpg" alt="feature_img" />
                                                    <div class="prs_ft_btn_wrapper">
                                                        <ul>
                                                            <li><a href="action-genres.html">DRAMA</a>
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


                <div>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mtop">

                                <img src="images/ad.jpg" class="img-responsive" />

                            </div>
                        </div>
                    </div>
                </div>


                <div class="st_slider_index_sidebar_main_wrapper float_left">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class="st_indx_slider_main_container float_left">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="ne_busness_main_slider_wrapper">
                                                        <div class="ne_recent_heading_main_wrapper">
                                                            <h3>Popular Bollywood Movies<a href="trending.html"><span class="spanright">View More</span></a></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="ne_businees_slider_wrapper">
                                                        <div class="owl-carousel owl-theme">
                                                            <div class="item">
                                                                <div class="hs_blog_box1_main_wrapper">
                                                                    <div class="hs_blog_box1_img_wrapper">
                                                                        <img src="images/content/ws2.jpg" alt="movie_img" />
                                                                        <div class="prs_ms_scene_img_overlay">
                                                                            <ul>
                                                                                <li><a class="pptest-popup-link" href="play-movies.html"><img src="images/index_III/icon.png" alt="img" /></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div class="item">
                                                                <div class="hs_blog_box1_main_wrapper">
                                                                    <div class="hs_blog_box1_img_wrapper">
                                                                        <img src="images/content/ws3.jpg" alt="movie_img" />
                                                                        <div class="prs_ms_scene_img_overlay">
                                                                            <ul>
                                                                                <li><a class="pptest-popup-link" href="play-movies.html"><img src="images/index_III/icon.png" alt="img" /></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div class="item">
                                                                <div class="hs_blog_box1_main_wrapper">
                                                                    <div class="hs_blog_box1_img_wrapper">
                                                                        <img src="images/content/ws4.jpg" alt="movie_img" />
                                                                        <div class="prs_ms_scene_img_overlay">
                                                                            <ul>
                                                                                <li><a class="pptest-popup-link" href="play-movies.html"><img src="images/index_III/icon.png" alt="img" /></a>
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


                <div class="st_slider_index_sidebar_main_wrapper float_left">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class="st_indx_slider_main_container float_left">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="ne_busness_main_slider_wrapper">
                                                        <div class="ne_recent_heading_main_wrapper">
                                                            <h3>Popular Hollywood Movies<a href="trending.html"><span class="spanright">View More</span></a></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="ne_businees_slider_wrapper">
                                                        <div class="owl-carousel owl-theme">
                                                            <div class="item">
                                                                <div class="hs_blog_box1_main_wrapper">
                                                                    <div class="hs_blog_box1_img_wrapper">
                                                                        <img src="images/content/ws2.jpg" alt="movie_img" />
                                                                        <div class="prs_ms_scene_img_overlay">
                                                                            <ul>
                                                                                <li><a class="pptest-popup-link" href="play-movies.html"><img src="images/index_III/icon.png" alt="img" /></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div class="item">
                                                                <div class="hs_blog_box1_main_wrapper">
                                                                    <div class="hs_blog_box1_img_wrapper">
                                                                        <img src="images/content/ws3.jpg" alt="movie_img" />
                                                                        <div class="prs_ms_scene_img_overlay">
                                                                            <ul>
                                                                                <li><a class="pptest-popup-link" href="play-movies.html"><img src="images/index_III/icon.png" alt="img" /></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div class="item">
                                                                <div class="hs_blog_box1_main_wrapper">
                                                                    <div class="hs_blog_box1_img_wrapper">
                                                                        <img src="images/content/ws4.jpg" alt="movie_img" />
                                                                        <div class="prs_ms_scene_img_overlay">
                                                                            <ul>
                                                                                <li><a class="pptest-popup-link" href="play-movies.html"><img src="images/index_III/icon.png" alt="img" /></a>
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


                <div class="st_slider_index_sidebar_main_wrapper float_left">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class="st_indx_slider_main_container float_left">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="ne_busness_main_slider_wrapper">
                                                        <div class="ne_recent_heading_main_wrapper">
                                                            <h3>Upcoming Movies<a href="trending.html"><span class="spanright">View More</span></a></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="ne_businees_slider_wrapper">
                                                        <div class="owl-carousel owl-theme">
                                                            <div class="item">
                                                                <div class="hs_blog_box1_main_wrapper">
                                                                    <div class="hs_blog_box1_img_wrapper">
                                                                        <img src="images/content/ws2.jpg" alt="movie_img" />
                                                                        <div class="prs_ms_scene_img_overlay">
                                                                            <ul>
                                                                                <li><a class="pptest-popup-link" href="play-movies.html"><img src="images/index_III/icon.png" alt="img" /></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div class="item">
                                                                <div class="hs_blog_box1_main_wrapper">
                                                                    <div class="hs_blog_box1_img_wrapper">
                                                                        <img src="images/content/ws3.jpg" alt="movie_img" />
                                                                        <div class="prs_ms_scene_img_overlay">
                                                                            <ul>
                                                                                <li><a class="pptest-popup-link" href="play-movies.html"><img src="images/index_III/icon.png" alt="img" /></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div class="item">
                                                                <div class="hs_blog_box1_main_wrapper">
                                                                    <div class="hs_blog_box1_img_wrapper">
                                                                        <img src="images/content/ws4.jpg" alt="movie_img" />
                                                                        <div class="prs_ms_scene_img_overlay">
                                                                            <ul>
                                                                                <li><a class="pptest-popup-link" href="play-movies.html"><img src="images/index_III/icon.png" alt="img" /></a>
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


                <div class="st_slider_index_sidebar_main_wrapper float_left">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class="st_indx_slider_main_container float_left">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="ne_busness_main_slider_wrapper">
                                                        <div class="ne_recent_heading_main_wrapper">
                                                            <h3>Popular Hindi Dubbed Movies<a href="trending.html"><span class="spanright">View More</span></a></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="ne_businees_slider_wrapper">
                                                        <div class="owl-carousel owl-theme">
                                                            <div class="item">
                                                                <div class="hs_blog_box1_main_wrapper">
                                                                    <div class="hs_blog_box1_img_wrapper">
                                                                        <img src="images/content/ws2.jpg" alt="movie_img" />
                                                                        <div class="prs_ms_scene_img_overlay">
                                                                            <ul>
                                                                                <li><a class="pptest-popup-link" href="play-movies.html"><img src="images/index_III/icon.png" alt="img" /></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div class="item">
                                                                <div class="hs_blog_box1_main_wrapper">
                                                                    <div class="hs_blog_box1_img_wrapper">
                                                                        <img src="images/content/ws3.jpg" alt="movie_img" />
                                                                        <div class="prs_ms_scene_img_overlay">
                                                                            <ul>
                                                                                <li><a class="pptest-popup-link" href="play-movies.html"><img src="images/index_III/icon.png" alt="img" /></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div class="item">
                                                                <div class="hs_blog_box1_main_wrapper">
                                                                    <div class="hs_blog_box1_img_wrapper">
                                                                        <img src="images/content/ws4.jpg" alt="movie_img" />
                                                                        <div class="prs_ms_scene_img_overlay">
                                                                            <ul>
                                                                                <li><a class="pptest-popup-link" href="play-movies.html"><img src="images/index_III/icon.png" alt="img" /></a>
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


                <div class="st_slider_index_sidebar_main_wrapper float_left">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class="st_indx_slider_main_container float_left">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="ne_busness_main_slider_wrapper">
                                                        <div class="ne_recent_heading_main_wrapper">
                                                            <h3>Popular Regional Movies<a href="trending.html"><span class="spanright">View More</span></a></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="ne_businees_slider_wrapper">
                                                        <div class="owl-carousel owl-theme">
                                                            <div class="item">
                                                                <div class="hs_blog_box1_main_wrapper">
                                                                    <div class="hs_blog_box1_img_wrapper">
                                                                        <img src="images/content/ws2.jpg" alt="movie_img" />
                                                                        <div class="prs_ms_scene_img_overlay">
                                                                            <ul>
                                                                                <li><a class="pptest-popup-link" href="play-movies.html"><img src="images/index_III/icon.png" alt="img" /></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div class="item">
                                                                <div class="hs_blog_box1_main_wrapper">
                                                                    <div class="hs_blog_box1_img_wrapper">
                                                                        <img src="images/content/ws3.jpg" alt="movie_img" />
                                                                        <div class="prs_ms_scene_img_overlay">
                                                                            <ul>
                                                                                <li><a class="pptest-popup-link" href="play-movies.html"><img src="images/index_III/icon.png" alt="img" /></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div class="item">
                                                                <div class="hs_blog_box1_main_wrapper">
                                                                    <div class="hs_blog_box1_img_wrapper">
                                                                        <img src="images/content/ws4.jpg" alt="movie_img" />
                                                                        <div class="prs_ms_scene_img_overlay">
                                                                            <ul>
                                                                                <li><a class="pptest-popup-link" href="play-movies.html"><img src="images/index_III/icon.png" alt="img" /></a>
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


                <div>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mtop">

                                <img src="images/ad.jpg" class="img-responsive" />

                            </div>
                        </div>
                    </div>
                </div>

                <div class="prs_feature_slider_main_wrapper">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="ne_recent_heading_main_wrapper">
                                    <h3>Explore Movies By Languages<a href="language.html"><span class="spanright1">View More</span></a></h3>
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="prs_feature_slider_wrapper">
                                    <div class="owl-carousel owl-theme">
                                        <div class="item prs_feature_slider_item_wrapper">
                                            <div class="prs_feature_img_box_wrapper">
                                                <div class="prs_feature_img">
                                                    <img src="images/content/ft1.jpg" alt="feature_img" />
                                                    <div class="prs_ft_btn_wrapper">
                                                        <ul>
                                                            <li><a href="action-genres.html">Tamil</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="item prs_feature_slider_item_wrapper">
                                            <div class="prs_feature_img_box_wrapper">
                                                <div class="prs_feature_img">
                                                    <img src="images/content/ft2.jpg" alt="feature_img" />
                                                    <div class="prs_ft_btn_wrapper">
                                                        <ul>
                                                            <li><a href="action-genres.html">Bengali</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="item prs_feature_slider_item_wrapper">
                                            <div class="prs_feature_img_box_wrapper">
                                                <div class="prs_feature_img">
                                                    <img src="images/content/ft3.jpg" alt="feature_img" />
                                                    <div class="prs_ft_btn_wrapper">
                                                        <ul>
                                                            <li><a href="action-genres.html">English</a>
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


                <div class="st_slider_index_sidebar_main_wrapper float_left">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class="st_indx_slider_main_container float_left">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="ne_busness_main_slider_wrapper">
                                                        <div class="ne_recent_heading_main_wrapper">
                                                            <h3>Popular Original Series<a href="trending.html"><span class="spanright">View More</span></a></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="ne_businees_slider_wrapper">
                                                        <div class="owl-carousel owl-theme">
                                                            <div class="item">
                                                                <div class="hs_blog_box1_main_wrapper">
                                                                    <div class="hs_blog_box1_img_wrapper">
                                                                        <img src="images/content/ws2.jpg" alt="movie_img" />
                                                                        <div class="prs_ms_scene_img_overlay">
                                                                            <ul>
                                                                                <li><a class="pptest-popup-link" href="play-movies.html"><img src="images/index_III/icon.png" alt="img" /></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div class="item">
                                                                <div class="hs_blog_box1_main_wrapper">
                                                                    <div class="hs_blog_box1_img_wrapper">
                                                                        <img src="images/content/ws3.jpg" alt="movie_img" />
                                                                        <div class="prs_ms_scene_img_overlay">
                                                                            <ul>
                                                                                <li><a class="pptest-popup-link" href="play-movies.html"><img src="images/index_III/icon.png" alt="img" /></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div class="item">
                                                                <div class="hs_blog_box1_main_wrapper">
                                                                    <div class="hs_blog_box1_img_wrapper">
                                                                        <img src="images/content/ws4.jpg" alt="movie_img" />
                                                                        <div class="prs_ms_scene_img_overlay">
                                                                            <ul>
                                                                                <li><a class="pptest-popup-link" href="play-movies.html"><img src="images/index_III/icon.png" alt="img" /></a>
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

                <div class="st_slider_index_sidebar_main_wrapper float_left">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class="st_indx_slider_main_container float_left">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="ne_busness_main_slider_wrapper">
                                                        <div class="ne_recent_heading_main_wrapper">
                                                            <h3>Popular English Web Series<a href="trending.html"><span class="spanright">View More</span></a></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="ne_businees_slider_wrapper">
                                                        <div class="owl-carousel owl-theme">
                                                            <div class="item">
                                                                <div class="hs_blog_box1_main_wrapper">
                                                                    <div class="hs_blog_box1_img_wrapper">
                                                                        <img src="images/content/ws2.jpg" alt="movie_img" />
                                                                        <div class="prs_ms_scene_img_overlay">
                                                                            <ul>
                                                                                <li><a class="pptest-popup-link" href="play-movies.html"><img src="images/index_III/icon.png" alt="img" /></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div class="item">
                                                                <div class="hs_blog_box1_main_wrapper">
                                                                    <div class="hs_blog_box1_img_wrapper">
                                                                        <img src="images/content/ws3.jpg" alt="movie_img" />
                                                                        <div class="prs_ms_scene_img_overlay">
                                                                            <ul>
                                                                                <li><a class="pptest-popup-link" href="play-movies.html"><img src="images/index_III/icon.png" alt="img" /></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div class="item">
                                                                <div class="hs_blog_box1_main_wrapper">
                                                                    <div class="hs_blog_box1_img_wrapper">
                                                                        <img src="images/content/ws4.jpg" alt="movie_img" />
                                                                        <div class="prs_ms_scene_img_overlay">
                                                                            <ul>
                                                                                <li><a class="pptest-popup-link" href="play-movies.html"><img src="images/index_III/icon.png" alt="img" /></a>
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

                <div class="prs_feature_slider_main_wrapper">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="ne_recent_heading_main_wrapper">
                                    <h3>Explore Video Genres<a href="explore-movie-genres.html"><span class="spanright1">View More</span></a></h3>
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="prs_feature_slider_wrapper">
                                    <div class="owl-carousel owl-theme">
                                        <div class="item prs_feature_slider_item_wrapper">
                                            <div class="prs_feature_img_box_wrapper">
                                                <div class="prs_feature_img">
                                                    <img src="images/content/ft1.jpg" alt="feature_img" />
                                                    <div class="prs_ft_btn_wrapper">
                                                        <ul>
                                                            <li><a href="action-genres.html">ACTION</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="item prs_feature_slider_item_wrapper">
                                            <div class="prs_feature_img_box_wrapper">
                                                <div class="prs_feature_img">
                                                    <img src="images/content/ft2.jpg" alt="feature_img" />
                                                    <div class="prs_ft_btn_wrapper">
                                                        <ul>
                                                            <li><a href="action-genres.html">COMEDY</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="item prs_feature_slider_item_wrapper">
                                            <div class="prs_feature_img_box_wrapper">
                                                <div class="prs_feature_img">
                                                    <img src="images/content/ft3.jpg" alt="feature_img" />
                                                    <div class="prs_ft_btn_wrapper">
                                                        <ul>
                                                            <li><a href="action-genres.html">DRAMA</a>
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


                <div>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mtop">

                                <img src="images/ad.jpg" class="img-responsive" />

                            </div>
                        </div>
                    </div>
                </div>

                <div class="st_slider_index_sidebar_main_wrapper float_left">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class="st_indx_slider_main_container float_left">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="ne_busness_main_slider_wrapper">
                                                        <div class="ne_recent_heading_main_wrapper">
                                                            <h3>Popular Hindi Web Series<a href="trending.html"><span class="spanright">View More</span></a></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="ne_businees_slider_wrapper">
                                                        <div class="owl-carousel owl-theme">
                                                            <div class="item">
                                                                <div class="hs_blog_box1_main_wrapper">
                                                                    <div class="hs_blog_box1_img_wrapper">
                                                                        <img src="images/content/ws2.jpg" alt="movie_img" />
                                                                        <div class="prs_ms_scene_img_overlay">
                                                                            <ul>
                                                                                <li><a class="pptest-popup-link" href="play-movies.html"><img src="images/index_III/icon.png" alt="img" /></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div class="item">
                                                                <div class="hs_blog_box1_main_wrapper">
                                                                    <div class="hs_blog_box1_img_wrapper">
                                                                        <img src="images/content/ws3.jpg" alt="movie_img" />
                                                                        <div class="prs_ms_scene_img_overlay">
                                                                            <ul>
                                                                                <li><a class="pptest-popup-link" href="play-movies.html"><img src="images/index_III/icon.png" alt="img" /></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div class="item">
                                                                <div class="hs_blog_box1_main_wrapper">
                                                                    <div class="hs_blog_box1_img_wrapper">
                                                                        <img src="images/content/ws4.jpg" alt="movie_img" />
                                                                        <div class="prs_ms_scene_img_overlay">
                                                                            <ul>
                                                                                <li><a class="pptest-popup-link" href="play-movies.html"><img src="images/index_III/icon.png" alt="img" /></a>
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

                <div class="st_slider_index_sidebar_main_wrapper float_left">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class="st_indx_slider_main_container float_left">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="ne_busness_main_slider_wrapper">
                                                        <div class="ne_recent_heading_main_wrapper">
                                                            <h3>Popular Regional Web Series<a href="trending.html"><span class="spanright">View More</span></a></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="ne_businees_slider_wrapper">
                                                        <div class="owl-carousel owl-theme">
                                                            <div class="item">
                                                                <div class="hs_blog_box1_main_wrapper">
                                                                    <div class="hs_blog_box1_img_wrapper">
                                                                        <img src="images/content/ws2.jpg" alt="movie_img" />
                                                                        <div class="prs_ms_scene_img_overlay">
                                                                            <ul>
                                                                                <li><a class="pptest-popup-link" href="play-movies.html"><img src="images/index_III/icon.png" alt="img" /></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div class="item">
                                                                <div class="hs_blog_box1_main_wrapper">
                                                                    <div class="hs_blog_box1_img_wrapper">
                                                                        <img src="images/content/ws3.jpg" alt="movie_img" />
                                                                        <div class="prs_ms_scene_img_overlay">
                                                                            <ul>
                                                                                <li><a class="pptest-popup-link" href="play-movies.html"><img src="images/index_III/icon.png" alt="img" /></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div class="item">
                                                                <div class="hs_blog_box1_main_wrapper">
                                                                    <div class="hs_blog_box1_img_wrapper">
                                                                        <img src="images/content/ws4.jpg" alt="movie_img" />
                                                                        <div class="prs_ms_scene_img_overlay">
                                                                            <ul>
                                                                                <li><a class="pptest-popup-link" href="play-movies.html"><img src="images/index_III/icon.png" alt="img" /></a>
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

                <div class="st_slider_index_sidebar_main_wrapper float_left">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class="st_indx_slider_main_container float_left">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="ne_busness_main_slider_wrapper">
                                                        <div class="ne_recent_heading_main_wrapper">
                                                            <h3>Popular Short Films<a href="trending.html"><span class="spanright">View More</span></a></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="ne_businees_slider_wrapper">
                                                        <div class="owl-carousel owl-theme">
                                                            <div class="item">
                                                                <div class="hs_blog_box1_main_wrapper">
                                                                    <div class="hs_blog_box1_img_wrapper">
                                                                        <img src="images/content/ws2.jpg" alt="movie_img" />
                                                                        <div class="prs_ms_scene_img_overlay">
                                                                            <ul>
                                                                                <li><a class="pptest-popup-link" href="play-movies.html"><img src="images/index_III/icon.png" alt="img" /></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div class="item">
                                                                <div class="hs_blog_box1_main_wrapper">
                                                                    <div class="hs_blog_box1_img_wrapper">
                                                                        <img src="images/content/ws3.jpg" alt="movie_img" />
                                                                        <div class="prs_ms_scene_img_overlay">
                                                                            <ul>
                                                                                <li><a class="pptest-popup-link" href="play-movies.html"><img src="images/index_III/icon.png" alt="img" /></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div class="item">
                                                                <div class="hs_blog_box1_main_wrapper">
                                                                    <div class="hs_blog_box1_img_wrapper">
                                                                        <img src="images/content/ws4.jpg" alt="movie_img" />
                                                                        <div class="prs_ms_scene_img_overlay">
                                                                            <ul>
                                                                                <li><a class="pptest-popup-link" href="play-movies.html"><img src="images/index_III/icon.png" alt="img" /></a>
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

                <div class="prs_feature_slider_main_wrapper">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="ne_recent_heading_main_wrapper">
                                    <h3>Explore Kids Genres<a href="explore-movie-genres.html"><span class="spanright1">View More</span></a></h3>
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="prs_feature_slider_wrapper">
                                    <div class="owl-carousel owl-theme">
                                        <div class="item prs_feature_slider_item_wrapper">
                                            <div class="prs_feature_img_box_wrapper">
                                                <div class="prs_feature_img">
                                                    <img src="images/content/ft1.jpg" alt="feature_img" />
                                                    <div class="prs_ft_btn_wrapper">
                                                        <ul>
                                                            <li><a href="action-genres.html">ACTION</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="item prs_feature_slider_item_wrapper">
                                            <div class="prs_feature_img_box_wrapper">
                                                <div class="prs_feature_img">
                                                    <img src="images/content/ft2.jpg" alt="feature_img" />
                                                    <div class="prs_ft_btn_wrapper">
                                                        <ul>
                                                            <li><a href="action-genres.html">COMEDY</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="item prs_feature_slider_item_wrapper">
                                            <div class="prs_feature_img_box_wrapper">
                                                <div class="prs_feature_img">
                                                    <img src="images/content/ft3.jpg" alt="feature_img" />
                                                    <div class="prs_ft_btn_wrapper">
                                                        <ul>
                                                            <li><a href="action-genres.html">DRAMA</a>
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


                <div>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mtop">

                                <img src="images/ad.jpg" class="img-responsive" />

                            </div>
                        </div>
                    </div>
                </div>

                <div class="st_slider_index_sidebar_main_wrapper float_left">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class="st_indx_slider_main_container float_left">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="ne_busness_main_slider_wrapper">
                                                        <div class="ne_recent_heading_main_wrapper">
                                                            <h3>Kids & Family Movies<a href="trending.html"><span class="spanright">View More</span></a></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="ne_businees_slider_wrapper">
                                                        <div class="owl-carousel owl-theme">
                                                            <div class="item">
                                                                <div class="hs_blog_box1_main_wrapper">
                                                                    <div class="hs_blog_box1_img_wrapper">
                                                                        <img src="images/content/ws2.jpg" alt="movie_img" />
                                                                        <div class="prs_ms_scene_img_overlay">
                                                                            <ul>
                                                                                <li><a class="pptest-popup-link" href="play-movies.html"><img src="images/index_III/icon.png" alt="img" /></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div class="item">
                                                                <div class="hs_blog_box1_main_wrapper">
                                                                    <div class="hs_blog_box1_img_wrapper">
                                                                        <img src="images/content/ws3.jpg" alt="movie_img" />
                                                                        <div class="prs_ms_scene_img_overlay">
                                                                            <ul>
                                                                                <li><a class="pptest-popup-link" href="play-movies.html"><img src="images/index_III/icon.png" alt="img" /></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div class="item">
                                                                <div class="hs_blog_box1_main_wrapper">
                                                                    <div class="hs_blog_box1_img_wrapper">
                                                                        <img src="images/content/ws4.jpg" alt="movie_img" />
                                                                        <div class="prs_ms_scene_img_overlay">
                                                                            <ul>
                                                                                <li><a class="pptest-popup-link" href="play-movies.html"><img src="images/index_III/icon.png" alt="img" /></a>
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

                <div class="st_slider_index_sidebar_main_wrapper float_left">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class="st_indx_slider_main_container float_left">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="ne_busness_main_slider_wrapper">
                                                        <div class="ne_recent_heading_main_wrapper">
                                                            <h3>Kids & Family Videos<a href="trending.html"><span class="spanright">View More</span></a></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="ne_businees_slider_wrapper">
                                                        <div class="owl-carousel owl-theme">
                                                            <div class="item">
                                                                <div class="hs_blog_box1_main_wrapper">
                                                                    <div class="hs_blog_box1_img_wrapper">
                                                                        <img src="images/content/ws2.jpg" alt="movie_img" />
                                                                        <div class="prs_ms_scene_img_overlay">
                                                                            <ul>
                                                                                <li><a class="pptest-popup-link" href="play-movies.html"><img src="images/index_III/icon.png" alt="img" /></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div class="item">
                                                                <div class="hs_blog_box1_main_wrapper">
                                                                    <div class="hs_blog_box1_img_wrapper">
                                                                        <img src="images/content/ws3.jpg" alt="movie_img" />
                                                                        <div class="prs_ms_scene_img_overlay">
                                                                            <ul>
                                                                                <li><a class="pptest-popup-link" href="play-movies.html"><img src="images/index_III/icon.png" alt="img" /></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div class="item">
                                                                <div class="hs_blog_box1_main_wrapper">
                                                                    <div class="hs_blog_box1_img_wrapper">
                                                                        <img src="images/content/ws4.jpg" alt="movie_img" />
                                                                        <div class="prs_ms_scene_img_overlay">
                                                                            <ul>
                                                                                <li><a class="pptest-popup-link" href="play-movies.html"><img src="images/index_III/icon.png" alt="img" /></a>
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

                <div class="st_slider_index_sidebar_main_wrapper float_left">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class="st_indx_slider_main_container float_left">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="ne_busness_main_slider_wrapper">
                                                        <div class="ne_recent_heading_main_wrapper">
                                                            <h3>Explore TV Shows<a href="trending.html"><span class="spanright">View More</span></a></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="ne_businees_slider_wrapper">
                                                        <div class="owl-carousel owl-theme">
                                                            <div class="item">
                                                                <div class="hs_blog_box1_main_wrapper">
                                                                    <div class="hs_blog_box1_img_wrapper">
                                                                        <img src="images/content/ws2.jpg" alt="movie_img" />
                                                                        <div class="prs_ms_scene_img_overlay">
                                                                            <ul>
                                                                                <li><a class="pptest-popup-link" href="play-movies.html"><img src="images/index_III/icon.png" alt="img" /></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div class="item">
                                                                <div class="hs_blog_box1_main_wrapper">
                                                                    <div class="hs_blog_box1_img_wrapper">
                                                                        <img src="images/content/ws3.jpg" alt="movie_img" />
                                                                        <div class="prs_ms_scene_img_overlay">
                                                                            <ul>
                                                                                <li><a class="pptest-popup-link" href="play-movies.html"><img src="images/index_III/icon.png" alt="img" /></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div class="item">
                                                                <div class="hs_blog_box1_main_wrapper">
                                                                    <div class="hs_blog_box1_img_wrapper">
                                                                        <img src="images/content/ws4.jpg" alt="movie_img" />
                                                                        <div class="prs_ms_scene_img_overlay">
                                                                            <ul>
                                                                                <li><a class="pptest-popup-link" href="play-movies.html"><img src="images/index_III/icon.png" alt="img" /></a>
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


                <div>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mtop">

                                <img src="images/ad.jpg" class="img-responsive" />

                            </div>
                        </div>
                    </div>
                </div>

                <div class="st_slider_index_sidebar_main_wrapper float_left">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class="st_indx_slider_main_container float_left">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="ne_busness_main_slider_wrapper">
                                                        <div class="ne_recent_heading_main_wrapper">
                                                            <h3>Popular TV Shows<a href="trending.html"><span class="spanright">View More</span></a></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="ne_businees_slider_wrapper">
                                                        <div class="owl-carousel owl-theme">
                                                            <div class="item">
                                                                <div class="hs_blog_box1_main_wrapper">
                                                                    <div class="hs_blog_box1_img_wrapper">
                                                                        <img src="images/content/ws2.jpg" alt="movie_img" />
                                                                        <div class="prs_ms_scene_img_overlay">
                                                                            <ul>
                                                                                <li><a class="pptest-popup-link" href="play-movies.html"><img src="images/index_III/icon.png" alt="img" /></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div class="item">
                                                                <div class="hs_blog_box1_main_wrapper">
                                                                    <div class="hs_blog_box1_img_wrapper">
                                                                        <img src="images/content/ws3.jpg" alt="movie_img" />
                                                                        <div class="prs_ms_scene_img_overlay">
                                                                            <ul>
                                                                                <li><a class="pptest-popup-link" href="play-movies.html"><img src="images/index_III/icon.png" alt="img" /></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div class="item">
                                                                <div class="hs_blog_box1_main_wrapper">
                                                                    <div class="hs_blog_box1_img_wrapper">
                                                                        <img src="images/content/ws4.jpg" alt="movie_img" />
                                                                        <div class="prs_ms_scene_img_overlay">
                                                                            <ul>
                                                                                <li><a class="pptest-popup-link" href="play-movies.html"><img src="images/index_III/icon.png" alt="img" /></a>
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

                <div class="st_slider_index_sidebar_main_wrapper float_left">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class="st_indx_slider_main_container float_left">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="ne_busness_main_slider_wrapper">
                                                        <div class="ne_recent_heading_main_wrapper">
                                                            <h3>Latest News<a href="trending.html"><span class="spanright">View More</span></a></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="ne_businees_slider_wrapper">
                                                        <div class="owl-carousel owl-theme">
                                                            <div class="item">
                                                                <div class="hs_blog_box1_main_wrapper">
                                                                    <div class="hs_blog_box1_img_wrapper">
                                                                        <img src="images/content/ws2.jpg" alt="movie_img" />
                                                                        <div class="prs_ms_scene_img_overlay">
                                                                            <ul>
                                                                                <li><a class="pptest-popup-link" href="play-movies.html"><img src="images/index_III/icon.png" alt="img" /></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div class="item">
                                                                <div class="hs_blog_box1_main_wrapper">
                                                                    <div class="hs_blog_box1_img_wrapper">
                                                                        <img src="images/content/ws3.jpg" alt="movie_img" />
                                                                        <div class="prs_ms_scene_img_overlay">
                                                                            <ul>
                                                                                <li><a class="pptest-popup-link" href="play-movies.html"><img src="images/index_III/icon.png" alt="img" /></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div class="item">
                                                                <div class="hs_blog_box1_main_wrapper">
                                                                    <div class="hs_blog_box1_img_wrapper">
                                                                        <img src="images/content/ws4.jpg" alt="movie_img" />
                                                                        <div class="prs_ms_scene_img_overlay">
                                                                            <ul>
                                                                                <li><a class="pptest-popup-link" href="play-movies.html"><img src="images/index_III/icon.png" alt="img" /></a>
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

                <div class="st_slider_index_sidebar_main_wrapper float_left">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class="st_indx_slider_main_container float_left">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="ne_busness_main_slider_wrapper">
                                                        <div class="ne_recent_heading_main_wrapper">
                                                            <h3>Bollywood Classics<a href="trending.html"><span class="spanright">View More</span></a></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="ne_businees_slider_wrapper">
                                                        <div class="owl-carousel owl-theme">
                                                            <div class="item">
                                                                <div class="hs_blog_box1_main_wrapper">
                                                                    <div class="hs_blog_box1_img_wrapper">
                                                                        <img src="images/content/ws2.jpg" alt="movie_img" />
                                                                        <div class="prs_ms_scene_img_overlay">
                                                                            <ul>
                                                                                <li><a class="pptest-popup-link" href="play-movies.html"><img src="images/index_III/icon.png" alt="img" /></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div class="item">
                                                                <div class="hs_blog_box1_main_wrapper">
                                                                    <div class="hs_blog_box1_img_wrapper">
                                                                        <img src="images/content/ws3.jpg" alt="movie_img" />
                                                                        <div class="prs_ms_scene_img_overlay">
                                                                            <ul>
                                                                                <li><a class="pptest-popup-link" href="play-movies.html"><img src="images/index_III/icon.png" alt="img" /></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div class="item">
                                                                <div class="hs_blog_box1_main_wrapper">
                                                                    <div class="hs_blog_box1_img_wrapper">
                                                                        <img src="images/content/ws4.jpg" alt="movie_img" />
                                                                        <div class="prs_ms_scene_img_overlay">
                                                                            <ul>
                                                                                <li><a class="pptest-popup-link" href="play-movies.html"><img src="images/index_III/icon.png" alt="img" /></a>
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

                <div class="st_slider_index_sidebar_main_wrapper float_left">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class="st_indx_slider_main_container float_left">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="ne_busness_main_slider_wrapper">
                                                        <div class="ne_recent_heading_main_wrapper">
                                                            <h3>Hollywood Classics<a href="trending.html"><span class="spanright">View More</span></a></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="ne_businees_slider_wrapper">
                                                        <div class="owl-carousel owl-theme">
                                                            <div class="item">
                                                                <div class="hs_blog_box1_main_wrapper">
                                                                    <div class="hs_blog_box1_img_wrapper">
                                                                        <img src="images/content/ws2.jpg" alt="movie_img" />
                                                                        <div class="prs_ms_scene_img_overlay">
                                                                            <ul>
                                                                                <li><a class="pptest-popup-link" href="play-movies.html"><img src="images/index_III/icon.png" alt="img" /></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div class="item">
                                                                <div class="hs_blog_box1_main_wrapper">
                                                                    <div class="hs_blog_box1_img_wrapper">
                                                                        <img src="images/content/ws3.jpg" alt="movie_img" />
                                                                        <div class="prs_ms_scene_img_overlay">
                                                                            <ul>
                                                                                <li><a class="pptest-popup-link" href="play-movies.html"><img src="images/index_III/icon.png" alt="img" /></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div class="item">
                                                                <div class="hs_blog_box1_main_wrapper">
                                                                    <div class="hs_blog_box1_img_wrapper">
                                                                        <img src="images/content/ws4.jpg" alt="movie_img" />
                                                                        <div class="prs_ms_scene_img_overlay">
                                                                            <ul>
                                                                                <li><a class="pptest-popup-link" href="play-movies.html"><img src="images/index_III/icon.png" alt="img" /></a>
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


                <div>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mtop">

                                <img src="images/ad.jpg" class="img-responsive" />

                            </div>
                        </div>
                    </div>
                </div>

                <div class="prs_feature_slider_main_wrapper">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="ne_recent_heading_main_wrapper">
                                    <h3>Explore Music Genres<a href="explore-movie-genres.html"><span class="spanright1">View More</span></a></h3>
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="prs_feature_slider_wrapper">
                                    <div class="owl-carousel owl-theme">
                                        <div class="item prs_feature_slider_item_wrapper">
                                            <div class="prs_feature_img_box_wrapper">
                                                <div class="prs_feature_img">
                                                    <img src="images/content/ft1.jpg" alt="feature_img" />
                                                    <div class="prs_ft_btn_wrapper">
                                                        <ul>
                                                            <li><a href="action-genres.html">ACTION</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="item prs_feature_slider_item_wrapper">
                                            <div class="prs_feature_img_box_wrapper">
                                                <div class="prs_feature_img">
                                                    <img src="images/content/ft2.jpg" alt="feature_img" />
                                                    <div class="prs_ft_btn_wrapper">
                                                        <ul>
                                                            <li><a href="action-genres.html">COMEDY</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="item prs_feature_slider_item_wrapper">
                                            <div class="prs_feature_img_box_wrapper">
                                                <div class="prs_feature_img">
                                                    <img src="images/content/ft3.jpg" alt="feature_img" />
                                                    <div class="prs_ft_btn_wrapper">
                                                        <ul>
                                                            <li><a href="action-genres.html">DRAMA</a>
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


                <div class="st_slider_index_sidebar_main_wrapper float_left">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class="st_indx_slider_main_container float_left">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="ne_busness_main_slider_wrapper">
                                                        <div class="ne_recent_heading_main_wrapper">
                                                            <h3>Top Hindi Songs<a href="trending.html"><span class="spanright">View More</span></a></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="ne_businees_slider_wrapper">
                                                        <div class="owl-carousel owl-theme">
                                                            <div class="item">
                                                                <div class="hs_blog_box1_main_wrapper">
                                                                    <div class="hs_blog_box1_img_wrapper">
                                                                        <img src="images/content/ws2.jpg" alt="movie_img" />
                                                                        <div class="prs_ms_scene_img_overlay">
                                                                            <ul>
                                                                                <li><a class="pptest-popup-link" href="play-movies.html"><img src="images/index_III/icon.png" alt="img" /></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div class="item">
                                                                <div class="hs_blog_box1_main_wrapper">
                                                                    <div class="hs_blog_box1_img_wrapper">
                                                                        <img src="images/content/ws3.jpg" alt="movie_img" />
                                                                        <div class="prs_ms_scene_img_overlay">
                                                                            <ul>
                                                                                <li><a class="pptest-popup-link" href="play-movies.html"><img src="images/index_III/icon.png" alt="img" /></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div class="item">
                                                                <div class="hs_blog_box1_main_wrapper">
                                                                    <div class="hs_blog_box1_img_wrapper">
                                                                        <img src="images/content/ws4.jpg" alt="movie_img" />
                                                                        <div class="prs_ms_scene_img_overlay">
                                                                            <ul>
                                                                                <li><a class="pptest-popup-link" href="play-movies.html"><img src="images/index_III/icon.png" alt="img" /></a>
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

                <div class="st_slider_index_sidebar_main_wrapper float_left">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class="st_indx_slider_main_container float_left">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="ne_busness_main_slider_wrapper">
                                                        <div class="ne_recent_heading_main_wrapper">
                                                            <h3>Top English Songs<a href="trending.html"><span class="spanright">View More</span></a></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="ne_businees_slider_wrapper">
                                                        <div class="owl-carousel owl-theme">
                                                            <div class="item">
                                                                <div class="hs_blog_box1_main_wrapper">
                                                                    <div class="hs_blog_box1_img_wrapper">
                                                                        <img src="images/content/ws2.jpg" alt="movie_img" />
                                                                        <div class="prs_ms_scene_img_overlay">
                                                                            <ul>
                                                                                <li><a class="pptest-popup-link" href="play-movies.html"><img src="images/index_III/icon.png" alt="img" /></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div class="item">
                                                                <div class="hs_blog_box1_main_wrapper">
                                                                    <div class="hs_blog_box1_img_wrapper">
                                                                        <img src="images/content/ws3.jpg" alt="movie_img" />
                                                                        <div class="prs_ms_scene_img_overlay">
                                                                            <ul>
                                                                                <li><a class="pptest-popup-link" href="play-movies.html"><img src="images/index_III/icon.png" alt="img" /></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div class="item">
                                                                <div class="hs_blog_box1_main_wrapper">
                                                                    <div class="hs_blog_box1_img_wrapper">
                                                                        <img src="images/content/ws4.jpg" alt="movie_img" />
                                                                        <div class="prs_ms_scene_img_overlay">
                                                                            <ul>
                                                                                <li><a class="pptest-popup-link" href="play-movies.html"><img src="images/index_III/icon.png" alt="img" /></a>
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

                <div class="st_slider_index_sidebar_main_wrapper float_left">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class="st_indx_slider_main_container float_left">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="ne_busness_main_slider_wrapper">
                                                        <div class="ne_recent_heading_main_wrapper">
                                                            <h3>Hindi Classic Songs<a href="trending.html"><span class="spanright">View More</span></a></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="ne_businees_slider_wrapper">
                                                        <div class="owl-carousel owl-theme">
                                                            <div class="item">
                                                                <div class="hs_blog_box1_main_wrapper">
                                                                    <div class="hs_blog_box1_img_wrapper">
                                                                        <img src="images/content/ws2.jpg" alt="movie_img" />
                                                                        <div class="prs_ms_scene_img_overlay">
                                                                            <ul>
                                                                                <li><a class="pptest-popup-link" href="play-movies.html"><img src="images/index_III/icon.png" alt="img" /></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div class="item">
                                                                <div class="hs_blog_box1_main_wrapper">
                                                                    <div class="hs_blog_box1_img_wrapper">
                                                                        <img src="images/content/ws3.jpg" alt="movie_img" />
                                                                        <div class="prs_ms_scene_img_overlay">
                                                                            <ul>
                                                                                <li><a class="pptest-popup-link" href="play-movies.html"><img src="images/index_III/icon.png" alt="img" /></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div class="item">
                                                                <div class="hs_blog_box1_main_wrapper">
                                                                    <div class="hs_blog_box1_img_wrapper">
                                                                        <img src="images/content/ws4.jpg" alt="movie_img" />
                                                                        <div class="prs_ms_scene_img_overlay">
                                                                            <ul>
                                                                                <li><a class="pptest-popup-link" href="play-movies.html"><img src="images/index_III/icon.png" alt="img" /></a>
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

                <div class="st_slider_index_sidebar_main_wrapper float_left">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class="st_indx_slider_main_container float_left">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="ne_busness_main_slider_wrapper">
                                                        <div class="ne_recent_heading_main_wrapper">
                                                            <h3>English Classic Songs<a href="trending.html"><span class="spanright">View More</span></a></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="ne_businees_slider_wrapper">
                                                        <div class="owl-carousel owl-theme">
                                                            <div class="item">
                                                                <div class="hs_blog_box1_main_wrapper">
                                                                    <div class="hs_blog_box1_img_wrapper">
                                                                        <img src="images/content/ws2.jpg" alt="movie_img" />
                                                                        <div class="prs_ms_scene_img_overlay">
                                                                            <ul>
                                                                                <li><a class="pptest-popup-link" href="play-movies.html"><img src="images/index_III/icon.png" alt="img" /></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div class="item">
                                                                <div class="hs_blog_box1_main_wrapper">
                                                                    <div class="hs_blog_box1_img_wrapper">
                                                                        <img src="images/content/ws3.jpg" alt="movie_img" />
                                                                        <div class="prs_ms_scene_img_overlay">
                                                                            <ul>
                                                                                <li><a class="pptest-popup-link" href="play-movies.html"><img src="images/index_III/icon.png" alt="img" /></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div class="item">
                                                                <div class="hs_blog_box1_main_wrapper">
                                                                    <div class="hs_blog_box1_img_wrapper">
                                                                        <img src="images/content/ws4.jpg" alt="movie_img" />
                                                                        <div class="prs_ms_scene_img_overlay">
                                                                            <ul>
                                                                                <li><a class="pptest-popup-link" href="play-movies.html"><img src="images/index_III/icon.png" alt="img" /></a>
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

                <div class="prs_footer_main_section_wrapper">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div class="prs_footer_cont1_wrapper prs_footer_cont1_wrapper_1">

                                    <ul>
                                        <li><a href="about.html">About</a></li>
                                        <li><a href="privacy-policy.html">Privacy Policy</a></li>
                                        <li><a href="term-of-use.html">Term of Use</a></li>
                                        <li><a href="disclaimer.html">Disclaimer</a></li>
                                        <li><a href="help.html">Help</a></li>
                                    </ul>
                                    <br />
                                    <p>© 2020 Cinemagix. All Rights Reserved. Home Box Office and all related channel and programming logos are service marks of, and all related programming visuals and elements are the property of, Home Box Office, Inc. All rights reserved.</p>
                                    <br />
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <div class="prs_footer_cont1_wrapper">

                                    <p>Connect with us !</p>
                                    <div class="prs_footer_social_wrapper">
                                        <ul>
                                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i class="fa fa-twitter"></i></a>
                                            </li>
                                            <li><a href="#"><i class="fa fa-linkedin"></i></a>
                                            </li>
                                            <li><a href="#"><i class="fa fa-youtube"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <div class="prs_footer_cont1_wrapper prs_footer_cont1_wrapper_4">

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

                <div class="prs_bottom_footer_wrapper">	<a href="javascript:" id="return-to-top"><i class="fa fa-arrow-up" aria-hidden="true"></i>
                </a>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="prs_bottom_footer_cont_wrapper">
                                    <p class="text-center">Copyright 2020-21 <a href="#">CINEMAGIX</a> . All rights reserved - Design by <a href="#">Skyscraper Solutions</a>
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <div class="modal" id="myModal1" tabindex="-1" role="dialog" aria-hidden="true">
                    <div class="modal-dialog modal-sm">
                        <div class="modal-content">
                            <div class="modal-header"><h4 class="clr">Logout <i class="fa fa-lock"></i></h4></div>
                            <div class="modal-body"><i class="fa fa-question-circle"></i> Are you sure you want to log-off?</div>
                            <div class="modal-footer"><button class="btn btn-primary btn-block" data-dismiss="modal">Logout</button></div>
                        </div>
                    </div>
                </div>





            </body>
        </div>
    )
}

export default Home
