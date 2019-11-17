import React, { Component } from "react";
import seperatorImage from '../assets/images/separator.png';
import image from '../assets/images/1.jpeg';
import '../assets/css/style.css';

class PartyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {
        return (
            <section id="party" className="slide party" data-stellar-background-ratio="0.5">
                <p>&nbsp;</p>
                <div className="party-back  col-sm-12 col-12">
                    <div className="container">
                        <div className="party-title-cover animateblock btm animated">

                            <h1 className="party-title text-center animateblock btm animated">Party</h1>
                            <div className="seperator_border">
                                <div className="separator" style={{ backgroundImage: `url(${seperatorImage})` }}></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="party col-sm-12 col-12 col-md-6 animateblock btm float-left animated">
                                <p className="party-content text-justify"></p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <p></p>
                            </div>
                            <div className="col-md-6 col-sm-12 col-12 animateblock btm float-left animated">
                                <img src={image} style={{maxWidth: "400px", maxHeight: "300px"}}/>
                            </div>
                        </div>
                    </div>
                </div>


            </section>
        );
    }
}

export default PartyComponent;