import { useState } from 'react';

export const useLocalStorage = (key: string) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? item : undefined;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  });
  const setValue = <T>(value: T) => {
    try {
      const valueToStore = JSON.stringify(value);
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, valueToStore);
    } catch (error) {
      console.error(error);
    }
  };
  return [storedValue, setValue] as const;
};
