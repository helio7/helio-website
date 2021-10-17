import type { NextPage } from 'next';
import styles from '../styles/AboutUs.module.css';

const AboutUs: NextPage = () => {
   return (
      <div className={styles.main_container}>
         <h1 id="myh1">About us</h1>
         <p>We're a company that develops and mantains web solutions: apps,
            pages, platforms, systems, etc. We also provide consultancy.
         </p>
      </div>
   );
};

export default AboutUs;
