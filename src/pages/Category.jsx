import { Pagination } from "antd";
import React, { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Card2 from "../components/Cards/card-2";
import { usePostsContext } from "../context/posts.context";
import { encodeStr } from "../utils/helpers";

const Category = () => {
    const { category } = useParams();
    const [{ categories }] = usePostsContext();

    const [currentPage, setPage] = useState(1);

    const handleOnChange = (page) => {
        setPage(page);
    };

    const pageSize = 12;
    const filteredCategory =
        categories &&
        categories.length > 0 &&
        categories.find((c) => c.url === category);

    const posts = filteredCategory && filteredCategory.categoryPosts;
    const from = pageSize * (currentPage - 1);
    const to = pageSize * currentPage;
    const showPosts = posts && posts.slice(from, Math.min(posts.length, to));

    console.log("category", category);

    return (
        <div className="main-content">
            <div className="page-title">
                <div
                    className="main-top"
                    style={{
                        background: `linear-gradient(to bottom, rgba(0,0,0,.5), rgba(0,0,0,.5)),url(http://video-blog.thimpress.com/wp-content/uploads/2019/01/bg-page-title-01.jpg)`,
                        backgroundSize: "cover",
                    }}
                >
                    <div class="content container">
                        <h1>{filteredCategory && filteredCategory.name}</h1>
                        <div class="wrap-breadcrumb">
                            <ul
                                itemprop="breadcrumb"
                                itemscope=""
                                itemtype="http://schema.org/BreadcrumbList"
                                id="breadcrumbs"
                                class="breadcrumbs"
                            >
                                <li
                                    itemprop="itemListElement"
                                    itemscope=""
                                    itemtype="http://schema.org/ListItem"
                                >
                                    <Link to="/" title="Home">
                                        <span itemprop="name">Trang chủ</span>
                                    </Link>
                                    <span class="breadcrum-icon">/</span>
                                </li>
                                <li>
                                    <span
                                        title={
                                            filteredCategory &&
                                            filteredCategory.name
                                        }
                                    >
                                        {filteredCategory &&
                                            filteredCategory.name}
                                    </span>
                                </li>
                            </ul>{" "}
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-content container">
                <div className="videos-gallery">
                    {showPosts &&
                        showPosts.length > 0 &&
                        showPosts.map((post) => <Card2 {...post} />)}
                </div>

                <Pagination
                    key={posts && posts.length}
                    total={posts && posts.length}
                    pageSize={12}
                    onChange={handleOnChange}
                />
            </div>
        </div>
    );
};

export default Category;
