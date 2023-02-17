import test from '../assets/test.png'

const CardUser = () => {
  return (
    <div className="mt-4 lg:w-1/3 w-full flex justify-center">
        <div className='md:w-[350px] w-[400px] border-solid rounded-lg border-2 border-gray-500 p-2 my-2'>
            <img className="flex mx-auto w-full p-1 rounded-lg" src={test} alt="" />
            <div className="flex flex-col text-center">
                <h1 className="py-4 md:text-3xl text-xl font-bold">Daniel Salgado</h1>
                <p className="pb-4">danielsalvas</p>
                <p className="pb-4">San Salvador, El Salvador</p>
                <p className="pb-4">Frontend Developer</p>
                <a href="#" className="border inline-flex items-center justify-center m-4 px-8 py-4 text-base font-medium text-white rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white duration-200">                                          
                    <i className="fa-brands fa-github"></i>
                    <span className="w-full">Go to GitHub Profile</span>
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a> 
            </div>
        </div>
    </div>
  )
}

export default CardUser
