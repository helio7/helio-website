import type { NextPage } from 'next';
import styles from '../styles/Pricing.module.css';

const Pricing: NextPage = () => {
   return (
      <div className={styles.main_container}>
         <h1>Pricing</h1>
         <p>The cost will depend on the complexity of your problem. Send us a message
            and we'll calculate it.
            Consultancy hour cost: 5000 ARS.
         </p>
      </div>
   );
};

export default Pricing;
