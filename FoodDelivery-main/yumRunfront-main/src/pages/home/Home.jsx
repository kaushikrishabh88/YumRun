import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import Exploremenu from '../../Components/ExploreMenu/Exploremenu'
import Fooddisplay from '../../Components/FoodDisplay/Fooddisplay'
import AppDownlode from '../../Components/AppDownlode/AppDownlode'

const Home = () => {

    const [category,setCategory] = useState("All")
  return (
    <div>
        <Header/>
        <Exploremenu category={category} setCategory={setCategory}/>
        <Fooddisplay category={category}/>
        <AppDownlode/>
    </div>
  )
}
export default Home
