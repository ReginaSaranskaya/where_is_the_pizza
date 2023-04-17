import React from "react";
import { useFormContext } from "react-hook-form";

import styles from "./style.module.scss";

function Comment() {
  const { register } = useFormContext();

  return (
    <div>
      <h3 className={styles.Comment__title}>Комментарий</h3>
      <textarea
        className={styles.Comment__input}
        placeholder="Есть уточнения?"
        {...register("comment", { maxLength: 200, required: false })}
      />
    </div>
  );
}

export default Comment;
