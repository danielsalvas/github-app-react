import { useEffect, useState } from "react";

const useUsers = () => {

  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  
  const fetchUser = async (username) => {
      try {
          const res = await fetch(`https://api.github.com/users/${username}`);
          const data = await res.json();
          setUser(data);
          setIsLoading(true)
          setTimeout(() => {
            setIsLoading(false) //Remove the spinner after 3 seconds
        }, 2000);
      } catch (error) {
        console.log(error.message)
      }
  
  }
  return {
    user,
    isLoading,
    fetchUser
  };
};

export default useUsers;