import { useState } from 'react'
import CardUser from './components/CardUser'
import SearchUser from './components/SearchUser'
import Title from './components/Title'


function App() {

  return (
    <div className="bg-gray-900 min-h-screen h-full text-gray-100 font-inter py-20 px-5">
      <div className="flex flex-col text-center">
        <Title>
          GITHUB APP
        </Title>
        <div className='md:flex md:justify-around mt-10'>
          <SearchUser />
          <CardUser />
        </div>    
      </div>
    </div>
    
  )
}

export default App
