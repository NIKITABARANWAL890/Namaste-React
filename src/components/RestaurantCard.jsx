import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;

    console.log("RestaurantCard Props:", resData); // Debugging Output

    const name = resData?.name || "N/A";
    const cuisines = resData?.cuisines?.join(", ") || "N/A";
    const avgRatingString = resData?.avgRatingString || "N/A";
    const costForTwo = parseInt(
        resData?.costForTwo?.replace(/[^0-9]/g, "") || "0",
        10
    );
    const deliveryTime = resData?.sla?.deliveryTime || "N/A";
    const imageId = resData?.cloudinaryImageId;

    return (
        <div className="m-4 p-4 w-[400px] border rounded-lg hover:shadow-xl" style={{backgroundColor:"#f0f0f0"}}>
            {imageId ? (
                <img className="h-[400px] w-[100%] border rounded-lg"
                    src={`${CDN_URL + imageId}`}
                    alt={name}
                />
            ) : (
                <p>No Image Available</p>
            )}
            <div className="content py-4 flex-col gap-1 text-xl">
                <h3 className="font-bold text-2xl py-2">{name}</h3>
                <h4>{cuisines}</h4>
                <h4>{avgRatingString}</h4>
                <h4>₹{costForTwo / 100} for two</h4>
                <h4>{deliveryTime} mins</h4>
            </div>
        </div>
    );
};

// Higher order componenet

// export const withPromotedLabel = (RestaurantCard) => {
//     return () =>{
//         return(
//             <div>
//                 <label>Promoted</label>
//                 <RestaurantCard/>
//             </div>
//         )
//     }
// }

export default RestaurantCard;