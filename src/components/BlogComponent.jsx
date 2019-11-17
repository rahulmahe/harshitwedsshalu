import React, { Component } from "react";
import seperatorImage from '../assets/images/separator.png';
import '../assets/css/style.css';

class BlogComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {
        return (
            <section id="latest-blog" className="slide latest-blog active" data-stellar-background-ratio="0.5">
                <div className="">
                    <div className="container">
                        <div className="row">
                            <div className="welcome-title col-12">
                                <h1 className="welcome text-center"><span>Good Times</span><b> We Had Together</b></h1>
                                <div className="seperator_border">
                                    <div className="separator" style={{ backgroundImage: `url(${seperatorImage})` }}></div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-12 col-md-4 animateblock btm float-left animated">
                                <div className="latest-blog-div col-sm-12 col-12 p-0">
                                    <div className="col-sm-12 col-12 padding_0">
                                        <a href="#">
                                            <img width="283" height="200" src="http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/10/9.jpg" className="attachment-latest-blog-thumb size-latest-blog-thumb wp-post-image" alt="Free Wedding WordPress Theme" srcset="http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/10/9.jpg 2156w, http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/10/9-300x212.jpg 300w, http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/10/9-1024x724.jpg 1024w" sizes="(max-width: 283px) 100vw, 283px" />                                    </a>
                                    </div>
                                    <h3 className="text-center text-capitalize col-sm-12 col-12 padding_0">
                                        <a href="#">
                                            My 2 Cents on Wedding                                    </a>
                                    </h3>
                                    <div className="latest-blog-content text-justify">
                                        Tip 1 : Plan a good timeline If ever a bride asks “What is the ONE thing I can do to get the best wedding photos possible?”… “Plan a good wedding day timeline” is my answer. It is THE most important tip I can offer. “What makes a good wedding timeline”, you ask? Plan MORE..                                </div>
                                    <div className="latest-blog-info">
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-12 col-md-4 animateblock btm float-left animated">
                                <div className="latest-blog-div col-sm-12 col-12 p-0">
                                    <div className="col-sm-12 col-12 padding_0">
                                        <a href="#">
                                            <img width="300" height="200" src="http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/10/Wedding-Ring.jpg" className="attachment-latest-blog-thumb size-latest-blog-thumb wp-post-image" alt="Wedding Ring" srcset="http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/10/Wedding-Ring.jpg 2048w, http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/10/Wedding-Ring-300x200.jpg 300w, http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/10/Wedding-Ring-1024x682.jpg 1024w" sizes="(max-width: 300px) 100vw, 300px" />                                    </a>
                                    </div>
                                    <h3 className="text-center text-capitalize col-sm-12 col-12 padding_0">
                                        <a href="#">
                                            15+ Diamond Wedding Rings                                    </a>
                                    </h3>
                                    <div className="latest-blog-content text-justify">
                                        Many of us already know that the modern wedding&nbsp;ring was an invention of the diamond industry. (I know,&nbsp;shocking right?!) And even more of us know that wedding rings don’t have to look like what Tiffany’s is trying to sell us. From the event designer, knowing the history of wedding traditions doesn’t automatically mean you can&nbsp;extricate..                                </div>
                                    <div className="latest-blog-info">
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-12 col-md-4 animateblock btm float-left animated">
                                <div className="latest-blog-div col-sm-12 col-12 p-0">
                                    <div className="col-sm-12 col-12 padding_0">
                                        <a href="#">
                                            <img width="267" height="200" src="http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/10/Meet-My-Parents.jpg" className="attachment-latest-blog-thumb size-latest-blog-thumb wp-post-image" alt="Meet My Parents" srcset="http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/10/Meet-My-Parents.jpg 640w, http://demo.solwininfotech.com/wordpress/twogether/wp-content/uploads/2015/10/Meet-My-Parents-300x225.jpg 300w" sizes="(max-width: 267px) 100vw, 267px" />                                    </a>
                                    </div>
                                    <h3 className="text-center text-capitalize col-sm-12 col-12 padding_0">
                                        <a href="#">
                                            Meet My Parents                                    </a>
                                    </h3>
                                    <div className="latest-blog-content text-justify">
                                        red rose with a heart box Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. red rose with a heart box..                                </div>
                                    <div className="latest-blog-info">
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

export default BlogComponent;