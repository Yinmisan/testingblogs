import Fs, { link } from "fs";
import Link from "next/link";

const getPostMetaData = () => {
    const folder = "_posts";
    const files = Fs.readdirSync(folder);
    const markDownPosts = files.filter((file) => file.endsWith(".md"))
    const blogid = markDownPosts.map((file) => file.replace(".md",""))
    return blogid
}


export default function Blogs(){
    // get the metadata for each post in _post directory
    const PostMetaData = getPostMetaData();
    const PostPreviews = PostMetaData.map((blogid) => (<>

      
      <h3 className="card-title"><Link href={`/blogs/${blogid}`}>{blogid}</Link></h3>


     </>

  
    ))
    return (<>



  
<div className="dropdown dropdown-open">
  <div tabIndex={0} role="button" className="btn m-1">Blogs</div>
  <div tabIndex={0} className="dropdown-content z-[1] card card-compact w-64 p-2 shadow bg-primary text-primary-content">
  <div className="card-body">
     {PostPreviews} 
     </div>
  </div>
</div>
    
    
    
    </>)
}