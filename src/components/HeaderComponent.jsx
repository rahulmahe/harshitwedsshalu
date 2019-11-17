import React, { Component } from "react";
import { animateScroll as scroll } from "react-scroll";
import '../assets/css/style.css';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSection: 1,
            toSection: 1
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    }

    handleScroll() {
        let yOffset = window.pageYOffset;
        let { activeSection } = this.state;
            if (yOffset >= 0 && yOffset < 538)
                activeSection = 1;
            else if (yOffset >= 538 && yOffset < 1100)
                activeSection = 2;
            else if (yOffset >= 1100 && yOffset < 2905)
                activeSection = 3;
            else if (yOffset >= 2905 && yOffset < 3780)
                activeSection = 4;
            else if (yOffset >= 3780 && yOffset < 5500)
                activeSection = 5;
            else if (yOffset >= 5500 && yOffset < 5700)
                activeSection = 6;
            else
                activeSection = 7;
            this.setState({ activeSection })
        }

        changeActiveSection = (event, activeSlide, toSection) => {
            event.preventDefault();
            this.setState({
                activeSection: activeSlide
            })
            switch (toSection) {
                case 1:
                    scroll.scrollTo(0);
                    break;

                case 2:
                    scroll.scrollTo(538);
                    break;

                case 3:
                    scroll.scrollTo(1100);
                    break;

                case 4:
                    scroll.scrollTo(2905);
                    break;

                case 5:
                    scroll.scrollTo(3780);
                    break;

                case 6:
                    scroll.scrollTo(5500);
                    break;

                case 7:
                    scroll.scrollTo(6410);
                    break;

                default:
                    window.scrollTo(0, 0);
            }
        }

        render() {
            console.log("this.state.activeSection", this.state.activeSection);
            return (
                <header id="masthead" className="site-header text-center" role="banner">
                    <div className="container">
                        <div id="navigation" className="navbar-collapse collapse">
                            <div id="primary-navigation" className="primary-navigation-menu">
                                <ul id="menu-header-menu" className="nav nav-menu">
                                    <li id="menu-item-161" className={`menu-item menu-item-type-post_type menu-item-object-page ${this.state.activeSection == 1 ? 'active' : ''}`}>
                                        <a href="#home" onClick={(e) => this.changeActiveSection(e, 1, 1)}>Home</a>
                                    </li>
                                    <li id="menu-item-130" className={`menu-item menu-item-type-post_type menu-item-object-page  ${this.state.activeSection == 2 ? 'active' : ''}`}>
                                        <a href="#we" onClick={(e) => this.changeActiveSection(e, 2, 2)}>WE</a>
                                    </li>
                                    <li id="menu-item-27" className={`menu-item menu-item-type-post_type menu-item-object-page  ${this.state.activeSection == 3 ? 'active' : ''}`}>
                                        <a href="#our-story-2" onClick={(e) => this.changeActiveSection(e, 3, 3)}>Our Story</a>
                                    </li>
                                    <li id="menu-item-26" className={`menu-item menu-item-type-post_type menu-item-object-page  ${this.state.activeSection == 4 ? 'active' : ''}`}>
                                        <a href="#gallery" onClick={(e) => this.changeActiveSection(e, 4, 4)}>Gallery</a>
                                    </li>
                                    <li id="menu-item-25" className={`menu-item menu-item-type-post_type menu-item-object-page  ${this.state.activeSection == 5 ? 'active' : ''}`}>
                                        <a href="#the-wedding" onClick={(e) => this.changeActiveSection(e, 5, 5)}>The Ring Ceremony</a>
                                    </li>
                                    <li id="menu-item-23" className={`menu-item menu-item-type-post_type menu-item-object-page  ${this.state.activeSection == 6 ? 'active' : ''}`}>
                                        <a href="#party" onClick={(e) => this.changeActiveSection(e, 6, 6)}>Party</a>
                                    </li>
                                    <li id="menu-item-152" className={`menu-item menu-item-type-post_type menu-item-object-page  ${this.state.activeSection == 7 ? 'active' : ''}`}>
                                        <a href="#latest-blog" onClick={(e) => this.changeActiveSection(e, 7, 7)}>Memorable Moments</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>
            );
        }
    }

    export default HeaderComponent;