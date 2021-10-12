import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react';
import { Link } from 'react-scroll';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Grupo Helio</title>
        <meta name="description" content="Helio homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.panel} id="section1">
        <img src="/logo_transparent_background_resized.png" className={styles.logo}/>
        <div className={styles.arrow_containter}>
          <img src="/keyboard_double_arrow_down_black_24dp.svg"/>
          <Link
            activeClass="active"
            to="section2"
            spy={true}
            smooth={true}
            duration={500}
            ignoreCancelEvents={true}
          >
            <div></div>
          </Link>
        </div>
      </div>

      <div className={styles.panel} id="section2">
        <div className={styles.arrow_containter}>
          <img src="/keyboard_double_arrow_up_black_24dp.svg"/>
          <Link
            activeClass="active"
            to="section1"
            spy={true}
            smooth={true}
            duration={500}
            ignoreCancelEvents={true}
          >
            <div></div>
          </Link>
        </div>
        <h1>Light methodologies, noble development,<br />and always going up!</h1>
        <div className={styles.arrow_containter}>
          <img src="/keyboard_double_arrow_down_black_24dp.svg"/>
          <Link
            activeClass="active"
            to="section3"
            spy={true}
            smooth={true}
            duration={500}
            ignoreCancelEvents={true}
          >
            <div></div>
          </Link>
        </div>
      </div>

      <div className={styles.panel} id="section3">
        <div className={styles.arrow_containter}>
          <img src="/keyboard_double_arrow_up_black_24dp.svg"/>
          <Link
            activeClass="active"
            to="section2"
            spy={true}
            smooth={true}
            duration={500}
            ignoreCancelEvents={true}
          >
            <div></div>
          </Link>
        </div>
        <div className={styles.cards_container}>

          <div className={styles.left_column}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Challenge us! &rarr;</h2>
              <p>A solution you need? An idea you want to test? Just let us know!</p>
            </a>
            <a href="https://nextjs.org/learn" className={styles.card}>
              <h2>Our achievements &rarr;</h2>
              <p>Not sure about us? Let our results and experience talk for us.</p>
            </a>
          </div>
          <div className={styles.right_column}>
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
        </div>
      </div>
    </div>
  )
}

export default Home
