import React from "react";
import { Link } from "react-router-dom";
import { usePostsContext } from "../../context/posts.context";
import { getRandomElements } from "../../utils/helpers";
import Card1 from "../Cards/card-1";

const Introduction = () => {
    const [{ posts }] = usePostsContext();

    const introPosts = getRandomElements(posts, 5);

    const mainPost = introPosts && introPosts.length > 0 && introPosts[0];
    const sidePosts =
        introPosts && introPosts.length > 1 && introPosts.slice(1);

    return (
        <section
            className="introduction"
            style={{
                background: `linear-gradient(
                    to bottom,
                    rgba(0, 0, 0, 0.6),
                    rgba(0, 0, 0, 0.6)
                ),url(${require("../../images/bg-01.jpg")})`,
            }}
        >
            <div className="container">
                <div className="wrap-content-introduction">
                    <div className="introduction-video">
                        <div className="row align-items-center">
                            <div className="col-md-9">
                                <div className="video">
                                    <div className="thumbnail">
                                        <img
                                            src={mainPost && mainPost.image}
                                            alt={mainPost && mainPost.title}
                                            className=""
                                        ></img>
                                    </div>

                                    <a href="#" className="overlay"></a>

                                    <div className="meta-info">
                                        <div className="imdb">
                                            <span
                                                className="value"
                                                style={{
                                                    background: `url(${require("../../images/star.png")})`,
                                                }}
                                            >
                                                5
                                            </span>
                                            IMDb{" "}
                                        </div>
                                        <div className="labels">
                                            <div className="label">
                                                Popular{" "}
                                            </div>
                                        </div>
                                    </div>

                                    <Link
                                        to={`/bai-viet/${mainPost.url}`}
                                        className="btn-play"
                                        data-id="256"
                                        data-effect="mfp-zoom-in"
                                        style={{
                                            background: `url(${require("../../images/icon-play-01.png")})`,
                                            backgroundSize: "contain",
                                            backgroundRepeat: "no-repeat",
                                            backgroundPosition: "center center",
                                        }}
                                    ></Link>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="text">
                                    <h4 class="title">
                                        <Link to={`/bai-viet/${mainPost.url}`}>
                                            {mainPost && mainPost.title}
                                        </Link>
                                    </h4>

                                    <div class="info">
                                        <span class="item-info">
                                            {mainPost && mainPost.publishedAt}
                                        </span>
                                        <span class="item-info">
                                            Featured Video
                                        </span>
                                    </div>

                                    <div class="description">
                                        {mainPost && mainPost.shortDescription}
                                    </div>

                                    <Link
                                        to={`/bai-viet/${mainPost.url}`}
                                        class="btn-readmore btn-normal shape-round"
                                    >
                                        Read More{" "}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="introduction-items">
                        <div className="wrap-introduction-items">
                            <div className="row">
                                {sidePosts &&
                                    sidePosts.length > 0 &&
                                    sidePosts.map((post) => (
                                        <Card1 {...post} />
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Introduction;
