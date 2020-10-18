import React from "react";
import { Link } from "react-router-dom";

const Card3 = (props) => {
    const { image, title, url, shortDescription } = props;

    return (
        <div class="post-item card3">
            <img src={image} alt={title} class=""></img>

            <div class="card3__overlay"></div>

            <Link to={`/bai-viet/${url}`} class="card3__content" tabindex="0">
                <span class="card3__title">{shortDescription}</span>
            </Link>
        </div>
    );
};

export default Card3;
