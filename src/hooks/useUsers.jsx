import { useEffect, useState } from "react";

const useUsers = () => {

  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  
  const fetchUser = async (username) => {
      try {
          const res = await fetch(`https://api.github.com/users/${username}`);
          const data = await res.json();
          setUser(data);
          setIsLoading(false);
      } catch (error) {
        setError(error.message)
      }
  
  }
  return {
    user,
    isLoading,
    error,
    fetchUser
  };
};

export default useUsers;