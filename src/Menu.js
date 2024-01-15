import { useState } from "react";

import Burger from "./Burger";
import menu from "./BurgerMenu.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCow } from "@fortawesome/free-solid-svg-icons";
import { faDrumstickBite } from "@fortawesome/free-solid-svg-icons";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

export default function Menu() {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [removeBeef, setRemoveBeef] = useState([false]);
  const [removeChicken, setRemoveChicken] = useState([false]);
  const [removeVeg, setRemoveVeg] = useState([false]);

  return (
    <div className="menu page">
      <h3>Menu</h3>
      <div className="options">
        <p>Fussy Eater?</p>
        <div>
          <form>
            <div>
              <label for="beef" className={removeBeef ? "" : "cross-out"}>
                <FontAwesomeIcon icon={faCow} />
              </label>
              <input
                type="checkbox"
                id="beef"
                value="beef"
                onClick={() => setRemoveBeef((show) => !show)}
                checked={selectedTypes.includes("beef")}
                onChange={(event) =>
                  setSelectedTypes((prevTypes) =>
                    event.target.checked
                      ? [...prevTypes, "beef"]
                      : prevTypes.filter((type) => type !== "beef")
                  )
                }
              ></input>
            </div>
            <div>
              <label for="chicken" className={removeChicken ? "" : "cross-out"}>
                <FontAwesomeIcon icon={faDrumstickBite} />
              </label>
              <input
                type="checkbox"
                id="chicken"
                value="chicken"
                onClick={() => setRemoveChicken((show) => !show)}
                checked={selectedTypes.includes("chicken")}
                onChange={(event) =>
                  setSelectedTypes((prevTypes) =>
                    event.target.checked
                      ? [...prevTypes, "chicken"]
                      : prevTypes.filter((type) => type !== "chicken")
                  )
                }
              ></input>
            </div>
            <div>
              <label for="veg" className={removeVeg ? "" : "cross-out"}>
                <FontAwesomeIcon icon={faLeaf} />
              </label>
              <input
                type="checkbox"
                id="veg"
                value="veg"
                onClick={() => setRemoveVeg((show) => !show)}
                checked={selectedTypes.includes("veg")}
                onChange={(event) =>
                  setSelectedTypes((prevTypes) =>
                    event.target.checked
                      ? [...prevTypes, "veg"]
                      : prevTypes.filter((type) => type !== "veg")
                  )
                }
              ></input>
            </div>
          </form>
          <p>(click to eliminate)</p>
        </div>
      </div>
      <div className="burger-menu">
        {menu
          .filter((burger) => !selectedTypes.includes(burger.type))
          .map((burger, index) => (
            <Burger
              key={index}
              title={burger.name}
              description={burger.description}
              url={burger.image}
              type={burger.type}
            />
          ))}
        {!removeBeef && !removeChicken && !removeVeg && (
          <div>
            <h1>
              Have<br></br>a word<br></br>With<br></br>the boss
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}

//  <div className="burger-menu">
//         {menu
//           .filter((burger) => !selectedTypes.includes(burger.type))
//           .map((burger, index) => (
//             <Burger
//               key={index}
//               title={burger.name}
//               description={burger.description}
//               url={burger.image}
//               type={burger.type}
//             />
//           ))}
//       </div>
//     </div>
//   );
// }
