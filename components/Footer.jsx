// @ts-nocheck
import styles from "../styles/Footer.module.css"
import Image from "next/image"




const Footer = () => {
  return (
    <div id = "footerMap" className={styles.container}>
      <div className={styles.item}>
      <Image id ="bkimg" src="/img/insidetacocarson.jpg"  layout="fill" objectfit="cover" alt="tacoicon" /> 
      
      

    </div>
    <div className={styles.item}>
    <div className={styles.card}>
    <h1 className={styles.title}>WE ARE EXCITED FOR YOUR VISIT</h1>
    <h2 className={styles.motto}>
       <br />We take pride in what we do and it shows in our products
       
       </h2>
    <h2 className={styles.thanks}>
    <br />Thank you for visiting TacoCarson.com!
      </h2>
       </div>

    <div className={styles.card}></div>
      {/* <h1 className={styles.title}>FIND US</h1> */}
      {/* <p className={styles.text}>
        <br />1001 W Main St
        <br />Louisville KY

      </p> */}
    <div className={styles.card}>
    <h1 className={styles.title}>HOURS OF OPERATION</h1>
    <p className={styles.text}>
        <br />Monday thru Friday
        <br />11 AM to 9 PM

      </p>
      <p className={styles.text}>
        <br />Saturday and Sunday
        <br />11 AM to 10 PM

      </p>
      
      
      <p className={styles.textStreet}>
        <br />101 E Main Street, Louisville KY 40272
        <br />
      </p>
        
      <p className={styles.textPhone}>
      <br />CALL US
        <br />502-585-5595

      </p>
    </div>
    </div>
    </div>
  );
};

export default Footer;