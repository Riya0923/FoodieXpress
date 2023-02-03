import styles from "../styles/Featured.module.css";
import Image from "next/image";

const Featured = () => {

    const images = [
        "/img/featured.jpg",
        "/img/featured2.jpg",
        "/img/featured3.jpg"
    ];
    return (
        <div className={styles.container}>
             <Image src="/img/arrowl.png" alt="" layout='fill'/>
             <div className={styles.wrapper}>
                  <div className={styles.imgContainer}>
                       {images.map((img,i)=>(
                       <Image src="/img/featured.png" key={i} alt="" layout='fill'/>
                       ))}
                  </div>
             </div>
             <Image src="/img/arrowr.png" layout='fill' alt=""/>
        </div>
    )
}

export default Featured