import { useGlobalContext } from "./context";
import { IoSunnyOutline } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <FaMoon className="toggle-icon" />
        ) : (
          <IoSunnyOutline className="toggle-icon" />
        )}
      </button>
    </section>
  );
};

export default ThemeToggle;
