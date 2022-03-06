import { useContext } from "react";
import FavoritesContext from "../components/store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
  const favoritesContext = useContext(FavoritesContext);

  let content;

  if (favoritesContext.totalFavorites === 0) {
    content = <p>You don't have any Favorites, Go and start Adding...</p>;
  } else {
    content = <MeetupList meetups={favoritesContext.favorites}></MeetupList>;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}
export default FavoritesPage;
