import React, {useState} from "react";

function ListingCard({img,description, location, onChangeHandleDelete, id}) {
  const [isFav, setIsFav] = useState(false)
  function handleFav(){
    setIsFav(isFav => !isFav)
  }

  function handlerDelete(){
    onChangeHandleDelete(id)
  }
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={img} alt={description} />
      </div>
      <div className="details">
        {isFav ? (
          <button className="emoji-button favorite active" onClick ={handleFav}>★</button>
        ) : (
          <button onClick ={handleFav} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handlerDelete} className="emoji-button delete"> 🗑 Delete</button>
      </div>
    </li>
  );
}

export default ListingCard;
