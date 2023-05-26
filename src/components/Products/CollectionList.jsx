import React, { useContext, useEffect } from "react";
import { cardsContext } from "../../contexts/CardsContextProvider";
import CollectionCard from "./CollectionCards";
import "./CollectionList.css";

const CollectionList = () => {
  const { getCards, collection } = useContext(cardsContext);
  useEffect(() => {
    getCards();
  }, []);
  return (
    <div className="card-container">
      {collection.map((item) => (
        <CollectionCard item={item} key={item.id} />
      ))}
    </div>
  );
};

export default CollectionList;
