import { useState, useEffect } from "react"

const SearchUser = ({ fetchUser }) => {

  const [username, setUsername] = useState('')

  return (
    <div className="mt-6 lg:w-1/3 w-full md:ml-4">
      <div className="flex flex-col text-center md:text-left">
        <h1 className="pb-4 md:text-3xl text-xl font-bold">Get GitHub Profile</h1>
        <p className="pb-4">Username:</p>
      </div>
      <input 
        type="text" 
        className="focus:shadow-lg font-inter focus:shadow-orange-800 pl-4 w-full py-4 bg-gray-700 rounded-xl outline-none transition-all duration-300 ease-in-out"
        placeholder="Let's find your friends and colleagues..."
        onChange={(e) => setUsername(e.target.value)}
      />
      <button
        className="md:float-left text-center mt-4 text-white hover:text-white border border-white hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 duration-200"
        onClick={() => fetchUser(username)}
      >
        Search
      </button>
    </div>
  )
}

export default SearchUser
