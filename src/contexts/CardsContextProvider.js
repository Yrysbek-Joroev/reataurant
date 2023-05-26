import React, { createContext, useState } from 'react'
import {API} from '../helpers/consts'
import axios from 'axios'
export const cardsContext = createContext()
const CardsContextProvider = ({children}) => {
  const [collection, setCollection] = useState([])
  async function getCards() {
    let { data } = await axios(API);
    setCollection(data);
  }
  const values = {
    collection,
    getCards
  }
  return (
    <cardsContext.Provider value={values}>{children}</cardsContext.Provider>
  )
}

export default CardsContextProvider