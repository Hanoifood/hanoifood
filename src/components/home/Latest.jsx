import React, { Component } from "react";
import Card5 from "../Cards/card-5";
import Card4 from "../Cards/card-4";
import { usePostsContext } from "../../context/posts.context";
import { getRandomElements } from "../../utils/helpers";

const Latest = () => {
    const [{ posts }] = usePostsContext();

    const introPosts = getRandomElements(posts, 7);

    const mainPost = introPosts && introPosts.length > 0 && introPosts[0];
    const sidePosts =
        introPosts && introPosts.length > 1 && introPosts.slice(1);

    return (
        <section className="latest">
            <div className="container">
                <div className="wrap-content">
                    <div class="heading-post">
                        <div class="wrap-title">
                            <h3 class="title">Latest Posts </h3>
                        </div>
                    </div>
                    <div className="grid-items">
                        <Card5 {...mainPost} />
                        {sidePosts &&
                            sidePosts.length > 0 &&
                            sidePosts.map((post) => <Card4 {...post} />)}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Latest;
