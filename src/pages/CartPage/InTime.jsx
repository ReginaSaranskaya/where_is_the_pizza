import React from 'react';

import styles from "./style.module.scss";
import InputText from "../../ui-components/InputText/InputText";

function InTime() {
  return (
    <div className={styles.InTime}>
      <InputText type="date" size="small" className={styles.InTime__date}/>
      <InputText type="time" size="small"/>
    </div>
  );
}

export default InTime;