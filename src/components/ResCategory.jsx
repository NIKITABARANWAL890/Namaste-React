import ItemList from "./ItemList";

const RestaurantCategory = ({data}) => {
    console.log(data)
    return(
        <div>
            {/* Header */}
            <div className="w-6/12 mx-auto bg-gray-50 shadow-lg p-4 my-4">
            <div className="flex justify-between">
            <span className=" text-lg font-bold">{data.title} ({data.itemCards.length})</span>
                <span>⬇</span>
            </div>
                <ItemList items = {data.itemCards}/>
            </div>
            {/*  Body */}
            
        </div>
    )
}

export default RestaurantCategory;