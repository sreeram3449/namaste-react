import { useEffect, useState } from "react";
import { GET_MENU_URL } from "../utils/constants";

const useRestaurntMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(GET_MENU_URL + resId);
    const json = await data.json();
    setResInfo(json?.data);
  };

  return resInfo;
};

export default useRestaurntMenu;
