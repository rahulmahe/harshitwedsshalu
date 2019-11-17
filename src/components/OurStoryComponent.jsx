import React, { Component } from "react";
import seperatorImage from '../assets/images/separator.png';
import '../assets/css/style.css';

class OurStoryComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {
        return (
            <section id="our-story-2" className="slide our-story-2 active" data-stellar-background-ratio="0.5">
                <div className="story-back col-sm-12 col-12">
                    <div className="container">
                        <div className="our-story-title animateblock btm animated">
                            <h1 className="welcome text-center"><span>Our</span> <b>Story</b></h1>
                            <div className="seperator_border">
                                <div className="separator" style={{backgroundImage: `url(${seperatorImage})`}}></div>
                            </div>
                        </div>
                        <div className="col-md-12 our_story padding_0 animateblock btm animated">
                            <div className="ourstory-timeline">
                                <div className="line"></div>
                                <div className="row animateblock btm animated">
                                    <div className="bubble bubble-left">
                                        <div className="bubble_img">
                                            <img src="http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/01/John-Carter.jpg" />
                                        </div>
                                    </div>
                                    <div className="ourstory-row">
                                        <div className="col-md-6 pull-left post-thumb col-sm-6 col-6">
                                            <div className="thumb-img">
                                                <img width="200" height="200" src="http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/01/17-200x200.jpg" className="attachment-ourstory-img size-ourstory-img wp-post-image" alt="Our Story Couple" srcset="http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/01/17-200x200.jpg 200w, http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/01/17-150x150.jpg 150w, http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/01/17-110x110.jpg 110w, http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/01/17-128x128.jpg 128w, http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/01/17-120x120.jpg 120w, http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/01/17-300x300.jpg 300w, http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/01/17-50x50.jpg 50w" sizes="(max-width: 200px) 100vw, 200px" />                                            </div>
                                        </div>
                                        <div className="col-md-6 set-content-right pull-right col-sm-6 col-6">

                                            <div className="year">2010</div>

                                            <div className="our-story-div">
                                                <div className="our-story-name">Our First Meet </div>
                                                <div className="our-story-content"><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row animateblock btm animated">
                                    <div className="bubble bubble-right">
                                        <div className="bubble_img">
                                            <img src="http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/01/weddinggirl2.jpg" />
                                        </div>
                                    </div>
                                    <div className="ourstory-row">
                                        <div className="col-md-6 set-content-left pull-left col-sm-6 col-6">

                                            <div className="year">2011</div>
                                            <div className="our-story-div">
                                                <div className="our-story-name"> Our First Date </div>
                                                <div className="our-story-content"><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 pull-right post-thumb col-sm-6 col-6">
                                            <div className="thumb-img">
                                                <img width="200" height="200" src="http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/01/19-200x200.jpg" className="attachment-ourstory-img size-ourstory-img wp-post-image" alt="Our Story Couple" srcset="http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/01/19-200x200.jpg 200w, http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/01/19-150x150.jpg 150w, http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/01/19-110x110.jpg 110w, http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/01/19-128x128.jpg 128w, http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/01/19-120x120.jpg 120w, http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/01/19-300x300.jpg 300w, http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/01/19-50x50.jpg 50w" sizes="(max-width: 200px) 100vw, 200px" />                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row animateblock btm animated">
                                    <div className="bubble bubble-left">
                                        <div className="bubble_img">
                                            <img src="http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/10/Suzen-Silva.jpg" />
                                        </div>
                                    </div>
                                    <div className="ourstory-row">
                                        <div className="col-md-6 pull-left post-thumb col-sm-6 col-6">
                                            <div className="thumb-img">
                                                <img width="200" height="200" src="http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/01/151-200x200.jpg" className="attachment-ourstory-img size-ourstory-img wp-post-image" alt="Our First Proposal" srcset="http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/01/151-200x200.jpg 200w, http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/01/151-150x150.jpg 150w, http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/01/151-110x110.jpg 110w, http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/01/151-128x128.jpg 128w, http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/01/151-120x120.jpg 120w, http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/01/151-300x300.jpg 300w, http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/01/151-50x50.jpg 50w" sizes="(max-width: 200px) 100vw, 200px" />                                            </div>
                                        </div>
                                        <div className="col-md-6 set-content-right pull-right col-sm-6 col-6">

                                            <div className="year">2012</div>

                                            <div className="our-story-div">
                                                <div className="our-story-name">Our First Proposal </div>
                                                <div className="our-story-content"><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row animateblock btm animated">
                                    <div className="bubble bubble-right">
                                        <div className="bubble_img">
                                            <img src="http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/01/Sara-Wright.jpg" />
                                                                                        </div>
                                        </div>
                                        <div className="ourstory-row">
                                            <div className="col-md-6 set-content-left pull-left col-sm-6 col-6">

                                                <div className="year">2013</div>
                                                <div className="our-story-div">
                                                    <div className="our-story-name"> On Engagement  </div>
                                                    <div className="our-story-content"><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 pull-right post-thumb col-sm-6 col-6">
                                                <div className="thumb-img">
                                                    <img width="200" height="200" src="http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/01/3-200x200.jpg" className="attachment-ourstory-img size-ourstory-img wp-post-image" alt="Our Story Couple" srcset="http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/01/3-200x200.jpg 200w, http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/01/3-150x150.jpg 150w, http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/01/3-110x110.jpg 110w, http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/01/3-128x128.jpg 128w, http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/01/3-120x120.jpg 120w, http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/01/3-300x300.jpg 300w, http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/01/3-50x50.jpg 50w" sizes="(max-width: 200px) 100vw, 200px" />                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row animateblock btm animated">
                                        <div className="bubble bubble-left">
                                            <div className="bubble_img">
                                                <img src="http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/03/weddinggirl2.jpg" />
                                            </div>
                                        </div>
                                        <div className="ourstory-row">
                                            <div className="col-md-6 pull-left post-thumb col-sm-6 col-6">
                                                <div className="thumb-img">
                                                    <img width="200" height="200" src="http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/01/25-200x200.jpg" className="attachment-ourstory-img size-ourstory-img wp-post-image" alt="Our First Outing" srcset="http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/01/25-200x200.jpg 200w, http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/01/25-150x150.jpg 150w, http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/01/25-110x110.jpg 110w, http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/01/25-128x128.jpg 128w, http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/01/25-120x120.jpg 120w, http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/01/25-300x300.jpg 300w, http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/01/25-50x50.jpg 50w" sizes="(max-width: 200px) 100vw, 200px" />                                            </div>
                                            </div>
                                            <div className="col-md-6 set-content-right pull-right col-sm-6 col-6">

                                                <div className="year">2014</div>

                                                <div className="our-story-div">
                                                    <div className="our-story-name">Our First Outing </div>
                                                    <div className="our-story-content"><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                    </div>
                                                </div>
                                            </div>
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
        
export default OurStoryComponent;