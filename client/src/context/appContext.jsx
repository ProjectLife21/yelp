import { createContext, useContext, useState } from "react";

const RestaurantContext = createContext();

// eslint-disable-next-line react/prop-types
export const RestaurantContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);

  return (
    <RestaurantContext.Provider value={{ restaurants, setRestaurants }}>
      {children}
    </RestaurantContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
  return useContext(RestaurantContext);
};
