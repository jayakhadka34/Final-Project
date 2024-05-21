import React from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

const Layout = () => {
    const images = [
        "./image/pic3.png",
        "./image/pic5.png",
         "./image/pic9.png",
         "./image/pic6.png",
         "./image/pic8.png",
         "./image/pic7.png",
         "./image/pic1.png",
      ]
    const viewimage=(img,i)=>{
    console.log(img,i)
    }
    
  return (
   
    <div style={{padding:"10px"}}>
    <ResponsiveMasonry
                 columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
             >
                 <Masonry gutter="20px">
                     {images.map((image, i) => (
                         <img
                             key={i}
                             src={image}
                             style={{width: "100%", display: "block", cursor:"pointer"}}
                             alt=""
                             onClick={()=>viewimage(images,i)}
                         />
                     ))}
                 </Masonry>
             </ResponsiveMasonry> 
             </div>
  )

}
export default Layout
