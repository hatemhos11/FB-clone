import * as styles from './Dropmenu.module.css'
import Link from 'next/link'

const DropmenuItem = (props) => {
    return (
        <Link href="/">
            <a {...props} className={`${styles.DropmenuItem} ${props.className}`} >
                {props.children}
            </a>
        </Link>
    )
}

export default DropmenuItem