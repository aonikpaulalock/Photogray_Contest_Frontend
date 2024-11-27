
import Cookies from "js-cookie";

export const deleteCookie = (keys: string[]) => {
  keys.forEach((key) => {
    Cookies.remove(key);
  });
};