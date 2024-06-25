import { useMemo } from "react";

export function useCount(type, info) {
  const countedArray = useMemo(() => {
    return info.filter((item) => {
      return item[type];
    });
  }, [type, info]);

  return countedArray;
}

export function useMakeList(type, info) {
  const _countedArray = useCount(type, info);

  const list = useMemo(() => {
    return _countedArray.map((item) => {
      return item.title;
    });
  }, [_countedArray]);

  return list;
}

export function setLocalStorage(key, value) {
  if (typeof value === "string" || typeof value === "number") {
    localStorage.setItem(key, value);
    return;
  }
  localStorage.setItem(key, JSON.stringify(value));
}

export function getLocalStorage(key) {
  if (!localStorage.getItem(key)) {
    return;
  }
  if (
    localStorage.getItem(key).includes("{") ||
    localStorage.getItem(key).includes("[")
  ) {
    return JSON.parse(localStorage.getItem(key));
  }
  return localStorage.getItem(key);
}
