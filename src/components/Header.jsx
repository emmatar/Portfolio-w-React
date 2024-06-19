import NavTabs from "./NavTabs";
import image from "../lib/images/IMG_8132.jpg";
function Header() {
  return (
    <header>
      <NavTabs />
      <section className="name-container">
        <h1 id="name">Elijah Matar</h1>
      </section>
    </header>
  );
}

export default Header;
