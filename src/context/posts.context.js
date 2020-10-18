import React, { createContext, useContext, useMemo } from "react";
import { connect } from "react-redux";

import actions from "../redux/posts/actions";
import * as asyncActions from "../redux/posts/actions/posts.asyncActions";
import bindActionCreators from "../utils/bindActionCreators";

const PostsContext = createContext();

const PostsContextProvider = (props) => {
    const { actions, postsState, asyncActions, children } = props;

    const productsApi = useMemo(
        () => ({
            actions,
            ...asyncActions,
        }),
        [actions, asyncActions]
    );

    const contextValue = useMemo(() => [postsState, productsApi], [
        productsApi,
        postsState,
    ]);

    return (
        <PostsContext.Provider value={contextValue}>
            {children}
        </PostsContext.Provider>
    );
};

const mapStateToProps = ({ products }) => ({ postsState: products });

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch),
    asyncActions: bindActionCreators(asyncActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostsContextProvider);

export const usePostsContext = () => useContext(PostsContext);
