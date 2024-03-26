import css from "./Options.module.css";
const Options = ({ updateFeedback, buttons, totalFeedback }) => {
  return (
    <>
      <ul className={css.list}>
        {buttons.map((button) => {
          return (
            <li key={button}>
              <button
                className={css.button}
                onClick={() => updateFeedback(button)}
              >
                {button}
              </button>
            </li>
          );
        })}
        {totalFeedback > 0 && (
          <button onClick={() => updateFeedback("reset")}>Reset</button>
        )}
      </ul>
    </>
  );
};

export default Options;
