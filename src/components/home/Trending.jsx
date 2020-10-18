import React from "react";
import { usePostsContext } from "../../context/posts.context";

import OwlCarousel from "react-owl-carousel";
import Card3 from "../Cards/card-3";
import { getRandomElements } from "../../utils/helpers";

const Trending = () => {
    const options = {
        loop: true,
        nav: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1170: {
                items: 3,
            },
        },
    };

    const [{ posts }] = usePostsContext();

    const trendingPosts = getRandomElements(posts, 4);

    return (
        <section className="trending">
            <div className="container">
                <div className="wrap-content">
                    <div class="heading-post">
                        <div class="text">
                            <h3 class="title">Trending </h3>
                        </div>
                    </div>
                    <div className="list-post">
                        <OwlCarousel {...options} nav>
                            {trendingPosts &&
                                trendingPosts.length > 0 &&
                                trendingPosts.map((post) => (
                                    <Card3 {...post} />
                                ))}
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Trending;
