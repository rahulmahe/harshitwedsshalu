import React, { Component } from "react";
import { Zoom } from 'react-slideshow-image';
import seperatorImage from '../assets/images/separator.png';
import '../assets/css/style.css';
import '../assets/css/slide.css';

const images = [
    "http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/10/20.jpg",
    "http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/10/9.jpg",
    "http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/10/22-1.jpg",
    "http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/10/23.jpg",
    "http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/10/24.jpg",
    "http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/10/wedding-725437.jpg",
    "http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/10/21.jpg",
    "http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/10/19.jpg"

];

const zoomOutProperties = {
    duration: 2500,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: false
}

class RingCeremonyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {
        return (
            <section id="the-wedding" className="slide the-wedding active" data-stellar-background-ratio="0.5">
                <div className="we col-sm-12 col-12">
                    <div className="container">

                        <div className="welcome-title animateblock btm animated">
                            <h1 className="welcome text-center"><span>The</span> <b>Ring Ceremony</b></h1>
                            <div className="seperator_border">
                                <div className="separator" style={{ backgroundImage: `url(${seperatorImage})` }}></div>
                            </div>
                        </div>
                        <div className="row animateblock btm animated">
                            <div className="flexslider-wedding col-12">
                                <div className="slide-container">
                                    <Zoom {...zoomOutProperties}>
                                        {
                                            images.map((each, index) => <img key={index} style={{ width: "100%", maxHeight: "500px" }} src={each} />)
                                        }
                                    </Zoom>
                                </div>

                            </div>
                        </div>
                        <div className="row group">
                            <div className="col-md-5 col-sm-12 col-12">
                                <div className="text-center the-wedtitle">
                                    <h1 className="welcome text-center text-capitalize"><span>  Bridesmaids </span></h1>
                                </div>
                                <div className="row animateblock btm animated">
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-12 float-left">
                                        <div className="girlsgroup-img">
                                            <img width="100" height="100" src="http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/01/Sara-Wright-110x110.jpg" className="attachment-bride_grrom_img size-bride_grrom_img wp-post-image" alt="Wedding Girl" srcset="http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/01/Sara-Wright-110x110.jpg 110w, http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/01/Sara-Wright-150x150.jpg 150w, http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/01/Sara-Wright-200x200.jpg 200w, http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/01/Sara-Wright-128x128.jpg 128w, http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/01/Sara-Wright-120x120.jpg 120w, http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/01/Sara-Wright-50x50.jpg 50w, http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/01/Sara-Wright.jpg 270w" sizes="(max-width: 100px) 100vw, 100px" />                                        </div>
                                    </div>
                                    <div className="set-girl col-lg-8 col-md-8 col-sm-12 col-12 float-left">
                                        <div className="girlsgroup-title">liya willson</div>
                                        <div className="girls-cat">
                                            Bridemaid                                        </div>
                                        <div className="girlsgroup-content"><p> Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  </p>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-12 float-left">
                                        <div className="sep"></div>
                                    </div>
                                </div>
                                <div className="row animateblock btm animated">
                                    <div className="set-girl col-lg-8 col-md-8 col-sm-12 col-12 float-left">
                                        <div className="girlsgroup-title">aliya crush</div>
                                        <div className="girls-cat">
                                            Maid of Honor                                        </div>
                                        <div className="girlsgroup-content"><p> Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                        </div>

                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-12 set_right_img float-left">
                                        <div className="girlsgroup-img">
                                            <img width="100" height="100" src="http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/03/weddinggirl2-110x110.jpg" className="attachment-bride_grrom_img size-bride_grrom_img wp-post-image" alt="Free Wedding WordPress Theme" srcset="http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/03/weddinggirl2-110x110.jpg 110w, http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/03/weddinggirl2-150x150.jpg 150w, http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/03/weddinggirl2-200x200.jpg 200w, http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/03/weddinggirl2-128x128.jpg 128w, http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/03/weddinggirl2.jpg 300w" sizes="(max-width: 100px) 100vw, 100px" />                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-12 float-left">
                                        <div className="sep"></div>
                                    </div>
                                </div>
                                <div className="row animateblock btm animated">
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-12 float-left">
                                        <div className="girlsgroup-img">
                                            <img width="100" height="100" src="http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/10/Ross-Koster-110x110.jpg" className="attachment-bride_grrom_img size-bride_grrom_img wp-post-image" alt="Free Wedding WordPress Theme" srcset="http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/10/Ross-Koster-110x110.jpg 110w, http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/10/Ross-Koster-128x128.jpg 128w, http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/10/Ross-Koster-120x120.jpg 120w, http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/10/Ross-Koster-50x50.jpg 50w, http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/10/Ross-Koster.jpg 144w" sizes="(max-width: 100px) 100vw, 100px" />                                        </div>
                                    </div>
                                    <div className="set-girl col-lg-8 col-md-8 col-sm-12 col-12 float-left">
                                        <div className="girlsgroup-title">Metisha Taylor</div>
                                        <div className="girls-cat">
                                            Bridemaid                                        </div>
                                        <div className="girlsgroup-content"><p>Lorem ipsum&nbsp;is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It’s also called placeholder (or filler) text. It’s a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout.</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-12 float-left">
                                        <div className="sep"></div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-2 col-sm-12 col-12 heart">
                            </div>
                            <div className="col-md-5 col-sm-12 col-12">
                                <div className="text-center the-wedtitle">
                                    <h1 className="welcome text-center text-capitalize"><span>Groomsmen</span>  </h1>
                                </div>
                                <div className="row animateblock btm animated">
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-12 float-left">
                                        <div className="girlsgroup-img">
                                            <img width="100" height="100" src="http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/01/John-Carter-110x110.jpg" className="attachment-bride_grrom_img size-bride_grrom_img wp-post-image" alt="Free Wedding WordPress Theme" srcset="http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/01/John-Carter-110x110.jpg 110w, http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/01/John-Carter-150x150.jpg 150w, http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/01/John-Carter-128x128.jpg 128w, http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/01/John-Carter-120x120.jpg 120w, http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/01/John-Carter-50x50.jpg 50w, http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/01/John-Carter.jpg 200w" sizes="(max-width: 100px) 100vw, 100px" />                                        </div>
                                    </div>
                                    <div className="set-boy col-lg-8 col-md-8 col-sm-12 col-12 float-left">
                                        <div className="girlsgroup-title">nikal crush</div>
                                        <div className="girls-cat">
                                            Groomsman                                        </div>
                                        <div className="girlsgroup-content"><p> Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                        </div>

                                    </div>
                                    <div className="col-sm-12 col-12 float-left">
                                        <div className="sep"></div>
                                    </div>
                                </div>

                                <div className="row animateblock btm animated">
                                    <div className="set-boy col-lg-8 col-md-8 col-sm-12 col-12 float-left">
                                        <div className="girlsgroup-title">mekas tom</div>
                                        <div className="girls-cat">
                                            Best Man                                        </div>
                                        <div className="girlsgroup-content"><p> Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-12 set_right_img float-left">
                                        <div className="girlsgroup-img">
                                            <img width="100" height="100" src="http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/03/Wedding-Boy-110x110.png" className="attachment-bride_grrom_img size-bride_grrom_img wp-post-image" alt="Wedding Boy" srcset="http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/03/Wedding-Boy-110x110.png 110w, http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/03/Wedding-Boy-128x128.png 128w, http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/03/Wedding-Boy-120x120.png 120w, http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/03/Wedding-Boy-50x50.png 50w, http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/03/Wedding-Boy.png 150w" sizes="(max-width: 100px) 100vw, 100px" />                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-12 float-left">
                                        <div className="sep"></div>
                                    </div>
                                </div>
                                <div className="row animateblock btm animated">
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-12 float-left">
                                        <div className="girlsgroup-img">
                                            <img width="100" height="100" src="http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/10/San-Jhons-110x110.jpg" className="attachment-bride_grrom_img size-bride_grrom_img wp-post-image" alt="San Jhons" srcset="http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/10/San-Jhons-110x110.jpg 110w, http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/10/San-Jhons-150x150.jpg 150w, http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/10/San-Jhons-200x200.jpg 200w, http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/10/San-Jhons-128x128.jpg 128w" sizes="(max-width: 100px) 100vw, 100px" />                                        </div>
                                    </div>
                                    <div className="set-boy col-lg-8 col-md-8 col-sm-12 col-12 float-left">
                                        <div className="girlsgroup-title">San Jhons</div>
                                        <div className="girls-cat">
                                            Groomsman                                        </div>
                                        <div className="girlsgroup-content"><p>Lorem ipsum is mostly a part of a Latin text by the classNameical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it’s not genuine, correct, or comprehensible Latin anymore.</p>
                                        </div>

                                    </div>
                                    <div className="col-sm-12 col-12 float-left">
                                        <div class="sep"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}

export default RingCeremonyComponent;