import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import Card from "../ui/Card";
import style from "./MeetupItem.module.css";

function MeetupItem(props) {
  const favoriteContext = useContext(FavoritesContext);

  const itemIsFavorite = favoriteContext.itemIsFavorite(props.id);

  function toggleFaviconStatusHandler() {
    if (itemIsFavorite) {
      favoriteContext.removeFavorite(props.id);
    } else {
      favoriteContext.addFavorite({
        id: props.id,
        title: props.title,
        image: props.image,
        address: props.address,
        description: props.description,
      });
    }
  }

  return (
    <li className={style.item}>
      <Card>
        <div className={style.image}>
          <img src={props.image} alt="Image"></img>
        </div>
        <div className={style.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={style.actions}>
          <button onClick={toggleFaviconStatusHandler}>
            {itemIsFavorite ? "Remove From Favorite" : "To Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
