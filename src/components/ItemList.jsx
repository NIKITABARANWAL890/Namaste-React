import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
    console.log(items);
    return (
        <div>
            {items.map((item) => (
                <div className="flex items-center justify-between">
                <div
                    className="flex flex-col gap-1 text-left text-[18px] my-8 border-gray-200 border-b-2 p-4"
                    key={item.card.info.id}
                >
                
                    <div className="font-bold">
                        {item.card.info.itemAttribute.vegClassifier === "VEG" ? (
                            <span>🟢 </span>
                        ) : (
                            <span>🔴 </span>
                        )}
                        <span>{item.card.info.name}</span>
                    </div>
                    
                    <div className="font-bold text-lg">
                        ₹{item.card.info.price / 100} {/* Assuming price is in paise */}
                    </div>
                    
                    <p className="text-[18px]">{item.card.info.description}</p>
                </div>
                <img src={CDN_URL + item.card.info.imageId} className="h-[150px] w-[150px] border rounded-lg border-none"/>
                </div>
            ))}
        </div>
    );
};

export default ItemList;
