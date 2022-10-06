import type { NextPage } from "next";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import imxt from "../../assets/imxt.png";
import netlok from "../../assets/netlok.png";
import splashy from "../../assets/splashy.png";
import todos from "../../assets/todos.png";

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="http://localhost:3000/projects"> PROJECTS</a>
        </h1>
        <div className={styles.grid}>
          <a
            target="_blank"
            href="https://netlok.vercel.app/"
            className={styles.card}
          >
            <h2>NETLOK &rarr;</h2>
            <img src={netlok.src} alt="movie web app" />
          </a>

          <a
            target="_blank"
            href="https://splashy-alpha.vercel.app/"
            className={styles.card}
          >
            <h2>SPLASHY &rarr;</h2>
            <img src={splashy.src} alt="unsplash clone" />
          </a>

          <a
            target="_blank"
            href="https://imxt.vercel.app/"
            className={styles.card}
          >
            <h2>IMXT &rarr;</h2>
            <img src={imxt.src} alt="image to text web app converter" />
          </a>

          <a
            target="_blank"
            href="https://todos-orcin.vercel.app/"
            className={styles.card}
          >
            <h2>TODOS &rarr;</h2>
            <img src={todos.src} alt="todo list web app" />
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default About;
