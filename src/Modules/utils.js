export const getLocalStorageValue = (key) => {
  const value = localStorage.getItem(key);
  if (value) {
    return JSON.parse(value);
  }
  return '';
};

export const setLocalStorageValue = (key, value) => {
  value = JSON.stringify(value);
  localStorage.setItem(key, value);
};
