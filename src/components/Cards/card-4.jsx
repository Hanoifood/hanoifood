import React from "react";
import { Link } from "react-router-dom";

const Card4 = (props) => {
    const { image, title, url } = props;

    return (
        <div class="post-item card4">
            <Link to={`/bai-viet/${url}`}>
                <img src={image} alt={title} class=""></img>
            </Link>

            <div class="card4__overlay"></div>

            <div class="card4__meta-info">
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
                    <div class="label">Hot </div>
                </div>
            </div>

            <div class="card4__content">
                <div class="meta">
                    <div class="item item-like">
                        <i class="fa fa-thumbs-o-up" aria-hidden="true"></i> 12k{" "}
                    </div>
                </div>
                <h4 class="card4__title">
                    <Link to={`/bai-viet/${url}`}>
                        Vividly Bloggers opens up about life in Mexico
                    </Link>
                </h4>
            </div>
        </div>
    );
};

export default Card4;
