import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../assets/css/style.css';
import icon from "../assets/images/bride_groom_sep.png";

class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    renderBannerText = () => {
        return (
            <div className="banner_content">
                <div className="main-text">
                    <div class="b_name left">Shalu <span> Gulati </span>
                    </div>
                    <div class="b_name middle">
                        <img src={icon} alt="weds" />
                        <div class="b_name right"> Harshit <span> Gaur </span>
                        </div>
                    </div>
                </div>
                <div className='overbannerText'>
                    <h2>Let's share &amp; come celebrate with us on</h2>
                    <p>24/11/2019</p>
                </div>
            </div>
        )
    }

    render() {
        var settings = {
            autoplay: true,
            infinite: true,
            speed: 150,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Slider {...settings} className="banner-slider">
                <div className="slide-banner-1">
                    {this.renderBannerText()}
                </div>
                <div className="slide-banner-2">
                    {this.renderBannerText()}
                </div>
            </Slider >
        );
    }


}

export default HomeComponent;