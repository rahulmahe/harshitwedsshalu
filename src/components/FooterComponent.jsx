import React, { Component } from "react";
import '../assets/css/style.css';

class FooterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {
        return (
            <div className="slide footer-slide">
                <div className="footer-writeby text-capitalize text-center col-sm-12 col-12">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-12 col-md-12 col-lg-6 poweredby-text">
                                <p><a href="https://www.solwininfotech.com/product/wordpress-themes/twogether/" target="_blank">TwoGether</a> Theme by <a target="_blank" href="https://www.solwininfotech.com/">Solwin Infotech</a></p>
                            </div>
                            <div className="col-sm-12 col-12 col-md-12 col-lg-6 copyright-text">
                                <p>Copyright  © 2019 <a href="https://www.solwininfotech.com/" target="_blank">Solwin Infotech</a> - All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FooterComponent;