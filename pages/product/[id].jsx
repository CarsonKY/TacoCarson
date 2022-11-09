import styles from "../../styles/Product.module.css";
// @ts-ignore
import Image from "next/image";
// @ts-ignore
import axios from "axios";



const Product = ({tacos}) => {
  
  
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={tacos.img} objectFit="contain" layout="fill" alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{tacos.name}</h1>
        <span className={styles.prices}>$</span>
        <p className={styles.desc}>{tacos.desc}</p>
        
        
        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="double"
              name="double"
              className={styles.checkbox}
            />
            <label htmlFor="double">Double Ingredients</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="cheese"
              name="cheese"
            />
            <label htmlFor="cheese">Extra Cheese</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="spicy"
              name="spicy"
            />
            <label htmlFor="spicy">Spicy Sauce</label>
          </div>
          <div className={styles.option}>
          
          
          </div>
        </div>
        <div className={styles.add}>
            <input type="number" defaultValue={1} className={styles.quantity}/>
            <button className={styles.button}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

// Server side rendering fetching single product
export const getServerSideProps = async ({params}) =>{
  const res = await axios.get(`http://localhost:3000/api/products/$/{params.id}`);
  return{
    props:{
      tacos:res.data,
    },
  };
};


