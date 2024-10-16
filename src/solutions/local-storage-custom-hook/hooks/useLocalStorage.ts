import { useEffect, useState } from "react";

export function useLocalStorage(
  key: string,
  initialValue: string
): [string, (value: string) => void] {
  const [storedValue, setStoredValue] = useState(initialValue);

  useEffect(() => {
    const value = localStorage.getItem(key);
    if (value) {
      setStoredValue(value);
    } else {
      localStorage.setItem(key, initialValue);
    }
  }, [storedValue]);

  function handleUpdate(value: string) {
    localStorage.setItem(key, value);
    setStoredValue(value);
  }

  return [storedValue, handleUpdate];
}
