import React, { useState } from "react";
import { restaurantList } from "./Config.js";
import RestrauntCard from "./RestronantCard";

function filterData(searchText, restraunts) {
  const filterData = restraunts.filter((restraunts) =>
    restraunt.data.name.includes(searchText)
  );
  return filterData();
}

const Body = () => {
  const [searchText, setsearchText] = useState("");
  const [restaurants, setrestaurants] = useState(restaurantList);


useEffect (()=>{
  //API call
  fetch("")
},[searchText])

async function getRestraunt() {
  const data = await fetch("")
}

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value)
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, restrauntlist);
            setsearchRest(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={user.name}
          onChange={(e) =>
            setUser({
              ...user,
              name: e.target.value,
            })
          }
        />
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
