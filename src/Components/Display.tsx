import React, { useEffect, useState } from 'react'
import styles from './display.module.scss'
const Display = ({ array }: any) => {

    localStorage.setItem('UserData', JSON.stringify(array));
    console.log("array", array);
    // console.log("props",props);
    const data: object[] = JSON.parse(localStorage.getItem('UserData') || '{}');
    console.log("data", data);
    return (
        <>
            <div className="displayUsers">
                {
                    data.map((val: any) =>
                    (
                        <div className={styles.cards}>
                            <h3 ><span className={styles.span}>Name of the User : </span>{val?.name}</h3>
                            <h3><span className={styles.span}>Email : </span>{val?.email}</h3>
                            <h3><span className={styles.span}>Date of Birth : </span>{val?.DOB}</h3>
                            <h3><span className={styles.span}>Mobile Number : </span>{val?.Mobile}</h3>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
export default Display