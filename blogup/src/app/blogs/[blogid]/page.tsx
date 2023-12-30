import fs from "fs";
import Markdown from 'markdown-to-jsx'


  const getPostContent = (blogid: string) => {
  const folder = "_posts/";
  const file = `${folder}${blogid}.md`;
  const content = fs.readFileSync(file, "utf8");
  return content
}


 
const BlogsPage = (props:any ) => {

const blogo = props.params.blogid    
const mdcontent = getPostContent(blogo)

    return (<>
    
    
    <h1>blogo id is {blogo}</h1>  
    
    
    
    <Markdown>{mdcontent}</Markdown>
    
    
</>)}

export default BlogsPage;