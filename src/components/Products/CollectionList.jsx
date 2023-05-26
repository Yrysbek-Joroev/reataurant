import React, { useContext, useEffect } from "react";
import { cardsContext } from "../../contexts/CardsContextProvider";
import CollectionCard from "./CollectionCards";

const CollectionList = () => {
  const { getCards, collection } = useContext(cardsContext);
  useEffect(() => {
    getCards();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        rowGap: "20px",
        marginTop: "40px",
      }}
    >
      {collection.map((item) => (
        <CollectionCard item={item} key={item.id} />
      ))}
    </div>
  );
};

export default CollectionList;
