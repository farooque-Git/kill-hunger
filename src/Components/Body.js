import React, { useState } from "react";
import { restrauntlist } from "../Config.js";
import RestrauntCard from './RestronantCard';

const Body = () => {
  const [searchText, setsearchText] = useState("Al Baik");
  return (
    <>
    <div className="search-container">
      <input
      type="text"
      className="search-input" 
      placeholder="Search"
      value={searchText}
      onChange={(e)=>{
        setsearchText(e.target.value)
      }}
     
      />
        <p>{searchText}</p>

    </div>
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Search" value={}/>
      </div>
      <div className="restarurant-List">
        {restrautList.mp((restrurant) => {
          return (
            <RestrauntCard {...restrurant.data} key={restrurant.data.id} />
          );
        })}
      </div>
    </>
  );
};
