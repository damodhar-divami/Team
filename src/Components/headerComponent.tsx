import React from "react";
import { useNavigate } from "react-router-dom";
import styles from './headerComponent.module.scss'
// import { useNavigate } from "react-router-dom";
export default function HeaderComponent() {
    const navi = useNavigate();
    function handleFormButton() {
      navi("/");
    }
    function handleDisplayButton(){
        navi("/display");
    }
  return(
    <div className={styles.header}>
     {/* <link rel="icon" type="image/x-icon" href="/images/favicon.ico"> */}
      <button onClick={handleFormButton} className={styles.form} type='button'>form</button>
      <button onClick={handleDisplayButton} className={styles.display} type='button'>display</button>
    </div>
  )
}