import React from "react";
import { Link } from "react-router-dom";

const Card9 = (props) => {
    const { title, url, shortDescription } = props;

    return (
        <div className="card9">
            <div className="card9__icon">
                <img
                    src="http://video-blog.thimpress.com/wp-content/uploads/2019/01/icon-box-01-1.png"
                    alt="icon"
                />
            </div>

            <div className="card9__content">
                <div className="card9__title">
                    <Link to={`/bai-viet/${url}`}>{title}</Link>
                </div>

                <div className="card9__description">{shortDescription}</div>
            </div>
        </div>
    );
};

export default Card9;
