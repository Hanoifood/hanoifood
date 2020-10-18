import React from "react";

import PostsContextProvider from "./posts.context";

const ContextProviders = [PostsContextProvider];

const ContextProvider = ({ children }) => {
    return ContextProviders.reduceRight(
        (memo, ContextProvider) => <ContextProvider>{memo}</ContextProvider>,
        children
    );
};

export default ContextProvider;
