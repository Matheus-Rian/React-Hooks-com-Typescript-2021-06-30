import { useLocalStorage } from "../hooks/useLocalStorage";
import { useToggle } from "../hooks/useToggle";

const Toggle = (props: any) => {
  const [toggled, setToggle] = useToggle(false);
  const [savedToggle, setSavedToggle] = useLocalStorage('darkmode', false);

  return (
    <div className="dark-mode-toggle">
      <button type="button" onClick={() => setSavedToggle(false)}>
        ☀
      </button>
      <span className="toggle-control">
        <input
          className="dmcheck"
          id="dmcheck"
          type="checkbox"
          checked={toggled}
          onChange={setToggle}
        />
        <label htmlFor="dmcheck" />
      </span>
      <button type="button" onClick={() => setSavedToggle(true)}>
        ☾
      </button>
    </div>
  )
};

export default Toggle;
