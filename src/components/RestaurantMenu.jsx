import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu = () =>{

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    const info = resInfo?.cards?.[2]?.card?.card?.info;

    const itemCards  = 
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards;

    console.log(itemCards);

    return resInfo === null ? (<Shimmer/>):(
        <div className="menu">
            <h1>{info.name}</h1>
            <h3>{info.cuisines[0]}</h3>
            <h3>{info.costForTwo/100} for two</h3>
            <ul>
  {itemCards && Array.isArray(itemCards) ? (
    itemCards.map((elem) => (
      <li key={elem.card.info.id}>
        {elem.card.info.name} - Rs.{" "}
        {elem?.card?.info?.price ? Number(elem.card.info.price) / 100 : "Not defined"}
      </li>
    ))
  ) : (
    <li>No items available</li>
  )}
</ul>

        </div>
    );
};

export default RestaurantMenu;