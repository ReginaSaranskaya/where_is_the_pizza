import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./style.module.scss";

function Counter({ onChange, initialState = 1 }) {
  const [count, setCount] = useState(initialState);

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
    onChange(count);
  };

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
    onChange(count);
  };

  const handleChange = (e) => {
    setCount(e.target.value)
  }

  return (
    <div className={styles.Counter}>
      <button className={styles.Counter__button} type="button" onClick={decrement}>
        -
      </button>
      <input className={styles.Counter__input} type="number" value={count} onChange={(handleChange)}/>
      <button className={styles.Counter__button} type="button" onClick={increment}>
        +
      </button>
    </div>
  );
}

Counter.propTypes = {
  initialState: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

Counter.defaultProps = {
  initialState: 1,
};

export default Counter;
