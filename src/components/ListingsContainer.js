import React, {useState, useEffect} from "react";
 import ListingCard from "./ListingCard";

function ListingsContainer({searchQuery}) {
  const [cardList, setCardList] = useState([])

  useEffect(() =>{
    fetch('http://localhost:6001/listings')
    .then(r => r.json())
    .then(listCard => setCardList(listCard))
  }, [])
  console.log(cardList)

  function handleDelete(id){

    fetch(`http://localhost:6001/listings/${id}`,{
      
      method: 'DELETE',
      
    })
    .then(res=> res.json())
    .then(() =>{
      const updateList = cardList.filter(card => card.id !== id)
      setCardList(updateList)
    })
  }
  console.log(searchQuery)
  const filteredListing = cardList.filter(listing =>{
    
    return listing.description.toLowerCase().includes(searchQuery.toLowerCase())
  })

  const disPlayCard = filteredListing.map(card => 
    <ListingCard 
    img={card.image} 
    description={card.description} 
    location={card.location} 
    key={card.id} 
    onChangeHandleDelete={handleDelete}
    id={card.id}
    />
  )


  return (
    <main>
      <ul className="cards">
        {disPlayCard}
      </ul>
    </main>
  );
}

export default ListingsContainer;
