import React, { Component } from "react";
import Card9 from "../components/Cards/card-9";
import OwlCarousel from "react-owl-carousel";
import Card10 from "../components/Cards/card-10";

export default class AboutUs extends Component {
    render() {
        const options = {
            loop: true,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 3,
                },
                1170: {
                    items: 6,
                },
            },
        };
        return (
            <div className="aboutus">
                <div className="page-title">
                    <div className="page-title">
                        <div
                            className="main-top"
                            style={{
                                background: `linear-gradient(to bottom, rgba(0,0,0,.5), rgba(0,0,0,.5)),url(http://video-blog.thimpress.com/wp-content/uploads/2019/01/bg-about-1.jpg)`,
                                backgroundSize: "cover",
                            }}
                        >
                            <div class="content container">
                                <h1>Videos</h1>
                                <div class="wrap-breadcrumb">
                                    <ul
                                        itemprop="breadcrumb"
                                        itemscope=""
                                        itemtype="http://schema.org/BreadcrumbList"
                                        id="breadcrumbs"
                                        class="breadcrumbs"
                                    >
                                        <li
                                            itemprop="itemListElement"
                                            itemscope=""
                                            itemtype="http://schema.org/ListItem"
                                        >
                                            <a
                                                itemprop="item"
                                                href="http://video-blog.thimpress.com"
                                                title="Home"
                                            >
                                                <span itemprop="name">
                                                    Home
                                                </span>
                                            </a>
                                            <span class="breadcrum-icon">
                                                /
                                            </span>
                                        </li>
                                        <li
                                            itemprop="itemListElement"
                                            itemscope=""
                                            itemtype="http://schema.org/ListItem"
                                        >
                                            <span
                                                itemprop="name"
                                                title="About us"
                                            >
                                                {" "}
                                                About Us
                                            </span>
                                        </li>
                                    </ul>{" "}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page-content ">
                    <div className="services container">
                        <h3 className="services__heading">Our Services</h3>

                        <div className="services__items">
                            {[...Array(6)].map(() => (
                                <Card9 />
                            ))}
                        </div>
                    </div>
                    <div className="customer">
                        <h3>Our Customer</h3>

                        <div className="customer-gallery">
                            <div className="container">
                                <OwlCarousel {...options}>
                                    {[...Array(10)].map(() => (
                                        <Card10 />
                                    ))}
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
