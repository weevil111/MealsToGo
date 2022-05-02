import React, { createContext, useState } from "react";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);
  const add = (restaurant) => {
    if (!favourites.find((x) => x.placeId === restaurant.placeId)) {
      setFavourites([...favourites, restaurant]);
    }
  };

  const remove = (restaurant) => {
    const newfavourites = favourites.filter(
      (x) => x.placeId !== restaurant.placeId
    );
    setFavourites(newfavourites);
  };

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourites: add,
        removeFromFavourites: remove,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
