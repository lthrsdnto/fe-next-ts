import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'


const About: NextPage = () => {

  return (
    <div className={styles.container}>


      <main className={styles.main}>
        <h1 className={styles.title}>
        <a href="http://localhost:3000/skills">SKILLS</a>
              </h1>
              <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Javascipt &rarr;</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                  </a>

                  <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Typescript &rarr;</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                  </a>

                  <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>NextJS &rarr;</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                  </a>

                  <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Tailwind &rarr;</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
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

export default About
