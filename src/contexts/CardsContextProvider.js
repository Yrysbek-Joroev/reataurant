import React, { createContext } from 'react'

export const cardsContext = createContext()
const CardsContextProvider = () => {
  const API = 'http://localhost:8000/trips'
  // async function getCards() {
  //   let { data } = await axios(API);
  //   setCollection(data);
  // }

  return (
    <div>CardsContextProvider</div>
  )
}

export default CardsContextProvider