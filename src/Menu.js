import Burger from "./Burger";
import menu from "./BurgerMenu.js";
import RadioButton from "./RadioButton.js";

import { faCow } from "@fortawesome/free-solid-svg-icons";
import { faDrumstickBite } from "@fortawesome/free-solid-svg-icons";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

export default function Menu() {
  return (
    <div className="menu page">
      <h3>Menu</h3>
      <div className="options">
        <p>Feeling picky?</p>
        <div>
          <RadioButton icon={faCow} />
          <RadioButton icon={faDrumstickBite} />
          <RadioButton icon={faLeaf} />
        </div>
      </div>
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
