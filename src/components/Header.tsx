import styles from './Header.module.css'

import toDo from '../assets/toDo.svg'

export function Header(){
    return (
        <header className={styles.header}>
            <img src={toDo} alt="Logo ToDo" />
        </header>
    )
}