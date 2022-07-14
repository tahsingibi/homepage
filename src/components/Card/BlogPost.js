import { useEffect, useState } from 'react';

function BlogPost() {
  
  const myBlog = "https://tahsinbey.com"

  const [posted, setPosted] = useState([])
  useEffect(()=>{
    fetch(myBlog + "/wp-json/wp/v2/posts")
    .then((res)=>res.json())
    .then((posts)=>setPosted(posts.slice(0,4)))
    .catch((e)=>console.log(e))
  },[])

  
  return (
    <>
    <h2 className="headline">Son Yazılarım</h2>
      <ul className="blogPosts">
          {posted.length == 0
          ? <div className="loader"></div>
          : posted.map((item)=>
            <li key={item.id}>
            <a href={item.link} target="_blank">
              {(item.yoast_head_json["title"]).replace("- Tahsin Bey", "")}
            </a>
          </li>
          )}
          <a href={myBlog} className="allPost" target="_blank">
            Blogu görüntüle &raquo;
          </a>
       </ul> 
    </>
  )
}

export default BlogPost