import Fs from "fs";
const GetPostMetaData = () => {
    const folder = "_posts";
    const files = Fs.readdirSync(folder);
    const markDownPosts = files.filter((file) => file.endsWith(".md"))
    const blogid = markDownPosts.map((file) => file.replace(".md",""))
    return blogid
}
export default GetPostMetaData