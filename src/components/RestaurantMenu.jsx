import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./ResCategory";


const RestaurantMenu = () =>{

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    const info = resInfo?.cards?.[2]?.card?.card?.info;

    const itemCards  = 
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards;

    const categories = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    console.log(categories)

    

    console.log(itemCards);

    return resInfo === null ? (<Shimmer/>):(
        <div className="text-center text-3xl">
            <h1 className="font-bold my-6">{info.name}</h1>
            <h3 className="font-bold text-lg">{info.cuisines[0]}- {info.costForTwo/100} for two</h3>
        

{
  categories.map((category) => <RestaurantCategory data = {category?.card?.card}/>)
}

        </div>
    );
};

export default RestaurantMenu;