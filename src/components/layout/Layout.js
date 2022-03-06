import MainNavigation from "./MainNavigation";
import style from "./Layout.module.css";

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className={style.main}>{props.children}</main>
    </div>
  );
}
export default Layout;
