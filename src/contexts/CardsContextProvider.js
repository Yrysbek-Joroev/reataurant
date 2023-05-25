import React, { createContext } from 'react'

export const cardsContext = createContext()
export const API = 'http://localhost:8000/trips'
const CardsContextProvider = () => {
   // async function getCards() {
  //   let { data } = await axios(API);
  //   setCollection(data);
  // }

  return (
    <div>CardsContextProvider</div>
  )
}

export default CardsContextProvider