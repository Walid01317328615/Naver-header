import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Naver from './components/naver/Naver'
import PriceList from './components/PriceList/PriceList'

function App() {
  

  return (
    <div className='App'>
      <Naver></Naver>
      <h2 className='text-orange-600'>walid hasan </h2>
      <PriceList></PriceList>

    </div>
   
  )
}

export default App
