import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";

const Body = () => {
  // state variable
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);

  const [searchText, setsearchText] = useState("");

  // const data = useRestaurantMenu();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6294093&lng=77.4329048&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    // Assuming the correct path to the array is `json.data.cards[3].card.card.restaurants`
    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    console.log(restaurants);

    setListOfRestaurants(restaurants);
    setfilteredRestaurants(restaurants);
    console.log(restaurants);
  };

  const onlineStatus = useOnlineStatus();
  if(onlineStatus===false) return <h1>Looks like you are offline!</h1>;


  return ListOfRestaurants.length===0 ? <Shimmer/> : (
    <div className="body px-10">
      <div className="filter flex items-center py-2">
      <div className="search m-4 p-4"><input type="text" className="search-box border border-solid border-black p-1 w-[400px]" value={searchText} 
        onChange={(e)=>{
            setsearchText(e.target.value);
        }}
      />
      <button className="px-4 py-1 bg-green-100 m-2 rounded-lg cursor-pointer text-xl font-bold"
      onClick={()=>{
        console.log(searchText);
        const filteredRestaurants = ListOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
        setfilteredRestaurants(filteredRestaurants);
      }}>Search</button></div>
      <div className="search px-4 py-1 bg-green-100 rounded-lg cursor-pointer text-xl font-bold">
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
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((rest) => (
          <Link key={rest.info.id} to={"/restaurants/" + rest.info.id}><RestaurantCard resData={rest.info} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
