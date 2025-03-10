import React, { useState } from 'react'
import styles from 'display.module.scss'
const Display = ({items}) => {
    const [data, setData] = useState<object[]>(items);
  return (
   <>
    <div className="displayUsers">
        {
            data.map((val)=>
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