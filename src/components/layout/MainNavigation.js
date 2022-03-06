import { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../store/favorites-context";
import style from "./MainNavigation.module.css";

function MainNavigation() {
  const favoriteContext = useContext(FavoritesContext);

  return (
    <header className={style.header}>
      <div className={style.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetups</Link>
          </li>
          <li>
            <Link to="/favorites">
              Favorites
              <span className={style.badge}>
                {favoriteContext.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
