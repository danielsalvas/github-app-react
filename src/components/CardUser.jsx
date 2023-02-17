import Spinner from "./Spinner"

const CardUser = ({ user, isLoading }) => {

  if (isLoading) {
    return (
        <div className="mt-4 lg:w-1/3 w-full flex justify-center items-center"> 
          <Spinner />
        </div>
      )
  }

  return (
    <>
        {Object.entries(user).length > 0 ? (
          <div className="mt-4 lg:w-1/3 w-full flex justify-center">
            <div className='md:w-[350px] w-[400px] border-solid rounded-lg border-2 border-gray-500 p-2 my-2'>
              <img className="flex mx-auto w-full p-1 rounded-lg" src={user.avatar_url} alt="" />
              <div className="flex flex-col text-center">
                  <h1 className="py-4 md:text-3xl text-xl font-bold">{user.name}</h1>
                  <p className="pb-4">{user.login}</p>
                  <p className="pb-4">{user.location}</p>
                  <p className="pb-4">{user.bio}</p>
                  <a href={user.html_url} target='_blank' className="cursor-pointer border inline-flex items-center justify-center m-4 px-8 py-4 text-base font-medium text-white rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white duration-200">                                          
                      <i className="fa-brands fa-github"></i>
                      <span className="w-full">Go to GitHub Profile</span>
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a> 
              </div>
            </div>
           </div>
        ) : (
          <>
            <div className="flex flex-col justify-center items-center mt-4 lg:w-1/3 w-full">
              <h1 className="md:text-3xl text-xl font-bold">Let's get started guys!</h1>
              <div className="md:mt-10 mt:5">
                <p className="mt-5 med:text-lg text-base">1. Put a github username in the input.</p>
                <p className="mt-5 med:text-lg text-base">2. Click the search button.</p>
                <p className="mt-5 med:text-lg text-base">3. See your friend's info ;).</p>
              </div>
            </div>
          </>
        )}
    </>
  )
}

export default CardUser
