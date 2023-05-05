import { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const saveFavourites = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@favourites', jsonValue)
    } catch (e) {
        console.log('error saving: ', e);
    }
  };

  const loadFavourites = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@favourites');

      if(jsonValue !== null) {
        setFavourites(JSON.parse(jsonValue));
      };
    } catch(e) {
        console.log('error loading: ', e);
    }
  };

  const add = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };

  const remove = (restaurant) => {
    const updatedFavourites = favourites.filter(
      (favourite) => favourite.placeId !== restaurant.placeId
    );

    setFavourites(updatedFavourites);
  };

  useEffect(() => {
    loadFavourites();
  }, []);

  useEffect(() => {
    saveFavourites(favourites)
  }, [favourites]);

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addFavourite: add,
        removeFavourite: remove,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};