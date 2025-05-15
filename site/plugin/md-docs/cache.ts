const cache = new Map();

export const getCache = (key: string) => {
  return cache.get(key);
};

export const createCache = (key: string, value: any) => {
  cache.set(key, value);
};

export const clearCache = () => {
  cache.clear();
};
