import React, { Component } from "react";
import seperatorImage from '../assets/images/separator.png';
import '../assets/css/style.css';

class WeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {
        return (
            <section id="we" className="slide we active" data-stellar-background-ratio="0.5">
                <div className="we col-sm-12 col-12">

                    <div className="container">
                        <div className="welcome-title">
                            <h1 className="welcome text-center"><span>Welcome</span> <color>Y’ALL</color> <span>to our</span> <b>WEDDING</b></h1>
                            <div className="seperator_border">
                                <div className="separator" style={{backgroundImage: `url(${seperatorImage})`}}>
                                </div>
                            </div>
                        </div>
                        <div className="couple animateblock btm animated">
                            <div className="col-md-5 col-sm-12 col-12 padd-left groom-img float-left">
                                <div className="girl-img">
                                    <img src="http://demo.solwininfotech.com/wordpress/twogether/wp-content/themes/twogether/images/wedding_girl.jpg" />
                                </div>
                                <div className="girl-name">
                                    <h3 className="welcome text-center">
                                        <span>The</span>
                                        <b>BRIDE</b>
                                    </h3>
                                    <div className="text-capitalize text-center">Angelika Sneed</div>
                                </div>
                                <div className="girl-content">
                                    I love you for your beauty, your intelligence, your kindness… and for the way you always know how to make me feel so special. So on top of all the other vows that I will make to you on our wedding day, I also vow to always appreciate how lucky I am.                        </div>
                            </div>
                            <div className="col-md-2 col-sm-12 col-12 heart float-left">
                                <img src="http://demo.solwininfotech.com/wordpress/twogether/wp-content/themes/twogether/images/inheart.png" />
                            </div>
                            <div className="col-md-5 col-sm-12 col-12 padd-right groom-img float-left">
                                <div className="girl-img">
                                    <img src="http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/03/Wedding-Boy.png" />
                                </div>
                                <div className="girl-name">
                                    <h3 className="welcome text-center">
                                        <span>The</span>
                                        <b>GROOM</b>
                                    </h3>
                                    <div className="text-capitalize text-center">William Gary</div>
                                </div>
                                <div className="girl-content">
                                    You have been my best friend, mentor, playmate, confidant, and my greatest challenge. But most importantly, you are the love of my life and you make me happier than I could ever imagine and more loved than I ever thought possible.                        </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>
        );
    }
}

export default WeComponent;