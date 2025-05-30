export const getLocalStorage = <T = string>(name: string, isJson?: boolean): T | string | null => {
  try {
    const value = localStorage.getItem(name);
    if (value && isJson) {
      return JSON.parse(value) as T;
    }
    return value;
  } catch {
    return null;
  }
};

export const setLocalStorage = (name: string, value: any): void => {
  if (typeof value !== 'string') {
    value = JSON.stringify(value);
  }
  localStorage.setItem(name, value);
};

export const removeLocalStorage = (name: string) => {
  localStorage.removeItem(name);
};
