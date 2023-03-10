//imports
import "./favorites.css";
import Cookies from "js-cookie";

const Favorites = ({ favoriteCharacters, favoriteComics }) => {
  Cookies.set("favoriteCharacters", favoriteCharacters, { expires: 30 });
  Cookies.set("favoriteComics", favoriteComics, { expires: 30 });

  const favoritesCharacterstab = Cookies.get("favoriteCharacters").split(",");

  const favoritesComicstab = Cookies.get("favoriteComics").split(",");

  return (
    <div className="favoritesContainer">
      <div className="favoriteItemsList">
        <h1>My favorites characters : </h1>
        {favoritesCharacterstab.length === 0 ? (
          <div className="noItemsInFavorites">
            No characters saved in your favorites
          </div>
        ) : (
          favoritesCharacterstab.map((elem, index) => {
            return (
              <div key={index} className="favoriteItemsStyle">
                {elem}
              </div>
            );
          })
        )}
      </div>
      <div className="favoriteItemsList">
        <h1>My favorites Comics : </h1>
        {favoritesComicstab.length === 0 ? (
          <div className="noItemsInFavorites">
            No comics saved in your favorites
          </div>
        ) : (
          favoritesComicstab.map((elem, index) => {
            return (
              <div key={index} className="favoriteItemsStyle">
                {elem}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Favorites;
