import { hover } from "@testing-library/user-event/dist/hover";
import { Button, Carousel } from "antd";
import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Link } from "react-router-dom";
import BookNow from "../dashboard/BookNow";
const Bridalservices = () => {
  const images = [
    "./image/pic3.png",
    "./image/pic5.png",
    "./image/pic9.png",
    "./image/pic6.png",
    "./image/pic8.png",
    "./image/pic7.png",
    "./image/pic1.png",
  ];
  const viewimage = (img, i) => {
    console.log(img, i);
  };

  return (
    <div>
      <div
        style={{
          textAlign: "center",
          fontFamily: "Times New",
          fontSize: "20px",
          color: "gray",
          letterSpacing: "4px",
          marginBottom: "20px",
        }}
      >
        <b>THE BELOVED BRIDES</b>
      </div>
      <div
        style={{
          justifyContent: "center",
          marginBottom: "20px",
          fontSize: "20px",
          color: "black",
          letterSpacing: "2px",
          fontFamily: "Nyala",
        }}
      >
        <p>
          {" "}
          BRUSH & BLUSH serves the most mesmerizing wedding make-up adored by
          countless brides. We create unique looks that will work in harmony
          with what nature has blessed you with, to become the most natural,
          glowing bright and beautiful bride.
        </p>
      </div>

      <Link to="/booknow">
        <div class="flex justify-center items-center  marginBottom-30px">
          <Button class="bg-black-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
            BookNow
          </Button>
        </div>
      </Link>

      <div
        style={{
          textAlign: "center",
          fontFamily: "Times New",
          fontSize: "16px",
          color: "gray",
          marginBottom: "30px",
        }}
      >
        <p>
          {" "}
          HERE ARE SOME OF THE BRIDES WHO HAVE ENTRUSTED US WITH THEIR SPECIAL
          DAY.
        </p>
      </div>

      {/* <div style={{ justifyContent:"center", width:"300px", height:"300px",  backgroundColor:"white"}}>
    <Carousel autoplay dots={false}>
      <div>
      <img src="./image/pic1.png"/>
        
      </div>
      <div>
      <img src="./image/pic6.png"/>
        
      </div>
      <div>
      <img src="./image/pic8.png"/>
        
      </div>
      <div>
      <img src="./image/pic9.png"/>
        
      </div>
    </Carousel>
   </div> */}

      <div style={{ padding: "10px" }}>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="20px">
            {images.map((image, i) => (
              <img
                key={i}
                src={image}
                style={{ width: "100%", display: "block", cursor: "pointer" }}
                alt=""
                onClick={() => viewimage(image, i)}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
};

export default Bridalservices;

//   console.log(Packages);
//   const listItems = Packages.map((item) => (
//     <div className="card" key={item.id}>

//       <div className="card_image" >
//           <img src={item.thumb}/>
//       </div>
//       <div className="card_header">
//         <h2>{item.name}</h2>
//         <p> {item.discription}</p>

//         {/* <p className="price">Price:{item.price} </p> */}

//       </div>

//     </div>
//   ));
//   return <div className="main_content">{listItems}</div>;
// };
