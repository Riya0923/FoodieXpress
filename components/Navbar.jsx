import Image from "next/image";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.callButton}>
                    <Image src="/img/tele1.png" alt="" width="32" height="32" />
                </div>
                <div className={styles.texts}>
                    <div classname={styles.text}>ORDER NOW!</div>
                    <div classname={styles.text}>012 345 678</div>
                </div>
            </div>
            <div className={styles.item}></div>
            <div className={styles.item}></div>
        </div>
    );
}

export default Navbar