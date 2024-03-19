import React from "react";
import css from "./Options.module.css";
const Options = ({ buttons }) => {
  return (
    <>
      <ul className={css.options_list}>
        {buttons.map((item) => {
          return (
            <li key={item}>
              <button>{item}</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Options;
