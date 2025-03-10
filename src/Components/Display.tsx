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
                            <h3>Name of the User : {val?.name}</h3>
                            <h3>Email : {val?.email}</h3>
                            <h3>Date of Birth : {val?.DOB}</h3>
                            <h3>Mobile Number : {val?.Mobile}</h3>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
export default Display