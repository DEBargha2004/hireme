"use client";

export const useCookie = () => {
  function setCookie(key: string, value: string) {
    document.cookie = `${key}=${value};expires=Thu, 01 Jab 2026 00:00:01 GMT; path=/`;
  }

  function getCookie(key: string) {
    const cookies = document.cookie.split(";");
    const cookieStr = cookies.find((cookies) => cookies.includes(key));
    if (cookieStr) {
      return cookieStr.split("=")[1];
    }
  }

  return {
    setCookie,
    getCookie,
  };
};
