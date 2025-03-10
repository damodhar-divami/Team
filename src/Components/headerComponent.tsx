import React from "react";
import { useNavigate } from "react-router-dom";
import styles from './headerComponent.module.scss'
import { useNavigate } from "react-router-dom";
export default function HeaderComponent() {
    function functionName() {
      
    }
  return(
    <div className={styles.header}>
     {/* <link rel="icon" type="image/x-icon" href="/images/favicon.ico"> */}
      <button className={styles.form} type='button'>form</button>
      <button className={styles.display} type='button'>display</button>
    </div>
  )
}