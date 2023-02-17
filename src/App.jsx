import { useState } from 'react'
import CardUser from './components/CardUser'
import SearchUser from './components/SearchUser'
import Title from './components/Title'


function App() {

  return (
    <div className="bg-gray-900 min-h-screen h-full text-gray-100 font-inter flex items-center justify-center py-20 px-5">
      <div className="container flex flex-col max-w-xl text-center">
        <Title>
          GITHUB APP
        </Title>
        <div className='flex justify-around'>
          <SearchUser />
          <CardUser />
        </div>    
      </div>
    </div>
    
  )
}

export default App
