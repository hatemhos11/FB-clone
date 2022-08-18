import React from 'react'
import * as styles from './Dropmenu.module.css'

const DropmenuGroup = ({children}) => {
    return (
        <div style={{top:'105%', right:'20px'}} className={styles.DropmenuGroup} >
            {children}
        </div>
    )
}

export default DropmenuGroup