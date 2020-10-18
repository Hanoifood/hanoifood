import React from "react";
import { Link } from "react-router-dom";

const Card1 = (props) => {
    const { title, publishedAt, image, url } = props;

    return (
        <div class="col-sm-6 col-lg-3 ">
            <div class="card1-item">
                <div class="card1__pic">
                    <Link to={`/bai-viet/${url}`}>
                        <img src={image} alt={title} class=""></img>
                    </Link>

                    <div class="card1__labels">
                        <div class="label">Trend </div>
                    </div>
                </div>

                <h4 class="card1__title">
                    <Link to={`/bai-viet/${url}`}>{title}</Link>
                </h4>

                <div class="card1__info">{publishedAt}</div>
            </div>
        </div>
    );
};

export default Card1;
