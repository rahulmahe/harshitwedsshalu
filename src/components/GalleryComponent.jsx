import React, { Component } from "react";
import seperatorImage from '../assets/images/separator.png';
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import '../assets/css/style.css';

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

class GalleryComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photoIndex: 0,
            isOpen: false
        }
    }


    render() {
        const { photoIndex, isOpen } = this.state;
        return (
            <section id="gallery" className="slide gallery active" data-stellar-background-ratio="0.5">
                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length
                            })
                        }
                    />
                )}
                <div className="latest-blog-wrapper gallery-single">
                    <div className="container">
                        <div className="welcome-title">
                            <h1 className="welcome text-center"><span>Our</span> <b>Gallery</b></h1>
                            <div className="seperator_border">
                                <div className="separator" style={{ backgroundImage: `url(${seperatorImage})` }}></div>
                            </div>
                        </div>
                    </div>
                    <div className="row gallery-cover">
                        <div className="col-sm-6 col-6 col-md-3 col-lg-3 animateblock btm padding_0 ourgallery-block text-center animated">
                            <div className="col-sm-12 col-12 padding_0">
                                <a onClick={() => this.setState({ isOpen: true, photoIndex: 0 })} className="fancybox" rel="gallery">
                                    <img width="1024" height="682" src="http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/10/20-1024x682.jpg" className="attachment-gallery-img size-gallery-img wp-post-image" alt="Free Wedding WordPress Theme" />
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-6 col-6 col-md-3 col-lg-3 animateblock btm padding_0 ourgallery-block text-center animated">
                            <div className="col-sm-12 col-12 padding_0">
                                <a onClick={() => this.setState({ isOpen: true, photoIndex: 1 })} className="fancybox" rel="gallery">
                                    <img width="1024" height="682" src="http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/10/9-1024x682.jpg" className="attachment-gallery-img size-gallery-img wp-post-image" alt="Free Wedding WordPress Theme" />
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-6 col-6 col-md-3 col-lg-3 animateblock btm padding_0 ourgallery-block text-center animated">
                            <div className="col-sm-12 col-12 padding_0">
                                <a onClick={() => this.setState({ isOpen: true, photoIndex: 2 })} className="fancybox" rel="gallery">
                                    <img width="450" height="300" src="http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/10/22-1.jpg" className="attachment-gallery-img size-gallery-img wp-post-image" alt="" srcset="http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/10/22-1.jpg 450w, http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/10/22-1-300x200.jpg 300w" sizes="(max-width: 450px) 100vw, 450px" />
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-6 col-6 col-md-3 col-lg-3 animateblock btm padding_0 ourgallery-block text-center animated">
                            <div className="col-sm-12 col-12 padding_0">
                                <a onClick={() => this.setState({ isOpen: true, photoIndex: 3 })} className="fancybox" rel="gallery">
                                    <img width="1024" height="682" src="http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/10/23-1024x682.jpg" className="attachment-gallery-img size-gallery-img wp-post-image" alt="Free Wedding WordPress Theme" />
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-6 col-6 col-md-3 col-lg-3 animateblock btm padding_0 ourgallery-block text-center animated">
                            <div className="col-sm-12 col-12 padding_0">
                                <a onClick={() => this.setState({ isOpen: true, photoIndex: 4 })} className="fancybox" rel="gallery">
                                    <img width="1024" height="682" src="http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/10/24-1024x682.jpg" className="attachment-gallery-img size-gallery-img wp-post-image" alt="Free Wedding WordPress Theme" />
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-6 col-6 col-md-3 col-lg-3 animateblock btm padding_0 ourgallery-block text-center animated">
                            <div className="col-sm-12 col-12 padding_0">
                                <a onClick={() => this.setState({ isOpen: true, photoIndex: 5 })} className="fancybox" rel="gallery">
                                    <img width="1024" height="682" src="http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/10/wedding-725437-1024x682.jpg" className="attachment-gallery-img size-gallery-img wp-post-image" alt="Free Wedding WordPress Theme" />
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-6 col-6 col-md-3 col-lg-3 animateblock btm padding_0 ourgallery-block text-center animated">
                            <div className="col-sm-12 col-12 padding_0">
                                <a onClick={() => this.setState({ isOpen: true, photoIndex: 6 })} className="fancybox" rel="gallery">
                                    <img width="1024" height="682" src="http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/10/21-1024x682.jpg" className="attachment-gallery-img size-gallery-img wp-post-image" alt="Free Wedding WordPress Theme" />
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-6 col-6 col-md-3 col-lg-3 animateblock btm padding_0 ourgallery-block text-center animated">
                            <div className="col-sm-12 col-12 padding_0">
                                <a onClick={() => this.setState({ isOpen: true, photoIndex: 7 })} className="fancybox" rel="gallery">
                                    <img width="1024" height="682" src="http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/10/19-1024x682.jpg" className="attachment-gallery-img size-gallery-img wp-post-image" alt="Free Wedding WordPress Theme" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default GalleryComponent;