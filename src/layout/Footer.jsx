import React from "react";
import { Link } from "react-router-dom";
import Card8 from "../components/Cards/card-8";

import { usePostsContext } from "../context/posts.context";

const Footer = () => {
    const [{ categories, posts }] = usePostsContext();

    return (
        <footer className="footer">
            <div className="container">
                <div className="wrap-content">
                    <div className="row justify-content-between">
                        <div className="col-lg-4 footer-info">
                            <h1 className="footer-siteName">Hà Nội Travel</h1>

                            <div className="description">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Provident error aliquam
                                    recusandae quam quos consequuntur dolorem
                                    cum sit laboriosam quia. Temporibus
                                    voluptate tenetur vero voluptatum possimus
                                    minus aperiam? Ipsum, facilis.
                                </p>
                            </div>

                            <div className="footer-form">
                                <form
                                    id="footer-1"
                                    class="yikes-easy-mc-form yikes-easy-mc-form-1  layout-footer"
                                    method="POST"
                                    data-attr-form-id="1"
                                >
                                    <label for="email" class="email-label">
                                        <input
                                            id="email"
                                            name="EMAIL"
                                            placeholder="Your Email *"
                                            className="footer-form__input"
                                            required="required"
                                            type="email"
                                            value=""
                                        ></input>
                                    </label>

                                    <button
                                        type="submit"
                                        class="btn footer-form__btn"
                                    >
                                        {" "}
                                        <span>Subscribe</span>
                                    </button>
                                </form>
                            </div>

                            <div className="footer-social">
                                <div className="wrap-content-social-links">
                                    <a
                                        target="_blank"
                                        href="#"
                                        className="social-item"
                                    >
                                        <i className="social-icon fab fa-facebook"></i>
                                    </a>

                                    <a
                                        target="_blank"
                                        href="#"
                                        className="social-item"
                                    >
                                        <i class="fab fa-twitter"></i>
                                    </a>

                                    <a
                                        target="_blank"
                                        href="#"
                                        className="social-item"
                                    >
                                        <i class="fab fa-google-plus-g"></i>
                                    </a>

                                    <a
                                        target="_blank"
                                        href="#"
                                        className="social-item"
                                    >
                                        <i className="social-icon fab fa-pinterest"></i>
                                    </a>

                                    <a
                                        target="_blank"
                                        href="#"
                                        className="social-item"
                                    >
                                        <i class="fab fa-instagram"></i>
                                    </a>

                                    <a
                                        target="_blank"
                                        href="#"
                                        className="social-item"
                                    >
                                        <i className="social-icon fab fa-youtube"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="wrap-content footer-latest-post">
                                <h3 className="title">LATEST POSTS</h3>

                                <div className="wrap-element">
                                    <div className="post-list">
                                        {posts &&
                                            posts.length > 0 &&
                                            posts
                                                .slice(
                                                    0,
                                                    Math.min(3, posts.length)
                                                )
                                                .map((post) => (
                                                    <Card8 {...post} />
                                                ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="wrap-content">
                                <div className="popular-categories">
                                    <h3 className="title">
                                        Popular Categories
                                    </h3>
                                    <ul class="list-categories">
                                        {categories &&
                                            categories.length > 0 &&
                                            categories
                                                .slice(
                                                    0,
                                                    Math.min(
                                                        4,
                                                        categories.length
                                                    )
                                                )
                                                .map((category) => {
                                                    const {
                                                        name,
                                                        url,
                                                        categoryPosts,
                                                    } = category;
                                                    return (
                                                        <li class="cat-item">
                                                            <Link
                                                                to={`/category/${url}`}
                                                            >
                                                                {name}
                                                            </Link>
                                                            <span class="count">
                                                                {categoryPosts &&
                                                                    categoryPosts.length}
                                                            </span>
                                                        </li>
                                                    );
                                                })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
