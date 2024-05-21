import React from 'react'
import { Makeupservices } from '../utiles/Package';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const MakeUpServices = () => {


    console.log( Makeupservices);
    const listItems =  Makeupservices.map((item) => (
      
         <div className="card" key={item.id}>
           
           <div className="card_image" >
               <img src={item.thumb}/>
           </div>
           <div className="card_header">
             <h2>{item.name}</h2>
             <p> {item.discription}</p>
           
             <p className="price">Price:{item.price} </p>
             <Link to="/booknow">
          <Button className=" bg-gray-500 text-white w-full">BOOK NOW</Button>
        </Link>
             {/* <div style={{ textAlign: "center", color:"gray", paddingBottom:"20px" , border:"none", color:"black", fontWeight:"bold"}}>
        <Button type="link" onClick={this.handleBookNowClick}>BOOK NOW</Button>
      </div> */}
            
             
           </div>
           
           </div>
      
       
          ));
   
    return <div className="main_content">{listItems}</div>;
  };
  


export default MakeUpServices
