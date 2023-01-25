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
            <div className={styles.item}>
                  <ul className={styles.item}>
                       <li className={styles.listItem}>Homepage</li>
                       <li className={styles.listItem}>Products</li>
                       <li className={styles.listItem}>Menu</li>
                       <Image src="/img/" alt="" width="160px" height="69px"/>
                       <li className={styles.listItem}>Events</li>
                       <li className={styles.listItem}>Blog</li>
                       <li className={styles.listItem}>Contact</li>
                     
                  </ul>
            </div>
            <div className={styles.item}>
                 <div>
                      <Image src="/img/" alt="" width="160px" height="69px"/>
                 </div>

            </div>
            <div className={styles.item}>right</div>
        </div>
    );
}

export default Navbar