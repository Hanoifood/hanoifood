import React, { Component, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import ReactGA from "react-ga";

import { usePostsContext } from "./context/posts.context";

import "bootstrap/dist/css/bootstrap.min.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "react-quill/dist/quill.snow.css"; // ES6
import "antd/dist/antd.css";
import "./css/main.min.css";

import BaseView from "./layout/BaseView";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import AboutUs from "./layout/AboutUs";
import Admin from "./pages/Admin";
import Loader from "./components/Loader";
import { encodeStr } from "./utils/helpers";
import Category from "./pages/Category";
// import axios from "./axios";

const App = () => {
    const [{ posts }, { fetchPosts, setCategories }] = usePostsContext();

    useEffect(() => {
        ReactGA.initialize("UA-180686001-2");
        if (!posts) fetchPosts();
    }, []);

    useEffect(() => {
        if (posts) {
            const postCategories = [...new Set(posts.map((e) => e.category))];
            const categories = postCategories.map((category) => {
                const postsOfCategory = posts.filter(
                    (product) => product.category === category
                );
                return {
                    name: category,
                    categoryPosts: postsOfCategory,
                    url: encodeStr(category),
                };
            });
            setCategories(categories);
        }
    }, [posts]);

    if (!posts) return <Loader />;

    return (
        <React.Fragment>
            <Switch>
                <Route
                    exact
                    path="/"
                    render={(props) => {
                        ReactGA.pageview(props.location.pathname);
                        return <Home />;
                    }}
                />
                <Route
                    exact
                    path="/hanoitravel"
                    render={(props) => {
                        ReactGA.pageview(props.location.pathname);
                        return <Home />;
                    }}
                />

                <Route
                    exact
                    path="/ve-chung-toi"
                    render={(props) => {
                        ReactGA.pageview(props.location.pathname);
                        return <AboutUs />;
                    }}
                />
                <Route exact path="/admin" component={Admin} />
                <Route
                    exact
                    path="/chuyen-muc/:category"
                    render={(props) => {
                        ReactGA.pageview(props.location.pathname);
                        return <Category />;
                    }}
                />
                <Route
                    exact
                    path="/bai-viet/:url"
                    render={(props) => {
                        ReactGA.pageview(props.location.pathname);
                        return <Detail />;
                    }}
                />
            </Switch>
        </React.Fragment>
    );
};

export default BaseView(App);
