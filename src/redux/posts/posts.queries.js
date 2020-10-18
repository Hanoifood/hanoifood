import axios from "../../axios";
import { encodeStr } from "../../utils/helpers";

export async function queryPosts() {
    const response = await axios.get("posts.json");
    const data = response?.data;
    const posts = Object.values(data);
    const modifiedPosts = posts.map((e) => ({
        ...e,
        url: encodeStr(e.title),
    }));
    return modifiedPosts;
}
