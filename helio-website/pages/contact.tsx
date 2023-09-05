import type { NextPage } from 'next';
import styles from '../styles/Contact.module.css';

const Contact: NextPage = () => {
   return (
      <div className={styles.main_container}>
         <h1>Contact us</h1>
         <p>Send us a message and tell us about your problem! {process.env.HELIO_PHONE}</p>
      </div>
   );
};

export default Contact;
