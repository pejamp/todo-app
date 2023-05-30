import { useEffect, useState } from "react"

export const useLocalStorage = (key: string, initialValue?: any) => {
  const [localData, setLocalData] = useState(() => {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : initialValue || [];
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(localData));
  }, [key, localData]);

  return [localData, setLocalData]
}