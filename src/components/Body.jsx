// import RestaurantCard from "./RestaurantCard";
// // import resList from "../utils/mockData";
// import { useEffect, useState } from "react";

// const Body = () => {

//     // state variable
//     const [ListOfRestaurants, setListOfRestaurants] = useState([]);

//     useEffect(()=>{
//         fetchData();
//     }, []);

//     const fetchData = async () => {
//         const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6312471&lng=77.4372084&collection=80382&tags=layout_CCS_CholeBhature&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
//         const json = await data.json();
    
//         console.log(json);
    
//         const restaurants = json?.data?.cards?.[3]?.card?.card?.restaurants || [];
        
//         setListOfRestaurants(restaurants);
//     };
    


//     const restaurants = resList(); 

//     return (
//         <div className="body">
//             <div className="filter">
//                 <button className="filter-btn" onClick={()=>{
//                     const filteredList = ListOfRestaurants.filter((res) => res.card.card.info.avgRatingString > 4);
//                     setListOfRestaurants(filteredList);
//                     // console.log("Button Clicked")
//                 }}>Top Rated Restaurant</button>
//             </div>
//             <div className="res-container">
//             {
//                 ListOfRestaurants.map(rest => <RestaurantCard key={rest.card.card.info.id} resData={rest.card.card.info} />)
//             }
             
//             </div>
//         </div>
//     );
// };

// export default Body;


import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {
  // state variable
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=15.8736274&lng=74.48003829999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    // Assuming the correct path to the array is `json.data.cards[3].card.card.restaurants`
    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    setListOfRestaurants(restaurants);
    console.log(restaurants);
  };

  // const restaurants = resList();

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = ListOfRestaurants.filter(
              (res) => res.info.avgRatingString > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {ListOfRestaurants.map((rest) => (
          <RestaurantCard key={rest.info.id} resData={rest.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
