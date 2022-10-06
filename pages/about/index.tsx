import type { NextPage } from "next";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import photo from "./photo.png";

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Hey, <a href="http://localhost:3000/about"> I'm Luther</a>
        </h1>

        <div className="px-8 md:p-0 text-black md:w-1/2 w-full  text-lg italic flex flex-col items-center text-justify md:flex-row">
          <img
            src={photo.src}
            alt="my photo"
            className="md:w-80 w-40 px-4 rounded-full md:h-60 w-30 md:m-0 my-8 "
          />
          <p>
            I am an allround web developer. I'm good with front-end techniques
            and also in back-end developing. I'm inspired by minimalistic but
            solid, and pixel perfect website. I spend time on fixing minor
            details that can help optimizing web apps. I also like exploring new
            skills that can help on my personal growth.{" "}
          </p>
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
