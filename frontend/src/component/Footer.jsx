import React from 'react';
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap"

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-cta pt-5 pb-5">
                    <div className="row">
                        <div className="col-xl-4 col-md-4 mb-30">
                            <div className="single-cta">
                                <i className="fas fa-map-marker-alt"></i>
                                <div className="cta-text">
                                    <h4>Find us</h4>
                                    <span>Zomato HeadQuarter India</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 mb-30">
                            <div className="single-cta">
                                <i className="fas fa-phone"></i>
                                <div className="cta-text">
                                    <h4>Call us</h4>
                                    <span>123456789</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 mb-30">
                            <div className="single-cta">
                                <i className="far fa-envelope-open"></i>
                                <div className="cta-text">
                                    <h4>Mail us</h4>
                                    <span>mail@info.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_body">
                <div className="footer-content pt-5 pb-5">
                    <div className="d-flex justify-content-center">
                        <div className="col-xl-4 col-lg-4 mb-50">
                            <div className="footer-widget">
                                <div className="footer-logo">
                                    <Image className='img-fluid' fluid src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" alt="notFound" />
                                </div>
                                <div className="footer-text">
                                    <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                        elit,Lorem ipsum dolor sit amet.</p>
                                </div>
                                <div className="footer-social-icon">
                                    <span>Follow us</span>
                                    <Link to="facebook.com"><i className="fab fa-facebook-f facebook-bg"></i></Link>
                                    <Link to="twitter.com"><i className="fab fa-twitter twitter-bg"></i></Link>
                                    <Link to="https://developers.google.com/web/showcase/2015/googleplus"><i className="fab fa-google-plus-g google-bg"></i></Link>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                </div>
            </div>
            <div className="copyright-area">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                            <div className="copyright-text text-center">
                                <p>Copyright &copy; 2022, Sahir Zomato  </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer