import React, { Component, useEffect } from "react";
import { Link } from "react-router-dom";

import Card8 from "../components/Cards/card-8";
import { usePostsContext } from "../context/posts.context";

const Header = () => {
    const [{ categories, posts }] = usePostsContext();

    const expandSubMenu = (parentId) => {
        const submenus = document.getElementsByClassName("sub-menu-mobile");

        Array.from(submenus).forEach((item) => {
            if (item && item.getAttribute("parentid") == parentId) {
                if (item.classList.contains("uncollapsed"))
                    item.classList.remove("uncollapsed");
                else item.classList.add("uncollapsed");
            } else {
                item.classList.remove("uncollapsed");
            }
        });
        // console.log(submenus, parentId, submenus.parentid);
    };

    const openMenu = (e) => {
        const menuOverlay = document.querySelector(".menu-overlay");
        if (menuOverlay && menuOverlay.style)
            menuOverlay.style.display = "block";
        const menuItem = document.querySelector(".mobile-menu");
        if (menuItem && menuItem.classList) menuItem.classList.add("openmenu");
    };

    const closeMenu = (e) => {
        const menuOverlay = document.querySelector(".menu-overlay");
        if (menuOverlay && menuOverlay.style)
            menuOverlay.style.display = "none";
        const menuItem = document.querySelector(".mobile-menu");
        if (menuItem && menuItem.classList)
            menuItem.classList.remove("openmenu");
    };

    useEffect(() => {
        const menuOverlay = document.querySelector(".menu-overlay");

        menuOverlay.addEventListener("click", () => {
            const menuItem = document.querySelector(".mobile-menu");
            if (menuItem && menuItem.classList)
                menuItem.classList.remove("openmenu");
            if (menuOverlay && menuOverlay.style)
                menuOverlay.style.display = "none";
        });
    }, []);

    const dataMenu = [
        {
            id: 1,
            name: "Trang chủ",
            url: "/",
        },
        {
            id: 2,
            name: "Chuyên mục",
            url: "#",
            submenu: {
                parentId: 2,
                data:
                    categories &&
                    categories.map((category, idx) => ({
                        id: idx,
                        name: category.name,
                        url: `/chuyen-muc/${category.url}`,
                    })),
            },
        },
        // {
        //     id: 3,
        //     name: "Về chúng tôi",
        //     url: "/ve-chung-toi",
        // },
    ];

    const menuLinks = dataMenu.map((item) => {
        const { id, name, submenu, url } = item;

        return (
            <li className="menu-item" key={`menu-item-${id}`}>
                <Link to={url} className="menu-item__link">
                    {name}
                </Link>

                {submenu ? (
                    <ul className="sub-menu">
                        {submenu &&
                            submenu.data &&
                            submenu.data.map((item) => {
                                const { id, name, url } = item;
                                return (
                                    <li
                                        className="menu-item"
                                        key={`menu-subitem-${id}`}
                                    >
                                        <Link
                                            to={url}
                                            className="menu-item__link"
                                        >
                                            {name}
                                        </Link>
                                    </li>
                                );
                            })}
                    </ul>
                ) : null}
            </li>
        );
    });
    const menuLinks1 = dataMenu.map((item) => {
        const { id, name, submenu, url } = item;

        const parentId = (submenu && submenu.parentId) || -1;

        return (
            <li className="menu-item" key={`menu-item-${id}`}>
                <Link to={url} className="menu-item__link">
                    {name}
                </Link>

                {submenu ? (
                    <i
                        class="fa fa-angle-down"
                        onClick={() => expandSubMenu(parentId)}
                    ></i>
                ) : null}

                {submenu ? (
                    <ul className="sub-menu-mobile" parentid={parentId}>
                        {submenu &&
                            submenu.data &&
                            submenu.data.map((item) => {
                                const { id, name, url } = item;
                                return (
                                    <li
                                        className="menu-item"
                                        key={`menu-subitem-${id}`}
                                    >
                                        <Link
                                            to={url}
                                            className="menu-item__link"
                                        >
                                            {name}
                                        </Link>
                                    </li>
                                );
                            })}
                    </ul>
                ) : null}
            </li>
        );
    });

    return (
        <header className="header sticky">
            <div className="header-container">
                <div className="top-header">
                    <div className="container">
                        <div className="wrap-content-header">
                            <div className="header-logo">
                                <Link
                                    to="/"
                                    // href="http://video-blog.thimpress.com/"
                                >
                                    Hà Nội Travel
                                </Link>
                            </div>
                            <div className="right-logo">
                                <div className="wrap-content-searchbar">
                                    <form className="search-form">
                                        <input
                                            type="search"
                                            className="search-field"
                                            name="search"
                                            placeholder="Seach for a Movie..."
                                            autocomplete="off"
                                        ></input>

                                        <button className="btn-search">
                                            <i className="fas fa-search"></i>
                                        </button>
                                    </form>
                                </div>
                                <div className="wrap-content-social-links">
                                    <a className="social-item">
                                        <i className="social-icon fab fa-facebook"></i>
                                    </a>

                                    <a className="social-item">
                                        <i class="fab fa-twitter"></i>
                                    </a>

                                    <a className="social-item">
                                        <i class="fab fa-google-plus-g"></i>
                                    </a>

                                    <a
                                        target="_blank"
                                        href="#"
                                        className="social-item"
                                    >
                                        <i className="social-icon fab fa-pinterest"></i>
                                    </a>

                                    <a className="social-item">
                                        <i class="fab fa-instagram"></i>
                                    </a>

                                    <a className="social-item">
                                        <i className="social-icon fab fa-youtube"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-header">
                    <div className="container">
                        <div className="wrap-content-header-1">
                            <div
                                class="menu-mobile-effect navbar-toggle"
                                onClick={(e) => openMenu(e)}
                            >
                                {/* <div class="text-menu">Menu </div> */}
                                <div class="icon-wrap">
                                    <i class="fas fa-bars"></i>
                                </div>
                            </div>

                            <nav className="main-navigation">
                                <ul className="menu-item-list">{menuLinks}</ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <div className="menu-overlay"></div>

            <nav className="mobile-menu">
                <i class="fas fa-times" onClick={(e) => closeMenu(e)}></i>

                <div className="mobile-menu-links">
                    <h3 className="title">Menu</h3>
                    <div className="wrap-menu-links">
                        <ul className="menu-item-list">{menuLinks1}</ul>
                    </div>
                </div>

                <div className="mobile-menu-articles">
                    <h3 className="title"> Bài viết mới nhất </h3>

                    <div className="wrap-articles">
                        {posts &&
                            posts.length > 0 &&
                            posts
                                .slice(0, Math.min(posts.length, 3))
                                .map((post) => <Card8 {...post} />)}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
