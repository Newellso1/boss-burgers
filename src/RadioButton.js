import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { faSkullCrossbones } from "@fortawesome/free-solid-svg-icons";

export default function RadioButton({ icon = faQuestion }) {
  return (
    <div className="type-radio">
      <FontAwesomeIcon icon={icon} />
      <FontAwesomeIcon icon={faSkullCrossbones} className="type-delete" />
    </div>
  );
}
