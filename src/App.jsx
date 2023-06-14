import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Card from '../components/Card'
import data from '../data.js'

export default function App() {
   const cards=data.map( item =>{
      return(
         <Card 
         key={item.id}
         item={item}
         />
      )
   }

   );
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
         {cards}
      </section>
    </div>
  )
}
 
 
