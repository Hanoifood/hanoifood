import React from "react";
import { Link } from "react-router-dom";

const Card8 = (props) => {
    const { image, title, url, publishedAt } = props;

    return (
        <div className="card8">
            <div class="card8__pic">
                <img src={image} alt={title} class=""></img>
            </div>
            <div class="card8__text">
                <h4 class="card8__title">
                    <Link to={`/bai-viet/${url}`}>{title}</Link>
                </h4>
                <span class="card8__date">{publishedAt}</span>
            </div>
        </div>
    );
};

export default Card8;
