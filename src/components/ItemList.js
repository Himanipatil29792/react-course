import { CON_URL } from "../utils/constants";

const ItemList =({items}) =>{
   // console.log(items );
    return(
        <div>
            {items.map((item) =>(
                <div key={item.card.info.id} className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between">
                   
                <div className="w-9/12">
                        <span className="font-bold py-2">{item.card.info.name}</span>
                        <span className="font-bold">- ₹ {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                        <p className="text-xs">{item.card.info.description}</p>
                </div>
                <div className="w-3/12">
                        <div className="absolute"><button className="p-1 bg-black shadow-lg rounded-lg text-white mx-7 mt-10">Add +</button></div>
                        <img src={CON_URL + item.card.info.imageId} className="w-28"/>
                </div>

                </div>
            ))} 
        </div>
    );
}
export default ItemList;