import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DropDown({ data, toggled, setToggled, ...rest }) {
  function handleToggle() {
    setToggled(!toggled);
  }

  const handleClick = (anchor) => () => {
    handleToggle();
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const links = data;

  return (
    <div className={toggled ? "dropdownActive" : "dropdownInactive"}>
      <ul className="dropdownList">
        {links.map((link) => {
          return (
            <li key={link.title}>
              <a
                className="dropdownLinks"
                href={link.url}
                onClick={handleClick(link.anchor)}
              >
                {link.title}
              </a>
            </li>
          );
        })}{" "}
      </ul>
      {toggled ? (
        <button className="xButton" onClick={handleToggle}>
          <FontAwesomeIcon className="toggleIcon" icon={faXmark} size="2x" />
        </button>
      ) : (
        <></>
      )}
    </div>
  );
}
