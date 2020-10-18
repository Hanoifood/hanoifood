import React from "react";
import { Link } from "react-router-dom";

const Card7 = (props) => {
    const { title, shortDescription, image, url } = props;

    return (
        <div class="card7">
            <div class="card7__pic">
                <a href="#" tabindex="0">
                    <img src={image} alt={title} class=""></img>
                </a>
            </div>
            <div class="card7__text">
                <div class="card7__info">{title}</div>

                <h4 class="card7__title">
                    <Link to={`/bai-viet/${url}`}>{title}</Link>
                </h4>

                <div class="card7__description">{shortDescription}</div>
            </div>
        </div>
    );
};

export default Card7;
