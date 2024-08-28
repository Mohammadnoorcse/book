 export const addItemToLocalStorage = (key, value) => {
  const existingItems = getItemsFromLocalStorage(key) || [];
  const updatedItems = [...existingItems, value];
  localStorage.setItem(key, JSON.stringify(updatedItems));
};

export const getItemsFromLocalStorage = (key, defaultValue = []) => {
  try {
    const storedItem = localStorage.getItem(key);
    if (storedItem === null) {
      return defaultValue; // Return default value if key does not exist
    }
    return JSON.parse(storedItem);
  } catch (error) {
    console.error(`Error retrieving or parsing data from localStorage for key "${key}":`, error);
    return defaultValue; // Return default value in case of parsing error
  }
};