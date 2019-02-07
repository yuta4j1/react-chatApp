import * as React from 'react'
import * as styles from '../css/header.css';

const Header = (props: {value: string}): JSX.Element => {
    return (
        <ul className={styles.navbar}>
          <li className={styles.logoTitle}>{props.value}</li>
        </ul>
    );
}

export default Header;