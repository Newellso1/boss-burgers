import Burger from "./Burger";
import menu from "./BurgerMenu.js";

export default function Menu() {
  return (
    <div className="menu page">
      <h3>Menu:</h3>
      <div className="burger-menu">
        {menu.map((burger, index) => (
          <Burger
            key={index}
            title={burger.name}
            description={burger.description}
            url={burger.image}
            type={burger.type}
          />
        ))}
      </div>
    </div>
  );
}
