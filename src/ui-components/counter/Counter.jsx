import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import cn from 'classnames';

import styles from "./style.module.scss";

function Counter({ onChange, initialState = 1, className = "" }) {
  const [count, setCount] = useState(initialState);

  useEffect(() => {
    if (count !== initialState) {
      onChange(count)
    }
  }, [onChange, count, initialState]);

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
    onChange(count);
  };

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
    onChange(count);
  };

  const handleChange = (e) => {
    setCount(Number(e.target.value))
  }

  return (
    <div className={cn(styles.Counter, className)}>
      <button className={styles.Counter__button} type="button" onClick={decrement}>
        -
      </button>
      <input className={styles.Counter__input} type="number" value={count === 0 ? '' : count} onChange={handleChange}/>
      <button className={styles.Counter__button} type="button" onClick={increment}>
        +
      </button>
    </div>
  );
}

Counter.propTypes = {
  initialState: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default Counter;
