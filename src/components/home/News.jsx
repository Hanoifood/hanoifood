import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import { usePostsContext } from "../../context/posts.context";
import { getRandomElements } from "../../utils/helpers";
import Card6 from "../Cards/card-6";
import Card7 from "../Cards/card-7";

const News = () => {
    const options = {
        loop: true,
        nav: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 1,
            },
            1170: {
                items: 1,
            },
        },
    };

    const [{ posts }] = usePostsContext();

    const introPosts = getRandomElements(posts, 3);

    const mainPost = introPosts && introPosts.length > 0 && introPosts[0];
    const sidePosts =
        introPosts && introPosts.length > 1 && introPosts.slice(1);

    return (
        <section className="newsfeed">
            <div className="container">
                <div className="wrap-content">
                    <div class="heading-post">
                        <h3 class="title">News feed</h3>

                        <div class="description">
                            News around the globe within your fingertips{" "}
                        </div>
                    </div>

                    <div className="list-post">
                        <OwlCarousel {...options} nav>
                            <div className="post-item">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <Card6 {...mainPost} />
                                    </div>

                                    <div className="col-lg-6">
                                        {sidePosts &&
                                            sidePosts.length > 0 &&
                                            sidePosts.map((post) => (
                                                <Card7 {...post} />
                                            ))}
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default News;
