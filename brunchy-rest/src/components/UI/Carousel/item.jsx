import React from "react";
import basket from "../../../assets/img/shopping-basket.png";

const Item = ({ item, handleClick }) => {

  
  return (
    <div className="item-container">
      <img className="image" src={item.image} alt={item.name} />
      <h3 className="item__name">{item.name}</h3>
      <h4 className="item__caption">{item.caption}</h4>
      <p className="item__price"><span>$</span>{item.price}</p>
      <button onClick={()=>handleClick(item)} className="btn-basket"><img src={basket} alt="basket" /></button>
    </div>
  );
};

export default Item;