import React from "react";
import { Link } from "react-router-dom";

const Card6 = (props) => {
    const { title, publishedAt, image, url } = props;

    return (
        <div className="card6">
            <Link to={`/bai-viet/${url}`}>
                <img src={image} alt={title} class=""></img>
            </Link>

            <div class="card6__overlay"></div>

            <div class="card6__content">
                <h4 class="card6__title">
                    <Link to={`/bai-viet/url`}>{title}</Link>
                </h4>

                <div class="card6__info">
                    <span class="item-info">{publishedAt}</span>
                </div>
            </div>
        </div>
    );
};

export default Card6;
