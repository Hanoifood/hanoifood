import React from "react";
import { Link } from "react-router-dom";

const Card5 = (props) => {
    const { title, image, url, publishedAt, shortDescription } = props;

    return (
        <div class="post-item card5">
            <Link to={`/bai-viet/${url}`}>
                <img src={image} alt={title} class=""></img>
            </Link>

            <div class="card5__overlay"></div>

            <div class="card5__meta-info">
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
                        9
                    </span>
                    IMDb{" "}
                </div>
                <div class="labels">
                    <div class="label">Trend </div>
                </div>
            </div>

            <div class="card5__content">
                <div class="card5__meta">
                    <div class="item item-like">
                        <i class="fa fa-thumbs-o-up" aria-hidden="true"></i> 12k{" "}
                    </div>
                    <div class="item item-comment">
                        <i class="fa fa-comments" aria-hidden="true"></i> 25{" "}
                    </div>
                </div>
                <h4 class="card5__title">
                    <Link to={`/bai-viet/${url}`}>{title}</Link>
                </h4>
                <div class="card5__info">
                    <span class="item-info">{publishedAt}</span>
                </div>

                <div class="card5__description">{shortDescription}</div>

                <Link
                    to={`/bai-viet/${url}`}
                    class="btn-readmore btn-normal shape-round"
                >
                    Read More{" "}
                </Link>
            </div>
        </div>
    );
};

export default Card5;
