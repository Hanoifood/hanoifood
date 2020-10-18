import React from "react";
import { Link } from "react-router-dom";

const Card2 = (props) => {
    const { title, url, image } = props;

    return (
        <div class="post-item card2">
            <div class="card2__pic">
                <Link to={`/bai-viet//${url}`}>
                    <img src={image} alt={title} class=""></img>
                </Link>

                <div class="card2__overlay"></div>

                <div class="card2__meta-info">
                    <div class="imdb">
                        <span
                            class="value"
                            style={{
                                background: `url(${require("../../images/star.png")})`,
                                backgroundSize: "contain",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center center",
                            }}
                        >
                            5
                        </span>
                        IMDb{" "}
                    </div>

                    <div class="labels">
                        <div class="label">Popular </div>
                    </div>
                </div>

                <div class="card2__meta">
                    <div class="item item-like">
                        <i class="fa fa-thumbs-o-up" aria-hidden="true"></i> 11k{" "}
                    </div>
                    <div class="item item-comment">
                        <i class="fa fa-comments" aria-hidden="true"></i> 13{" "}
                    </div>
                </div>

                <Link
                    to={`/bai-viet/${url}`}
                    class="btn-play"
                    data-id="774"
                    tabindex="0"
                    style={{
                        background: `url(${require("../../images/icon-play-01.png")})`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center center",
                    }}
                ></Link>
            </div>

            <h4 class="card2__title">
                <Link to={`/bai-viet/${url}`}>
                    Top 15 Streamer WordPress Themes and Websites{" "}
                </Link>
            </h4>
        </div>
    );
};

export default Card2;
