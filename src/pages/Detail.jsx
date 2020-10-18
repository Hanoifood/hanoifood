import React from "react";
import { useParams } from "react-router";
import { usePostsContext } from "../context/posts.context";

const Detail = () => {
    const { url } = useParams();
    const [{ posts }] = usePostsContext();

    const post = posts.find((post) => post.url === url);

    const { title, shortDescription, image, description } = post;

    return (
        <div className="detail">
            <div className="main-content">
                <div class="page-title">
                    <div
                        class="main-top"
                        style={{
                            background: `linear-gradient(to bottom, rgba(0,0,0,.5), rgba(0,0,0,.5)),url(http://video-blog.thimpress.com/wp-content/uploads/2019/01/bg-page-title-04.jpg)`,
                            backgroundSize: "cover",
                        }}
                    >
                        <div class="content container">
                            <h1>{title}</h1>{" "}
                            <div class="description">{shortDescription}</div>
                        </div>
                    </div>
                </div>
                <div className="page-content">
                    <div className="container">
                        <div className="row">
                            <div className="main-video">
                                <img src={image} alt={title} />
                            </div>
                            <div
                                className="detail-video container"
                                dangerouslySetInnerHTML={{
                                    __html: description,
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;
