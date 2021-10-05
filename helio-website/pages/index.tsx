import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Grupo Helio</title>
        <meta name="description" content="Helio Group homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* <h1 className={styles.title}>
          Helio Group
        </h1> */}

        <Image src="/logo_transparent_background_resized.png" alt="Vercel Logo" width={418} height={157} />

        <Image src="/keyboard_double_arrow_down_black_24dp.svg" alt="Something"  width={96} height={96} />

        <h1>Light methodologies, noble development,<br />
          and always going up!</h1>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Challenge us! &rarr;</h2>
            <p>A solution you need? An idea you want to test? Just let us know!</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Our achievements &rarr;</h2>
            <p>Not sure about us? Let our results<br />
              and experience talk for us.</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>What do we do? &rarr;</h2>
            <p>We get things done well, or we die trying. We never died, so it has been a success until now.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Prices &rarr;</h2>
            <p>
              Unfortunately, solving problems isn't interesting enough for us to do it for free. Check it here!
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
