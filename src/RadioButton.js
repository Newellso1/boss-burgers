import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { faSkullCrossbones } from "@fortawesome/free-solid-svg-icons";

export default function RadioButton({ icon = faQuestion }) {
  const [hideType, setHideType] = useState("false");

  return (
    <div className="type-radio">
      <FontAwesomeIcon
        icon={icon}
        onClick={() => setHideType((hide) => !hide)}
      />
      <FontAwesomeIcon
        icon={faSkullCrossbones}
        className={hideType ? "type-hide" : "type-delete"}
        onClick={() => setHideType((hide) => !hide)}
      />
    </div>
  );
}
