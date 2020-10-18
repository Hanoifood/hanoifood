import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import { usePostsContext } from "../../context/posts.context";
import { getRandomElements } from "../../utils/helpers";
import Card2 from "../Cards/card-2";

const Popular = () => {
    const options = {
        loop: true,
        nav: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 3,
            },
            1170: {
                items: 4,
            },
        },
    };

    const [{ posts }] = usePostsContext();

    const popularPosts = getRandomElements(posts, 4);

    return (
        <section className="popular-items">
            <div className="container">
                <div className="wrap-content">
                    <div class="heading-post">
                        <h3 class="title">Popular videos </h3>
                    </div>
                    <div className="list-post">
                        <OwlCarousel {...options} nav>
                            {popularPosts &&
                                popularPosts.length > 0 &&
                                popularPosts.map((post) => <Card2 {...post} />)}
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Popular;
